document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById("accuracyChart").getContext("2d");

    new Chart(ctx, {
        type: "line",
        data: {
            labels: ["0", "30", "60", "90", "120"],
            datasets: [
                {
                    label: "Optimized Routes",
                    data: [98, 96, 94, 93, 91],
                    borderColor: "#FF5733",
                    borderWidth: 2,
                    fill: false,
                    tension: 0.2
                },
                {
                    label: "Non-Optimized Routes",
                    data: [97, 92, 85, 80, 70],
                    borderColor: "#4285F4",
                    borderWidth: 2,
                    fill: false,
                    tension: 0.2
                }
            ]
        },
        options: {
            responsive: true,
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

    // Generar los puntitos dinámicamente
    for (let i = 0; i < 100; i++) {
        const dot = document.createElement("div");
        grid.appendChild(dot);
    }

    // Evento de movimiento sobre la caja de puntos
    grid.addEventListener("mousemove", (e) => {
        const gridRect = grid.getBoundingClientRect();

        // Posicionar la lupa en relación con el contenedor
        const x = e.clientX - gridRect.left;
        const y = e.clientY - gridRect.top;

        lupa.style.left = `${x}px`;
        lupa.style.top = `${y}px`;
        lupa.style.display = "block";

        // Calcular qué puntos están dentro del círculo
        document.querySelectorAll(".grid-pattern div").forEach((dot) => {
            const dotRect = dot.getBoundingClientRect();
            const lupaRect = lupa.getBoundingClientRect();

            // Si el punto está dentro de la lupa, cambiar de color
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

    grid.addEventListener("mouseleave", () => {
        lupa.style.display = "none";
        document.querySelectorAll(".grid-pattern div").forEach((dot) => {
            dot.classList.remove("highlight");
        });
    });
});
