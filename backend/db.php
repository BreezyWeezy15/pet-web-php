<?php


  const DATABASE_NAME = "if0_39977656_pets_db";
  const DATABASE_USERNAME ="if0_39977656";
  const DATABASE_HOST = "sql306.infinityfree.com";
  const DATABASE_PASSWORD = "Dallasson12";


   $conn = new mysqli(DATABASE_HOST, DATABASE_USERNAME, DATABASE_PASSWORD, DATABASE_NAME);


   if($conn -> connect_error){
     die("Connection Failed : " . $conn -> connect_error);
   }

   echo "✅ Successfully Connected";

?>