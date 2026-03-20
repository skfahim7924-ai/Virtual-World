function checkPassword() {
    const passwordInput = document.getElementById('password');
    const nameInput = document.getElementById('userName');
    const errorMessage = document.getElementById('errorMessage');
    const clickSound = document.getElementById('click-sound'); // সাউন্ড এলিমেন্ট
    
    const correctPassword = "1234";

    // বাটন ক্লিক করলে সাউন্ড বাজবে
    if (clickSound) {
        clickSound.currentTime = 0;
        clickSound.play();
    }

    if (passwordInput.value === correctPassword) {
        const userName = nameInput.value || "Guest";
        localStorage.setItem("playerName", userName); 

        // সাউন্ড বাজার জন্য সামান্য অপেক্ষা করে তারপর অন্য পেজে যাবে
        setTimeout(() => {
            window.location.href = "menu.html";
        }, 300); 
    } else {
        errorMessage.innerText = "Wrong Password";
        passwordInput.classList.add('input-error');
        setTimeout(() => {
            passwordInput.classList.remove('input-error');
            errorMessage.innerText = "";
        }, 2000);
    }
}

// থিম সং শুরু করার জন্য (প্রথম ক্লিক)
window.addEventListener('click', () => {
    const themeAudio = document.getElementById('theme-song');
    if (themeAudio && themeAudio.paused) {
        themeAudio.play().catch(error => console.log("Autoplay blocked:", error));
    }
}, { once: true });

// এন্টার চাপলে যেন পাসওয়ার্ড চেক হয়
const passBox = document.getElementById('password');
if (passBox) {
    passBox.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') checkPassword();
    });
}
