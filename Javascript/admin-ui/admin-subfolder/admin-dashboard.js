function initAdminDashboard() {
    console.log("Admin Dashboard initialized!");
  
    // Function to load daily tip
    function loadDailyTip() {
      const tips = [
        "Every smile you help create today is a reason to be proud. You don’t just fix teeth — you build confidence.",
        "A kind word and a calm tone can turn a nervous patient into a loyal one.",
        "Small acts of care make the biggest difference — one patient at a time.",
        "Your work keeps our patients healthy, happy, and smiling. Never underestimate that impact.",
        "Teamwork is the best dental tool — together, we make the clinic shine.",
        "A great clinic isn’t built by one person — it’s built by a great team like ours.",
        "Your attitude sets the tone for the whole day — choose positivity!",
        "Stay focused, stay calm, and remember — precision and care define great dentistry.",
        "Patients may forget what you said, but they’ll always remember how you made them feel.",
        "Learning something new today makes you better tomorrow — keep growing.",
        "The best service comes from passion — and passion comes from purpose. You have both!",
        "We don’t just treat teeth; we treat people. Compassion makes all the difference.",
        "Celebrate small wins — a happy patient, a smooth day, a great teamwork moment.",
        "Even on tough days, remember: your role matters more than you think."
      ];
  
      const dayIndex = new Date().getDate() % tips.length;  // Use current day to select tip
      const tipText = tips[dayIndex];
      
      const tip1 = document.getElementById("daily-dental-tip-1");
      const tip2 = document.getElementById("daily-dental-tip-2");
      
      if (tip1) tip1.textContent = tipText;  // Update if element exists
      if (tip2) tip2.textContent = tipText;  // Update if element exists
      
      console.log("Workday Wisdom loaded:", tipText);
    }
  
    // Call after dashboard is inserted
    loadDailyTip();  // This will now execute correctly

   const financialCtx = document.getElementById('revenue-graph-canvas-id');
if (financialCtx) {
    new Chart(financialCtx, {
        type: 'line',
        data: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            datasets: [
                {
                    label: 'Previous Month',
                    data: [25000, 40000, 35000, 60000],
                    backgroundColor: 'rgba(220, 53, 69, 0.4)',
                    borderColor: '#dc3545',
                    borderWidth: 1
                },
                {
                    label: 'Current Month',
                    data: [30000, 45000, 42000, 75000],
                    backgroundColor: 'rgba(40, 167, 69, 0.4)',
                    borderColor: '#28a745',
                    borderWidth: 1
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    labels: { color: '#703803' }
                },
                tooltip: {
                    callbacks: {
                        label: (tooltipItem) =>
                            `${tooltipItem.dataset.label}: ₱${tooltipItem.raw.toLocaleString()}`
                    }
                },
                title: {
                    display: true,
                    text: 'Financial Report — Previous vs Current Month',
                    color: '#703803',
                    font: { size: 16, weight: 'bold' }
                }
            },
            scales: {
                x: {
                    grid: { color: 'rgba(200, 200, 200, 0.2)' },
                    ticks: { color: '#703803' }
                },
                y: {
                    min: 10000,   // ✅ Start at ₱10,000
                    max: 100000,  // ✅ End at ₱100,000
                    ticks: {
                        stepSize: 10000, // ✅ ₱10k intervals
                        color: '#703803',
                        callback: (value) => '₱' + value.toLocaleString()
                    },
                    grid: { color: 'rgba(200, 200, 200, 0.2)' }
                }
            }
        }
    });
}


  }