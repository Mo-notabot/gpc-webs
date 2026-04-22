const toggle = document.getElementById("menuToggle");
const nav = document.getElementById("navLinks");

toggle.addEventListener("click", () => {
    nav.classList.toggle("active");

    // change icon ☰ ↔ ✖
    if (nav.classList.contains("active")) {
        toggle.textContent = "✖";
    } else {
        toggle.textContent = "☰";
    }
});



const form = document.getElementById("applyForm");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    try {
        const response = await fetch(form.action, {
            method: form.method,
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            alert("Thank you! Your application has been submitted.");
            modal.style.display = "none";
            form.reset();
        } else {
            alert("Oops! Something went wrong.");
        }
    } catch (err) {
        
    }
});






