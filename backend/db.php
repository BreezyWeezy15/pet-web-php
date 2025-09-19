<?php

header("Access-Control-Allow-Origin: https://pet-web-php-bam7-git-master-breezyweezy15s-projects.vercel.app");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

  const DATABASE_NAME = "4685925_pets";
  const DATABASE_USERNAME ="4685925_pets";
  const DATABASE_HOST = "fdb1033.awardspace.net";
  const DATABASE_PASSWORD = "-swODUUF3H)3d5;X";


   $conn = new mysqli(DATABASE_HOST, DATABASE_USERNAME, DATABASE_PASSWORD, DATABASE_NAME);


   if($conn -> connect_error){
     die("Connection Failed : " . $conn -> connect_error);
   }

   echo "✅ Successfully Connected";

?>