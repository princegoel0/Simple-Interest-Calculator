function slidervalue() {
    var rate = document.getElementById("rate");
    var rangeValue = document.getElementById("rangeValue");
    rangeValue.innerText = rate.value + " %";
}

function compute()
{
    principal = document.getElementById("principal");
    rate = document.getElementById("rate").value;
    years = document.getElementById("years").value;
    
    if (principal.value > 0) {
        result = document.getElementById("result");
        rAmount = document.getElementById("rAmount");
        rRate = document.getElementById("rRate");
        rResult = document.getElementById("rResult");
        rYear = document.getElementById("rYear");
        var today = new Date();
        var year = today.getFullYear();

        rAmount.innerText = principal.value;
        rRate.innerText = rate + ' %';
        rResult.innerText = (principal.value * rate * years) /100;
        rYear.innerText = parseInt(year) + parseInt(years);
        
        result.style.display = 'block';
    } else {
        alert("Enter Positive Amount");
        principal.focus();
    }
    
}
        