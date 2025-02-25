document.getElementById('login-btn').addEventListener('click', function () {
    const inputField = document.getElementById("pinInput").value.trim();

    if (inputField !== "") {
        // Redirect to another file (change 'nextpage.html' to your actual file)
        window.location.href = "main.html";
    } else {
        alert("Please fill in the input field before proceeding.");
    }
});
 