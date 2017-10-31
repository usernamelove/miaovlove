<?php
header("Content-type:text/html;charset=utf-8");
$username = $_POST["username"];
$password = $_POST['password'];
$eamil = $_POST["eamil"];
$charset="utf8";
$head=true;
$con = mysql_connect("localhost","root","140320");
mysql_query("SET character_set_connection=$charset, character_set_results=$charset, character_set_client=binary", $con);
mysql_select_db("student",$con);

$rel = mysql_query("select username from studentlogin");

if($username){
	$str=array();
while($title=mysql_fetch_array($rel)){
  if($title['username']===$username){
  	$str=array("code"=>"0","msg"=>"你输入的用户名已经被人注册过了");
  	$head=false;
  }
  else{
  	$str=array("code"=>"1","msg"=>"该用户名可以注册");
  }
}	
  
	echo json_encode($str);
}

if($head){
mysql_query("insert into studentlogin (username,password,eamil) values('$username','$password','$eamil')");	
}


mysql_close($con);
?>