<?php
    
    if( isset($_POST["sub"])){
        if(isset($_POST["name"]) && isset($_POST["Password"])){
            header("index.html");
        }else{
            echo"please check the username/password Again";
        }
    }
    
    
?>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="index.php" method="post"  id="g1" >
        <label for="name">Name</label>
        <br>
        <input type="text" name="name">
        <br>
        <label for="pass">Password</label>
        <br>
            <input type="password" name="Password">
            <br>
        <input type="Submit" value="Log in" name="sub">
    </form>

</body>
</html>