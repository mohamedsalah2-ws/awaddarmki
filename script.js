// 1. تحديد العناصر الأساسية للقائمة والملاحة
const menuBtn = document.getElementById('mobile-menu');
const navLinksContainer = document.getElementById('nav-links');
const navLinks = document.querySelectorAll('.navigation a');

// 2. التحكم في قائمة الموبايل (فتح/إغلاق)
if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        navLinksContainer.classList.toggle('active');
    });
}

// 3. إغلاق القائمة تلقائياً عند النقر على أي رابط (للموبايل)
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navLinksContainer.classList.contains('active')) {
            navLinksContainer.classList.remove('active');
        }
    });
});

// 4. وظيفة التحكم في معرض الصور (8 صور)
function showSlide(index) {
    const slides = document.querySelectorAll('.main-slide');
    const navItems = document.querySelectorAll('.nav-item');

    // التأكد من وجود عناصر قبل التنفيذ
    if (slides.length > 0 && navItems.length > 0) {
        // إزالة الحالة النشطة من جميع الصور والمصغرات
        slides.forEach(slide => {
            slide.classList.remove('active-slide');
            slide.style.display = "none"; // ضمان الإخفاء التام
        });
        navItems.forEach(item => item.classList.remove('active'));

        // تفعيل الصورة المختارة والمصغر التابع لها
        if (slides[index]) {
            slides[index].classList.add('active-slide');
            slides[index].style.display = "block"; // إظهار الصورة النشطة
        }
        if (navItems[index]) {
            navItems[index].classList.add('active');
        }
    }
}

// 5. تهيئة المعرض عند تحميل الصفحة (إظهار الصورة الأولى تلقائياً)
document.addEventListener('DOMContentLoaded', () => {
    showSlide(0);
});
