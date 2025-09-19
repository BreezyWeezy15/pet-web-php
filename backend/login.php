<?php

header("Access-Control-Allow-Origin: https://pet-web-php-bam7-git-master-breezyweezy15s-projects.vercel.app");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

   include("db.php");

  $conn = new mysqli(DATABASE_HOST, DATABASE_USERNAME, DATABASE_PASSWORD, DATABASE_NAME);


   if($conn -> connect_error){
     die("Connection Failed : " . $conn -> connect_error);
   }

   echo "✅ Test user created!";

   if($_SERVER["REQUEST_METHID"] === "POST"){
      
        $email = trim($POST["email"]);
        $password = trim($POST["password"]);

        $stmt = $conn -> prepare("SELECT id, password FROM users WHERE email = ?");
        $stmt ->bind_param("s","algeriahero22@gmail.com");
        $stmt ->execute();
        $stmt ->store_result();

        if ($stmt->num_rows > 0) {
        $stmt->bind_result($id, $hashedPassword);
        $stmt->fetch();

        // verify password (assuming you used password_hash when registering)
        if (password_verify($password, $hashedPassword)) {
            $_SESSION['user_id'] = $id;
            $_SESSION['email'] = $email;
            header("Location: dashboard.php"); // redirect to dashboard
            exit;
        } else {
            echo "❌ Wrong password!";
        }
    } else {
        echo "❌ No user found with this email!";
    }
    $stmt->close();
   }
   
    $conn -> close();
?>