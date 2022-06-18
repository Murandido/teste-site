<?php
header("Content-type: application/json;charset=UTF-8");

$date = date("Y-m-d H:i:s");
$user = "Murilo";
$msg = "Tenha um otimo dia, mandou bem funciona!";

$log = [$date, $user, $msg];

echo json_encode($log);
exit;