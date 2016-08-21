<?php 
	$conexao = mysqli_connect('localhost', 'root', '', 'toggle_button');
	$query = "select choice from switch where id = '1'";
	$result = mysqli_query($conexao, $query);

	$status = new status;
	while($row = mysqli_fetch_assoc($result)) {
		$status->status = $row;
	}

	class status
	{
		public $status;  
	}

	echo json_encode($status);	

?>







