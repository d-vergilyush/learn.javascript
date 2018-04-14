<?php 

$name = $_POST["user_name"];
$phone = $_POST["user_phone"];
$email = $_POST["user_mail"];
$message = $_POST["user_message"];


require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'd-vergilyush@bk.ru';                 // Наш логин
$mail->Password = 'borntokill';                           // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
 
$mail->setFrom('d-vergilyush@bk.ru', 'Дана Вергилюш');   // От кого письмо 
$mail->addAddress('d.vergilyush@yandex.ru', 'advice_finance@etlgr.com');     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка с сайта';
$mail->Body    = '<div style="display: block">Пользователь сайта оставил данные </div>
<div style="display: block"> Имя: ' . $name . ' </div>
<div style="display: block"> Телефон: ' . $phone . ' </div>
<div style="display: block"> E-mail: ' . $email . ' </div>
<div style="display: block"> Сообщение: ' . $message . ' </div>';
$mail->AltBody = 'Это альтернативный текст';

if(!$mail->send()) {
   return false;
} else {
	return true;
}


?>