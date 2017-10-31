<?php
 header("Content-type:text/html;charset=utf-8");
 $username = $_POST["username"];
$charset = "utf8"; 

$con = mysql_connect("localhost","root","140320");

mysql_query("SET character_set_connection=$charset, character_set_results=$charset, character_set_client=binary", $con);

mysql_select_db("student",$con);

$rel = mysql_query("select username from studentlogin");

if($username){
	$str=array();
while($title=mysql_fetch_array($rel)){
  if($title['username']===$username){
  	$str=array("code"=>"2","msg"=>"true");
  	break;
//	echo json_encode(array("code"=>"2","msg"=>"true"));
//	break;
  }
  else{
  	$str=array("code"=>"0","msg"=>"用户不存在,请仔细核对你的用户名，或者还没有注册");
//	echo json_encode(array("code"=>"0","msg"=>"用户不存在,请仔细核对你的用户名，或者还没有注册"));
//	break;
  }
}	
  
echo json_encode($str);
}
else{
	echo json_encode(array("code"=>"1","msg"=>"用户名为空,请输入你的用户名"));
}
mysql_close($con);

?>
