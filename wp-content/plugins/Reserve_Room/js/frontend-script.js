//window.onload = function() {
//	RR_createDaysArray();
//	RR_createDatesRow();
//	RR_createRooms();
//	RR_addreservation();
//
//	RR_grabCont();
//
//	RR_formValidation();
//
//}; /* end of window.onload */
//
//
//RRGlobals.todayNow = new Date();
//RRGlobals.today = new Date();
//
//function RR_daysInMonth(month,year) {
//	return new Date(year, month+1, 0).getDate();
//}
//
//function RR_defineDatesVars() {
//
//RRGlobals.yearNow = RRGlobals.today.getFullYear(); RRGlobals.monthNow = RRGlobals.today.getMonth();
//
//RRGlobals.firstDay = new Date(RRGlobals.yearNow, RRGlobals.monthNow, 1);
//RRGlobals.firstDayValue = RRGlobals.firstDay.getDay();
//
//
//RRGlobals.daysThisMonth = RR_daysInMonth(RRGlobals.monthNow, RRGlobals.yearNow);
//
//// daysNextMonth monthNext
//	if (RRGlobals.monthNow == 11) {
//		RRGlobals.daysNextMonth = RR_daysInMonth(0, RRGlobals.yearNow + 1);
//		RRGlobals.secondMonth = 0;
//		RRGlobals.secondYear = RRGlobals.yearNow + 1;
//	} else {
//		RRGlobals.daysNextMonth = RR_daysInMonth(RRGlobals.monthNow + 1, RRGlobals.yearNow);
//		RRGlobals.secondMonth = RRGlobals.monthNow + 1;
//		RRGlobals.secondYear = RRGlobals.yearNow;
//	};
//
//	RRGlobals.RRReservation = {};
//	RRGlobals.RRReservation[RRGlobals.monthNow] = {};
//	RRGlobals.RRReservation[RRGlobals.secondMonth] = {};
//
//
//RRGlobals.nameOfDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//RRGlobals.monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//
//
//RRGlobals.todayName = (RRGlobals.nameOfDays[RRGlobals.today.getDay()]);
//
//}
//
//RR_defineDatesVars();
//
//function RR_createDaysArray() {
//	RRGlobals.daysArray = [];
//	var first = RRGlobals.firstDayValue;
//	for (var i = 1; i <= RRGlobals.daysThisMonth; i++) {
//		RRGlobals.daysArray.push([i, first]);
//		first += 1;
//		if (first == 7) first = 0;
//	};
//	for (var i = 1; i <= RRGlobals.daysNextMonth + RRGlobals.daysNextMonth; i++) {
//		RRGlobals.daysArray.push([i, first]);
//		first += 1;
//		if (first == 7) first = 0;
//	};
//};
//
//function RR_createDaysArray_PREVIOUS() {
//	RRGlobals.daysArray = [];
//	var first = RRGlobals.firstDayValue;
//	for (var i = 1; i <= RRGlobals.daysThisMonth; i++) {
//		RRGlobals.daysArray.push([i, first]);
//		first += 1;
//		if (first == 7) first = 0;
//	};
//	
//};
//
//
//function RR_createDatesRow() {
//
//	var widthOfTableCells = 26;
//
//	var theWidth = (RRGlobals.daysThisMonth * widthOfTableCells);
//	jQuery("#nav-cont").css({ width : theWidth + "px" });
//
//	var tableContWidth = ((RRGlobals.daysThisMonth * widthOfTableCells) + 50);
//	jQuery("#calendar-table-cont").css({ width : tableContWidth + "px" });
//
//
//	var secondMonthWidth = (RRGlobals.daysNextMonth * widthOfTableCells);
//	var monthTitleWidth = tableContWidth + secondMonthWidth;
//
//
//	var displayPrevYear = document.getElementById("prev-year");
//	displayPrevYear.innerHTML = RRGlobals.today.getFullYear()-1;
//
//	var displayNextYear = document.getElementById("next-year");
//	displayNextYear.innerHTML = RRGlobals.today.getFullYear()+1;
//
//	jQuery("#month-title-cont").css({ width : monthTitleWidth  + "px" });
//
//	var firstMonthTitle = document.getElementById("first-month-title");
//	jQuery(firstMonthTitle).css({ width : theWidth  + "px"});
//	firstMonthTitle.innerHTML = "<span class='month-span'>" + RRGlobals.monthNames[RRGlobals.today.getMonth()] + "</span>";	
//
//	var secondMonthTitle = document.getElementById("second-month-title");
//	jQuery(secondMonthTitle).css({ width : secondMonthWidth  + "px" });
//	secondMonthTitle.innerHTML = "<span class='month-span'>" + RRGlobals.monthNames[RRGlobals.today.getMonth()+1] + "</span>";
//
////	var dateRow = document.getElementById("dates-row");
//
//	var d = 1;
//
//	for (var b = 0; b < (RRGlobals.daysThisMonth + RRGlobals.daysNextMonth); b++) {
//
//		var dateId = (RRGlobals.monthNow + "-" + RRGlobals.yearNow + "-" + b);
//		
//		var dateCell = dateRow.insertCell();
//		dateCell.id = dateId; dateCell.className = 'date-cell ' + "dc" +b ;		
//		dateCell.innerHTML = RRGlobals.daysArray[b][0] + "<br /><span class='days'>" + RRGlobals.nameOfDays[(RRGlobals.daysArray[b][1])] + "</span>";
//
//		if(b == RRGlobals.daysThisMonth-1) dateCell.className = dateCell.className + " month-border";
//
//	};
//};
//
//
//function RR_createRooms() {
//
//	i = 0;
//	var calendarTable = document.getElementById("calendar-table");
//	
//
//	// Loop that creates a row and two cells for each room
//	for (room in RRGlobals.rooms) {
//		i++;
//		var tbody = document.createElement("tbody");
//		var mytable = calendarTable.appendChild(tbody);
//		mytable.id = "selectable-" + room; mytable.className = "ui-selectable";
//
//		var rowid = room;
//
//		var tr = mytable.insertRow();
//		tr.id = rowid; tr.className = 'row-cont';	
//		
//		var leftid = "bed-title-cell" + room;
//		var centerid = "room-name" + room;
//		
//		var td1 = tr.insertCell();
//		td1.id = centerid; td1.className = 'room-name-cell';
//
//		var td2 = tr.insertCell();
//		td2.id = leftid; td2.className = 'room-title-cell month-border'; td2.colSpan = RRGlobals.daysThisMonth;
//		td2.innerHTML = "<span class='room-name'>" + RRGlobals.rooms[room].name + "</span>";
//
//		var td3 = tr.insertCell();
//		td3.id = leftid +"-2"; td3.className = 'room-title-cell'; td3.colSpan = RRGlobals.daysNextMonth;
//		td3.innerHTML = "<span class='room-name'>" + RRGlobals.rooms[room].name + "</span>";
//
//		// Loop that creates the row id, creates row and cell for the title cell, populates cell with bed name + number
//		for (var j = 0; j < RRGlobals.rooms[room].salle; j++ ) {			
//			
//			var bedid = (rowid +  "-" + (j+1));
//			var bedrow = mytable.insertRow();
//			var bedTitle = bedrow.insertCell();
//			bedTitle.id = "bed-title-" + j; bedTitle.className = 'bed-title-cell  ui-state-default';
//			bedTitle.innerHTML = "<span class='bed-title'>" + "Bed " + (j+1) + "</span>";
//
//			
//			for (var b = 1; b <= RRGlobals.daysThisMonth; b++) {
//				var bedcellid = "n" + bedid + "-" + b;
//				
//				var bedcell = bedrow.insertCell();
//				bedcell.id = bedcellid; bedcell.axis = "firstMonth"; bedcell.className = "bed-cell ui-state-default ui-selectee firstMonth" ;
//				
//				if(b == RRGlobals.daysThisMonth) bedcell.className = bedcell.className + " month-border" ;
//
//			}
//
//			for (var b = 1; b <= RRGlobals.daysNextMonth; b++) {
//				var bedcellid = "s" + bedid + "-" + b;
//				
//				var bedcell = bedrow.insertCell();
//				bedcell.id = bedcellid; bedcell.className = "bed-cell ui-state-default ui-selectee RRGlobals.secondMonth" ; bedcell.axis = "RRGlobals.secondMonth";
//			}
//			
//		}		
//	}	
//};
//
//
//
//function RR_grabDates(name){
//
//
//			jQuery( "#selectable-" + name ).selectable({
//
//				stop: function() {  
//
//				RRGlobals.RRReservation[RRGlobals.monthNow][name] = [];
//				RRGlobals.RRReservation[RRGlobals.secondMonth][name] = [];				
//
//				jQuery( "td.ui-selected", this ).each(function() {
//					if(this.axis == "firstMonth") {
//					RRGlobals.RRReservation[RRGlobals.monthNow][name].push(this.id);
//					} else {
//						RRGlobals.RRReservation[RRGlobals.secondMonth][name].push(this.id);
//					} 
//				});
//				
//				RRGlobals.roomTotals[name] = (RRGlobals.RRReservation[RRGlobals.monthNow][name].length + RRGlobals.RRReservation[RRGlobals.secondMonth][name].length) * RRGlobals.rooms[name].prix;
//
//				RRGlobals.dates_array = [];
//				for(i = 0; i < RRGlobals.RRReservation[RRGlobals.monthNow][name].length; i++) {
//					var date = RRGlobals.RRReservation[RRGlobals.monthNow][name][i].substring(RRGlobals.RRReservation[RRGlobals.monthNow][name][i].lastIndexOf("-")+1); 
//					if (RRGlobals.dates_array.indexOf(date) < 0) RRGlobals.dates_array.push(date);
//				}
//
//				for(i = 0; i < RRGlobals.RRReservation[RRGlobals.secondMonth][name].length; i++) {
//					var date = RRGlobals.RRReservation[RRGlobals.secondMonth][name][i].substring(RRGlobals.RRReservation[RRGlobals.secondMonth][name][i].lastIndexOf("-")+1); 
//					if (RRGlobals.dates_array.indexOf(date) < 0) RRGlobals.dates_array.push(date);
//				}
//
//				if ( !(document.contains(document.getElementById("sumrow-" + name))) ) RR_summaryRow(name); 
//				if (RRGlobals.RRReservation[RRGlobals.monthNow][name].length > 0 || RRGlobals.RRReservation[RRGlobals.secondMonth][name].length > 0) {
//					RR_summaryCalc(name);
//					} else {
//						delete RRGlobals.RRReservation[RRGlobals.monthNow][name];
//						delete RRGlobals.RRReservation[RRGlobals.secondMonth][name];
//							if ( document.contains(document.getElementById("sumrow-" + name)) ) {
//								var table = document.getElementById("tbody-summary");
//								var row = document.getElementById("sumrow-" + name);
//								table.removeChild(row);
//								};	
//						}
//
//				if(RRGlobals.RRReservation[RRGlobals.monthNow][name] == undefined || RRGlobals.RRReservation[RRGlobals.monthNow][name].length < 1) delete RRGlobals.RRReservation[RRGlobals.monthNow][name];
//				if(RRGlobals.RRReservation[RRGlobals.secondMonth][name] == undefined || RRGlobals.RRReservation[RRGlobals.secondMonth][name].length < 1) delete RRGlobals.RRReservation[RRGlobals.secondMonth][name];
//				}
//
//
//			});
//
//		jQuery( "#selectable-" + name ).selectable({
//
//				filter: ".bed-cell",
//
//			});
//
//}
//
//function RR_addRoomTotals() {
//	RRGlobals.grandTotal = 0;
//	for (total in RRGlobals.roomTotals) {
//		RRGlobals.grandTotal += RRGlobals.roomTotals[total];
//	} 
//
//	jQuery( "#grandtotal" ).html(RRGlobals.grandTotal);
//
//};
//
//function RR_summaryCalc(name) {
//	document.getElementById("name-" + name).innerHTML = RRGlobals.rooms[name].name;
//	document.getElementById("salle-" + name).innerHTML = ( (RRGlobals.RRReservation[RRGlobals.monthNow][name].length + RRGlobals.RRReservation[RRGlobals.secondMonth][name].length) / RRGlobals.dates_array.length).toFixed(0);
//	document.getElementById("nights-" + name).innerHTML = RRGlobals.dates_array.length;
//	document.getElementById("prix-" + name).innerHTML = RRGlobals.roomTotals[name];
//}
//
//function RR_cancelSummary(btn) {
//
//	var name = btn.id;
//	delete RRGlobals.RRReservation[RRGlobals.monthNow][name];
//	delete RRGlobals.RRReservation[RRGlobals.secondMonth][name];
//
//	var row = btn.parentNode.parentNode;
//  	row.parentNode.removeChild(row);
//}
//
//
//RRGlobals.roomTotals = {};   
//
//function RR_sendBooking(frontBack) {
//	
//	var pending = 1;
//
//	RR_addRoomTotals();
//
//	var formData = {
//            'name'              : jQuery('input[name=name]').val(),
//            'email'             : jQuery('input[name=email]').val(),
//            'phone'    			: jQuery('input[name=phone]').val(),
//            'gender'    		: jQuery('select[name=gender]').val(),
//            'message'    		: jQuery('textarea[name=message]').val()
//        };
//
//
//	jQuery.ajax({
//	   url: pluginsURL + '/hostel-booking/lib/procedure_reservation.php',
//	   type: 'post',
//	   data: {"RRReservation" : JSON.stringify(RRGlobals.RRReservation), "currentYear" : RRGlobals.yearNow, "currentMonth" : RRGlobals.monthNow, "formData" : formData, "prix" : RRGlobals.grandTotal, "pending" : pending},
//	   success: function(data) {
//	   }
//	});
//
//	alert("Your booking was successful!");
//	document.getElementById("RR_calendrier-booking-form").reset();
//	location.reload(); 
//	window.scrollTo(0,0);
//
//}
//
//
//function RR_summaryRow(name) {
//
//	var tr = document.getElementById("tbody-summary").insertRow();
//	tr.className = 'row-summary'; tr.id = 'sumrow-' + name;
//
//
//	var td1 = tr.insertCell();
//	td1.className = 'cell-summary cell-room';
//	td1.innerHTML = "<span class='cell-data' id='name-" + name + "'></span>";
//
//	var td2 = tr.insertCell();
//	td2.className = 'cell-summary';
//	td2.innerHTML = "<span class='cell-data' id='salle-" + name + "'></span>";
//
//	var td3 = tr.insertCell();
//	td3.className = 'cell-summary';
//	td3.innerHTML = "<span class='cell-data' id='nights-" + name + "'></span>";
//
//	var td4 = tr.insertCell();
//	td4.className = 'cell-summary';
//	td4.innerHTML = "<span class='cell-data' id='prix-" + name + "'></span>";
//
//	var td5 = tr.insertCell();
//	td5.className = 'cell-summary';
//	td5.innerHTML = "<input type='button' class='btn-delete' value='X' onclick='RR_cancelSummary(this)' id='" + name + "' />";
//}
//
//
//function RR_addreservation() {
//
//	var bedCount = {};
//	var bedCount2 = {};
//	var backEnd = document.getElementById("pending_orders");
//
//
//	for (var i = 0; i < RRGlobals.reservations.length; i++) {
//		var currentRoom = RRGlobals.reservations[i].room;
//
//
//		if(bedCount[currentRoom] == null) bedCount[currentRoom] = [];
//		if(bedCount2[currentRoom] == null) bedCount2[currentRoom] = [];
//
//		for (var d = 0; d < RRGlobals.reservations[i].dates.length; d++ ) {
//
//			var currentPair = RRGlobals.reservations[i].dates[d];
//			var currentDate = currentPair.substring(0, currentPair.indexOf(":") );
//
//			var currentsalle = parseInt(currentPair.substring(currentPair.indexOf(":") + 1)); 																											
//
//			if(bedCount[currentRoom][currentDate] == null) bedCount[currentRoom][currentDate] = 0; 
//			if(bedCount2[currentRoom][currentDate] == null) bedCount2[currentRoom][currentDate] = 0; 
//
//
//				for (var b = 1; b <= currentsalle; b++) {
//
//					if(RRGlobals.reservations[i].month == RRGlobals.monthNow) {
//						var currentId = "n" + currentRoom + "-" + (bedCount[currentRoom][currentDate] + b) + "-" + currentDate;
//					} else {
//						var currentId = "s" + currentRoom + "-" + (bedCount2[currentRoom][currentDate] + b) + "-" + currentDate;
//					}
//
//						
//					var currentThang = document.getElementById(currentId);
//					
//						if(currentThang) {
//							currentThang.setAttribute("onclick", "RR_occupied();");
//
//								if(RRGlobals.reservations[i].pending == 1 && backEnd) {
//									currentThang.className = "pending";
//									} else {
//									currentThang.className = "disabled";
//								} 
//
//								if(backEnd) {
//
//									var cellTitle = "";
//
//									cellTitle +=	"Name: " + RRGlobals.reservations[i].order.name + "  -  " +
//													"Email: " + RRGlobals.reservations[i].order.email + "  -  " +
//													"Phone: " + RRGlobals.reservations[i].order.phone + "  -  " +
//													"Booking Ref: " + RRGlobals.reservations[i].order.booking_ref + " ";
//
//
//									currentThang.setAttribute("alt",cellTitle);
//									
//								}
//						}
//
//				} 
//				if(RRGlobals.reservations[i].month == RRGlobals.monthNow) {
//					bedCount[currentRoom][currentDate] += currentsalle;
//				} else {
//					bedCount2[currentRoom][currentDate] += currentsalle;
//				}
//		}
//	}
//
//};
//
//function RR_formValidation() {
//
//var firstValid;
//
//jQuery("#email").on("change", function(){
//    var emailReg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
//	var valid = emailReg.test(this.value);
//
//    
//    if(!valid){
//        alert("Invalid Email!");
//        firstValid = false;
//        jQuery(this).css({
//                        "border": "1px solid red",
//                        "background": "#FFCECE"
//                    });
//    } else {
//    				firstValid = true;
//                    jQuery(this).css({
//                        "border": "",
//                        "background": ""
//                    });
//                }
//});
//
//
//  jQuery('#btn-send-booking').click(function (e) {
//  		var isValid = 0;
//            jQuery('#name, #phone, #email').each(function () {
//                if (jQuery.trim(jQuery(this).val()) == '') {
//                    isValid += 0;
//                    jQuery(this).css({
//                        "border": "1px solid red",
//                        "background": "#FFCECE"
//                    });
//                }
//                else {
//                    jQuery(this).css({
//                        "border": "",
//                        "background": ""
//                    });
//                    isValid += 1;
//                }
//            });
//        
//        if(isValid < 3) alert("Must fill fields: Name - Phone - Email");
//        if ( (Object.keys(RRGlobals.RRReservation[RRGlobals.monthNow]).length == 0) && (Object.keys(RRGlobals.RRReservation[RRGlobals.secondMonth]).length == 0) )  alert("You haven't selected any salle!");
//        if ( (Object.keys(RRGlobals.RRReservation[RRGlobals.monthNow]).length > 0) || (Object.keys(RRGlobals.RRReservation[RRGlobals.secondMonth]).length > 0) )  var bookingExists = true;
//        if (isValid == 3 && firstValid == true && bookingExists == true) RR_sendBooking("back");
//  });
//
//
//};
//
//
//function RR_confirmBooking(e, action) {
//
//	if(action == "remove") {
//	var goAhead = 0;
//	if (confirm('Are you sure you want to delete this order?')) goAhead = 1;
//	}
//
//	if (goAhead == 0) return;
//
//	var cells = e.parentNode.parentNode.getElementsByTagName("td");
//	var ref = cells[4].innerHTML;
//
//	
//	jQuery.ajax({
//
//	   url: pluginsURL + '/hostel-booking/lib/confirmation_reservation.php',
//	   type: 'post',
//	   data: {"booking_ref" : ref, "action" : action},
//	   success: function(data) {
//	        // Do something with data that came back. 
//	        alert(data);	        
//	   }
//	});
//
//	var row = e.parentNode.parentNode;
//  	row.parentNode.removeChild(row);
//
//};
//
//function RR_occupied() {
//	alert("This bed is occupied");
//};