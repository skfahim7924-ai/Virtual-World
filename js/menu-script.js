// পেজ লোড হলে নাম দেখাবে
window.onload = function() {
    const name = localStorage.getItem("playerName");
    const navTitle = document.querySelector('.nav-title');
    
    if (name) {
        navTitle.innerText = "Welcome, " + name;
    }
};