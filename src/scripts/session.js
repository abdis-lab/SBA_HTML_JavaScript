


    const addSessionBtn = document.getElementById("addSessionBtn");
    const addSessionModal = document.getElementById("addSessionModal");
    const closeBtn = document.querySelector(".close-btn");
    const sessionForm = document.getElementById("sessionForm");
    const sessionGrid = document.querySelector(".session-grid");

    addSessionBtn.addEventListener("click", function () {
        document.getElementById("sessionCost").value = "";
        document.getElementById("sessionName").value = "";
        document.getElementById("sessionDate").value = "";
        document.getElementById("sessionDetail").value = "";
        addSessionModal.style.display = "block";
    });

    function closeModal() {
        document.getElementById("sessionCost").value = "";
        document.getElementById("sessionName").value = "";
        document.getElementById("sessionDate").value = "";
        addSessionModal.style.display = "none";
    }

    addSessionModal.addEventListener("click", function (event) {
        if (event.target === addSessionModal) {
            closeModal();
        }
    });

    closeBtn.addEventListener("click", closeModal);

    sessionForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const sessionName = document.getElementById("sessionName").value;
        const sessionDate = document.getElementById("sessionDate").value;
        const sessionCost = document.getElementById("sessionCost").value;
        const sessionDetail = document.getElementById("sessionDetail").value;

        const newSessionCard = document.createElement("div");
        newSessionCard.className = "session-card";
        newSessionCard.innerHTML = `
            <img src="../images/pexels-pixabay-358042.jpg" alt="Session Image">
            <div class="session-title">
                <h1>${sessionName}</h1>
                <p>${sessionDetail}.</p>
            </div>
            <div class="session-info">
                <span class="session-date">${sessionDate}</span>
                <button class="goingToSessionBtn" data-count="0">Going <span style="border: none;">0</span></button>
                <span class="sessionCost">Cost: $${sessionCost}</span>
            </div>
        `;

        sessionGrid.appendChild(newSessionCard);
        closeModal();
    });

    sessionGrid.addEventListener("click", function (event) {
        const targetBtn = event.target.closest(".goingToSessionBtn");
        if (targetBtn) {
            const countSpan = targetBtn.querySelector("span");
            let currentCount = parseInt(countSpan.textContent, 10);
            currentCount = currentCount === 0 ? 1 : 0; // Toggle between 0 and 1
            countSpan.textContent = currentCount;
        }
    });
