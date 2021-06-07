var createSum = document.getElementById("somma-button");

var resultSum = document.getElementById("price")



createSum.addEventListener("click", function() {
    var resultSumInt = 0;
    var checkNum = document.getElementsByClassName("check-ingredients");
    var checkDiscount = document.getElementById("discount");
    for (var i = 0; i < checkNum.length; i++) {
        if (checkNum[i].checked) {
            resultSumInt += parseInt(checkNum[i].value);
        }
    }
    if (checkDiscount.value === "McBoolean") {
        var sconto = resultSumInt * 20 / 100;
    }
    resultSum.innerHTML = resultSumInt - sconto + "€";

})