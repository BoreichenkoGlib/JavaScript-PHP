<? session_start();?>
<form enctype="multipart/form-data" action="loginPHP.php" method="POST">
    <table>
        <tr>
            <td><label for="login-field"> Логін:</label></td>
            <td><input type="text" name="login" id="login-field"></td>
        </tr>
        <tr>
            <td><label for="password-field">Пароль:</label></td>
            <td><input type="password" name="password" id="password-field"></td>
        </tr>
        <tr>
            <td></td>
            <td><label><input type="submit" name="ok" value="Log in"></label>
            </td>
        </tr>
    </table>
</form>