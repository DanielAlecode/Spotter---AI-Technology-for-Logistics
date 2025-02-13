document.addEventListener("DOMContentLoaded", function () {
    // Get the canvas context for the accuracy chart
    const ctx = document.getElementById("accuracyChart").getContext("2d");

    // Initialize a line chart using Chart.js
    new Chart(ctx, {
        type: "line",
        data: {
            labels: ["0", "30", "60", "90", "120"], // X-axis labels
            datasets: [
                {
                    label: "Optimized Routes",
                    data: [98, 96, 94, 93, 91], // Data points
                    borderColor: "#FF5733", // Line color
                    borderWidth: 2,
                    fill: false,
                    tension: 0.2 // Curve smoothness
                },
                {
                    label: "Non-Optimized Routes",
                    data: [97, 92, 85, 80, 70], // Data points
                    borderColor: "#4285F4",
                    borderWidth: 2,
                    fill: false,
                    tension: 0.2
                }
            ]
        },
        options: {
            responsive: true, // Adjusts to screen size
            maintainAspectRatio: false,
            scales: {
                x: {
                    title: { display: true, text: "Days After Initial Optimization" },
                    grid: { display: false }
                },
                y: {
                    title: { display: true, text: "Accuracy Dropoff (%)" },
                    min: 60,
                    max: 100,
                    grid: { color: "#EEE" }
                }
            }
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const grid = document.querySelector(".grid-pattern");
    const lupa = document.getElementById("lupa");

    // Generate 100 dots dynamically inside the grid
    for (let i = 0; i < 100; i++) {
        const dot = document.createElement("div");
        grid.appendChild(dot);
    }

    // Mouse movement event inside the grid
    grid.addEventListener("mousemove", (e) => {
        const gridRect = grid.getBoundingClientRect();

        // Get mouse position relative to the grid
        const x = e.clientX - gridRect.left;
        const y = e.clientY - gridRect.top;

        // Position the magnifying effect
        lupa.style.left = `${x}px`;
        lupa.style.top = `${y}px`;
        lupa.style.display = "block";

        // Highlight dots within the magnifying area
        document.querySelectorAll(".grid-pattern div").forEach((dot) => {
            const dotRect = dot.getBoundingClientRect();
            const lupaRect = lupa.getBoundingClientRect();

            // Check if dot is inside the magnifier
            if (
                dotRect.left >= lupaRect.left &&
                dotRect.right <= lupaRect.right &&
                dotRect.top >= lupaRect.top &&
                dotRect.bottom <= lupaRect.bottom
            ) {
                dot.classList.add("highlight");
            } else {
                dot.classList.remove("highlight");
            }
        });
    });

    // Remove highlight effect when leaving the grid
    grid.addEventListener("mouseleave", () => {
        lupa.style.display = "none";
        document.querySelectorAll(".grid-pattern div").forEach((dot) => {
            dot.classList.remove("highlight");
        });
    });
});
