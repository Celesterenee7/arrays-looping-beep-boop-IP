// Business logic goes here:

var beepBoop = function (number) {
    for (var number = 1; number <= 30; number++) {
        var result = "";
        if (number % 3 === 0) {
            result = "Beep";
        }
        if (number % 5 === 0) {
            result += "Boop";
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

        for (var number = 1; number <= 30; number++, result = "") {
            if (!(number % 3)) result += "Beep";
            if (!(number % 5)) result += "Boop";
            console.log(result || number);
        }


        $("#final-result").empty().append(result);
        $("#result").show();
    });
});