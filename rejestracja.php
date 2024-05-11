<html>
<head>
   
    <title>Rejestracja</title>

<style>

@import url('https://fonts.googleapis.com/css2?family=Anek+Devanagari:wght@515&family=Carter+One&family=Chakra+Petch:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Lexend:wght@100..900&family=Lilita+One&family=Righteous&family=Rowdies:wght@300;400;700&family=Russo+One&family=Viga&display=swap');

#form-rejestr{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 450px;
    width: 500px;
    margin-top: 80px;
    padding: 25px;
    border: 5px solid mediumturquoise;
    box-shadow: 5px 4px 3px grey;
    background-color: white;
    transform: translateX(90%) translateY(-20%);
}

#click-rej{
    padding: 13px;
    background-color: mediumturquoise;
    color: white;
    font-size: 17px;
    font-family: "Josefin Sans", sans-serif;
    border:none;
}

#tlo-rej{
    background-color: black;
    opacity: 0.7;
    width: 1605px;
    height: 730px;
    margin-top: -10px;
    margin-left: -10px;
    margin-right: -350px;
    margin-bottom: -650px;
}

#login{
    padding: 5px;
}

#haslo1{
    padding:5px;
}

#haslo2{
    padding:5px;
}

#email{
    padding:5px;
}

.nazwy{
    font-size: 20px;
    font-family: "Josefin Sans", sans-serif;
}

#jesli1{
    font-size: 18px;
    font-family: "Josefin Sans", sans-serif;
}

h1{
    font-family: "Josefin Sans", sans-serif;
}

</style> 

</head>

<body>

 <div id="tlo-rej">


 </div>

<div id="form-rejestr">

<form method="POST" action="chec.php">
<h1>Rejestracja</h1>
<div class="nazwy">Login</div>
<input type="text" id="login" name="login">
<br> <br>
<div class="nazwy">Hasło</div>
<input type="password" id="haslo1" name="haslo1">
<br> <br>
<div class="nazwy">Powtórz hasło</div>
<input type="password" id="haslo2" name="haslo2">
<br> <br>
<div class="nazwy">E-mail</div>
<input type="email" id="email" name="email">
<br> <br>
<input type="submit" id="click-rej" name="click-rej" value="Zarejestrój się" />
<br> <br>

<p id="jesli1">Jeśli masz już konto <a href= "http://localhost/logowanie.project/zaloguj.php" >zaloguj się</a> </p>

</form>

</div>

<?php



?>

</body>

</html>