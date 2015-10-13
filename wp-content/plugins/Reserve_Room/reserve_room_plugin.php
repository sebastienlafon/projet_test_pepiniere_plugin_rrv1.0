<?php
/**
* Plugin Name: ReserveRoom RR
* Plugin URI: sebastienlafon.net/plugins/ReserveRoom.php
* Description: Gestionnaire de réservation de salles 
* Version: 1.0.0
* Author: Sébastien Lafon
* Author URI: sebastienlafon.net/plugins/reserve_room.php
* License: GPL12
*/
if ( !function_exists( 'add_action' ) ) {
	echo 'Hi there!  I\'m just a plugin, not much I can do when called directly.';
	exit;
}
/*AJOUT DES MENUS AU SEIN DE L'ADMINISTRATION DE WORDPRESS*/
// Add item to menu in dashboard:

add_action('admin_menu', 'RR_menu');
function RR_menu() {
add_menu_page('RR Calendar Settings', 'Réservation de salles', 'administrator', 'RR-settings', 'RR_settings_page', 'dashicons-admin-generic');
add_submenu_page( 'RR-settings', 'Create Delete Rooms', 'Salles', 'administrator', 'RR-settings-rooms', 'RR_settings_page_rooms' );
add_submenu_page( 'RR-settings', 'Orders', 'Réservations', 'administrator', 'RR-settings-orders', 'RR_settings_page_orders' );
add_submenu_page( 'RR-settings', 'Settings', 'Paramètres', 'administrator', 'RR-settings-reservations', 'RR_settings_page_reservations' );

}
function RR_settings_page() {
include 'admin_view_calendrier.php';
}
function RR_settings_page_rooms() {
include 'admin_view_voir_creer.php';
} 
function RR_settings_page_orders() {
include 'admin_view_voir_supprimer_commandes.php';
} 
function RR_settings_page_reservations() {
include 'admin_view_parametres.php';
} 
function RR_shortcodes(){
	include 'admin_controller_shortcodes.php';
}
// add settings options to the page:

add_action( 'admin_init', 'RR_settings' );
function RR_settings() {
register_setting( 'RR-settings-group', 'accountant_name' );
register_setting( 'RR-settings-group', 'accountant_phone' );
register_setting( 'RR-settings-group', 'accountant_email' );
} 

add_action( 'admin_enqueue_scripts', 'RR_scripts' );
add_action( 'wp_enqueue_scripts', 'RR_scripts' );

function RR_scripts() {
  wp_register_script(  'RR-backend-script', plugins_url( '/js/backend-script.js', __FILE__ ), array( 'jquery', 'jquery-ui-core', 'jquery-ui-selectable' ) );
  wp_register_script(  'RR-frontend-script', plugins_url( '/js/frontend-script.js', __FILE__ ), array( 'jquery', 'jquery-ui-core', 'jquery-ui-selectable' ) );

  wp_register_style( 'RR-custom-style', plugins_url( 'RR-plugin-style.css', __FILE__ ) );
  wp_register_style( 'RR-backend-style', plugins_url( 'admin-style.css', __FILE__ ) );
  wp_register_style( 'RR-settings-style', plugins_url( 'settings-style.css', __FILE__ ) );
  
}

//// Creation of shortcode and function to run when shortcode is used:
//function voir_calendrier(){
//          ob_start();
//          include 'calendrier.php';
//          $content = ob_get_clean();
//          return $content;
//}





 register_activation_hook( __FILE__, 'RR_create_db' );
function RR_create_db() {
    global $wpdb;
    $charset_collate = $wpdb->get_charset_collate();
    $table_client = $wpdb->prefix . 'RR_client';
    $table_mobilier = $wpdb->prefix . 'RR_mobilier';
    $table_reservation = $wpdb->prefix . 'RR_reservation';
    $table_salle = $wpdb->prefix . 'RR_salle';
    $table_numerique = $wpdb->prefix . 'RR_numerique';
    $table_prestation = $wpdb->prefix . 'RR_prestation';
    $table_equipee = $wpdb->prefix . 'RR_equipee';

    $sql_client = "  CREATE TABLE $table_client(
        idClient  Int NOT NULL ,
        Date      Datetime ,
        nom       Varchar (50),
        prenom    Varchar (50),
        email     Varchar (255),
        telephone Varchar (255),
        PRIMARY KEY (idClient )
) $charset_collate;";

    $sql_mobilier = "CREATE TABLE $table_mobilier (
        idEquipement     Int NOT NULL ,
        nomEquipement    Varchar (50),
        caracteristiques Varchar (100),
        PRIMARY KEY (idEquipement )
    ) $charset_collate;";
 
    $sql_reservation = "CREATE TABLE $table_reservation (
         idReservation      Int Auto_increment NOT NULL ,
        dateReservation    Date,
        prix               Int ,
        nbHeures           Int ,
        dateFinReservation Date ,
        idSalle            Int NOT NULL ,
        idClient           Int NOT NULL ,
        idPrestation       Int NOT NULL ,
        PRIMARY KEY (idReservation )
    ) $charset_collate;";

    $sql_salle = "CREATE TABLE $table_salle (
    currency_code varchar(3) NOT NULL,
    currency_symbol varchar(6) NOT NULL,
    email varchar(255) NOT NULL,
    message text NOT NULL,
    payment varchar(20) NOT NULL,
    id int(11) NOT NULL AUTO_INCREMENT,
    UNIQUE KEY id (id)
    ) $charset_collate;";

    $sql_numerique = "CREATE TABLE $table_numerique (
    id int(11) NOT NULL AUTO_INCREMENT,
    datetime datetime NOT NULL,
    name varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    phone varchar(255) NOT NULL,
    prix int(12) NOT NULL,
    booking_ref varchar(12) NOT NULL,
    year int(4) NOT NULL,
    month int(2) NOT NULL,
    pending int(1) NOT NULL,
    UNIQUE KEY id (id)
    ) $charset_collate;";
 
    $sql_prestation = "CREATE TABLE $table_prestation (
    room_id int(4) NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    prix decimal(10,2) NOT NULL,
    salle int(2) NOT NULL,
    type varchar(20) NOT NULL,
    bathroom varchar(20) NOT NULL,
    display int(1) NOT NULL,
    gender int(1) NOT NULL,
    UNIQUE KEY id (room_id)
    ) $charset_collate;";

    $sql_equipee = "CREATE TABLE $table_equipee (
    currency_code varchar(3) NOT NULL,
    currency_symbol varchar(6) NOT NULL,
    email varchar(255) NOT NULL,
    message text NOT NULL,
    payment varchar(20) NOT NULL,
    id int(11) NOT NULL AUTO_INCREMENT,
    UNIQUE KEY id (id)
    ) $charset_collate;";


    require_once( ABSPATH . 'wp-admin/includes/upgrade.php' );
    dbDelta( $sql_client ); 
    dbDelta( $sql_mobilier ); 
    dbDelta( $sql_reservation); 
    dbDelta( $sql_salle ); 
    dbDelta( $sql_numerique ); 
    dbDelta( $sql_prestation); 
    dbDelta( $sql_equipee ); 

} 