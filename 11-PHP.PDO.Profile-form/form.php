<?php
session_start();
$login = $_POST['login'];
$password = $_POST['password'];
$name = $_POST['name'];
$surname = $_POST['surname'];
$birth = $_POST['birth'];
$city = $_POST['city'];
$phone = $_POST['phone'];
$email = (string)$_POST['email'];
$country = $_POST['country'];
$gender = $_POST['ale'];

$aleRight;
if($gender == 1)
    $aleRight = "male";
else
    $aleRight = "female";

$host = '127.0.0.1';
$db   = 'lab12';
$user = 'mysql';
$pass = 'mysql';
$charset = 'utf8';

$dsn = "mysql:host=$host; dbname=$db; charset=$charset";
$opt = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];
$pdo = new PDO($dsn, $user, $pass, $opt);

$isLogPas = $pdo->query("SELECT * FROM users WHERE login ='" .$login. "'");
$row = $isLogPas->fetch();
if($row != '')
{
    include 'reg.tpl';
    echo "Please enter other login!";
}
else {
    $f = true;
    if(!$login){
        $f = false;
        echo "Bad Login<br/>";
    }
    if(!$password){
        $f = false;
        echo "Bad Password<br/>";
    }
    if(!$name){
        $f = false;
        echo "Bad Name<br/>";
    }
    if(!$surname){
        $f = false;
        echo "Bad Surname<br/>";
    }
    if(!$birth){
        $f = false;
        echo "Bad Birth<br/>";
    }
    if(!$phone){
        $f = false;
        echo "Bad Phone<br/>";
    }
    if(!$email){
        $f = false;
        echo "Bad E-mail<br/>";
    }
    if(!$city){
        $f = false;
        echo "Bad City<br/>";
    }
    if(!$country){
        $f = false;
        echo "Bad Country<br/>";
    }
    if($f){
        $isLogPas = $pdo->query("INSERT INTO users(login, password,
 name, surname, city, email, phone, gender, country, birth) VALUES
  ( '" . $login . "', '" . $password . "', '" . $name . "', '" . $surname . "', '" . $city . "', '"
        . $email . "','" . $phone . "', '" . $aleRight . "', '" . $country . "', '" . $birth . "' )");
$_SESSION['login'] = $login;
include 'hello.tpl';
    }
    if (!$f)
        include 'loginPHP.php';
}

