document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("dark-mode-toggle");
    const body = document.body;
    const logo = document.getElementById("logo");

    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
        logo.src = "../assets/images/logo-dark.jpg";
        toggleButton.textContent = "☀️ Light Mode";
    }

    toggleButton.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
        const isDark = body.classList.contains("dark-mode");
        localStorage.setItem("theme", isDark ? "dark" : "light");
        logo.src = isDark ? "../assets/images/logo-dark.jpg" : "../assets/images/logo-light.jpg";
        toggleButton.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
    });
});

function handleSubmit(event) {
    event.preventDefault(); // Prevents the form from submitting

    // Get the values entered in the form fields
    var name = document.getElementById('name').value;
    var title = document.getElementById('title').value;
    var description = document.getElementById('description').value;
    var email = document.getElementById('email').value;

    // Log to the console
    console.log("Here is the information you entered:");
    console.log("Name: " + name);
    console.log("Title: " + title);
    console.log("Description: " + description);
    console.log("Email: " + email);

    // Create a styled SweetAlert message
    Swal.fire({
        title: 'Information Submitted',
        html: `
            <strong>Name:</strong> ${name}<br>
            <strong>Title:</strong> ${title}<br>
            <strong>Description:</strong> ${description}
        `,
        icon: 'success',
        confirmButtonText: 'Close'
    });

    // Clear form fields
    document.getElementById('name').value = '';
    document.getElementById('title').value = '';
    document.getElementById('description').value = '';
    document.getElementById('email').value = '';
}
