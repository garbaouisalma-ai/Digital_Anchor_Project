/**
 * =================================================================
 * i18n.js - ملف مشترك لإدارة اللغة والعملة وقائمة الموبايل
 * تم التحديث: إضافة هياكل الترجمة للغات الفرنسية والألمانية
 * =================================================================
 */
const translations = {
    'ar': {
        // مفاتيح index.html
        'page_title': 'من أنت حين تنطفئ الشاشة؟ | المرساة الرقمية',
        'site_name': 'المرساة الرقمية', 
        'nav_tracks': 'المسارات', 
        'nav_dashboard': 'لوحة القيادة', 
        'nav_blog': 'المدونة', 
        'nav_join': 'احجز الكتاب',
        'hero_badge': '✨ الإصدار الجديد 2025', 
        'hero_title': 'من أنت حين <span class="text-yellow-300">تنطفئ الشاشة</span>؟',
        'hero_subtitle': 'دليل الشباب للقيم والتركيز والهدف في اقتصاد الانتباه.',
        'hero_btn_start': 'احجز الكتاب والرحلة الآن', 
        'hero_btn_emergency': 'دليل الطوارئ',
        'author_label': 'عن المؤلفة', 
        'author_name': 'نوال غرباوي', 
        'author_bio': 'رائدة في مجال التحول الرقمي الواعي، وخبيرة في مواجهة تحديات التشتت الرقمي. هذا الكتاب لم ينبع من دراسات أكاديمية فحسب، بل من تجربة شخصية عميقة في استعادة السيطرة على الوقت والقيم.',
        'roadmap_title': 'برنامج الـ 90 يوماً', 
        'roadmap_desc': 'خطة عملية لتحويل الوعي الرقمي إلى ممارسة يومية.',
        'month1_title': 'الشهر 1: الصحوة الرقمية', 'month1_goal': 'الهدف: خفض الإلهاء بنسبة 30%',
        'month2_title': 'الشهر 2: بناء النظام', 'month2_goal': 'الهدف: إنشاء نظام إنتاجية مستدام',
        'month3_title': 'الشهر 3: التأثير', 'month3_goal': 'الهدف: مساعدة شخص واحد',
        'tools_title': 'أدوات مجانية لتبدأ الآن', 
        'pledge_title': 'تعهد السيادة الرقمية', 
        'pledge_text': '"أتعهد أمام نفسي بأن تكون القيم الخمس التي أؤمن بها هي الفلتر الأساسي لجميع قراراتي اليومية، خاصة في العالم الرقمي."', 
        'pledge_btn': 'أوقع العهد الآن ✍️',
        'btn_free_tools': 'اكتشف المكتبة المجانية',

        // مفاتيح track-sovereignty.html
        'nav_home': 'الرئيسية', // مفتاح مشترك
        'track_badge': 'المسار الأول: الأساس', 
        'track_title': 'مسار السيادة الرقمية 🛡️', 
        'track_subtitle': 'استعد انتباهك ووقتك وقيمتك في رحلة موجهة لمدة 90 يوماً.', 
        'meta_weeks': '13 أسبوعاً', 'meta_time': '60 دقيقة/يوم',
        'outcomes_header': 'لماذا هذا المسار؟', 'outcome_1': 'خفض التشتت', 'outcome_1_desc': 'بنسبة 50% على الأقل', 
        'outcome_2': 'نظام الأهداف', 'outcome_2_desc': 'بناء نظام إنتاجية شخصي', 
        'outcome_3': 'السلام الداخلي', 'outcome_3_desc': 'التحرر من FOMO',
        'roadmap_header': 'خريطة الرحلة التفصيلية', 
        'phase1_title': 'المرحلة 1: الصحوة (أسابيع 1-4)', 'phase1_desc': 'تشخيص الواقع، اكتشاف "المرساة" (القيم)، وبناء الحصانة الداخلية.', 'phase1_btn': 'ابدأ الأسبوع الأول &larr;',
        'phase2_title': 'المرحلة 2: البناء (أسابيع 5-8)', 'phase2_desc': 'تحويل الأحلام إلى أهداف ذكية (السهم)، هندسة البيئة، واستراتيجية التعامل مع الفشل.',
        'phase3_title': 'المرحلة 3: التمكين (أسابيع 9-13)', 'phase3_desc': 'فهم اقتصاد الانتباه، إتقان إدارة الوقت، والتتويج بمشروع التأثير المجتمعي.',
        'tools_support_header': 'الأدوات والدعم', 'tool1': 'دفتر السيادة', 'tool2': 'مقياس واقعك', 'tool3': 'مجتمع الدعم', 'tool4': 'لقاء الخميس الحي',
        'pricing_header': 'اختر استثمارك في نفسك', 'plan1_title': 'النسخة الذاتية', 'plan1_desc': 'وصول كامل للمواد، دعم المجتمع العام.', 
        'plan2_title': 'النسخة الموجهة', 'plan2_desc': 'بالإضافة إلى 4 جلسات توجيه فردية وتصحيح الواجبات.', 'plan_btn': 'اختر الخطة',
        'faq_header': 'أسئلة شائعة', 'footer_copy': '© 2025 Digital Anchor Academy. جميع الحقوق محفوظة.', 
        
        // مفاتيح resources.html
        'nav_book_now': 'احجز الكتاب',
        'header_title': 'المكتبة المجانية',
        'header_subtitle': 'أدوات، معلقات، وملصقات لتذكيرك بقيمك الرقمية يومياً.',
        'posters_title': '🖼️ المعلقات الجدارية',
        'posters_desc': 'صممت للطباعة وتعليقها في غرفتك أو مكتبك.',
        'p1_title': 'منطقة السيادة الشخصية', 'p1_desc': 'ملصق لتذكيرك بالمناطق الخالية من الهاتف.', 'p1_img_text': 'منطقة محظورة',
        'p2_title': 'افصل لتتصل', 'p2_desc': 'تذكير بأن الحياة الحقيقية تحدث بعيداً عن الشاشة.', 'p2_img_text': 'افصل.. لتتصل',
        'p3_title': 'بوصلة الانتباه', 'p3_desc': 'هل ما تفعله الآن يخدم هدف الـ 5 سنوات؟', 'p3_img_text': 'أين انتباهك؟',
        'btn_download': 'تحميل (PDF)',
        'tool1_title': 'دليل الطوارئ الرقمي', 'tool1_desc': 'للحظات الضعف والعودة للإدمان.',
        'tool2_title': 'دليل المنهجية (40/40/20)', 'tool2_desc': 'كيف تتعلم بذكاء وتطبق ما تتعلمه.',
        'stickers_title': '✨ ملصقات اللابتوب والهاتف',
        'sticker_text': 'أنا القبطان',
        'btn_print': 'طباعة الملصقات',
    },
    'en': {
        // مفاتيح index.html
        'page_title': 'Who are you when the screen goes off? | Digital Anchor', 
        'site_name': 'Digital Anchor', 
        'nav_tracks': 'Tracks', 
        'nav_dashboard': 'Dashboard', 
        'nav_blog': 'Blog', 
        'nav_join': 'Order Book',
        'hero_title': 'Who are you when the screen <span class="text-yellow-300">goes off</span>?', 
        'hero_subtitle': 'A guide to values, focus, and purpose in the attention economy.',
        'hero_badge': '✨ New Edition 2025',
        'hero_btn_start': 'Order Book & Journey Now', 
        'hero_btn_emergency': 'Emergency Guide',
        'author_label': 'About the Author', 
        'author_name': 'Nawal Gharbawi', 
        'author_bio': 'A pioneer in conscious digital transformation, and an expert in addressing digital distraction challenges. This book emerged from deep personal experience in regaining control over time and values.',
        'roadmap_title': 'The 90-Day Program', 
        'roadmap_desc': 'A practical roadmap to turn digital awareness into daily practice.',
        'month1_title': 'Month 1: Digital Awakening', 'month1_goal': 'Goal: Reduce distraction by 30%',
        'month2_title': 'Month 2: System Building', 'month2_goal': 'Goal: Sustainable productivity system',
        'month3_title': 'Month 3: Impact', 'month3_goal': 'Goal: Help one person',
        'tools_title': 'Free Tools to Start Now', 
        'pledge_title': 'Digital Sovereignty Pledge', 
        'pledge_text': '"I pledge to myself that my core values will be the primary filter for all my daily decisions, especially in the digital world."', 
        'pledge_btn': 'Sign Pledge Now ✍️',
        'btn_free_tools': 'Discover Free Library',

        // مفاتيح track-sovereignty.html
        'nav_home': 'Home', 
        'track_badge': 'Track 1: The Foundation', 
        'track_title': 'Digital Sovereignty Track 🛡️', 
        'track_subtitle': 'Reclaim your attention, time, and value in a 90-day guided journey.', 
        'meta_weeks': '13 Weeks', 'meta_time': '60 min/Day',
        'outcomes_header': 'Why This Track?', 'outcome_1': 'Reduce Distraction', 'outcome_1_desc': 'By at least 50%', 
        'outcome_2': 'Goal System', 'outcome_2_desc': 'Build a personal productivity system', 
        'outcome_3': 'Inner Peace', 'outcome_3_desc': 'Freedom from FOMO',
        'roadmap_header': 'Detailed Journey Map', 
        'phase1_title': 'Phase 1: Awakening (Wk 1-4)', 'phase1_desc': 'Diagnosis, discovering your "Anchor" (Values), and building internal immunity.', 'phase1_btn': 'Start Week 1 &larr;',
        'phase2_title': 'Phase 2: Building (Wk 5-8)', 'phase2_desc': 'SMART goals, environment engineering, and failure strategy.',
        'phase3_title': 'Phase 3: Empowerment (Wk 9-13)', 'phase3_desc': 'Understanding the attention economy, time mastery, and the impact project.',
        'tools_support_header': 'Tools & Support', 'tool1': 'Sovereignty Workbook', 'tool2': 'Reality Scale', 'tool3': 'Support Community', 'tool4': 'Live Webinar',
        'pricing_header': 'Invest In Yourself', 'plan1_title': 'Self-Paced', 'plan1_desc': 'Full material access, general community support.', 
        'plan2_title': 'Guided Version', 'plan2_desc': 'Includes 4 individual coaching sessions and assignment correction.', 'plan_btn': 'Choose Plan',
        'faq_header': 'FAQ', 'footer_copy': '© 2025 Digital Anchor Academy. All Rights Reserved.', 
        
        // مفاتيح resources.html
        'nav_book_now': 'Order Book',
        'header_title': 'Free Library',
        'header_subtitle': 'Tools, posters, and stickers to remind you of your digital values daily.',
        'posters_title': '🖼️ Wall Posters',
        'posters_desc': 'Designed to be printed and hung in your room or office.',
        'p1_title': 'Sovereignty Zone', 'p1_desc': 'A reminder of phone-free zones.', 'p1_img_text': 'No Phone Zone',
        'p2_title': 'Disconnect to Connect', 'p2_desc': 'Real life happens away from the screen.', 'p2_img_text': 'Connect',
        'p3_title': 'Attention Compass', 'p3_desc': 'Does this serve your 5-year goal?', 'p3_img_text': 'Focus?',
        'btn_download': 'Download (PDF)',
        'tool1_title': 'Digital Emergency Guide', 'tool1_desc': 'For moments of weakness and relapse.',
        'tool2_title': 'Methodology Guide', 'tool2_desc': 'How to learn smart and apply.',
        'stickers_title': '✨ Laptop & Phone Stickers',
        'sticker_text': 'I am Captain',
        'btn_print': 'Print Stickers'
    },
    // ----------------------
    // اللغة الفرنسية (fr) - تمت الإضافة
    // ----------------------
    'fr': {
        // مفاتيح index.html
        'page_title': 'Qui êtes-vous quand l\'écran s\'éteint ? | L\'Ancre Numérique',
        'site_name': 'L\'Ancre Numérique',
        'nav_tracks': 'Parcours',
        'nav_dashboard': 'Tableau de bord',
        'nav_blog': 'Blog',
        'nav_join': 'Commander le Livre',
        'hero_badge': '✨ Nouvelle Édition 2025',
        'hero_title': 'Qui êtes-vous quand l\'écran <span class="text-yellow-300">s\'éteint</span> ?',
        'hero_subtitle': 'Un guide sur les valeurs, la concentration et le but dans l\'économie de l\'attention.',
        'hero_btn_start': 'Commander Livre & Parcours Maintenant',
        'hero_btn_emergency': 'Guide d\'Urgence',
        'author_label': 'À propos de l\'Auteure',
        'author_name': 'Nawal Gharbawi',
        'author_bio': 'Pionnière de la transformation numérique consciente. Ce livre est né d\'une profonde expérience personnelle pour reprendre le contrôle sur le temps et les valeurs.',
        'roadmap_title': 'Le Programme de 90 Jours',
        'roadmap_desc': 'Une feuille de route pratique pour transformer la conscience numérique en pratique quotidienne.',
        'month1_title': 'Mois 1: Éveil Numérique', 'month1_goal': 'Objectif: Réduire la distraction de 30%',
        'month2_title': 'Mois 2: Construction du Système', 'month2_goal': 'Objectif: Système de productivité durable',
        'month3_title': 'Mois 3: Impact', 'month3_goal': 'Objectif: Aider une personne',
        'tools_title': 'Outils Gratuits pour Commencer',
        'pledge_title': 'Engagement de Souveraineté Numérique',
        'pledge_text': '"Je m\'engage à ce que mes valeurs fondamentales soient le filtre principal de toutes mes décisions quotidiennes, surtout dans le monde numérique."',
        'pledge_btn': 'Signer l\'Engagement ✍️',
        'btn_free_tools': 'Découvrir la Bibliothèque Gratuite',

        // مفاتيح track-sovereignty.html
        'nav_home': 'Accueil',
        'track_badge': 'Parcours 1: La Fondation',
        'track_title': 'Parcours Souveraineté Numérique 🛡️',
        'track_subtitle': 'Reprenez votre attention, votre temps et votre valeur dans un voyage guidé de 90 jours.',
        'meta_weeks': '13 Semaines', 'meta_time': '60 min/Jour',
        'outcomes_header': 'Pourquoi ce Parcours?', 'outcome_1': 'Réduire la Distraction', 'outcome_1_desc': 'D\'au moins 50%',
        'outcome_2': 'Système d\'Objectifs', 'outcome_2_desc': 'Construire un système de productivité personnel',
        'outcome_3': 'Paix Intérieure', 'outcome_3_desc': 'Libération de la peur de manquer (FOMO)',
        'roadmap_header': 'Carte Détaillée du Voyage',
        'phase1_title': 'Phase 1: Éveil (Sem. 1-4)', 'phase1_desc': 'Diagnostic, découverte de votre "Ancre" (Valeurs), et construction de l\'immunité interne.', 'phase1_btn': 'Commencer la Semaine 1 &larr;',
        'phase2_title': 'Phase 2: Construction (Sem. 5-8)', 'phase2_desc': 'Objectifs SMART, ingénierie de l\'environnement, et stratégie face à l\'échec.',
        'phase3_title': 'Phase 3: Autonomisation (Sem. 9-13)', 'phase3_desc': 'Compréhension de l\'économie de l\'attention, maîtrise du temps et projet d\'impact social.',
        'tools_support_header': 'Outils et Soutien', 'tool1': 'Cahier de Souveraineté', 'tool2': 'Échelle de Réalité', 'tool3': 'Communauté de Soutien', 'tool4': 'Webinaire en direct',
        'pricing_header': 'Investissez en Vous-même', 'plan1_title': 'Version Auto-guidée', 'plan1_desc': 'Accès complet au matériel, soutien communautaire général.',
        'plan2_title': 'Version Guidée', 'plan2_desc': 'Comprend 4 séances de coaching individuel et correction des devoirs.', 'plan_btn': 'Choisir le Plan',
        'faq_header': 'FAQ', 'footer_copy': '© 2025 L\'Ancre Numérique Académie. Tous droits réservés.',

        // مفاتيح resources.html
        'nav_book_now': 'Commander le Livre',
        'header_title': 'Bibliothèque Gratuite',
        'header_subtitle': 'Outils, affiches et autocollants pour vous rappeler quotidiennement vos valeurs numériques.',
        'posters_title': '🖼️ Affiches Murales',
        'posters_desc': 'Conçues pour être imprimées et accrochées dans votre chambre ou bureau.',
        'p1_title': 'Zone de Souveraineté Personnelle', 'p1_desc': 'Un rappel des zones sans téléphone.', 'p1_img_text': 'Zone Interdite',
        'p2_title': 'Déconnecter pour Connecter', 'p2_desc': 'La vraie vie se passe loin de l\'écran.', 'p2_img_text': 'Connectez-vous',
        'p3_title': 'Boussole d\'Attention', 'p3_desc': 'Est-ce que cela sert votre objectif de 5 ans ?', 'p3_img_text': 'Focus ?',
        'btn_download': 'Télécharger (PDF)',
        'tool1_title': 'Guide d\'Urgence Numérique', 'tool1_desc': 'Pour les moments de faiblesse et de rechute.',
        'tool2_title': 'Guide Méthodologique', 'tool2_desc': 'Comment apprendre intelligemment et appliquer.',
        'stickers_title': '✨ Autocollants Portable & Laptop',
        'sticker_text': 'Je suis le Capitaine',
        'btn_print': 'Imprimer les Autocollants'
    },
    // ----------------------
    // اللغة الألمانية (de) - تمت الإضافة
    // ----------------------
    'de': {
        // مفاتيح index.html
        'page_title': 'Wer bist du, wenn der Bildschirm ausgeht? | Der Digitale Anker',
        'site_name': 'Der Digitale Anker',
        'nav_tracks': 'Pfade',
        'nav_dashboard': 'Dashboard',
        'nav_blog': 'Blog',
        'nav_join': 'Buch bestellen',
        'hero_badge': '✨ Neue Ausgabe 2025',
        'hero_title': 'Wer bist du, wenn der Bildschirm <span class="text-yellow-300">ausgeht</span>?',
        'hero_subtitle': 'Ein Leitfaden zu Werten, Fokus und Ziel in der Aufmerksamkeitsökonomie.',
        'hero_btn_start': 'Buch & Reise jetzt bestellen',
        'hero_btn_emergency': 'Notfallleitfaden',
        'author_label': 'Über die Autorin',
        'author_name': 'Nawal Gharbawi',
        'author_bio': 'Pionierin der bewussten digitalen Transformation. Dieses Buch entstand aus tiefgreifender persönlicher Erfahrung, um die Kontrolle über Zeit und Werte zurückzugewinnen.',
        'roadmap_title': 'Das 90-Tage-Programm',
        'roadmap_desc': 'Eine praktische Roadmap, um digitales Bewusstsein in tägliche Praxis umzusetzen.',
        'month1_title': 'Monat 1: Digitales Erwachen', 'month1_goal': 'Ziel: Ablenkung um 30% reduzieren',
        'month2_title': 'Monat 2: Systemaufbau', 'month2_goal': 'Ziel: Nachhaltiges Produktivitätssystem schaffen',
        'month3_title': 'Monat 3: Wirkung', 'month3_goal': 'Ziel: Einer Person helfen',
        'tools_title': 'Kostenlose Tools zum Starten',
        'pledge_title': 'Eid der Digitalen Souveränität',
        'pledge_text': '"Ich verspreche mir selbst, dass meine Grundwerte der Hauptfilter für alle meine täglichen Entscheidungen sein werden, besonders in der digitalen Welt."',
        'pledge_btn': 'Eid jetzt unterschreiben ✍️',
        'btn_free_tools': 'Kostenlose Bibliothek entdecken',

        // مفاتيح track-sovereignty.html
        'nav_home': 'Startseite',
        'track_badge': 'Pfad 1: Die Grundlage',
        'track_title': 'Digitaler Souveränitäts-Pfad 🛡️',
        'track_subtitle': 'Gewinnen Sie Ihre Aufmerksamkeit, Zeit und Ihren Wert in einer 90-tägigen geführten Reise zurück.',
        'meta_weeks': '13 Wochen', 'meta_time': '60 Min./Tag',
        'outcomes_header': 'Warum dieser Pfad?', 'outcome_1': 'Ablenkung reduzieren', 'outcome_1_desc': 'Um mindestens 50%',
        'outcome_2': 'Zielsystem', 'outcome_2_desc': 'Ein persönliches Produktivitätssystem aufbauen',
        'outcome_3': 'Innerer Frieden', 'outcome_3_desc': 'Befreiung von FOMO',
        'roadmap_header': 'Detaillierte Reisekarte',
        'phase1_title': 'Phase 1: Erwachen (Woche 1-4)', 'phase1_desc': 'Diagnose, Entdeckung Ihres "Ankers" (Werte) und Aufbau innerer Immunität.', 'phase1_btn': 'Woche 1 beginnen &larr;',
        'phase2_title': 'Phase 2: Aufbau (Woche 5-8)', 'phase2_desc': 'SMART-Ziele, Umgebungs-Engineering und Fehlerstrategie.',
        'phase3_title': 'Phase 3: Ermächtigung (Woche 9-13)', 'phase3_desc': 'Verständnis der Aufmerksamkeitsökonomie, Zeitbeherrschung und das Impact-Projekt.',
        'tools_support_header': 'Tools & Unterstützung', 'tool1': 'Souveränitäts-Arbeitsbuch', 'tool2': 'Realitäts-Skala', 'tool3': 'Support-Community', 'tool4': 'Live-Webinar',
        'pricing_header': 'Investieren Sie in sich selbst', 'plan1_title': 'Selbstgesteuert', 'plan1_desc': 'Voller Materialzugriff, allgemeine Community-Unterstützung.',
        'plan2_title': 'Geführte Version', 'plan2_desc': 'Beinhaltet 4 individuelle Coaching-Sitzungen und Aufgabenkorrektur.', 'plan_btn': 'Plan wählen',
        'faq_header': 'Häufig gestellte Fragen', 'footer_copy': '© 2025 Digital Anchor Academy. Alle Rechte vorbehalten.',

        // مفاتيح resources.html
        'nav_book_now': 'Buch bestellen',
        'header_title': 'Kostenlose Bibliothek',
        'header_subtitle': 'Tools, Poster und Aufkleber, um Sie täglich an Ihre digitalen Werte zu erinnern.',
        'posters_title': '🖼️ Wandposter',
        'posters_desc': 'Zum Ausdrucken und Aufhängen in Ihrem Zimmer oder Büro konzipiert.',
        'p1_title': 'Persönliche Souveränitätszone', 'p1_desc': 'Eine Erinnerung an handyfreie Zonen.', 'p1_img_text': 'Sperrzone',
        'p2_title': 'Trennen, um zu Verbinden', 'p2_desc': 'Das wahre Leben findet abseits des Bildschirms statt.', 'p2_img_text': 'Verbinden',
        'p3_title': 'Aufmerksamkeits-Kompass', 'p3_desc': 'Dient dies Ihrem 5-Jahres-Ziel?', 'p3_img_text': 'Fokus?',
        'btn_download': 'Herunterladen (PDF)',
        'tool1_title': 'Digitaler Notfallleitfaden', 'tool1_desc': 'Für Momente der Schwäche und des Rückfalls.',
        'tool2_title': 'Methodik-Leitfaden', 'tool2_desc': 'Wie man intelligent lernt und anwendet.',
        'stickers_title': '✨ Laptop- & Handy-Aufkleber',
        'sticker_text': 'Ich bin der Kapitän',
        'btn_print': 'Aufkleber drucken'
    }
};

/**
 * =================================================================
 * 2. بيانات العملات (Currency Data)
 * =================================================================
 */
const RATES = { 
    'SAR': { r: 1, s: 'SAR' }, 
    'USD': { r: 0.27, s: '$' }, 
    'EUR': { r: 0.25, s: '€' } 
};

/**
 * =================================================================
 * 3. دالة تحويل العملة (Currency Conversion)
 * =================================================================
 */
function convertCurrency(curr) {
    const rate = RATES[curr].r;
    const symbol = RATES[curr].s;
    
    // تحديث كل العناصر التي تحمل الفئة price-display
    document.querySelectorAll('.price-display').forEach(el => {
        const base = el.getAttribute('data-base-price');
        // التأكد من أن القيمة الأساسية رقم
        if (base) {
            // إضافة رمز العملة
            el.innerHTML = symbol + Math.round(base * rate);
        }
    });
    
    // تحديث رمز العملة (هذا الجزء قد لا يكون ضرورياً إذا تم دمج الرمز في price-display أعلاه)
    // ولكنه مفيد للعناصر التي لا تعرض السعر نفسه
    document.querySelectorAll('.currency-symbol').forEach(el => {
        el.textContent = symbol;
    });
    
    // تحديث القوائم المنسدلة للعملة
    document.querySelectorAll('#curr-select').forEach(select => { 
        if(select) select.value = curr; 
    });
    
    // حفظ العملة المفضلة
    localStorage.setItem('preferredCurr', curr);
}

/**
 * =================================================================
 * 4. دالة تغيير اللغة (Language Switching)
 * =================================================================
 */
function setLanguage(lang) {
    const isRTL = lang === 'ar';
    document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', lang);
    
    // تطبيق الترجمات
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            // استخدام innerHTML للسماح بالوسوم الداخلية مثل <span> في العنوان الرئيسي
            el.innerHTML = translations[lang][key]; 
        }
    });

    // تحديث القوائم المنسدلة للغة
    document.querySelectorAll('#lang-select').forEach(select => { 
        if(select) select.value = lang; 
    });
    
    // محاذاة النص
    document.body.style.textAlign = isRTL ? 'right' : 'left';
    
    // حفظ اللغة المفضلة
    localStorage.setItem('preferredLang', lang);

    // إذا كانت الصفحة تحتوي على أسعار (مثل track-sovereignty)، نقوم بتحديث العملة
    if (document.querySelector('.price-display')) {
        // نستخدم العملة المفضلة المحفوظة، أو SAR كافتراضي
        const preferredCurr = localStorage.getItem('preferredCurr') || 'SAR';
        convertCurrency(preferredCurr);
    }
}

// جعل الدوال متاحة عالمياً ليتمكن الـ HTML من استدعائها (onchange)
window.setLanguage = setLanguage; 
window.convertCurrency = convertCurrency;

/**
 * =================================================================
 * 5. وظيفة قائمة الموبايل (Mobile Menu)
 * =================================================================
 */
function setupMobileMenu() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            
            // تغيير أيقونة الزر
            const icon = menuBtn.querySelector('i');
            if (icon) {
                if (mobileMenu.classList.contains('hidden')) {
                    icon.classList.remove('fa-times'); // إغلاق
                    icon.classList.add('fa-bars'); // فتح
                } else {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times'); 
                }
            }
        });
    }
}

/**
 * =================================================================
 * 6. التشغيل عند التحميل (Initialization)
 * =================================================================
 */
document.addEventListener('DOMContentLoaded', () => {
    // 6.1 إعداد قائمة الموبايل
    setupMobileMenu();
    
    // 6.2 تطبيق اللغة المفضلة عند تحميل الصفحة
    const defaultLang = localStorage.getItem('preferredLang') || 'ar';
    setLanguage(defaultLang);
});