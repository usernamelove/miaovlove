<?php
header('Content-type: text/html; charset=utf-8');
$name = $_POST["name"];
$username = $_POST["username"];
$content  = $_POST["content"];
if($username!=""&&$content!=""&&$name==""){
	$array = array('username'=>$username,'content'=>$content);
$path = "imgs.txt";
$commentList = unserialize(file_get_contents($path));
 if(is_array($commentList)){
 	array_unshift($commentList,$array);
 }
 else{
 	$commentList = array($array);
 }
 
$commentFile = fopen($path,"w");
fwrite($commentFile,serialize($commentList));
fclose($commentFile);

}

//这块删除可能还存在问题·
else if($name&&$username==""&&$content==""){
$path = "imgs.txt";
$commentList = unserialize(file_get_contents($path));
if(is_array($commentList)&&count($commentList)>10)
unset ($commentList[$name]);
$commentFile = fopen($path,"w");
fwrite($commentFile,serialize($commentList));
fclose($commentFile);
}



$commentList = unserialize(file_get_contents("imgs.txt"));
echo json_encode($commentList);
?>



  