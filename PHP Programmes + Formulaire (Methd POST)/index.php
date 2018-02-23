<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>EVAL SUR PHP</title>
</head>
<body>
    <?php
    $Var = 0;
    while ($Var <=100){
        echo "<br>$Var<br />";
        $Var++;
    }

    $dev = "back";
    $technos = array("Php", "Ruby", "Javascript", "Html");
        if($dev==="front"){
            echo "Je suis un dev front et je connais le Javascript et l'Html <br />";
        }elseif($dev==="back"){
            echo "Je suis un dev back et je connais le Php, le Ruby et le Javascript <br />";
        }else{
            echo "Echouer";
        }

        print_r($technos);
        array_push($technos, "Python");
        print_r($technos);
        


        
    ?>
</body>
</html>