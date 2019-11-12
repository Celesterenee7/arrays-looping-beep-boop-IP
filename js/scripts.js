// Back-end logic goes here: 

function beepBoop(number) {
    var beepArray = [];

    for (var i = 0; i <= number; i++) {
        if (i.toString().includes(3)) {
            beepArray.push("I'm sorry, Dave. I'm afraid I can't do that...")
        } else if (i.toString().includes(2)) {
            beepArray.push("Boop!")
        } else if (i.toString().includes(1)) {
            beepArray.push("Beep!")
        } else {
            beepArray.push(i + " ");
        }
    }
    return beepArray.join(" . ");
}

// Front-end logic goes here: 

$(document).ready(function () {
    $("form#beep-boop").submit(function (event) {
        event.preventDefault();
        var number = parseInt($("input#number").val());
        var result = beepBoop(number);

        $("#result").append("<p class='result'>" + "  " + result + "</p>");
        $("#result").show(result);

    });
});