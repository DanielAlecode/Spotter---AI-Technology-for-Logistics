//this function perform the toggle action so in case the user is a developer
// as well as fingerprint.com
document.addEventListener("DOMContentLoaded", () => {
    const developerMode = document.getElementById("developerMode");
    const userPanel = document.getElementById("userPanel");
    const developerPanel = document.getElementById("developerPanel");

    developerMode.addEventListener("change", () => {
        if (developerMode.checked) {
            userPanel.classList.add("hidden");
            developerPanel.classList.remove("hidden");
        } else {
            userPanel.classList.remove("hidden");
            developerPanel.classList.add("hidden");
        }
    });
});

