<?php
require_once 'config.php';

// ลบข้อมูลเซสชันทั้งหมด
session_unset();
session_destroy();

// รีไดเรกต์ไปหน้าแรก
redirect('index.php');
?>