// পাসওয়ার্ড চেক করার ফাংশন (index.html এর জন্য)
function checkPassword() {
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('errorMessage');
    
    if (!passwordInput) return; // যদি পেজে ইনপুট বক্স না থাকে তবে কোড কাজ করবে না

    const correctPassword = "1234";
    if (passwordInput.value === correctPassword) {
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

// এন্টার কী প্রেস হ্যান্ডলার (নিরাপদভাবে)
const passBox = document.getElementById('password');
if (passBox) {
    passBox.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') checkPassword();
    });
}

