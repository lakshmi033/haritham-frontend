<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Haritham User Roles</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin: 50px;
            background-color: #f4f4f4;
        }
        h1 {
            font-size: 28px;
            color: #b90b08;
        }
        .box {
            width: 250px;
            margin: 20px auto;
            padding: 15px;
            border: 2px solid #000;
            background-color: white;
            font-size: 18px;
            font-weight: bold;
            cursor: pointer;
            transition: 0.3s;
        }
        .box:hover {
            background-color: #ddd;
        }
    </style>
</head>
<body>

    <h1>HARITHAM</h1>

    <div class="box" onclick="showMessage('Admin')">ADMIN</div>
    <div class="box" onclick="showMessage('User')">USER</div>
    <div class="box" onclick="showMessage('Waste Collectors')">WASTE COLLECTORS</div>

    <script>
        function showMessage(role) {
            alert("You clicked on: " + role);
        }
    </script>

</body>
</html>