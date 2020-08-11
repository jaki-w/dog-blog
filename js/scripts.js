$(document).ready(function() {
  $("button#light").click(function() {
    $("body").removeClass();
    $("body").addClass("light-background");
  });
  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });
  $("button#original").click(function() {
    $("body").removeClass();
    $("body").addClass("original-background");
  });
});