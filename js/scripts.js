// Business logic goes here:

var ones = ["1", "10", "11", "14", "15", "16", "17", "18", "19"];
var twos = ["2", "12", "20", "21", "22", "24", "25", "26", "27", "28", "29"];
var threes = ["3", "13", "23"]
var everythingElse = ["4", "5", "6", "7", "8", "9"]


var beepBoop = function (number) {
    for (var number = 1; number <= 30; number++) {
        var result = "";
        if ((number === 1) || (number === ones)); {
            result = "Beep";
            console.log(result || number);
        }
        if ((number === 2) || (number === twos)); {
            result = "Boop";
            console.log(result || number);
        }
        if ((number === 3) || (number === threes)); {
            result = "I'm sorry, Dave. I'm afraid I can't do that.";
            console.log(result || number);
        }
        if (number === everythingElse); {
            result = everythingElse;
            console.log(everythingElse);
        }

    }
}


// Front end logic goes here:

$(document).ready(function () {
    $("form#beep-boop").submit(function (event) {
        event.preventDefault();
        var number = parseInt($("input#number").val());
        var result = beepBoop(number);
        $("#result").text(result);

        if ((number === 1) || (number === ones)) {
            result = ("Beep");
        } else if ((number === 2) || (number === twos)) {
            result = ("Boop");
        } else if ((number === 3) || (number === threes)) {
            result = ("I'm sorry, Dave. I'm afraid I can't do that.");
        }


        $("#final-result").empty().append(result);
        $("#result").show();

    });
});