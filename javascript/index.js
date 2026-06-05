function sendMessage() {
    const input = document.getElementById("user-input");
    const chatBox = document.getElementById("chat-box");

    const message = input.value.trim();

    if (message === "") return;

    chatBox.innerHTML += `
        <div class="user-message">
            ${message}
        </div>
    `;

    setTimeout(() => {
        chatBox.innerHTML += `
            <div class="bot-message">
                Thank you for your interest in Apelles Construction.
                To receive a free estimate and speak directly with our team,
                please visit our
                <a href="contact.html">Contact Page</a>.
            </div>
        `;

        chatBox.scrollTop = chatBox.scrollHeight;
    }, 800);

    input.value = "";
}

function handleEstimateButton() {
    const button = document.getElementById("estimate-button");
    button.addEventListener("click", (e) => {
        e.preventDefault();
        alert("Thank you for your interest! Please fill out the form to receive a free estimate.");
    });
}

