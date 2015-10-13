<?php

//require('../../../../wp-load.php');
//require_wp_db();
//global $wpdb;
//
//
//
//    $booking_ref = $_POST["booking_ref"];
//    $action = $_POST["action"];
//
//
//    if($action == "confirm") {
//
//    $confirm_orders = $wpdb->update($wpdb->prefix . "RR_orders", 
//    array( "pending" => 0 ), 
//    array("booking_ref" => $booking_ref), 
//    array("%d"), 
//    array("%s") );
//
//    $confirm_resv = $wpdb->update($wpdb->prefix . "RR_v2", 
//    array( "pending" => 0 ), 
//    array("booking_ref" => $booking_ref), 
//    array("%d"), 
//    array("%s") );
//
//    echo "Booking successfully confirmed.";
//    }
//
//    if ($action == "delete") {
//    $delete_order = $wpdb->query($wpdb->prepare("DELETE FROM " . $wpdb->prefix . "RR_orders WHERE booking_ref=%s", $booking_ref));
//    
//    $delete_resv = $wpdb->query($wpdb->prepare("DELETE FROM " . $wpdb->prefix . "RR_resv WHERE booking_ref=%s", $booking_ref));
//
//    echo "Booking successfully removed.";
//    }



?>

