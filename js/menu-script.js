// ডার্ক মোড টগল (সিম্পল লজিক)
const darkModeToggle = document.getElementById('darkModeToggle');
if(darkModeToggle) {
    darkModeToggle.addEventListener('change', () => {
        document.body.classList.toggle('dark-theme');
        // আপনি চাইলে dark-theme এর জন্য আলাদা CSS স্টাইল লিখতে পারেন
    });
}
