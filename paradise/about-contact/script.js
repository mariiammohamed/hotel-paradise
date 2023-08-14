document.addEventListener("DOMContentLoaded", function() {
    const toggleButtons = document.querySelectorAll(".toggle-button");
    toggleButtons.forEach(button => {
        button.addEventListener("click", function() {
            const box = this.parentElement.parentElement;
            const content = box.querySelector(".box-content");
            box.classList.toggle("expanded");
            content.style.display = box.classList.contains("expanded") ? "block" : "none";
            this.textContent = box.classList.contains("expanded") ? "X" : "+";
        });
    });
});
