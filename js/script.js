function checkPassword() {
    const passwordInput = document.getElementById('password');
    const nameInput = document.getElementById('userName');
    const errorMessage = document.getElementById('errorMessage');
    
    const correctPassword = "1234";

    if (passwordInput.value === correctPassword) {
        // ইউজারের নাম localStorage-এ সেভ করা হচ্ছে
        const userName = nameInput.value || "Guest";
        localStorage.setItem("playerName", userName); 

        // সাউন্ড নেই তাই সরাসরি রিডাইরেক্ট হবে
        window.location.href = "menu.html";
    } else {
        errorMessage.innerText = "Wrong Password";
        passwordInput.classList.add('input-error');
        setTimeout(() => {
            passwordInput.classList.remove('input-error');
            errorMessage.innerText = "";
        }, 2000);
        passwordInput.value = "";
    }
}

// থিম সং শুরু করার জন্য (প্রথম ক্লিক)
window.addEventListener('click', () => {
    const themeAudio = document.getElementById('theme-song');
    if (themeAudio && themeAudio.paused) {
        themeAudio.play().catch(error => console.log("Autoplay blocked:", error));
    }
}, { once: true });

// প্রতি সেকেন্ডে গানের বর্তমান সময় সেভ করা
if (themeAudio) {
    themeAudio.addEventListener('timeupdate', () => {
        localStorage.setItem('audioTime', themeAudio.currentTime);
    });
}

// এন্টার কী প্রেস হ্যান্ডলার
const passBox = document.getElementById('password');
if (passBox) {
    passBox.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') checkPassword();
    });
}
