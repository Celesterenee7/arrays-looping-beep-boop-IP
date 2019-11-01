// Business logic goes here:

var ones = ["1", "11", "14", "15", "16", "17", "18", "19"];
var twos = ["2", "12", "20", "21", "22", "24", "25", "26", "27", "28", "29"]

var beepBoop = function (number) {
    for (var number = 1; number <= 30; number++) {
        var result = "";
        if ((number === 1) || (number === 11) || (number === 12)) {
            result = "Beep";
        }
        if (number === 2) {
            result = "Boop";
        }
        if (number === 3) {
            result = "I'm sorry, Dave. I'm afraid I can't do that."
        }
        console.log(result || number);
    }
}



// Front end logic goes here:

$(document).ready(function () {
    $("form#beep-boop").submit(function (event) {
        event.preventDefault();
        var number = parseInt($("input#number").val());
        var result = beepBoop(number);
        $("#result").text(result);



        $("#final-result").empty().append(result);
        $("#result").show();
    });
});