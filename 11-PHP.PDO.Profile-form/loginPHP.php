<?php
session_start();

$login = $_POST['login'];
$password = $_POST['password'];

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

$isLogPas = $pdo->query("SELECT * FROM users WHERE login ='" .$login. "' AND password ='" .$password. "'");
$row = $isLogPas->fetch();
if($row != '')
{
    include 'hello.tpl';
    $_SESSION['login'] = $login;
    $_SESSION['password'] = $password;
}
else
    include 'reg.tpl';


