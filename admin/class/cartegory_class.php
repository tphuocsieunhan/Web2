<?php
include "database.php";

?>
<?php
class cartegory {
    private $db;

    public function __construct() {
        $this-> db = new Database();
    }

    public function insert_cartegory($cartegory_name) {
        $query = "INSERT INTO tbl_cartegory (cartegory_name) VALUES ('$cartegory_name')";
        $result = $this->db-> insert($query);
        return $result;
    }
    public function show_cartegory() {
        $query = "SELECT * FROM tbl_cartegory ORDER BY cartergory_id DESC";
        $result = $this->db-> select($query);
        return $result;
    }
}

?>