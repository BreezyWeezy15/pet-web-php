<?php

header("Access-Control-Allow-Origin: https://pet-web-php-bam7-git-master-breezyweezy15s-projects.vercel.app");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

  const DATABASE_NAME = "b7_39980238_users";
  const DATABASE_USERNAME ="b7_39980238";
  const DATABASE_HOST = "sql209.byethost7.com";
  const DATABASE_PASSWORD = "14041994";


   $conn = new mysqli(DATABASE_HOST, DATABASE_USERNAME, DATABASE_PASSWORD, DATABASE_NAME);


   if($conn -> connect_error){
     die("Connection Failed : " . $conn -> connect_error);
   }

   echo "✅ Successfully Connected";

?>