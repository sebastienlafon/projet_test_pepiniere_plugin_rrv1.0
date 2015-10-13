<!--
<script type="text/javascript">
window.onload = function() {

jQuery("#email").on("change", function(){
    var emailReg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    var valid = emailReg.test(this.value);

    
    if(!valid){
        alert("Invalid Email!");
        firstValid = false;
        jQuery(this).css({
                        "border": "1px solid red",
                        "background": "#FFCECE"
                    });
    } else {
            firstValid = true;
                    jQuery(this).css({
                        "border": "",
                        "background": ""
                    });
                }
});

  jQuery('#btn-send').click(function (e) {
            var isValid = true;
            jQuery('#email').each(function () {
                if (jQuery.trim(jQuery(this).val()) == '') {
                    isValid = false;
                    jQuery(this).css({
                        "border": "1px solid red",
                        "background": "#FFCECE"
                    });
                }
                else {
                    jQuery(this).css({
                        "border": "",
                        "background": ""
                    });
                }
            });
            if (isValid == false || firstValid == false) e.preventDefault();

        });

}
</script>


<div id="interface-container">

<span id="shortcode-display">Paste this shortcode to display the calendar: <strong>[hostel-booking]</strong></span>

<h1>Settings</h1>

<h4 class="inline-header">Current Settings</h4>
<table id="current-settings">
<tr>
  <th>Currency Code</th><th>Currency Symbol</th><th>Message</th><th>E-Mail</th>
</tr>


//<?
//
//global $wpdb;
//
//$settings_sql = "SELECT * FROM " . $wpdb->prefix . "RR_settings";  
//$current_settings = $wpdb->get_results($settings_sql, ARRAY_A);
//
//foreach($current_settings as $row) {
//echo "<tr><td class='col1'> ". $row['currency_code'] .  "<td class='col2'>" . $row['currency_symbol'] . "</td><td class='col1'> ". $row['message'] . "</td><td class='col2'>" . $row['email'] . "</td>"; 
//}
//
//wp_enqueue_style( 'RR-settings-style' );
//
//?


</table>

<h4 class="inline-header">Change Settings</h4>

<form id="form" class="form" name="form" method="post" action="<?p echo plugins_url();  /hostel-booking/lib/procedure_parametres.php">
      
<table id="form-table" class="settings-page">
<tr>

    <td>
      
</tr>

<tr>

    <td>   
      <label for="message" class="label">Email Message:</label><br />
      <textarea name="message" id="message" cols="35" rows="5" class="message-area"></textarea>
    </td>

    <td>
      <label for="email" class="label">E-Mail</label><br />
      <input type="text" name="email" id="email" class="field" />
    </td> 
</tr>
    
<tr>
  <td>
    <input type="submit" name="send" class="btn" id="btn-send" value="Save" />
  </td>
</tr>
</table>

 </form>

</div> interface container -->