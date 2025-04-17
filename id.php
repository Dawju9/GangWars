<?php
$jebaneip = "198.244.231.52";
$server_settings['title'] = "Green Dragon";
$server_settings['ip'] = $jebaneip; 
$server_settings['port'] = "30322";
$people_json = file_get_contents("http://".$server_settings['ip'].":".$server_settings['port']."/players.json");
$decoded_json = json_decode($people_json, true);
echo '<center>';
foreach($decoded_json as $key => $value) {
    $name = $decoded_json[$key]["name"];
    $id= $decoded_json[$key]["id"];
	echo '<a class="btn bg-gradient-dark w-90" href="">Gracz '.$name.' o id: '.$id.'</a><br>';
}
echo '</center>';
?>