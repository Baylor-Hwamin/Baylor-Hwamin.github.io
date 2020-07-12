// ========== [ TAB Management ] ==========

$(document).ready(function() {
  $("#dialer").show();
  $("#contact_list").hide();
  $("#add_contact").hide();
});

$("#btn_dialer").click(function() {
  $("#dialer").show();
  $("#contact_list").hide();
  $("#add_contact").hide();
});

$("#btn_ct_list").click(function() {
  $("#dialer").hide();
  $("#contact_list").show();
  $("#add_contact").hide();
});

$("#btn_add_ct").click(function() {
  $("#dialer").hide();
  $("#contact_list").hide();
  $("#add_contact").show();
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

function clearDial() { document.getElementById("form_input_dial").reset(); }
function appendDial(e) {
  var dial = document.getElementById("input_dial")
  var cur_input = ""
  if (dial !== null) {
    cur_input = dial.value
  }
  dial.value = cur_input + e
}

// ========== [ ADD CONTACT ] ==========

$("#btn_add_contact_clear").click(function() { clearAddContact(); });
$("#btn_add_contact_confirm").click(function() { clearAddContact(); });

function clearAddContact() {
  document.getElementById("form_add_contact_name").reset();
  document.getElementById("form_add_contact_phone_num").reset();
  document.getElementById("form_add_contact_email").reset();
}
