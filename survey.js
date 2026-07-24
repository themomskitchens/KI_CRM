// ===============================
// KAVISH INFORMATICS CRM
// survey.js (V1 Demo)
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    // Today's Date Auto Fill
    const dateInput = document.querySelector('input[type="date"]');

    if (dateInput) {
        const today = new Date().toISOString().split("T")[0];
        dateInput.value = today;
    }

    // Submit Button
    const submitBtn = document.getElementById("submitSurvey");

    submitBtn.addEventListener("click", saveSurvey);

});

function saveSurvey() {

    const survey = {

        surveyId: "KI-" + Date.now(),

        company: document.querySelectorAll("input")[0].value,

        industry: document.querySelectorAll("input")[1].value,

        website: document.querySelectorAll("input")[2].value,

        address: document.querySelectorAll("input")[3].value,

        employees: document.querySelectorAll("input")[4].value,

        itHead: document.querySelectorAll("input")[5].value,

        hr: document.querySelectorAll("input")[6].value,

        admin: document.querySelectorAll("input")[7].value,

        mobile: document.querySelectorAll("input")[8].value,

        email: document.querySelectorAll("input")[9].value,

        leadStatus: document.querySelector("select:last-of-type").value,

        meetingDate: document.querySelector('input[type="date"]').value,

        notes: document.querySelector("textarea").value

    };

    // Validation

    if (survey.company === "") {

        alert("Please enter Company Name");

        return;

    }

    // Get Existing Data

    let surveys = JSON.parse(localStorage.getItem("surveys")) || [];

    surveys.push(survey);

    localStorage.setItem("surveys", JSON.stringify(surveys));

    alert("✅ Survey Saved Successfully!\nSurvey ID : " + survey.surveyId);

    console.log(survey);

    // Clear Form

    const company = document.getElementById("companyName").value;
const industry = document.getElementById("industry").value;
const website = document.getElementById("website").value;
const officeAddress = document.getElementById("officeAddress").value;
const employees = document.getElementById("employees").value;
const itHead = document.getElementById("itHead").value;
const hrName = document.getElementById("hrName").value;
const adminName = document.getElementById("adminName").value;
const mobile = document.getElementById("mobile").value;
const email = document.getElementById("email").value;
const notes = document.getElementById("notes").value;

    document.querySelector("textarea").value = "";

      }
