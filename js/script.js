var createSum = document.getElementById("somma-button");

var resultSum = document.getElementById("price")

var discount = 20 / 100;

createSum.addEventListener("click", function() {
    var resultSumInt = 0;
    var checkNum = document.getElementsByClassName("check-ingredients");
    var checkDiscount = document.getElementsByClassName("discount-code")[0];
    for (var i = 0; i < checkNum.length; i++) {
        if (checkNum[i].checked) {
            resultSumInt += parseInt(checkNum[i].value);
        } else if ((checkNum[i].checked) && (checkDiscount[i] === "McBoolean")) {
            resultSumInt += parseInt(checkNum[i].value) - (parseInt(checkNum[i].value) * discount);
        }
    }
    resultSum.innerHTML = resultSumInt + "€";
})