$(document).ready(function(){
  $("#搜索").on("keyup", function() {
    var 关键词 = $(this).val().toLowerCase();
    $("li").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(关键词) > -1)
    });
  });
});