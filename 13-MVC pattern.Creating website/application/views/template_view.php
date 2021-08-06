<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8"/>
    <meta name="description" content=""/>
    <meta name="keywords" content=""/>
    <title>Новинний портал</title>
    <link href="http://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" type="text/css"/>
    <link href="http://fonts.googleapis.com/css?family=Kreon" rel="stylesheet" type="text/css"/>
    <link rel="stylesheet" type="text/css" href="/css/style.css"/>
    <script src="/js/jquery-1.6.2.js" type="text/javascript"></script>
    <script type="text/javascript">
        // return a random integer between 0 and number
        function random(number) {

            return Math.floor(Math.random() * (number + 1));
        };

        // show random quote
        $(document).ready(function () {

            var quotes = $('.quote');
            quotes.hide();

            var qlen = quotes.length; //document.write( random(qlen-1) );
            $('.quote:eq(' + random(qlen - 1) + ')').show(); //tag:eq(1)
        });
    </script>
</head>
<body>
<div id="wrapper">
    <div id="header">
        <div id="logo">
            <a href="/">Новинний</span> <span class="cms">портал</span></a>
        </div>
        <div id="menu">
            <ul>
                <li class="first active"><a href="/">Головна</a></li>
                <li><a href="/services">Послуги</a></li>
                <li><a href="/portfolio">Портфоліо</a></li>
                <li class="last"><a href="/contacts">Контакти</a></li>
            </ul>
            <br class="clearfix"/>
        </div>
    </div>
    <div id="page">
        <div id="sidebar">
            <div class="side-box">
                <h3>Цитати нашого редактора</h3>
                <p align="justify" class="quote">
                    «Любой адекватный журналист знает, что никогда нельзя обобщать»
                </p>
                <p align="justify" class="quote"><!-- &copy; Vitaly Swipe -->
                    «Работа! Работа! Работа! И еще раз работа!»
                </p>
                </p>
            </div>
            <div class="side-box">
                <h3>Основне меню</h3>
                <ul class="list">
                    <li class="first "><a href="/">Головна</a></li>
                    <li><a href="/services">Послуги</a></li>
                    <li><a href="/portfolio">Портфоліо</a></li>
                    <li class="last"><a href="/contacts">Контакти</a></li>
                </ul>
            </div>
        </div>
        <div id="content">
            <div class="box">
                <?php include 'application/views/' . $content_view; ?>
            </div>
            <br class="clearfix"/>
        </div>
        <br class="clearfix"/>
    </div>
    <div id="page-bottom">
        <div id="page-bottom-sidebar">
            <h3>Контакти</h3>
            <ul class="list">
                <li class="first">life: 8880733227</li>
                <li>київстар: 87876017</li>
                <li class="last">email: loz12345@gmail.com</li>
            </ul>
        </div>
        <div id="page-bottom-content">
            <h3>Про нас</h3>
            <p>
                Свобода слова та висловлювань є невід'ємною складовою діяльності журналіста.
                Служіння інтересам влади чи засновників, а не суспільству, є порушенням етики журналіста.
                Журналіст має з повагою ставитися до приватного життя людини.
                При цьому не виключається його право на журналістське розслідування,
                пов'язане з тими або іншими подіями і фактами, що мають громадське звучання
                і покликані захищати інтереси суспільства та особи.
            </p>
        </div>
        <br class="clearfix"/>
    </div>
</div>
<div id="footer">
    <a href="/">Новинний портал</a> &copy; 2020</a>
</div>
</body>
</html>