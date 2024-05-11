<?php


$login=$_POST['login'];
$haslo1=$_POST['haslo1'];
$haslo2=$_POST['haslo2'];
$email=$_POST['email'];
$clickr=$_POST['click-rej'];

$servername = "localhost";
$username = "root";
$dbname = "fitnessclub";

$conect=mysqli_connect("localhost", "root", "", "fitnessclub");

$query="SELECT * FROM klienci ";
$result=mysqli_query($conect, $query);

$error=false;


if ($haslo1!=$haslo2){
    echo "Te hasła są różne";
    $error=true;
};
while($row = mysqli_fetch_assoc($result)) {
    if ($login==$row["login"]){
        echo "Taki użutkownik już istnieje";
        $error=true;
    };
    if ($email==$row["email"]){
        echo "Taki email już istnieje";
        $error=true;
    };
};

if ($error==false){
    $sql="INSERT INTO klienci (login, hasło, email) VALUES ('$login', '$haslo1', '$email')";
    mysqli_query($conect, $sql);
    header("LOCATION: ./logowanie.project/panelklienta.php?message=$login");
    exit();
};

mysqli_close($conect);

?>