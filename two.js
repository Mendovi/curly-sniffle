function showVerifyMailBox(){
	Page.Loading('start');
	$.post('/index.php?go=verifymail&act=box', function(data){
		Box.Show('verifyMail', 400, 'Подтверждение почты', data, 'Закрыть', '', '');
		Page.Loading('stop');
	});
}
function saveMyself(){
	var text_myself = $('#text_myself').val();
	$.post('/index.php?go=editprofile&act=savemyself', {text_myself: text_myself}, function(data){
			if(data == 'ok'){
				
				$('.profiewr').append('<div style="cursor:pointer;" onclick="$(this).remove();" class="err_yellow"><b>Изменения сохранены</b><br>Обратите внимание: в целях безопасности, после обновления страницы текст в поле "О себе" будет показан без BB кодов, в чистом виде!<br>Сохраните себе исходный вариант до обновления страницы.</div>');
				
			} else {
				alert(data);
			}
		});
}
function verifyMailGo(reg){
	var email = $('#email_vr').val();
	Page.Loading('start');
	$.post('/index.php?go=verifymail&act=sendEmail', {email: email}, function(data){
		if(data == 'ok'){
			$('#rbtlmail').html('Ваша почта:<br><br><input style="width: 150px;" value="'+email+'" name="email_vr" id="email_vr" class="inplog" disabled="" type="text"><br><a onclick="cancelVerifyMail(); return false;" href="#">Указать другую</a><br><br>Введите код подтверждения:<br><br><input style="width: 150px;" name="code" id="code" class="inplog" type="text"><br><br><button onclick="verifyMailSendCode('+reg+');">Подтвердить</button>');
			alert('Код подтверждения отправлен. Пожалуйста, проверьте Вашу почту.');
		} else
			alert(data);
		
		Page.Loading('stop');
	});
}

function cancelVerifyMail(){
	Box.Close('verifyMail');
	Page.Loading('start');
	$.post('/index.php?go=verifymail&act=cancelMail', function(data){
		Box.Show('verifyMail', 400, 'Подтверждение почты', data, 'Закрыть', '', '');
		Page.Loading('stop');
	});
}

function verifyMailSendCode(reg){
	var email = $('#email_vr').val();
	var code = $('#code').val();
	Page.Loading('start');
	$.post('/index.php?go=verifymail&act=verifyMail', {email: email, code: code}, function(data){
		if(data == 'ok'){
			if(reg == 1){
				Box.Close('verifyMail');
				alert('Почта успешно подтверждена. Нажмите кнопку "закончить регистрацию" для продолжения.');
				$('#reg_up_button').html('<button onClick="reg.finish(); return false" style="width:161px">Закончить регистрацию</button>');
			} else {
				alert('Почта успешно подтверждена.');
				Box.Close('verifyMail');
				$('#warning_mail').remove();
			}
		} else
			alert(data);
		
		Page.Loading('stop');
	});
}

function ShowCaptchaAjax(){
	var rndval = new Date().getTime(); 
	Box.Show('sec_code', 280, 'Введите код с картинки:', '<div style="padding:20px;text-align:center">Вы слишком часто выполняете действия.<br><br><div class="cursor_pointer" onClick="updateCode(); return false"><div id="sec_code"><img src="/antibot/antibot.php?rndval=' + rndval + '" alt="" title="Показать другой код" width="120" height="50" /></div></div><div id="code_loading"><input type="text" id="val_sec_code" class="inpst" maxlength="6" style="margin-top:10px;width:110px" /></div></div>', lang_box_canсel, 'Отправить', 'sendCodeControlAjax(); return false;');
}

function updateCode(){
	var rndval = new Date().getTime(); 
	$('#sec_code').html('<img src="/antibot/antibot.php?rndval=' + rndval + '" alt="" title="Показать другой код" width="120" height="50" />');
}

function sendCodeControlAjax(){
	var val_sec_code = $("#val_sec_code").val();
	$('#code_loading').html('<img src="/templates/Default/images/loading_mini.gif" style="margin-top:21px" />');
	$.get('/antibot/sec_code.php?user_code='+val_sec_code, function(data){
		if(data == 'ok'){
		$.post('/index.php?go=postcontrol&act=sendcode', {val_sec_code: val_sec_code}, function(data2){ 
		if(data2){ 
		
			Box.Close('sec_code');
		}
		});
		} else {
			updateCode();
			$('#code_loading').html('<input type="text" id="val_sec_code" class="inpst" maxlength="6" style="margin-top:10px;width:110px" />');
			$('#val_sec_code').val('');
			$('#val_sec_code').focus();
		}
	});
}
