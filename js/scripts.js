// Business logic goes here:

// Front end logic goes here:

$(document).ready(function () {
    $("form#ping-pong").submit(function (event) {
        event.preventDefault();
        var number = parseInt($("input#number").val());
        var result = pingPong(number);
        $("#result").text(result);


        $("#final-result").empty().append(result);
        $("#result").show();
    });
});