document.addEventListener('DOMContentLoaded', () => {
    // --- Translations ---
    const translations = {
        ar: {
            logo: "ᗅℬ",
            nav_home: "الرئيسية",
            nav_about: "من أنا",
            nav_interests: "الاهتمامات",
            nav_achievements: "الإنجازات",
            nav_services: "الخدمات",
            nav_contact: "تواصل",
            hero_greeting: "مرحباً، أنا",
            hero_title: "عبير الغامدي",
            hero_subtitle: "Computer Engineering Student | AI & Robotics Enthusiast",
            hero_description: "طالبة هندسة حاسب تقود مبادرات تقنية وتعمل على تحويل أفكار الذكاء الاصطناعي إلى حلول واقعية مؤثرة.",
            stat_members: "عضو تحت قيادتي",
            stat_projects: "مشاريع",
            stat_leadership: "أدوار قيادية",
            btn_contact: "تواصل معي",
            btn_more: "المزيد عني",
            section_about: "من أنا",
            about_text: "أنا طالبة شغوفة في مجال هندسة الحاسب، أسعى دائمًا لتوظيف التقنية في حل المشكلات الحقيقية. أؤمن بقوة المجتمع التقني والعمل الجماعي في تحقيق الابتكار.",
            about_list_1: "قيادة المجتمع التقني في نادي البرمجة والذكاء الاصطناعي (+300 عضو).",
            about_list_2: "تنفيذ 5 مشاريع تقنية ناجحة تحت قيادتي.",
            about_list_3: "نائبة رئيس النادي مع استمرار القيادة المجتمعية.",
            section_interests: "الاهتمامات",
            interest_ai: "الذكاء الاصطناعي",
            interest_robotics: "الروبوتات",
            interest_systems: "تطوير الأنظمة",
            interest_ux: "تجربة المستخدم",
            section_achievements: "الإنجازات",
            achieve_1_title: "شهادة أمن المعلومات",
            achieve_1_subtitle: "برنامج مكثف",
            achieve_1_desc: "أتممت برنامجًا مكثفًا في أمن المعلومات ركز على حماية الأنظمة والبيانات. التجربة عززت فهمي للبنية الآمنة للأنظمة التقنية الحديثة.",
            achieve_2_title: "نموذج SLAM",
            achieve_2_subtitle: "باستخدام MATLAB",
            achieve_2_desc: "طوّرت النظام الذكي لغواصة ذاتية باستخدام ROS وتقنيات الذكاء الاصطناعي لاتخاذ قرارات مستقلة. كما بنيت نموذج SLAM عبر MATLAB لتمكينها من رسم الخرائط وتحديد موقعها في البيئات غير المعروفة.",
            achieve_3_title: "50+ ساعة",
            achieve_3_subtitle: "تطوع",
            achieve_3_desc: "كرّست أكثر من 50 ساعة تطوعية في الورش والمشاريع التقنية داخل النادي. كانت هذه المرحلة الأساس الحقيقي لتطوير مهاراتي البرمجية عمليًا.",
            achieve_4_title: "قائد تقني",
            achieve_4_subtitle: "قيادة +300 عضو",
            achieve_4_desc: "قدت المجتمع التقني في نادي البرمجة والذكاء الاصطناعي لأكثر من 300 عضو، مع الإشراف على تنفيذ 5 مشاريع تقنية. التجربة عززت مهاراتي في القيادة التقنية وبناء فرق تعمل نحو هدف مشترك.",
            section_services: "الخدمات",
            service_1_title: "قيادة الفرق التقنية",
            service_1_desc: "إدارة وتوجيه الفرق لتحقيق أهداف المشروع بكفاءة.",
            service_2_title: "تطوير حلول AI",
            service_2_desc: "بناء نماذج ذكاء اصطناعي مخصصة لحل مشكلات محددة.",
            service_3_title: "بناء نماذج أولية",
            service_3_desc: "تحويل الأفكار إلى نماذج عمل (Prototyping) قابلة للاختبار.",
            section_contact: "تواصل معي",
            label_name: "الاسم",
            label_email: "البريد الإلكتروني",
            label_message: "الرسالة",
            btn_send: "إرسال الرسالة"
        },
        en: {
            logo: "ᗅℬ",
            nav_home: "Home",
            nav_about: "About",
            nav_interests: "Interests",
            nav_achievements: "Achievements",
            nav_services: "Services",
            nav_contact: "Contact",
            hero_greeting: "Hello, I'm",
            hero_title: "Abeer Al-Ghamdi",
            hero_subtitle: "Computer Engineering Student | AI & Robotics Enthusiast",
            hero_description: "Computer Engineering student leading technical initiatives and transforming AI concepts into impactful real-world solutions.",
            stat_members: "Members Led",
            stat_projects: "Projects",
            stat_leadership: "Leadership Roles",
            btn_contact: "Contact Me",
            btn_more: "More About Me",
            section_about: "About Me",
            about_text: "I am a passionate Computer Engineering student, always striving to leverage technology to solve real-world problems. I believe in the power of the technical community and teamwork to achieve innovation.",
            about_list_1: "Leading the technical community at the Programming & AI Club (+300 members).",
            about_list_2: "Successfully executed 5 technical projects under my leadership.",
            about_list_3: "Club Vice President while continuing community leadership.",
            section_interests: "Interests",
            interest_ai: "Artificial Intelligence",
            interest_robotics: "Robotics",
            interest_systems: "Systems Development",
            interest_ux: "User Experience",
            section_achievements: "Achievements",
            achieve_1_title: "Information Security Certificate",
            achieve_1_subtitle: "Intensive Program",
            achieve_1_desc: "Completed an intensive program in Information Security focused on system and data protection. This experience enhanced my understanding of secure architecture for modern technical systems.",
            achieve_2_title: "SLAM Model",
            achieve_2_subtitle: "using MATLAB",
            achieve_2_desc: "Developed the intelligent system for an autonomous submarine using ROS and AI techniques for autonomous decision-making. Also built a SLAM model via MATLAB to enable mapping and localization in unknown environments.",
            achieve_3_title: "50+ Hours",
            achieve_3_subtitle: "Volunteering",
            achieve_3_desc: "Dedicated over 50 volunteer hours in workshops and technical projects within the club. This phase was the true foundation for practically developing my programming skills.",
            achieve_4_title: "Tech Leader",
            achieve_4_subtitle: "Leading 300+ Members",
            achieve_4_desc: "Led the technical community at the Programming & AI Club for over 300 members, overseeing the execution of 5 technical projects. This experience strengthened my skills in technical leadership and building teams working towards a common goal.",
            section_services: "Services",
            service_1_title: "Tech Team Leadership",
            service_1_desc: "Managing and guiding teams to achieve project goals efficiently.",
            service_2_title: "AI Solutions Development",
            service_2_desc: "Building custom AI models to solve specific problems.",
            service_3_title: "Prototyping",
            service_3_desc: "Transforming ideas into working models (Prototyping) ready for testing.",
            section_contact: "Contact Me",
            label_name: "Name",
            label_email: "Email",
            label_message: "Message",
            btn_send: "Send Message"
        }
    };

    const langToggleBtn = document.getElementById('lang-toggle');
    const themeToggleBtn = document.getElementById('theme-toggle');
    let currentLang = localStorage.getItem('lang') || 'ar';
    let currentTheme = localStorage.getItem('theme') || 'light';

    function setLanguage(lang) {
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        
        // Update text content
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });

        // Update button text
        if (langToggleBtn) {
            langToggleBtn.textContent = lang === 'ar' ? 'English' : 'عربي';
        }
        
        localStorage.setItem('lang', lang);
        currentLang = lang;
    }

    function setTheme(theme) {
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            if (themeToggleBtn) {
                themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
            }
        } else {
            document.documentElement.removeAttribute('data-theme');
            if (themeToggleBtn) {
                themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
            }
        }
        localStorage.setItem('theme', theme);
        currentTheme = theme;
    }

    setLanguage(currentLang);
    setTheme(currentTheme);

    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            const newLang = currentLang === 'ar' ? 'en' : 'ar';
            setLanguage(newLang);
        });
    }
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const next = currentTheme === 'dark' ? 'light' : 'dark';
            setTheme(next);
        });
    }

    // --- End Translations ---

    // Navigation Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav-link');
    const header = document.querySelector('.header');

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
        });
    }

    // Close menu when link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            if (mobileMenuToggle) mobileMenuToggle.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Header Scroll Effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // Reveal on Scroll Animation
    const observerOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.add('fade-in-section');
        observer.observe(section);
    });
    
    // Add simple fade-in CSS class dynamically if not present
    if (!document.getElementById('dynamic-animations')) {
        const style = document.createElement('style');
        style.id = 'dynamic-animations';
        style.textContent = `
            .fade-in-section {
                opacity: 0;
                transform: translateY(30px);
                transition: opacity 0.8s ease-out, transform 0.8s ease-out;
            }
            .fade-in-section.visible {
                opacity: 1;
                transform: translateY(0);
            }
        `;
        document.head.appendChild(style);
    }

    // Dynamic Copyright Year
    const yearSpan = document.querySelector('#current-year');
    if(yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
    
    // Form Submission (Mock)
    const contactForm = document.getElementById('contactForm');
    if(contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const recipient = 'aabeer.azez@gmail.com';
            const lang = document.documentElement.lang || 'ar';
            const name = (document.getElementById('name')?.value || '').trim();
            const email = (document.getElementById('email')?.value || '').trim();
            const msg = (document.getElementById('message')?.value || '').trim();

            const subject = lang === 'ar'
                ? `رسالة جديدة من ${name || 'زائر'}`
                : `New message from ${name || 'Visitor'}`;

            const bodyLines = lang === 'ar'
                ? [
                    'تفاصيل الرسالة:',
                    `الاسم: ${name || '-'}`,
                    `البريد: ${email || '-'}`,
                    '',
                    msg
                  ]
                : [
                    'Message details:',
                    `Name: ${name || '-'}`,
                    `Email: ${email || '-'}`,
                    '',
                    msg
                  ];

            const body = bodyLines.join('\n');
            const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(recipient)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            const mailto = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            let opened = null;
            try { opened = window.open(gmailUrl, '_blank'); } catch (e) {}
            if (!opened) {
                window.location.href = mailto;
            }
            const info = lang === 'ar'
                ? 'تم فتح مسودة بريد للإرسال. إذا لم تظهر، سيفتح تطبيق البريد على جهازك.'
                : 'A mail draft has been opened. If not visible, your default mail app will open.';
            alert(info);

            contactForm.reset();
        });
    }
});

// Achievement Toggle Details (Global function for onclick)
function toggleDetails(card) {
    // Check if card is already active
    const isActive = card.classList.contains('active');
    
    // Close all other open cards first (Accordion behavior)
    document.querySelectorAll('.achievement-card.active').forEach(activeCard => {
        if (activeCard !== card) {
            activeCard.classList.remove('active');
            const details = activeCard.querySelector('.achievement-details');
            if (details) {
                details.style.maxHeight = null;
                details.style.opacity = '0';
            }
        }
    });

    // Toggle current card
    const details = card.querySelector('.achievement-details');
    if (details) {
        if (isActive) {
            card.classList.remove('active');
            details.style.maxHeight = null;
            details.style.opacity = '0';
        } else {
            card.classList.add('active');
            details.style.maxHeight = details.scrollHeight + "px";
            details.style.opacity = '1';
        }
    }
}
