<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<link rel="shortcut icon" href="php.ico" type="image/x-icon">
	<title>RESULTAT</title>
</head>
<body>
	<center>
	<?php
		if(isset($_POST) && isset($_POST['email']) 
		&& isset($_POST['MDP']))
		{		
		extract($_POST);
			if(!empty($email)
				&& !empty($MDP))
		{
			echo "<p> Email de l'user :  $email.<br/>";
			echo "<p> Mot de passe de l'user :  $MDP.<br/>";	
	}
	
		else { echo "Param Vide !";}
	} 
	else{echo "Param Indefini !";

	}
?>
</center>
</body>
</html>

	

