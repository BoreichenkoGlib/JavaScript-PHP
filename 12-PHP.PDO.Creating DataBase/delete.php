<?php
try {
    $pdo = new PDO('mysql:host=localhost;dbname=lab12;charset=utf8','mysql','mysql');
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}
catch(PDOException $e) {
    echo $e->getMessage();
}
$numZap = $_POST['numZap'];
$sql = "DELETE FROM tov WHERE id_tov='".$numZap."'";
$result  = $pdo->query($sql);
header('Location:/');