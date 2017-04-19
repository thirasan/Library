<!Doctype html>
<html>
<head>
    <title>Connecting to a Database</title>
    <style>
        table {
            width: 100%;
            border-collapse: collapse;
        }

        table, td, th {
            border: 1px solid black;
            padding: 5px;
        }

        th {text-align: left;}
    </style>
</head>
<body>
    <?php
        $q = intval($_GET['q']);
        $con = mysqli_connect('localhost','root','','CSV_DB');

        if($con){
            echo 'Success' . "<br>";
        } else {
            die('Error');
        }
        mysqli_select_db($con,"ajax_demo");
        $sql="SELECT * FROM author WHERE Name = '".$q."'";
        $result = mysqli_query($con, $sql);

        echo "<table>
        <tr>
        <th>Name</th>
        <th>Surename</th>
        <th>Pen name</th>
        <th>Birthdate</th>
        <th>Genre</th>
        </tr>";
        while($row = mysqli_fetch_array($result)) {
            echo "<tr>";
            echo "<td>" . $row['Name'] . "</td>";
            echo "<td>" . $row['Surename'] . "</td>";
            echo "<td>" . $row['Pen name'] . "</td>";
            echo "<td>" . $row['Birthdate'] . "</td>";
            echo "<td>" . $row['Genre'] . "</td>";
            echo "</tr>";
        }
        echo "</table>";
        mysqli_close($con);
    ?>
</body>
</html>