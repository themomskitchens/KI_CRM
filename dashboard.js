// ===========================
// KAVISH CRM DASHBOARD
// dashboard.js
// ===========================

document.addEventListener("DOMContentLoaded",function(){

console.log("Dashboard Loaded Successfully");

// Dashboard Stats (Dummy)

const stats={

visits:0,
companies:0,
followup:0,
hotleads:0

};

console.log(stats);

// Quick Buttons

document.getElementById("newSurveyBtn").onclick=function(){

window.location.href="survey.html";

}

document.getElementById("companiesBtn").onclick=function(){

alert("Companies Module Coming Soon");

}

document.getElementById("assetsBtn").onclick=function(){

alert("Assets Module Coming Soon");

}

document.getElementById("workspaceBtn").onclick=function(){

alert("Google Workspace Module");

}

document.getElementById("reportsBtn").onclick=function(){

window.location.href="reports.html";

}

document.getElementById("followupBtn").onclick=function(){

alert("Follow Up Module");

}

document.getElementById("documentsBtn").onclick=function(){

alert("Documents Module");

}

document.getElementById("settingsBtn").onclick=function(){

alert("Settings");

}

// Bottom Navigation

document.getElementById("homeBtn").onclick=function(){

window.location.href="dashboard.html";

}

document.getElementById("surveyBtn").onclick=function(){

window.location.href="survey.html";

}

document.getElementById("reportBtn").onclick=function(){

window.location.href="reports.html";

}

document.getElementById("profileBtn").onclick=function(){

window.location.href="profile.html";

}

// Welcome Popup

setTimeout(function(){

console.log("Welcome to Kavish Informatics CRM");

},1000);

});
