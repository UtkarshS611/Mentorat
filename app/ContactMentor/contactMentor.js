const chatBox = document.getElementById("chat-box");
const chatInput = document.getElementById("chat-input");
const sendBtn = document.getElementById("send-btn");

const messages = [];
function renderMessages() {
    chatBox.innerHTML = '';

    messages.forEach(msg => {
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("message");
        messageDiv.classList.add(msg.sender === "user" ? "user-message" : "mentor-message");
        messageDiv.textContent = msg.text;
        chatBox.appendChild(messageDiv);
    });
    chatBox.scrollTop = chatBox.scrollHeight;
    }

// Function to simulate mentor response
function mentorResponse() {
    setTimeout(() => {
        const mentorMessage = {
        sender: "mentor",
        text: "Thank you for your message. I'll get back to you shortly!"
        };
        messages.push(mentorMessage);
        renderMessages();
    }, 1000);
}

function sendEmailReminder(message) {
    const recipient = "xyz@gmail.com";
    const subject = "New Chat Message";
    const body = `You have received a new message: \n\n"${message}"`;
    
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
}

sendBtn.addEventListener("click", function() {
    const userMessage = chatInput.value.trim();

    if (userMessage !== "") {
        messages.push({ sender: "user", text: userMessage });

        chatInput.value = "";

        renderMessages();
        mentorResponse();
        sendEmailReminder(userMessage);
    }
});

chatInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        sendBtn.click();
    }
});
