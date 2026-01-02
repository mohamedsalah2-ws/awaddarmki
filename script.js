// تحديد العناصر الأساسية
const menuBtn = document.getElementById('mobile-menu');
const navLinksContainer = document.getElementById('nav-links');
const navLinks = document.querySelectorAll('.navigation a');

// 1. تفعيل فتح وإغلاق القائمة عند الضغط على زر الهامبرغر
menuBtn.addEventListener('click', () => {
    navLinksContainer.classList.toggle('active');
});

// 2. إغلاق القائمة تلقائياً عند الضغط على أي رابط (للموبايل)
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // التحقق مما إذا كانت القائمة مفتوحة (تحتوي على كلاس active)
        if (navLinksContainer.classList.contains('active')) {
            navLinksContainer.classList.remove('active');
        }
    });
});

// 3. وظيفة التحكم في سلايدر الصور (معرض الأثر)
function showSlide(index) {
    const slides = document.querySelectorAll('.main-slide');
    const navItems = document.querySelectorAll('.nav-item');

    // إزالة الحالة النشطة من الجميع
    slides.forEach(slide => slide.classList.remove('active-slide'));
    navItems.forEach(item => item.classList.remove('active'));

    // تفعيل السلايد والمصغر المختار
    if(slides[index]) slides[index].classList.add('active-slide');
    if(navItems[index]) navItems[index].classList.add('active');
}