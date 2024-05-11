<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fitness Club</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    

    <div id="logowanie">
        <h1 id="naglowek">
            Fitness Club-FIT LAB
        </h1>

        <?php


if (!isset($_GET['message'])){
    echo '<div class="row"> 
    <a href= "http://localhost/logowanie.project/zaloguj.php" ><div id="zaloguj">Zaloguj</div></a>
    <a href= "http://localhost/logowanie.project/rejestracja.php" ><div id="rejestracja">Rejestracja</div></a>
    </div>';

} else {
echo '<div class="row">

<a href= "http://localhost/logowanie.project/myProjectfitness/index.html" ><div id="rejestracja">Wyloguj się</div></a>
<img src="./img/user-avatar-filled-alt-svgrepo-com.svg" height="200px" width="200px">
</div>';

}

        ?>

        
        
    </div>


<header id="header">

    <div id="pasek">
        <div id="trojkat">
        </div>
        <ul>
            <li><a href= "index.html">Strona główna</a></li>
            <li><a href= "o-nas.html">O nas</a></li>
            <li><a href= "treningi.html">Treningi</a></li>
            <li><a href= "karnety.html">Karnety</a></li>
            <li><a href= "kontakt.html">Kontakt</a></li>
            <li><a href= "gra.html">Gra</a></li>
            <li><a href= "info.html">Info</a></li>

        </ul>
        <div id="trojkat2">
        </div>
    </div>


</header>



 <script src="script.js"></script>   
</body>
</html>