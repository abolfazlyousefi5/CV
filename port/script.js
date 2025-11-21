// فایل جاوااسکریپت برای افکت تایپ متحرک
// این تابع افکت تایپ را ایجاد می‌کند که متن را از راست به چپ تایپ می‌کند
// و سپس آن را پاک کرده و دوباره شروع می‌کند
function createTypingEffect(element, texts, speed = 100) {
  let textIndex = 0; // شماره متن فعلی
  let charIndex = 0; // شماره کاراکتر فعلی
  let isDeleting = false; // آیا در حال پاک کردن هستیم؟

  function type() {
    const currentText = texts[textIndex]; // متن فعلی

    if (isDeleting) {
      element.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
    } else {
      element.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
    }

    let typeSpeed = speed;

    if (isDeleting) {
      typeSpeed /= 2; // سرعت پاک کردن سریع‌تر
    }

    if (!isDeleting && charIndex === currentText.length) {
      typeSpeed = 2000; // توقف ۲ ثانیه
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length; // رفتن به متن بعدی
      typeSpeed = 500; // توقف کوتاه
    }

    setTimeout(type, typeSpeed);
  }

  // شروع افکت تایپ
  type();
}

// اجرای افکت تایپ وقتی صفحه بارگذاری شد
document.addEventListener('DOMContentLoaded', function () {
  const typingElement = document.querySelector('.typing-effect');

  if (typingElement) {
    const texts = [
      'من ابوالفضل هستم',
      'کارآموز بک‌اند با پایتون',
      'علاقه‌مند به جنگو و FastAPI',
      'در مسیر یادگیری دیتابیس و تست‌نویسی',
    ];

    createTypingEffect(typingElement, texts, 150);
  }

  // منوی همبرگری موبایل
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', function () {
      mobileMenu.classList.toggle('open');
      mobileMenuButton.classList.toggle('active');
    });

    // بستن منو بعد از کلیک روی لینک‌ها
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.remove('open');
        mobileMenuButton.classList.remove('active');
      });
    });
  }
});
