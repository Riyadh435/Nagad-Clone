
document.getElementById('numberInput').addEventListener('input', function () {
    if (this.value.length > 0) {
        this.classList.add('font-bold');
        this.classList.add('text-black');
        document.getElementById('labelOfinput').classList.remove("hidden");
        
    } else {
        this.classList.remove('font-bold');
        document.getElementById('labelOfinput').classList.add("hidden");
    }
});



// click login button
document.getElementById('btn-next').addEventListener('click', function () {
    const inputField = document.getElementById("numberInput").value.trim();

    if (inputField !== "") {
        // Redirect to another file (change 'nextpage.html' to your actual file)
        window.location.href = "login1.html";
    } else {
        alert("Please fill in the input field before proceeding.");
    }
});


// Check pin and go to main page
