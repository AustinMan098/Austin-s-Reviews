// Scroll to top button functionality
const scrollToTopButton = document.createElement("button");
scrollToTopButton.innerText = "Scroll to Top";
scrollToTopButton.classList.add("scroll-to-top");
document.body.appendChild(scrollToTopButton);

scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Toggle the visibility of the scroll to top button
window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
});

// Form validation for reviews
const reviewForm = document.getElementById("review-form");
const reviewInput = document.getElementById("review-input");

reviewForm.addEventListener("submit", (event) => {
    if (reviewInput.value.trim() === "") {
        event.preventDefault();
        alert("Please write a review before submitting.");
    }
});

// Comment functionality
const commentForms = document.querySelectorAll(".comment-form");
commentForms.forEach((form) => {
    form.addEventListener("submit", (event) => {
        const commentInput = form.querySelector("textarea");
        if (commentInput.value.trim() === "") {
            event.preventDefault();
            alert("Please write a comment before submitting.");
        }
    });
});

// Emoji support in comments
const emojiPicker = document.createElement("div");
emojiPicker.classList.add("emoji-picker");
emojiPicker.innerHTML = `
    <button class="emoji-btn">😊</button>
    <button class="emoji-btn">😂</button>
    <button class="emoji-btn">😢</button>
    <button class="emoji-btn">❤️</button>
`;

document.body.appendChild(emojiPicker);

const commentTextareas = document.querySelectorAll("textarea");
commentTextareas.forEach((textarea) => {
    const emojiBtns = emojiPicker.querySelectorAll(".emoji-btn");
    emojiBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            textarea.value += btn.textContent;
        });
    });
});

// Admin toggle debug modes
const toggleDebugButton = document.getElementById("toggle-debug");
if (toggleDebugButton) {
    toggleDebugButton.addEventListener("click", () => {
        alert("Debug mode toggled!");
        // Add your custom debug actions here
    });
}

// Example of toggling Admin AI and BandBot
const toggleAIButton = document.getElementById("toggle-ai");
if (toggleAIButton) {
    toggleAIButton.addEventListener("click", () => {
        alert("AI system toggled.");
        // Add custom toggle actions for Admin AI here
    });
}
