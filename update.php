<?php

	$conexao = mysqli_connect('localhost', 'root', '', 'toggle_button');

	if(isset($_POST['value'])){
		$value = $_POST['value'];
		$query = "update switch set choice='$value' where id='1'";
		$result = mysqli_query($conexao, $query);
		//echo $query;
		//echo "<h2>You have Chosen the button status as:" .$value."</h2>";
	}
?>

