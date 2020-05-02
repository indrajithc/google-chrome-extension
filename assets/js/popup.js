$(function () {
  console.log("ready");

  $("#name").keyup(function () {
    $("#target").text("Hello " + $("#name").val());
  });
});
