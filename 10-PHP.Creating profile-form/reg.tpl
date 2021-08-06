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
            <td><label for="password-field2">Пароль (ще раз):</label></td>
            <td><input type="password" name="password2" id="password-field2" value="<?
            if($_SESSION['password2']) echo $_SESSION['password2'];?>"></td>
        </tr>
        <tr>
            <td><label for="man"><label for="women"> Стать:</label></label></td>
            <td>
               <? if($_SESSION['ale'] && $_SESSION['ale'] == 1)
               echo '<input type="radio" name="ale" value="1" id="man" checked = "checked"/>'. 'чоловіча'.
                '<input type="radio" name="ale" value="2" id="women"/>'. 'жіноча'?>
               <? if($_SESSION['ale'] && $_SESSION['ale'] == 2)
                echo '<input type="radio" name="ale" value="1" id="man"/>'. 'чоловіча'.'<input type="radio" name="ale" value="2" id="women" checked="checked"/>'. 'жіноча'?>
                <? if(!$_SESSION['ale'])
               echo '<input type="radio" name="ale" value="1" id="man" checked = "checked"/>'. 'чоловіча'
                .'<input type="radio" name="ale" value="2" id="women"/>'. 'жіноча'?>
            </td>
        </tr>
        <tr>
            <td><label for="city">Місто:</label> </td>
            <td>
                <select name="city" id="city">
                    <? if($_SESSION['city'] && $_SESSION['city'] == "Житомир")
                    echo '<option selected="selected" value="Житомир">Житомир</option>
                    <option value="Київ">Київ</option>
                    <option value="Львів">Львів</option>';
                    if($_SESSION['city'] && $_SESSION['city'] == "Київ")
                    echo '<option selected="selected" value="Київ">Житомир</option>
                    <option value="Київ" selected="selected">Київ</option>
                    <option value="Львів">Львів</option>';
                    else
                    echo '<option value="Житомир">Житомир</option>
                    <option value="Київ">Київ</option>
                    <option value="Львів" selected="selected">Львів</option>';
                    ?>
                </select>
            </td>
        </tr>
        <tr>
            <td><label for = "football">Улюблені ігри:</label></td>
            <td><input type="checkbox" name="checkboxes[]" id="football" value="football"
                       <? if($_SESSION['games']){
                        foreach($_SESSION['games'] as $i){
                        if($i == 'football') echo "checked ='checked'";}}?>>футбол</td>
        </tr>
        <tr>
            <td></td>
            <td><input type="checkbox" name="checkboxes[]" id="bas" value="basketball"
                       <? if($_SESSION['games']){
                        foreach($_SESSION['games'] as $i){
                        if($i == 'basketball')echo "checked ='checked'";}}?>>баскетбол</td>
        </tr>
        <tr>
            <td></td>
            <td><input type="checkbox" name="checkboxes[]" id="vol" value="volleyball"
                      <? if($_SESSION['games']){
                        foreach($_SESSION['games'] as $i){
                        if($i == 'volleyball')
                        echo "checked ='checked'";}}?>>волейбол</td>
        </tr>
        <tr>
            <td></td>
            <td><input type="checkbox" name="checkboxes[]" id="chess" value="chess"
                       <? if($_SESSION['games']){
                        foreach($_SESSION['games'] as $i){
                        if($i == 'chess')
                        echo "checked ='checked'";}}?>>шахи</td>
        </tr>
        <tr>
            <td></td>
            <td><input type="checkbox" name="checkboxes[]" id="wot" value="World of Tanks"
                       <? if($_SESSION['games']){
                        foreach($_SESSION['games'] as $i){
                        if($i == 'World of Tanks')
                        echo "checked ='checked'";}}?>>World of Tanks</td>
        </tr>
        <tr>
            <td><label for="about-field">Про себе:</label></td>
            <td><textarea name="about" id="about-field" rows="8" ><?
            if($_SESSION['about']) echo nl2br(htmlentities($_SESSION['about']));?></textarea></td>
        </tr>
        <tr>
            <td><label for="photo-field">Фотографія:</label></td>
            <td><input type="file" name="photo" multiple accept="image/*,image/jpeg" id="photo-field"></td>
        </tr>
        <tr>
            <td></td>
            <td><label><input type="submit" name="ok" value="Зареєструватися"></label>
            </td>
        </tr>
    </table>
</form>
<? session_destroy(); ?>