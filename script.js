document.addEventListener("input", function(event) {
    let fTemp = document.querySelector("#farenheit");
    let cTemp = document.querySelector("#celcius");
    
    if(event.target.value.length < 1) return;
    
    if(event.target.id === "farenheit") {
        cTemp.value = convertF(event.target.value);
    } else {
        fTemp.value = convertC(event.target.value);
    }

    function convertF(temp) {
        return Math.round((temp - 32) * 5/9);
    }

    function convertC(temp) {
        return Math.round((temp * 9/5) + 32);
    }
    
}, false)