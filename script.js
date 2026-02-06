const searchInput = document.getElementById("searchInput");
const leadCapture = document.getElementById("leadCapture");
const buyLeadForm = document.getElementById("buyLeadForm");
const quickBtn = document.getElementById("quickCaptureBtn");

let currentSearchText = "";

/* detect searches */
searchInput.addEventListener("input", () => {
    const text = searchInput.value.toLowerCase();
    currentSearchText = text;

    if(text.length > 6){
        leadCapture.style.display = "flex";
    }else{
        leadCapture.style.display = "none";
    }

    const keywords = ["buy","student","investment","flat","apartment"];

    if(keywords.some(k=>text.includes(k))){
        buyLeadForm.style.display="block";
    }else{
        buyLeadForm.style.display="none";
    }
});

/* save lead */
function saveLead(){
    const email = document.getElementById("email").value.trim();
    if(!email){
        alert("Enter email");
        return;
    }

    const lead={
        email,
        search:currentSearchText,
        date:new Date().toISOString()
    };

    console.log("Lead:",lead);
    alert("Listings will be sent to your email.");
}

/* quick capture */
quickBtn.addEventListener("click",()=>{
    const email=document.getElementById("quickEmail").value.trim();
    if(!email){
        alert("Enter email first");
        return;
    }
    alert("Listings unlocked!");
});
