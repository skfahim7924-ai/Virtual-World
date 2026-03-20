function checkPassword() {
    const passwordInput = document.getElementById('password');
    const nameInput = document.getElementById('userName'); // নাম ইনপুট
    const errorMessage = document.getElementById('errorMessage');
    
    const correctPassword = "1234";

    if (passwordInput.value === correctPassword) {
        // ইউজারের নাম localStorage-এ সেভ করা হচ্ছে
        const userName = nameInput.value || "Guest";
        localStorage.setItem("playerName", userName); 

        window.location.href = "menu.html";
    } else {
        // আগের এরর হ্যান্ডলিং কোড...
        errorMessage.innerText = "Wrong Password";
        passwordInput.classList.add('input-error');
        setTimeout(() => {
            passwordInput.classList.remove('input-error');
            errorMessage.innerText = "";
        }, 2000);
    }
}
