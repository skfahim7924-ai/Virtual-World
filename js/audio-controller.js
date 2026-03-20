window.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('theme-song');
    const savedTime = localStorage.getItem('audioTime');

    if (audio) {
        // আগের পেজে যেখানে গান শেষ হয়েছিল সেখান থেকে শুরু হবে
        if (savedTime) {
            audio.currentTime = parseFloat(savedTime);
        }

        // ব্রাউজার পলিসির কারণে ইউজারকে একবার ক্লিক করতে হতে পারে
        document.body.addEventListener('click', () => {
            if (audio.paused) {
                audio.play();
            }
        }, { once: true });

        // সময় আপডেট হতে থাকবে
        audio.addEventListener('timeupdate', () => {
            localStorage.setItem('audioTime', audio.currentTime);
        });
    }
});
