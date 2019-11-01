// Business logic goes here:

var pingPong = function (number) {
    for (var number = 1; number <= 30; number++) {
        var result = "";
        if (number % 3 === 0) {
            result = "Ping";
        }
        if (number % 5 === 0) {
            result += "Pong";
        }
        console.log(result || number);
    }
}

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