// /js/global.js

// 1. قاموس الترجمة الكامل (بما في ذلك جميع المفاتيح من كل الصفحات)
const translations = {
    'ar': {
        'site_name': 'المرساة الرقمية', 'nav_tagline': 'من أنت حين تنطفئ الشاشة؟', 'nav_tracks': 'المسارات', 'nav_dashboard': 'لوحة القيادة', 'nav_blog': 'المدونة', 'nav_join': 'احجز الكتاب', 'nav_home': 'الرئيسية', 'nav_resources': 'المكتبة',
        'resources_title': 'المكتبة المجانية', 'resources_header': 'المكتبة المجانية (حقيبة الأدوات)', 'resources_subtitle': 'موارد عملية لمساعدتك على بدء رحلة السيادة الرقمية اليوم، بدون التزام.',
        'res_1_title': 'دليل الطوارئ الرقمية', 'res_1_desc': 'كيف تتعامل مع لحظات الانجراف التلقائي الشديد.', 'res_btn_download': 'تحميل الآن (PDF)',
        'res_2_title': 'أداة تحديد القيم الجوهرية', 'res_2_desc': 'اكتشف مرساتك الداخلية قبل أن تبدأ الرحلة.', 'res_btn_use': 'ابدأ الاستخدام (تفاعلي)',
        'res_3_title': 'وثيقة عهد التحرر', 'res_3_desc': 'اطبعها ووقّعها لتبدأ التزامك نحو الذات.', 'res_btn_sign': 'توقيع العهد &larr;',
        'res_4_title': 'دفتر التمارين (نموذج)', 'res_4_desc': 'عينة من التمارين العملية للأسابيع الأولى.',
        'resources_cta_header': 'جاهز للانطلاق؟', 'resources_cta_desc': 'هذه مجرد البداية. احصل على البرنامج الكامل وجميع أدوات التتبع.',
        'hero_title': 'من أنت حين <span class="text-yellow-300">تنطفئ الشاشة</span>؟', 'hero_subtitle': 'دليل الشباب للقيم والتركيز والهدف في اقتصاد الانتباه.',
        'hero_badge': '✨ الإصدار الجديد 2025', 'hero_btn_start': 'احجز الكتاب والرحلة الآن', 'hero_btn_emergency': 'دليل الطوارئ',
        'roadmap_title': 'برنامج الـ 90 يوماً', 'roadmap_desc': 'خطة عملية لتحويل الوعي الرقمي إلى ممارسة يومية.',
        'month1_title': 'الشهر 1: الصحوة الرقمية', 'month1_goal': 'الهدف: خفض الإلهاء بنسبة 30%',
        'month2_title': 'الشهر 2: بناء النظام', 'month2_goal': 'الهدف: إنشاء نظام إنتاجية مستدام',
        'month3_title': 'الشهر 3: التأثير', 'month3_goal': 'الهدف: مساعدة شخص واحد',
        'tools_title': 'حقيبة الأدوات الرقمية', 'btn_free_tools': 'اكتشف المكتبة المجانية',
        'author_label': 'عن المؤلفة', 'author_name': 'نوال غرباوي', 'author_bio': 'رائدة في مجال التحول الرقمي الواعي، وخبيرة في مواجهة تحديات التشتت الرقمي. هذا الكتاب لم ينبع من دراسات أكاديمية فحسب، بل من تجربة شخصية عميقة في استعادة السيطرة على الوقت والقيم.',
        'pledge_title': 'تعهد السيادة الرقمية', 'pledge_text': '"أتعهد أمام نفسي بأن تكون القيم الخمس التي أؤمن بها هي الفلتر الأساسي لجميع قراراتي اليومية، خاصة في العالم الرقمي."', 'pledge_btn': 'أوقع العهد الآن ✍️',
        'page_title': 'مسار السيادة الرقمية | الأكاديمية الرقمية',
        'track_badge': 'المسار الأول: الأساس', 'track_title': 'مسار السيادة الرقمية 🛡️', 'track_subtitle': 'استعد انتباهك ووقتك وقيمتك في رحلة موجهة لمدة 90 يوماً.',
        'outcomes_header': 'لماذا هذا المسار؟',
        'outcome_1': 'خفض التشتت', 'outcome_1_desc': 'بنسبة 50% على الأقل',
        'outcome_2': 'نظام الأهداف', 'outcome_2_desc': 'بناء نظام إنتاجية شخصي',
        'outcome_3': 'السلام الداخلي', 'outcome_3_desc': 'التحرر من FOMO',
        'roadmap_header': 'خريطة الرحلة التفصيلية',
        'phase1_title': 'المرحلة 1: الصحوة (أسابيع 1-4)', 'phase1_desc': 'تشخيص الواقع، اكتشاف "المرساة" (القيم)، وبناء الحصانة الداخلية.', 'phase1_btn': 'ابدأ الأسبوع الأول &larr;',
        'phase2_title': 'المرحلة 2: بناء النظام (أسابيع 5-8)', 'phase2_desc': 'إنشاء نظام إنتاجية رقمي وشخصي مستدام. إدارة الانتباه، واستغلال الوقت بعمق.', 'phase2_btn': 'اكتشف الأسبوع الخامس &larr;',
        'phase3_title': 'المرحلة 3: القيادة (أسابيع 9-12)', 'phase3_desc': 'تحويل الإنجاز الشخصي إلى تأثير مجتمعي. بناء الإرث الرقمي الواعي.', 'phase3_btn': 'انطلق نحو الأسبوع التاسع &larr;',
        'phase_end_title': 'إتقان السيادة', 'phase_end_desc': 'الوصول إلى مستوى السيادة الرقمية والاحتفال بالرحلة!',
        'pricing_header': 'اختر استثمارك في نفسك', 'plan1_title': 'النسخة الذاتية', 'plan1_desc': 'وصول كامل للمواد، دعم المجتمع العام.', 'plan_btn': 'اختر الخطة', 'plan2_title': 'النسخة الموجهة', 'plan2_desc': 'بالإضافة إلى 4 جلسات توجيه فردية وتصحيح الواجبات.', 'plan_btn_premium': 'ابدأ الآن',
        'footer_copy': '© 2025 Digital Anchor Project. جميع الحقوق محفوظة.',
    },
    'en': {
        'site_name': 'Digital Anchor', 'nav_tagline': 'Who are you when the screen goes off?', 'nav_tracks': 'Tracks', 'nav_dashboard': 'Dashboard', 'nav_blog': 'Blog', 'nav_join': 'Order Book', 'nav_home': 'Home', 'nav_resources': 'Library',
        'resources_title': 'Free Library', 'resources_header': 'Free Library (Toolbox)', 'resources_subtitle': 'Practical resources to help you start your digital sovereignty journey today, without commitment.',
        'res_1_title': 'Digital Emergency Guide', 'res_1_desc': 'How to deal with moments of severe automatic drift.', 'res_btn_download': 'Download Now (PDF)',
        'res_2_title': 'Core Value Identification Tool', 'res_2_desc': 'Discover your inner anchor before you start the journey.', 'res_btn_use': 'Start Using (Interactive)',
        'res_3_title': 'Pledge of Liberation Document', 'res_3_desc': 'Print and sign it to begin your commitment to self.', 'res_btn_sign': 'Sign Pledge &larr;',
        'res_4_title': 'Workbook (Sample)', 'res_4_desc': 'A sample of the practical exercises for the first weeks.',
        'resources_cta_header': 'Ready to Launch?', 'resources_cta_desc': 'This is just the beginning. Get the full program and all tracking tools.',
        'hero_title': 'Who are you when the screen <span class="text-yellow-300">goes off</span>?', 'hero_subtitle': 'A guide to values, focus, and purpose in the attention economy.',
        'hero_badge': '✨ New Edition 2025', 'hero_btn_start': 'Order Book & Journey Now', 'hero_btn_emergency': 'Emergency Guide',
        'roadmap_title': 'The 90-Day Program', 'roadmap_desc': 'A practical roadmap to turn digital awareness into daily practice.',
        'month1_title': 'Month 1: Digital Awakening', 'month1_goal': 'Goal: Reduce distraction by 30%',
        'month2_title': 'Month 2: System Building', 'month2_goal': 'Goal: Sustainable productivity system',
        'month3_title': 'Month 3: Impact', 'month3_goal': 'Goal: Help one person',
        'tools_title': 'Digital Toolkit', 'btn_free_tools': 'Discover Free Library',
        'author_label': 'About the Author', 'author_name': 'Nawal Gharbawi', 'author_bio': 'A pioneer in conscious digital transformation. This book emerged from deep personal experience in regaining control over time and values.',
        'pledge_title': 'Digital Sovereignty Pledge', 'pledge_text': '"I pledge to myself that my core values will be the primary filter for all my daily decisions, especially in the digital world."', 'pledge_btn': 'Sign Pledge Now ✍️',
        'page_title': 'Digital Sovereignty Track | Digital Academy',
        'track_badge': 'Track 1: Foundation', 'track_title': 'Digital Sovereignty Track 🛡️', 'track_subtitle': 'Reclaim your focus, time, and value in a guided 90-day journey.',
        'outcomes_header': 'Why This Track?',
        'outcome_1': 'Reduce Distraction', 'outcome_1_desc': 'By at least 50%',
        'outcome_2': 'Goal System', 'outcome_2_desc': 'Build a personal productivity system',
        'outcome_3': 'Inner Peace', 'outcome_3_desc': 'Freedom from FOMO',
        'roadmap_header': 'Detailed Journey Map',
        'phase1_title': 'Phase 1: Awakening (Weeks 1-4)', 'phase1_desc': 'Diagnose reality, discover your "Anchor" (Values), and build inner immunity.', 'phase1_btn': 'Start Week 1 &larr;',
        'phase2_title': 'Phase 2: System Building (Weeks 5-8)', 'phase2_desc': 'Create a sustainable digital and personal productivity system. Manage attention and utilize deep work.', 'phase2_btn': 'Discover Week 5 &larr;',
        'phase3_title': 'Phase 3: Leadership (Weeks 9-12)', 'phase3_desc': 'Convert personal achievement into community impact. Build a conscious digital legacy.', 'phase3_btn': 'Launch into Week 9 &larr;',
        'phase_end_title': 'Sovereignty Mastery', 'phase_end_desc': 'Achieve digital sovereignty and celebrate the journey!',
        'pricing_header': 'Choose Your Investment in Yourself', 'plan1_title': 'Self-Guided Edition', 'plan1_desc': 'Full access to materials, public community support.', 'plan_btn': 'Choose Plan', 'plan2_title': 'Guided Edition', 'plan2_desc': 'Plus 4 individual coaching sessions and assignment review.', 'plan_btn_premium': 'Start Now',
        'footer_copy': '© 2025 Digital Anchor Project. All Rights Reserved.',
    },
    // ... (أضف اللغات fr و de هنا بنفس الطريقة) ...
};

// 2. معدلات تحويل العملة
const RATES = { 'SAR': { r: 1, s: 'SAR' }, 'USD': { r: 0.27, s: '$' }, 'EUR': { r: 0.25, s: '€' } };

// 3. وظيفة تحويل العملة
function convertCurrency(curr) {
    const rate = RATES[curr] ? RATES[curr].r : 1;
    const symbol = RATES[curr] ? RATES[curr].s : 'SAR';
    document.querySelectorAll('.price-display').forEach(el => {
        const base = el.getAttribute('data-base-price');
        if (base) el.textContent = Math.round(parseFloat(base) * rate);
    });
    document.querySelectorAll('.currency-symbol').forEach(el => {
        el.textContent = symbol;
    });
    document.querySelectorAll('#curr-select').forEach(select => { if(select) select.value = curr; });
}

// 4. وظيفة تعيين اللغة
function setLanguage(lang) {
    const isRTL = lang === 'ar';
    document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', lang);
    
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key]; 
        }
    });

    document.querySelectorAll('#lang-select').forEach(select => { if(select) select.value = lang; });
    
    // تعيين العملة الافتراضية بناءً على اللغة
    const currencyMap = {'ar': 'SAR', 'en': 'USD', 'fr': 'EUR', 'de': 'EUR'};
    const targetCurrency = currencyMap[lang] || 'USD';
    convertCurrency(targetCurrency);
    
    localStorage.setItem('preferredLang', lang);
}

// 5. وظيفة تحميل مكون HTML
async function loadComponent(id, url) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Failed to load ${url}: ${response.statusText}`);
        const html = await response.text();
        // إزالة الكود المكرر في الـ includes/navbar.html
        document.getElementById(id).innerHTML = html.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, ""); 
        return true;
    } catch (error) {
        console.error("Error loading component:", error);
        return false;
    }
}

// 6. تهيئة الصفحة عند التحميل
document.addEventListener('DOMContentLoaded', async () => {
    // 6.1. تحميل الـ NavBar والـ Footer
    // نستخدم المسار النسبي (includes)
    await loadComponent('navbar-placeholder', 'includes/navbar.html');
    await loadComponent('footer-placeholder', 'includes/footer.html');

    // 6.2. تطبيق اللغة الافتراضية بعد تحميل المكونات
    const defaultLang = localStorage.getItem('preferredLang') || 'ar';
    setLanguage(defaultLang);
    
    // 6.3. تفعيل قائمة الجوال (يجب أن يكون زر القائمة موجوداً الآن داخل الـ navbar-placeholder)
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
});