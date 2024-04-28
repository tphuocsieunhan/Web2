<?php
    include "header.php";
    include "slider.php";
    include "class/cartegory_class.php";

?>
<?php
$cartegory =  new cartegory;
$show_cartegory = $cartegory -> show_cartegory();
?>

<div class="admin-content-right">
<div class="admin-content-right-cartegory_list">
                <h1>danh sah danh muc</h1>
                <table>
                    <tr>
                        <th>stt</th>
                        <th>id</th>
                        <th>danh muc</th>
                        <th>tuy bien</th>
                    </tr>
                    <?php
                        if($show_cartegory){
                            while($result = $show_cartegory->fetch_assoc()) {
                    ?>
                    <tr>
                        <td>1</td>
                        <td>1</td>
                        <td>nam</td>
                        <td><a href="">sua</a><a href="">xoa</a></td>
                    </tr>
                    <?php
                    }
                }
                    ?>
                    
                </table>
            </div>
        </div>
    </section>

</body>
</html>