<? session_start();
$_SESSION['isLog'] = true;?>
<p>Вітаю</p>
<?
include 'update.tpl';
echo "<a href = 'index.php'>Exit";
session_destroy();
echo('</a> ');
?>