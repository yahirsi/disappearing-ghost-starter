$(".hide-button").click(function() {
  $(".ghost-image").hide();
});
$(".show-button").click(function() {
  $(".ghost-image").show();
});

$(".update-img-button").click(function() {
  $(".ghost-image").css("transform", "rotate(90deg)");
});
$(".message-button").click(function() {
  let Bill = $(".input").val();
  $(".message").append(Bill+"<br>");
});
$(".name-button").click(function() {
   let Bill = $(".input").val();
  $(".h1").text("Hi I'm "+Bill);
});