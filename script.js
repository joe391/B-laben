const Haze = document.querySelector(".Hazelnut");
const Mang = document.querySelector(".Mango");
const Choc = document.querySelector(".chocolate");
const Ras = document.querySelector(".Rasberry");
const img = document.querySelector(".pist");
const jsConfetti = new JSConfetti();
    
Haze.addEventListener("click", () => {
    jsConfetti.addConfetti({
        emojis: ['🌰'],
        emojiSize: 80,
        confettiNumber: 10,
    });
});

Mang.addEventListener("click", () => {
    jsConfetti.addConfetti({
        emojis: ['🥭'],
        emojiSize: 80,
        confettiNumber: 10,
    });
});

Choc.addEventListener("click", () => {
    jsConfetti.addConfetti({
        emojis: ['🍫'],
        emojiSize: 80,
        confettiNumber: 10,
    })
});

Ras.addEventListener("click", () => {
    jsConfetti.addConfetti({
        emojis: ['🍒'],
        emojiSize: 80,
        confettiNumber: 10,
    });
});
