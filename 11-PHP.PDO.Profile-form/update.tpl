<? session_start();
try {
$pdo = new PDO('mysql:host=localhost;dbname=lab12;charset=utf8','root','');
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}
catch(PDOException $e) {
echo $e->getMessage();
}

$sql = "SELECT * FROM users WHERE login = '".$_SESSION['login']."'";
$result = $pdo->query($sql);
$row = $result->fetch(PDO::FETCH_ASSOC);
if($row["gender"] == 'male')
    $male = true;
echo(' <form enctype="multipart/form-data" action="update.php" method="POST">
    <table>
        <tr>
            <td><label for="login-field"> Логін:</label></td>
            <td><input type="text" name="login" id="login-field" value="'.$row["login"].'"></td>
        </tr>
        <tr>
            <td><label for="password-field">Пароль:</label></td>
            <td><input type="password" name="password" id="password-field" value="'.$row["password"].'"></td>
        </tr>
        <tr>
            <td><label for="name">Name:</label> </td>
            <td><input type="text" name="name" id="name" value="'.$row["name"].'"/></td>
        </tr>
        <tr>
            <td><label for="surname">Surname:</label> </td>
            <td><input type="text" name="surname" id="surname" value="'.$row["surname"].'"/></td>
        </tr>
        <tr>
            <td><label for="birth">Birth:</label> </td>
            <td><input type="date" name="birth" id="birth" max="2005-12-31" min="1900-12-31" value="'.$row["birth"].'"/></td>
        </tr>
        <tr>
            <td><label for="phone">Phone:</label> </td>
            <td><input type="tel" name="phone" id="phone" size="13" placeholder="+380960393488" value="'.$row["phone"].'"/></td>
        </tr>
        <tr>
            <td><label for="email">E-mail:</label> </td>
            <td><input type="email" name="email" id="email" value="'.$row["email"].'"/></td>
        </tr>
        <tr>
            <td><label for="city">Місто:</label> </td>
            <td><input type="text" name="city" id="city" value="'.$row["city"].'"/></td>
        </tr>
        <tr>
            <td><label for="country">Country:</label> </td>
            <td><input type="text" name="country" id="country" value="'.$row["country"].'"/></td>
        </tr>
        <tr>
            <td><label for="man"><label for="women"> Стать:</label></label></td>
            <td>');
                if($row["gender"] == 'male')
                    $ech = '<input type="radio" name="ale" value="1" id="man" checked = "checked"/> men
                <input type="radio" name="ale" value="2" id="women"/>жіноча';

                if($row["gender"] == 'female')
                    $ech = '<input type="radio" name="ale" value="1" id="man"/> men
                <input type="radio" name="ale" value="2" id="women" checked = "checked"/>жіноча';
            echo($ech.'</td>
        </tr>
        <tr>
            <td></td>
            <td><label><input type="submit" name="ok" value="Зареєструватися"></label>
            </td>
        </tr>
    </table>
</form>
');
?>