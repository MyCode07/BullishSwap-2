<?php
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	require 'phpmailer/src/Exception.php';
	require 'phpmailer/src/PHPMailer.php';
    require 'phpmailer/src/SMTP.php';

	$mail = new PHPMailer(true);

	$mail->CharSet = 'UTF-8';
	$mail->setLanguage('en', 'phpmailer/language/');
	$mail->IsHTML(true);

    // $mail->isSMTP();   // Включаем мейлер в режим SMTP
    // $mail->SMTPAuth = true; // Включаем SMTP аутентификацию
    // // Настройки вашей почты (взять у провайдера)
    // $mail->Host = 'smtp.mail.ru';  // SMTP сервер
    // $mail->Username = 'email@mail.ru'; // Ваш логин от почты с которой будут отправляться письма
    // $mail->Password = '***'; // Ваш пароль от почты с которой будут отправляться письма
    // $mail->SMTPSecure = 'ssl';  // Протокол шифрования SSL или TLS
    // $mail->Port = 465; // TCP порт для подключения

    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['msg'];
    $email_to_send = $_POST['email-to-send'];
    
	
	$mail->setFrom('ttyrqa@mail.ru'); //От кого письмо
	$mail->addAddress('ttyrqa@mail.ru'); //Кому отправить
    $mail->addAddress($email_to_send); //Категория

    // $mail->addReplyTo($email_to_send, 'Information');
	
	$mail->Subject = 'BullishSwap!'; //Тема письма
	$body = '<h1></h1>'; // Тело письма

    $arr = array(
        'Имя' => $name,
        'E-mail' => $email,
        'Сообщение' => $message,
    );

    foreach($arr as $key => $value) {
        if(trim(!empty($value))){
		    $body.='<p><strong>'.$key.':</strong> '.$value.'</p>';
        }
    };
 

	$mail->Body = $body;

	//Отправляем
	if (!$mail->send()) {
		$message = 'Ошибка';
	} else {
		$message = 'Данные отправлены!';
	}

	$response = ['message' => $message];

	header('Content-type: application/json');
	echo json_encode($response);
?>