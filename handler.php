<?php {
    date_default_timezone_set('Europe/Moscow');
    $dt = date("d F Y, H:i:s"); // дата и время

    $mail = "info@visaberi.ru, boris117@yandex.ru, boris1488ss@gmail.com"; // e-mail куда уйдет письмо

    $title = "Заявка с сайта zalog-center test" ; // заголовок(тема) письма
		
    $name_form = $_POST["formName"];
    $name_form = htmlspecialchars($name_form);
		
    $user_name = $_POST["name"];
    $user_name = htmlspecialchars($user_name); // обрабатываем

    $phone = $_POST["tel"];
    $phone = htmlspecialchars($phone);

    $date = $_POST["date"];
    $date = htmlspecialchars($date);

    $time = $_POST["time"];
    $time = htmlspecialchars($time);

    $sum = $_POST["sum"];
    $sum = htmlspecialchars($sum);

    $object = $_POST["object"];
    $object = htmlspecialchars($object);

    $meters = $_POST["meters"];
    $meters = htmlspecialchars($meters);

    $address = $_POST["address"];
    $address = htmlspecialchars($address);

    $rooms = $_POST["rooms"];
    $rooms = htmlspecialchars($rooms);

    $srok = $_POST["srok"];
    $srok = htmlspecialchars($srok);

    $agree = $_POST["agree"];
    $agree = htmlspecialchars($agree);

    $city = $_POST["city"];
    $city = htmlspecialchars($city);

    $avans = $_POST["avans"];
    $avans = htmlspecialchars($avans);

    $mess = "<b>Дата и Время:</b> $dt <br>";

    if ($name_form) {
        $mess .= "<br><b>Название формы:</b> $name_form<br>";
    }

    if ($phone) {
        $mess .= "<br><b>Телефон:</b> $phone<br>";
    }

    if ($date) {
        $mess .= "<b>Дата записи:</b> $date<br>";
    }

    if ($user_name) {
        $mess .= "<b>Имя:</b> $user_name<br>";
    }

    if ($time) {
        $mess .= "<b>Время записи:</b> $time<br>";
    }

    if ($sum) {
        $mess .= "<b>Сумма кредита:</b> $sum<br>";
    }

    if ($object) {
        $mess .= "<b>Объект залога:</b> $object<br>";
    }

    if ($meters) {
        $mess .= "<b>Квадратных метров:</b> $meters<br>";
    }

    if ($address) {
        $mess .= "<b>Адрес:</b> $address<br>";
    }

    if ($rooms) {
        $mess .= "<b>Количество комнат:</b> $rooms<br>";
    }

    if ($srok) {
        $mess .= "<b>Срок кредита</b> $srok<br>";
    }

    if ($agree) {
        $mess .= "<b>Даю согласие на обратботку данных:</b> $agree<br>";
    }

    if ($avans) {
        $mess .= "<b>Аванс:</b> $avans<br>";
    }

    if ($city) {
        $mess .= "<b>Город:</b> $city<br>";
    }


   $apiKey = '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';
require("sendgrid-php/sendgrid-php.php");

$email = new \SendGrid\Mail\Mail();
$email->setFrom("info@visaberi.ru", "Visaberi");
$tos = [
    "info@visaberi.ru" => "Example User1",
    "boris117@yandex.ru" => "Example User3",
    "boris1488ss@gmail.com" => "Example User2"
];
$email->addTos($tos);
$email->setSubject($title);
$email->addContent("text/plain", "and easy to do anywhere, even with PHP");
$email->addContent(
    "text/html", $mess
);
$sendgrid = new \SendGrid($apiKey);
try {
    $response = $sendgrid->send($email);
    print $mess . "\n";
    print $response->statusCode() . "\n";
    print_r($response->headers());
    print $response->body() . "\n";
} catch (Exception $e) {
    echo 'Caught exception: '.  $e->getMessage(). "\n";
}
}
?>