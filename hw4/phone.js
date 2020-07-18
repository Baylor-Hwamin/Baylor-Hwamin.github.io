// ========== [ TAB Management ] ==========

var MAX_IDX = 3;
var current_tab_idx = 0;
var tabs = [ "#dialer", "#contact_list", "#add_contact", "#tab_gesture" ]

$(document).ready(function() { moveTab(current_tab_idx) });
$("#btn_dialer").click(function() { moveTab(0) });
$("#btn_ct_list").click(function() { moveTab(1) });
$("#btn_add_ct").click(function() { moveTab(2) });
$("#btn_gesture").click(function() { moveTab(3) });

function hideAllTabs() {
  for (tab of tabs) {
    $(tab).hide();
  }
}

function moveTab(tab_idx) {
  hideAllTabs();
  current_tab_idx = tab_idx;
  $(tabs[current_tab_idx]).show();
}

function moveTabRight() {
  if (current_tab_idx < MAX_IDX) {
    moveTab(++current_tab_idx);
  }
}

function moveTabLeft() {
  if (current_tab_idx > 0) {
    moveTab(--current_tab_idx)
  }
}

// ========== [ BOTTOM SWIPE BAR ] ==========

var sb_downX = 0;

$("#bottom_gesture").mousedown(function(event) { sb_downX = event.pageX; });

$("#bottom_gesture").mouseup(function(event) {
  if (event.pageX - sb_downX > 0) {
    moveTabRight()
  } else {
    moveTabLeft()
  }
});

// ========== [ KEYBOARD ] ==========

$(document).keydown(function(e) {
  if (e.which == 37) {
    moveTabLeft()
  } else if (e.which == 39) {
    moveTabRight()
  }
});

// ========== [ DIAL ] ==========

$("#btn_dial_clear").click(function() { clearDial(); });
$("#btn_num_1").click(function() { appendDial('1'); });
$("#btn_num_2").click(function() { appendDial('2'); });
$("#btn_num_3").click(function() { appendDial('3'); });
$("#btn_num_4").click(function() { appendDial('4'); });
$("#btn_num_5").click(function() { appendDial('5'); });
$("#btn_num_6").click(function() { appendDial('6'); });
$("#btn_num_7").click(function() { appendDial('7'); });
$("#btn_num_8").click(function() { appendDial('8'); });
$("#btn_num_9").click(function() { appendDial('9'); });
$("#btn_num_0").click(function() { appendDial('0'); });
$("#btn_num_star").click(function() { appendDial('*'); });
$("#btn_num_pound").click(function() { appendDial('#'); });

function clearDial() { $("#input_dial").val(""); }
function appendDial(e) { $("#input_dial").val($("#input_dial").val() + e) }

// ========== [ ADD CONTACT ] ==========

$("#btn_add_contact_clear").click(function() { clearAddContact(); });
$("#btn_add_contact_confirm").click(function() { clearAddContact(); });

function clearAddContact() {
  $("#add_contact_name").val("");
  $("#add_contact_phone_num").val("");
  $("#add_contact_email").val("");
}

// ========== [ GESTURE ] ==========

$("#gesture_output").val("ready");
var downX = 0;
var downY = 0;

$("#gesture_area").mousedown(function(event) {
  downX = event.pageX;
  downY = event.pageY;
  $("#gesture_output").val("mouse down");
});

$("#gesture_area").mouseup(function(event) {
  diffX = event.pageX - downX;
  diffY = event.pageY - downY;

  if (diffX === 0 && diffY === 0) {
    $("#gesture_output").val("mouse up");
  } else if (Math.abs(diffX) < Math.abs(diffY)) {
    if (diffY > 0) {
      $("#gesture_output").val("swipe down");
    } else {
      $("#gesture_output").val("swipe up");
    }
  } else {
    if (diffX > 0) {
      $("#gesture_output").val("swipe right");
    } else {
      $("#gesture_output").val("swipe left");
    }
  }
});
