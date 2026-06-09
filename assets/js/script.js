// Reveal Logic
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Theme Toggle
const themeBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const navLogo = document.getElementById('nav-logo');

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    if (document.body.classList.contains('light-theme')) {
        themeIcon.className = 'fas fa-sun text-orange-500 transition-all';
        navLogo.src = './assets/icons/QC.png'; 
    } else {
        themeIcon.className = 'fas fa-moon transition-all';
        navLogo.src = './assets/icons/wQC.png'; 
    }
});

// Fast Navbar Blur
window.addEventListener('scroll', () => {
    const nav = document.querySelector('#navbar > div');
    if (window.scrollY > 50) {
        nav.style.backgroundColor = document.body.classList.contains('light-theme') ? "rgba(255,255,255,0.9)" : "rgba(10,10,10,0.9)";
        nav.style.backdropFilter = "blur(12px)";
        nav.classList.add('py-2');
    } else {
        nav.style.backgroundColor = "";
        nav.style.backdropFilter = "";
        nav.classList.remove('py-2');
    }
}, { passive: true });

// Download Modal
function showDownloadMsg(e) {
    // Allows actual APK download to proceed normally
    const modal = document.getElementById('downloadModal');
    modal.style.display = 'flex';
    modal.style.opacity = '0';
    setTimeout(() => {
        modal.style.transition = 'opacity 0.2s ease';
        modal.style.opacity = '1';
    }, 10);
}

function closeModal() {
    const modal = document.getElementById('downloadModal');
    modal.style.opacity = '0';
    setTimeout(() => {
        modal.style.display = 'none';
    }, 200);
}

// Form Submission Toast
function handleForm() {
    const toast = document.getElementById('toast');
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 4000);
    return true;
}
