/**
 * =========================================================
 * i18n.js - كود تعدد اللغات المشترك لجميع صفحات الموقع
 * الهدف: جمع قواميس ودوال الترجمة في مكان واحد لسهولة الصيانة.
 * =========================================================
 */

// 1. قاموس الترجمة الكامل
// تم تجميع المفاتيح المشتركة من ملفات index.html و buy.html و guide.html
const translations = {
    // ----------------------
    // اللغة العربية (ar)
    // ----------------------
    'ar': {
        // مفاتيح مشتركة (قائمة التنقل، إلخ.)
        'site_name': 'المرساة الرقمية',
        'nav_tracks': 'المسارات', 
        'nav_dashboard': 'لوحة القيادة', 
        'nav_blog': 'المدونة', 
        'nav_join': 'احجز الكتاب',
        'hero_btn_emergency': 'دليل الطوارئ',
        
        // مفاتيح خاصة بصفحة index.html
        'page_title': 'من أنت حين تنطفئ الشاشة؟ | المرساة الرقمية',
        'hero_badge': '✨ الإصدار الجديد 2025', 
        'hero_title': 'من أنت حين <span class="text-yellow-300">تنطفئ الشاشة</span>؟', 
        'hero_subtitle': 'دليل الشباب للقيم والتركيز والهدف في اقتصاد الانتباه.',
        'hero_btn_start': 'احجز الكتاب والرحلة الآن', 
        'author_label': 'عن المؤلفة', 
        'author_name': 'نوال غرباوي', 
        'roadmap_title': 'برنامج الـ 90 يوماً', 'roadmap_desc': 'خطة عملية لتحويل الوعي الرقمي إلى ممارسة يومية.',
        'month1_title': 'الشهر 1: الصحوة الرقمية', 'month1_goal': 'الهدف: خفض الإلهاء بنسبة 30%',
        'month2_title': 'الشهر 2: بناء النظام', 'month2_goal': 'الهدف: إنشاء نظام إنتاجية مستدام',
        'month3_title': 'الشهر 3: التأثير', 'month3_goal': 'الهدف: مساعدة شخص واحد',
        'tools_title': 'أدوات مجانية لتبدأ الآن', 'btn_free_tools': 'اكتشف المكتبة المجانية',
        'pledge_title': 'تعهد السيادة الرقمية', 'pledge_text': '"أتعهد أمام نفسي بأن تكون القيم الخمس التي أؤمن بها هي الفلتر الأساسي لجميع قراراتي اليومية، خاصة في العالم الرقمي."', 'pledge_btn': 'أوقع العهد الآن ✍️',
        
        // مفاتيح خاصة بصفحة buy.html
        'buy_title': 'شراء الحزمة | المرساة الرقمية',
        'package_title': 'حزمة السيادة الرقمية (بريميوم)',
        'price_currency': 'العملة',
        'price_regular': 'السعر المعتاد',
        'price_today': 'سعر اليوم فقط',
        'benefit1': 'نسخة ورقية من الكتاب',
        'benefit2': 'وصول فوري لملف PDF',
        'benefit3': 'وصول مدى الحياة للمنصة التعليمية',
        'cta_button': 'اشترِ الآن واستعد انتباهك',
        'currency_note': 'الأسعار تقريبية وقد تتغير حسب العملة المختارة.',
        
        // مفاتيح خاصة بصفحة guide.html
        'guide_title': 'دليل المنهجية | المرساة الرقمية',
        'guide_header': 'منهجية المرساة الرقمية', 
        'guide_subtitle': 'دليل خطوة بخطوة للسيادة الرقمية.',
        'step1_title': 'التحرر والالتزام',
        'step1_text1': 'استخدم', 'link_emergency': 'دليل الطوارئ', 'step1_text2': 'ووقع على', 'link_covenant': 'وثيقة العهد', 'step1_text3': 'لتثبيت نفسك.',
        'step2_title': 'القيادة والإنتاجية', 
        'step2_li1': 'راقب وقت الشاشة بوعي.',
        'step2_li2': 'خصص وقتاً غير متصل بالإنترنت.',
        'step3_title': 'المجتمع والدعم', 
        'step3_li1': 'شارك إنجازاتك.',
        'step3_li2': 'اطلب الدعم والمساعدة.',

        // مفاتيح خاصة بصفحة book-preorder.html
        'preorder_title': 'حجز الكتاب | المرساة الرقمية',
        'book_header': 'الكتاب: "من أنت حين تنطفئ الشاشة؟"', 
        'book_subtitle': 'دليلك للتركيز.',
        'preorder_price': 'سعر الحجز المسبق:', 
        'regular_price': 'السعر المعتاد: 24.99 $', 
        'preorder_note': 'توصيل مجاني في الشرق الأوسط.',
    },
    
    // ----------------------
    // اللغة الإنجليزية (en)
    // ----------------------
    'en': {
        // مفاتيح مشتركة
        'site_name': 'Digital Anchor',
        'nav_tracks': 'Tracks', 
        'nav_dashboard': 'Dashboard', 
        'nav_blog': 'Blog', 
        'nav_join': 'Order Book',
        'hero_btn_emergency': 'Emergency Guide',

        // مفاتيح خاصة بصفحة index.html
        'page_title': 'Who are you when the screen goes off? | Digital Anchor', 
        'hero_badge': '✨ New Edition 2025',
        'hero_title': 'Who are you when the screen <span class="text-yellow-300">goes off</span>?', 
        'hero_subtitle': 'A guide to values, focus, and purpose in the attention economy.',
        'hero_btn_start': 'Order Book & Journey Now', 
        'author_label': 'About the Author', 
        'author_name': 'Nawal Gharbawi',
        'roadmap_title': 'The 90-Day Program', 'roadmap_desc': 'A practical roadmap to turn digital awareness into daily practice.',
        'month1_title': 'Month 1: Digital Awakening', 'month1_goal': 'Goal: Reduce distraction by 30%',
        'month2_title': 'Month 2: System Building', 'month2_goal': 'Goal: Sustainable productivity system',
        'month3_title': 'Month 3: Impact', 'month3_goal': 'Goal: Help one person',
        'tools_title': 'Free Tools to Start Now', 'btn_free_tools': 'Discover the Free Library',
        'pledge_title': 'Digital Sovereignty Pledge', 'pledge_text': '"I pledge to myself that my core values will be the primary filter for all my daily decisions, especially in the digital world."', 'pledge_btn': 'Sign Pledge Now ✍️',
        
        // مفاتيح خاصة بصفحة buy.html
        'buy_title': 'Purchase Package | Digital Anchor',
        'package_title': 'Digital Sovereignty Package (Premium)',
        'price_currency': 'Currency',
        'price_regular': 'Regular Price',
        'price_today': 'Today\'s Price Only',
        'benefit1': 'Physical Copy of the Book',
        'benefit2': 'Instant PDF Access',
        'benefit3': 'Lifetime Access to the Learning Platform',
        'cta_button': 'Buy Now and Reclaim Your Focus',
        'currency_note': 'Prices are approximate and may change based on the selected currency.',
        
        // مفاتيح خاصة بصفحة guide.html
        'guide_title': 'Methodology Guide | Digital Anchor',
        'guide_header': 'Digital Anchor Methodology', 
        'guide_subtitle': 'A step-by-step guide to digital sovereignty.',
        'step1_title': 'Liberation & Commitment',
        'step1_text1': 'Use the', 'link_emergency': 'Emergency Guide', 'step1_text2': 'and sign the', 'link_covenant': 'Pledge Document', 'step1_text3': 'to set your anchor.',
        'step2_title': 'Leadership & Productivity', 
        'step2_li1': 'Consciously monitor your screen time.',
        'step2_li2': 'Schedule offline focus time.',
        'step3_title': 'Community & Support', 
        'step3_li1': 'Share your success.',
        'step3_li2': 'Seek support.',
        
        // مفاتيح خاصة بصفحة book-preorder.html
        'preorder_title': 'Book Pre-Order | Digital Anchor',
        'book_header': 'The Book: "Who are you when the screen goes off?"', 
        'book_subtitle': 'Your Guide to Focus.',
        'preorder_price': 'Pre-Order Price:', 
        'regular_price': 'Regular Price: $24.99', 
        'preorder_note': 'Free shipping in the Middle East.',
    },
    
    // ----------------------
    // اللغة الفرنسية (fr) 
    // ----------------------
    'fr': {
        // مفاتيح مشتركة
        'site_name': 'L\'Ancre Numérique', 'nav_tracks': 'Parcours', 'nav_dashboard': 'Tableau de bord', 'nav_blog': 'Blog', 'nav_join': 'Réserver', 'hero_btn_emergency': 'Guide d\'urgence',
        // مفاتيح index
        'page_title': 'Qui êtes-vous quand l\'écran s\'éteint ?', 'hero_badge': '✨ Nouvelle Édition 2025', 'hero_title': 'Qui êtes-vous quand l\'écran <span class="text-yellow-300">s\'éteint</span> ?', 'hero_subtitle': 'Un guide sur les valeurs et la concentration dans l\'économie de l\'attention.', 'hero_btn_start': 'Commander Livre & Parcours', 'author_label': 'À propos de l\'auteure', 'author_name': 'Nawal Gharbawi', 'roadmap_title': 'Programme de 90 jours', 'roadmap_desc': 'Feuille de route pratique pour transformer la conscience numérique en pratique quotidienne.', 'month1_title': 'Mois 1: Éveil Numérique', 'month1_goal': 'Objectif: Réduire la distraction de 30%', 'month2_title': 'Mois 2: Construction du Système', 'month2_goal': 'Objectif: Système de productivité durable', 'month3_title': 'Mois 3: Impact', 'month3_goal': 'Objectif: Aider une personne', 'tools_title': 'Outils Gratuits', 'btn_free_tools': 'Découvrez la Bibliothèque Gratuite', 'pledge_title': 'Engagement de Souveraineté', 'pledge_text': '"Je m\'engage à ce que mes valeurs fondamentales soient le filtre principal de toutes mes décisions quotidiennes, surtout dans le monde numérique."', 'pledge_btn': 'Signer l\'engagement',

        // مفاتيح buy
        'buy_title': 'Acheter Forfait | L\'Ancre Numérique', 'package_title': 'Forfait Souveraineté Numérique', 'price_currency': 'Devise', 'price_regular': 'Prix Régulier', 'price_today': 'Prix Aujourd\'hui Seulement', 'benefit1': 'Copie Physique', 'benefit2': 'Accès PDF Instantané', 'benefit3': 'Accès à vie à la Plateforme', 'cta_button': 'Acheter Maintenant', 'currency_note': 'Les prix sont approximatifs.',

        // مفاتيح guide
        'guide_title': 'Guide Méthodologique | L\'Ancre Numérique', 'guide_header': 'Méthodologie de l\'Ancre Numérique', 'guide_subtitle': 'Un guide étape par étape.', 'step1_title': 'Libération & Engagement', 'step1_text1': 'Utilisez le', 'link_emergency': 'Guide d\'urgence', 'step1_text2': 'et signez le', 'link_covenant': 'Document d\'Engagement', 'step1_text3': 'pour vous ancrer.', 'step2_title': 'Leadership & Productivité', 'step2_li1': 'Surveillez votre temps d\'écran.', 'step2_li2': 'Planifiez du temps hors ligne.', 'step3_title': 'Communauté & Soutien', 'step3_li1': 'Partagez vos succès.', 'step3_li2': 'Cherchez du soutien.',
        
        // مفاتيح preorder
        'preorder_title': 'Précommande de Livre', 'book_header': 'Le Livre: "Qui êtes-vous quand l\'écran s\'éteint?"', 'book_subtitle': 'Votre Guide du Focus.', 'preorder_price': 'Prix de Précommande:', 'regular_price': 'Prix Régulier: 24.99 $', 'preorder_note': 'Livraison gratuite au Moyen-Orient.',
    },
    
    // ----------------------
    // اللغة الألمانية (de) 
    // ----------------------
    'de': {
        // مفاتيح مشتركة
        'site_name': 'Der Digitale Anker', 'nav_tracks': 'Pfade', 'nav_dashboard': 'Dashboard', 'nav_blog': 'Blog', 'nav_join': 'Buchen', 'hero_btn_emergency': 'Notfallleitfaden',
        // مفاتيح index
        'page_title': 'Wer bist du, wenn der Bildschirm ausgeht?', 'hero_badge': '✨ Neue Ausgabe 2025', 'hero_title': 'Wer bist du, wenn der Bildschirm <span class="text-yellow-300">ausgeht</span>?', 'hero_subtitle': 'Ein Leitfaden zu Werten und Fokus in der Aufmerksamkeitsökonomie.', 'hero_btn_start': 'Buch & Reise jetzt bestellen', 'author_label': 'Über die Autorin', 'author_name': 'Nawal Gharbawi', 'roadmap_title': 'Das 90-Tage-Programm', 'roadmap_desc': 'Eine praktische Roadmap, um digitales Bewusstsein in tägliche Praxis umzusetzen.', 'month1_title': 'Monat 1: Digitales Erwachen', 'month1_goal': 'Ziel: Ablenkung um 30% reduzieren', 'month2_title': 'Monat 2: Systemaufbau', 'month2_goal': 'Ziel: Nachhaltiges Produktivitätssystem schaffen', 'month3_title': 'Monat 3: Wirkung', 'month3_goal': 'Ziel: Einer Person helfen', 'tools_title': 'Kostenlose Tools', 'btn_free_tools': 'Kostenlose Bibliothek entdecken', 'pledge_title': 'Eid der Digitalen Souveränität', 'pledge_text': '"Ich verspreche mir selbst, dass meine Grundwerte der Hauptfilter für alle meine täglichen Entscheidungen sein werden, besonders in der digitalen Welt."', 'pledge_btn': 'Eid jetzt unterschreiben',

        // مفاتيح buy
        'buy_title': 'Paket Kaufen | Der Digitale Anker', 'package_title': 'Paket Digitale Souveränität', 'price_currency': 'Währung', 'price_regular': 'Regulärer Preis', 'price_today': 'Nur Heutiger Preis', 'benefit1': 'Physische Kopie', 'benefit2': 'Sofortiges PDF', 'benefit3': 'Lebenslanger Zugang zur Plattform', 'cta_button': 'Jetzt kaufen und Fokus zurückgewinnen', 'currency_note': 'Preise sind ungefähre Angaben.',

        // مفاتيح guide
        'guide_title': 'Methodik-Leitfaden | Der Digitale Anker', 'guide_header': 'Methodik des Digitalen Ankers', 'guide_subtitle': 'Ein Schritt-für-Schritt-Leitfaden.', 'step1_title': 'Befreiung & Verpflichtung', 'step1_text1': 'Nutzen Sie den', 'link_emergency': 'Notfallleitfaden', 'step1_text2': 'und unterzeichnen Sie das', 'link_covenant': 'Verpflichtungsdokument', 'step1_text3': 'um sich zu verankern.', 'step2_title': 'Führung & Produktivität', 'step2_li1': 'Überwachen Sie Ihre Bildschirmzeit bewusst.', 'step2_li2': 'Planen Sie Offline-Fokuszeit ein.', 'step3_title': 'Gemeinschaft & Unterstützung', 'step3_li1': 'Teilen Sie Erfolge.', 'step3_li2': 'Suchen Sie Unterstützung.',
        
        // مفاتيح preorder
        'preorder_title': 'Vorbestellen', 'book_header': 'Das Buch: "Wer bist du, wenn der Bildschirm ausgeht?"', 'book_subtitle': 'Ihr Leitfaden zum Fokus.', 'preorder_price': 'Vorbestellpreis:', 'regular_price': 'Normalpreis: 24.99 $', 'preorder_note': 'Kostenloser Versand im Nahen Osten.',
    }
};

// 2. دالة تغيير اللغة
function setLanguage(lang) {
    const isRTL = lang === 'ar';
    document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', lang);
    
    // تمرير على جميع العناصر التي تحتوي على مفتاح ترجمة
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            // نستخدم innerHTML هنا لأن بعض المفاتيح (مثل hero_title) تحتوي على وسم <span>
            el.innerHTML = translations[lang][key]; 
        }
    });

    // تحديث قوائم اللغة والعملة المنسدلة
    const currencyMap = {'ar': 'SAR', 'en': 'USD', 'fr': 'EUR', 'de': 'EUR'};
    const targetCurrency = currencyMap[lang] || 'USD';
    
    // تحديث جميع قوائم الاختيار في كل الصفحات
    document.querySelectorAll('[id^="lang-select"]').forEach(select => { 
        if(select) select.value = lang; 
    });
    
    document.querySelectorAll('[id^="curr-select"]').forEach(select => { 
        if(select) select.value = targetCurrency;
    });

    // تحديث اتجاه النص العام
    document.body.style.textAlign = isRTL ? 'right' : 'left';
    
    // حفظ اللغة المفضلة للمستخدم
    localStorage.setItem('preferredLang', lang);
}

// 3. دالة تبديل قائمة الموبايل (مشتركة في index و buy)
const setupMobileMenu = () => {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
};


// 4. دالة تهيئة الصفحة عند التحميل (يتم استدعاؤها في HTML)
const initializePage = () => {
    const defaultLang = localStorage.getItem('preferredLang') || 'ar';
    setLanguage(defaultLang);
    setupMobileMenu(); // سيتم استدعاؤها في الصفحات التي تحتاجها فقط
};

// ********** ملاحظة: لا تستدعي initializePage() هنا **********
// يجب استدعاء initializePage() داخل <script> في نهاية ملف HTML