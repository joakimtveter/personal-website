// THEME SWITCHER
const html = document.querySelector("html")
const nightMode = document.querySelector("#night")
const autoMode = document.querySelector("#auto")
const lightMode = document.querySelector("#light")

// Check local storage for previous setting 
document.addEventListener("DOMContentLoaded", () => {
  let theme = localStorage.getItem('theme');
  if (theme == "dark-mode"){
    nightMode.checked = true;
  }
  if (theme == "light-mode"){
    lightMode.checked = true;
  }
} )


nightMode.addEventListener("click", () => { 
    html.classList.remove("light-mode", "auto-mode")
    html.classList.add("dark-mode")
    localStorage.setItem('theme', 'dark-mode');
})
autoMode.addEventListener("click", () => { 
    html.classList.remove("light-mode", "dark-mode")
    html.classList.add("auto-mode")
    localStorage.setItem('theme', 'auto-mode');
})
lightMode.addEventListener("click", () => { 
    html.classList.remove("auto-mode", "dark-mode")
    html.classList.add("light-mode")
    localStorage.setItem('theme', 'light-mode');
})


// Toggles the view of more Work experiences
function toggleExperience() {
  document.querySelectorAll(".experience--item.hideable").forEach(item => { item.classList.toggle("hidden")})
  if(document.querySelector(".experience--item.hideable").classList.contains("hidden")) {
    document.querySelector("#exp-btn").innerHTML = "Vis flere arbeidserfaringer"
  } else {
    document.querySelector("#exp-btn").innerHTML = "Vis færre arbeidserfaringer"
  }
};

// Toggles the view of more Certifications
function toggleCert() {
  document.querySelectorAll(".certificate--item.hideable").forEach(item => { item.classList.toggle("hidden")})
  if(document.querySelector(".certificate--item.hideable").classList.contains("hidden")) {
    document.querySelector("#cert-btn").innerHTML = "Vis fullførte kurs"
  } else {
    document.querySelector("#cert-btn").innerHTML = "Skjul fullførte kurs"
  }
};

// Toggles the view of more projects
function toggleProjects() {
  document.querySelectorAll(".project.hideable").forEach(item => { item.classList.toggle("hidden")})
  if(document.querySelector(".project.hideable").classList.contains("hidden")) {
    document.querySelector("#project-btn").innerHTML = "Vis flere prosjekter"
  } else {
    document.querySelector("#project-btn").innerHTML = "Vis færre prosjekter"
  }
};
