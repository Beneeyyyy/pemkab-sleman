document.addEventListener("DOMContentLoaded", () => {
    // Mengambil warna dari CSS :root
    const style = getComputedStyle(document.documentElement);
    const colorPrimary = style.getPropertyValue("--primary-color").trim(); // #2563EB
    const colorSuccess = style.getPropertyValue("--success").trim(); // #16A34A
    const colorDanger = style.getPropertyValue("--danger").trim(); // #DC2626
    const colorWarning = style.getPropertyValue("--warning").trim(); // #F59E0B
    const colorMuted = style.getPropertyValue("--text-muted").trim(); // #64748B

    // Global Config Chart.js
    Chart.defaults.font.family = "'Inter', sans-serif";
    Chart.defaults.color = colorMuted;

    // 1. Sentiment Chart (Doughnut)
    new Chart(document.getElementById("sentimentChart"), {
        type: "doughnut",
        data: {
            labels: ["Positif", "Netral", "Negatif"],
            datasets: [
                {
                    data: [42, 28, 30],
                    backgroundColor: [colorSuccess, colorMuted, colorDanger],
                    hoverOffset: 20,
                    borderWidth: 0,
                },
            ],
        },
        options: {
            maintainAspectRatio: false,
            plugins: { legend: { position: "bottom" } },
            cutout: "75%",
        },
    });

    // 2. Trend Chart (Area Line)
    new Chart(document.getElementById("trendChart"), {
        type: "line",
        data: {
            labels: ["3 Feb", "4 Feb", "5 Feb", "6 Feb", "7 Feb", "8 Feb", "9 Feb"],
            datasets: [
                {
                    label: "Mention",
                    data: [120, 190, 150, 210, 180, 240, 260],
                    borderColor: colorPrimary,
                    backgroundColor: "rgba(37, 99, 235, 0.1)",
                    fill: true,
                    tension: 0.4,
                    pointRadius: 4,
                    pointBackgroundColor: colorPrimary,
                },
            ],
        },
        options: {
            maintainAspectRatio: false,
            scales: {
                y: { beginAtZero: true, grid: { borderDash: [5, 5] } },
                x: { grid: { display: false } },
            },
        },
    });

    // 3. Category Chart (Horizontal Bar)
    new Chart(document.getElementById("categoryChart"), {
        type: "bar",
        data: {
            labels: ["Jalan", "Air", "Kesehatan", "Listrik", "Bencana"],
            datasets: [
                {
                    data: [35, 28, 18, 12, 7],
                    backgroundColor: colorPrimary,
                    borderRadius: 8,
                },
            ],
        },
        options: {
            indexAxis: "y",
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
        },
    });

    // 4. Render Keywords Modular
    const keywords = [
        { name: "#jalan_rusak_sleman", val: 245, p: 95 },
        { name: "#pdam_mati", val: 198, p: 80 },
        { name: "#lampu_jalan", val: 167, p: 65 },
        { name: "#sampah_sleman", val: 142, p: 55 },
    ];

    document.getElementById("keyword-list").innerHTML = keywords
        .map(
            (k) => `
    <div style="margin-bottom: 20px;">
      <div class="flex-between" style="margin-bottom: 8px; font-size: 0.9rem;">
        <span style="font-weight: 500;">${k.name}</span>
        <span style="color: ${colorPrimary}; font-weight: 700;">${k.val}</span>
      </div>
      <div style="background: #f1f5f9; height: 10px; border-radius: 20px; overflow: hidden;">
        <div style="width: ${k.p}%; background: ${colorPrimary}; height: 100%; transition: width 1s ease-in-out;"></div>
      </div>
    </div>
  `,
        )
        .join("");
});
