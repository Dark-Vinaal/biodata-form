// 🌟 Highlight Active Inputs
const inputs = document.querySelectorAll("input, textarea, select");
inputs.forEach((input) => {
    input.addEventListener("focus", () => input.classList.add("active"));
    input.addEventListener("blur", () => input.classList.remove("active"));
});

// ✅ Form Submit Confirmation
document.querySelector(".biodata-form").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("✅ Your Bio Data has been submitted successfully!");
});

// 🔁 Reset Shake Animation
document.querySelector(".secondary").addEventListener("click", () => {
    const form = document.querySelector(".biodata-form");
    form.style.animation = "shake 0.3s";
    setTimeout(() => (form.style.animation = ""), 300);
});

// Successfully Sent Message
document.querySelector(".biodata-form").addEventListener("submit", (e) => {
    alert("📨 Redirecting to your mail app...\nPlease confirm and send your message.");
});
