<?php
 header("Content-type:text/html;charset=utf-8");
 $password = $_POST["password"];
$charset = "utf8"; 
$con = mysql_connect("localhost","root","140320");

mysql_query("SET character_set_connection=$charset, character_set_results=$charset, character_set_client=binary", $con);
if(!$con){
	echo "不能进行连接".mysql_error();
}

mysql_select_db("student",$con);

$rel = mysql_query("select password from studentlogin");

if($password){
	$str=array();
while($title=mysql_fetch_array($rel)){
  if($title['password']===$password){
  	$str=array("code"=>"2","msg"=>"true");
  	break;
//	echo json_encode(array("code"=>"2","msg"=>"true"));
//	break;
  }
  else{
  	$str=array("code"=>"0","msg"=>"密码错误，请认真核实你的密码");
//	echo json_encode(array("code"=>"0","msg"=>"密码错误，请认真核实你的密码"));
//	break;
  }
}	
  
	echo json_encode($str);
}
else{
	echo json_encode(array("code"=>"1","msg"=>"密码为空，请输入你的密码"));
}
mysql_close($con);

?>
