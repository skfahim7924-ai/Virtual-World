window.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('theme-song');
    const savedTime = localStorage.getItem('audioTime');

    if (audio) {
        // আগের সময় থেকে শুরু হবে
        if (savedTime) {
            audio.currentTime = parseFloat(savedTime);
        }

        // অটোমেটিক প্লে করার চেষ্টা
        const playPromise = audio.play();

        if (playPromise !== undefined) {
            playPromise.then(_ => {
                // অটোমেটিক শুরু হয়েছে!
                console.log("Autoplay started");
            }).catch(error => {
                // যদি ব্রাউজার আটকে দেয়, তবে একবার ক্লিক করলেই বাজবে
                console.log("Autoplay blocked, waiting for interaction");
                document.body.addEventListener('click', () => {
                    audio.play();
                }, { once: true });
            });
        }

        // সময় সেভ হতে থাকবে
        audio.addEventListener('timeupdate', () => {
            localStorage.setItem('audioTime', audio.currentTime);
        });
    }
});
