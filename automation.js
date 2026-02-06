const searchInput = document.getElementById("searchInput");
const buyLeadForm = document.getElementById("buyLeadForm");

let currentSearchText = "";

searchInput.addEventListener("input", () => {
    const text = searchInput.value.toLowerCase();
    currentSearchText = text;

    // Keywords to trigger lead form
    const keywords = ["buy", "student", "investment", "apartment", "flat"];
    const showForm = keywords.some(k => text.includes(k));

    buyLeadForm.style.display = showForm ? "block" : "none";
});

function saveLead() {
    const email = document.getElementById("email").value.trim();
    if(!email){
        alert("Please enter your email");
        return;
    }

    const lead = {
        email,
        search: currentSearchText,
        date: new Date().toISOString()
    };

    console.log("Lead captured:", lead);
    alert("Listings will be sent to your email.");
}
