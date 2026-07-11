// ==========================================
// 1. Reveal Logic (Scroll Animations)
// ==========================================
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));


// ==========================================
// 2. Theme Toggle & UI Update Logic
// ==========================================
const themeBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const navLogo = document.getElementById('nav-logo');
const nav = document.querySelector('#navbar > div');

// यह फ़ंक्शन आइकॉन, लोगो और नेवबार के रंग को एक साथ अपडेट करता है
function updateUI() {
    const isDark = document.documentElement.classList.contains('dark');
    
    // Icon & Logo Update
    if (isDark) {
        themeIcon.className = 'fas fa-moon transition-all duration-300';
        themeIcon.style.color = 'white';
        if (navLogo) navLogo.src = './assets/icons/wQC.png'; // White Logo for Dark Mode
    } else {
        themeIcon.className = 'fas fa-sun text-orange-500 transition-all duration-300';
        themeIcon.style.color = ''; // Tailwind classes handle color here
        if (navLogo) navLogo.src = './assets/icons/QC.png'; // Dark Logo for Light Mode
    }

    // Navbar Background Update
    if (nav) {
        if (window.scrollY > 50) {
            // डार्क और लाइट मोड के हिसाब से नेवबार का बैकग्राउंड
            nav.style.backgroundColor = isDark ? "rgba(17, 24, 39, 0.85)" : "rgba(255, 255, 255, 0.85)";
            nav.style.backdropFilter = "blur(16px)";
            nav.classList.add('py-2');
        } else {
            nav.style.backgroundColor = "";
            nav.style.backdropFilter = "";
            nav.classList.remove('py-2');
        }
    }
}

// पेज लोड होते ही सही आइकॉन, लोगो और नेवबार सेट करें
updateUI();

// बटन क्लिक इवेंट (Theme Change)
if (themeBtn) {
    themeBtn.addEventListener('click', () => {
        // html टैग पर 'dark' क्लास टोगल करें
        const isDarkNow = document.documentElement.classList.toggle('dark');
        
        // लोकल स्टोरेज में सेव करें
        localStorage.setItem('theme', isDarkNow ? 'dark' : 'light');
        
        // तुरंत UI अपडेट करें
        updateUI();
    });
}

// स्क्रॉल इवेंट (Navbar Update)
window.addEventListener('scroll', () => {
    updateUI(); // स्क्रॉल करने पर भी थीम के अनुसार नेवबार सेट रहेगा
}, { passive: true });


// ==========================================
// 3. Download Modal Logic
// ==========================================
function showDownloadMsg(e) {
    // Allows actual APK download to proceed normally
    const modal = document.getElementById('downloadModal');
    if (modal) {
        modal.style.display = 'flex';
        modal.style.opacity = '0';
        setTimeout(() => {
            modal.style.transition = 'opacity 0.2s ease';
            modal.style.opacity = '1';
        }, 10);
    }
}

function closeModal() {
    const modal = document.getElementById('downloadModal');
    if (modal) {
        modal.style.opacity = '0';
        setTimeout(() => {
            modal.style.display = 'none';
        }, 200);
    }
}


// ==========================================
// 4. Form Submission Toast Logic
// ==========================================
function handleForm() {
    const toast = document.getElementById('toast');
    if (toast) {
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 4000);
    }
    return true;
}