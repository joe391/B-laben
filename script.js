    const watermelon = document.querySelector(".watermelon");
    const jsConfetti = new JSConfetti();
    
    watermelonBtn.addEventlisterner("click", () => {
        jsConfetti.addConfetti({
            emojis: ['🍉'],
            emojiSize: 80,
            confettiNumber: 10,
        });
});