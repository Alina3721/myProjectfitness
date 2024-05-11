
<html>
<head>
    
    <title>Zaloguj</title>

    <style>

@import url('https://fonts.googleapis.com/css2?family=Anek+Devanagari:wght@515&family=Carter+One&family=Chakra+Petch:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Lexend:wght@100..900&family=Lilita+One&family=Righteous&family=Rowdies:wght@300;400;700&family=Russo+One&family=Viga&display=swap');

#form-log{
    display: flex;
    justify-content: center;
    align-items: center;
    border: 7px inset rgb(84, 238, 233);
    height: 300px;
    width: 500px;
    padding: 25px;
    background-color: white;
    transform: translateX(90%) translateY(0%);
}

#tlo-log{
    background-color: black;
    opacity: 0.7;
    width: 1605px;
    height: 730px;
    margin-top: -10px;
    margin-left: -10px;
    margin-right: -350px;
    margin-bottom: -650px;
}

#click-log{
    padding: 13px;
    background-color: mediumturquoise;
    color: white;
    font-size: 17px;
    font-family: "Josefin Sans", sans-serif;
    border:none;
}

h1{
    font-family: "Josefin Sans", sans-serif;
}

.nazwy{
    font-size: 20px;
    font-family: "Josefin Sans", sans-serif;
}

#login{
    padding:5px;
}

#haslo{
    padding:5px;
}

#jesli2{
    font-size: 18px;
    font-family: "Josefin Sans", sans-serif;
}

</style>

</head>
<body>

<div id="tlo-log">

</div>

<div id="form-log">
<form method="POST" action="zalogchec.php">

<h1>Logowanie</h1>

   <div class="nazwy">Login</div>
   <input type="text" id="login" name="login"> 
   <br> <br>
   <div class="nazwy">Hasło</div>
   <input type="password" id="haslo" name="haslo">
   <br> <br>
   <input type="submit" id="click-log" name="click-log" value="Zaloguj się" />

   <p id="jesli2">Jeśli niem masz konta <a href= "http://localhost/logowanie.project/rejestracja.php" >zarejestruj się</a> </p>

</form>

</div>

</body>
</html>