<?php
session_start();
$lang = 'uk'; // Язык по умолчанию
$available_lang = ['ru', 'en', 'uk', 'deu'];
if (isset($_GET['lang']) AND in_array($_GET['lang'], $available_lang, true)) {
    $lang = $_GET['lang'];
    setcookie ('language', $lang, time() + 86400 * 30 * 6);
    echo "Вибрана мова: ". $_COOKIE['language'] . '<br/>';
}
include 'index.tpl';
