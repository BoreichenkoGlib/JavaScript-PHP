<? session_start();?>

<form enctype="multipart/form-data" action="form.php" method="POST">
    <table>
        <tr>
            <td><label for="login-field"> Логін:</label></td>
            <td><input type="text" name="login" id="login-field" value="<?
            if($_SESSION['login']) echo $_SESSION['login'];?>"></td>
        </tr>
        <tr>
            <td><label for="password-field">Пароль:</label></td>
            <td><input type="password" name="password" id="password-field" value="<?
            if($_SESSION['password']) echo $_SESSION['password'];?>"></td>
        </tr>
        <tr>
            <td><label for="name">Name:</label> </td>
            <td><input type="text" name="name" id="name"/></td>
        </tr>
        <tr>
            <td><label for="surname">Surname:</label> </td>
            <td><input type="text" name="surname" id="surname"/></td>
        </tr>
        <tr>
            <td><label for="birth">Birth:</label> </td>
            <td><input type="date" name="birth" id="birth" max="2005-12-31" min="1900-12-31"/></td>
        </tr>
        <tr>
            <td><label for="phone">Phone:</label> </td>
            <td><input type="tel" name="phone" id="phone" size="13" placeholder="+380960393488"/></td>
        </tr>
        <tr>
            <td><label for="email">E-mail:</label> </td>
            <td><input type="email" name="email" id="email"/></td>
        </tr>
        <tr>
            <td><label for="city">Місто:</label> </td>
            <td><input type="text" name="city" id="city"/></td>
        </tr>
        <tr>
            <td><label for="country">Country:</label> </td>
            <td><input type="text" name="country" id="country"/></td>
        </tr>
        <tr>
            <td><label for="man"><label for="women"> Стать:</label></label></td>
            <td>
                <input type="radio" name="ale" value="1" id="man" checked = "checked"/> men
               <input type="radio" name="ale" value="2" id="women"/>жіноча
            </td>
        </tr>
        <tr>
            <td></td>
            <td><label><input type="submit" name="ok" value="Зареєструватися"></label>
            </td>
        </tr>
    </table>
</form>
