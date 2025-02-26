document.getElementById("main-balance").addEventListener("click", function() {
    const mba = document.getElementById("main-balance-amount").innerText;
    if(mba=="Tap for balance"){
        document.getElementById("main-balance-amount").innerText = "1050.51 Tk.";
    }else{
        document.getElementById("main-balance-amount").innerText = "Tap for balance";
    }
} );