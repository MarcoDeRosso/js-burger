var createSum = document.getElementById("somma-button");

var resultSum = document.getElementById("price")
var arreyDiscount = ["Mc5Boolean", "Bo0le4n", "M1c4D3"]


createSum.addEventListener("click", function() {
    var resultSumInt = 0;
    var checkNum = document.getElementsByClassName("check-ingredients");
    var checkDiscount = document.getElementById("discount");
    for (var i = 0; i < checkNum.length; i++) {
        if (checkNum[i].checked) {
            resultSumInt += parseInt(checkNum[i].value);
        }
    }
    var flag = false;
    for (var x = 0; x < arreyDiscount.length; x++) {
        if (checkDiscount.value === arreyDiscount[x]) {
            resultSumInt -= (resultSumInt * 0.2);
            flag = true;
        }
    }
    if (checkDiscount.value.length > 0 && flag === false) {
        alert("Codice sconto non valido")
    }
    resultSum.innerHTML = resultSumInt + "€";

})