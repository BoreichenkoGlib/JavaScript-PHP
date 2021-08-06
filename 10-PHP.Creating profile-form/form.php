<?
session_start();
$login = $_POST['login'];
$pas1 = $_POST['password'];
$pas2 = $_POST['password2'];
$ale = $_POST['ale'];
$city = $_POST['city'];
$games = $_POST['checkboxes'];
$about = $_POST['about'];
$photo = $_FILES['photo'];

if ($pas1 == $pas2)
    $rightPass = "Співпадає";
else
    $rightPass = "Не співпадає!(перший - " . strlen($pas1) . " символів, другий - " . strlen($pas2) . " символів";

if ($ale == 1)
    $aleRight = "чол";
else
    $aleRight = "жін";

if (isset($photo)) {
    if ($name != "")
        unlink('images/' . $name);
    $name = 'photo' . $photo['name'];
    copy($photo['tmp_name'], 'images/' . $name);
}
$_SESSION['login'] = $login;
$_SESSION['password'] = $pas1;
$_SESSION['password2'] = $pas2;
$_SESSION['ale'] = $ale;
$_SESSION['city'] = $city;
$_SESSION['games'] = $games;
$_SESSION['about'] = $about;


echo '<p align="center" style="font-size: 28px;"><b>Лабораторна робота №11</b></p>';
echo '<p align="center" style="font-size: 22px"><b>Результат обробки форми</b></p>';

echo ' <table style="font-size: large; margin: 0 auto;">
        <tr>
            <td> Логін:</td>
            <td>' . $login . '</td>
        </tr>
        <tr>
            <td>Пароль:</td>
            <td>' . $rightPass . '</td>
        </tr>
        <tr>
            <td>Стать:</td>
            <td>' . $aleRight . '</td>
        </tr>
        <tr>
            <td>Місто:</td>
            <td>' . $city . '</td>
        </tr>
        <tr>
            <td>Улюблені ігри:</td>';
if ($games) {
    $ii = 0;
    foreach ($games as &$i) {
        if ($ii != 0)
            echo '<tr><td></td>';
        echo '<td>' . $i . '</td></tr>';
        $ii++;
    }
};
echo '
            
        </tr>
        <tr>
            <td>Про себе:</td>
            <td>' . nl2br(htmlentities($about)) . '</td>
        </tr>
        <tr>
            <td>Фотографія:</td>
            <td>' . '<img style = "width: 500px; height: 400px;" alt = "noooo" src="images/' . $name . '" />' . '</td>
        </tr>
    </table>
    <a href="logout.php">Перейти на попередню сторінку</a>';
