// ========== [ ALERT ] ==========

function triggerAlert() {
  document.getElementById("my_alert").setAttribute("role", "alert");
  $("#my_alert").show();
}

// ========== [ PAGE MGNT ] ==========

var MAX_PAGE_IDX = 2;
var current_page_idx = 0;
var pages = [ "#page_blog", "#page_dial", "#page_about" ];

$(document).ready(function() { showPage(current_page_idx) });

function hideAllPages() {
  for (page of pages) {
    $(page).hide();
  }
}

function showPage(idx) {
  hideAllPages();
  current_page_idx = idx;
  $(pages[idx]).show();
}

$("#menu_blog").click(function() { showPage(0) });
$("#menu_dial").click(function() { showPage(1) });
$("#menu_about").click(function() { showPage(2) });
