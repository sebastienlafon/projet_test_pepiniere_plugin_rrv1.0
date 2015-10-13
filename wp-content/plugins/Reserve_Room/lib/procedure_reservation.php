<?php 


//    // Decode our JSON into PHP objects we can use
//    $data_passed = $_POST["RRReservation"];
//    $reservation = json_decode($data_passed, true);
//
//
//    $prix = $_POST["prix"];
//    $year = $_POST["currentYear"];
//    $monthNow = ($_POST["currentMonth"]);
//
//
//$pending = $_POST['pending'];
//
//$name = $_POST['formData']['name'];
//
//$email = $_POST['formData']['email'];
//
//$phone = $_POST['formData']['phone'];
//
//$gender = $_POST['formData']['gender'];
//
//$message = $_POST['formData']['message'];
//
//
//require('../../../../wp-load.php');
//require_wp_db();
//global $wpdb;
//
//$dates_salle = array();
//
//foreach ($reservation as $month => $rooms) {
//	$dates_salle[$month] = array();
//	$current_month = $reservation[$month];
//
//	foreach ($current_month as $room => $ids) {
//		$current_room = $current_month[$room];
//		$dates_salle[$month][$room] = array();
//
//		foreach ($current_room as $id) {
//			$date = substr($id, strrpos($id, '-') + 1);
//			if (array_key_exists($date, $dates_salle[$month][$room])) {
//				$dates_salle[$month][$room][$date] += 1;
//				} else {
//					$dates_salle[$month][$room][$date] = 1;
//				}
//
//		}
//	}
//}
//
//
//$roomStrings = array();
//foreach($dates_salle as $month => $rooms) {
//	$roomStrings[$month] = array();
//	$current_month = $dates_salle[$month];
//	echo "Month:  " . $month . "  Rooms: " . $rooms . "<br />";
//	echo "Current Month: ";
//	var_dump($current_month);
//
//	foreach($current_month as $room => $pairs) {
//		$roomStrings[$month][$room] = '';
//		$current_room = $current_month[$room];
//
//		foreach($current_room as $date => $salle) {
//			if (next($current_room)) {
//				$roomStrings[$month][$room] .= "{$date}:{$salle},";
//			} else {
//				$roomStrings[$month][$room] .= "{$date}:{$salle}";
//			}
//		}
//	}
//}
//
//
//	function randomString($length = 3) {
//		 $str = "";
//		 $characters = array_merge(range('A','Z'), range('a','z'), range('0','9'));
//		 $max = count($characters) - 1;
//		 for ($i = 0; $i < $length; $i++) {
//			  $rand = mt_rand(0, $max);
//			  $str .= $characters[$rand];
//		 	}
//		 return $str;
//		}
//
//
//	do {
//		$rdmStr = randomString();
//		$booking_ref = substr($year, 2,3) . $month . $rdmStr . substr($name, 0,3);
//
//		$ref_sql = "SELECT * FROM " . $wpdb->prefix . "RR_resv WHERE booking_ref = '$booking_ref'";
//		$ref_result = $wpdb->get_results($ref_sql);
//
//		echo 'Ref result is: ' . var_dump($ref_result);
//		} while ($ref_result == "bob");
//
//
//foreach($roomStrings as $monthn => $room) {
//	$current_month = $roomStrings[$monthn];
//	foreach ($current_month as $room => $dates) {
//
//		$wpdb->insert( $wpdb->prefix . 'RR_resv',
//			array('year' => $year, 'month' => $monthn, 'dates' => $dates, 'room' => $room, 'booking_ref' => $booking_ref, 'pending' => $pending),
//			array('%d', '%d', '%s', '%s', '%s', '%d'));
//	}
//}
//
//		$wpdb->insert( $wpdb->prefix . 'RR_orders',
//			array('name' => $name, 'email' => $email, 'phone' => $phone, 'prix' => $prix, 'booking_ref' => $booking_ref, 'year' => $year, 'month' => $monthNow, 'pending' => $pending ),
//			array('%s', '%s', '%s', '%d', '%s', '%d', '%d', '%d'));


?>