var createSum = document.getElementById("somma-button");

var resultSum = document.getElementById("price")

var resultSumInt = 0;

createSum.addEventListener("click", function() {
    var checkNum = document.getElementsByClassName("check-ingredients");
    for (var i = 0; i < checkNum.length; i++) {
        if (checkNum[i].checked) {
            resultSumInt += parseInt(checkNum[i].value);
        }
    }
    resultSum.innerHTML = resultSumInt + "€";
})