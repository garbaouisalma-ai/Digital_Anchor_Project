const defaultConfig = {
    book_title: "من أنت حين تنطفئ الشاشة؟",
    book_subtitle: "دليلك العملي للحياة الحقيقية في العصر الرقمي",
    author_name: "المؤلف",
    primary_button_text: "ابدأ رحلتك الآن",
    secondary_button_text: "تعرّف على الكتاب",
    book_price: "79",
    background_color: "#0f172a",
    primary_color: "#3b82f6",
    accent_color: "#f97316",
    success_color: "#22c55e",
    text_color: "#ffffff",
    font_family: "Cairo"
};

let currentLanguage = 'ar';
let currentCurrency = 'SAR';
let currentPage = 'home';
let completedExperiments = [];
let allData = [];
let selectedExperiment = null;

const translations = {
    ar: {
        home: 'الرئيسية',
        lab: 'المختبر التفاعلي',
        dashboard: 'لوحة التحكم',
        booking: 'احجز نسختك',
        images: 'صور ملهمة',
        whoAreYou: 'من أنت حين تنطفئ الشاشة؟',
        practicalGuide: 'دليلك العملي للحياة الحقيقية في العصر الرقمي',
        primaryButton: 'ابدأ رحلتك الآن',
        secondaryButton: 'تعرّف على الكتاب',
        parts: 'أجزاء',
        chapters: 'فصلاً',
        experiences: 'تجربة',
        totalProgress: 'تقدمك',
        readyToTransform: 'هل أنت مستعد للتحول؟',
        startJourney: 'ابدأ رحلتك اليوم مع 48 تجربة تفاعلية',
        bookYourCopy: 'احجز نسختك الآن',
        interactiveLab: '🧪 المختبر التفاعلي',
        practicalExperiments: 'تجربة عملية لتحويل حياتك الرقمية',
        yourProgress: 'تقدمك',
        completed: 'مكتمل',
        part: 'الجزء',
        experiment: 'تجربة',
        bookNow: 'احجز الآن',
        bookNowTitle: '📝 احجز نسختك الآن',
        bookingInfo: 'معلومات الحجز',
        fullName: 'الاسم الكامل',
        email: 'البريد الإلكتروني',
        phone: 'رقم الهاتف',
        country: 'الدولة',
        selectCountry: 'اختر الدولة',
        address: 'العنوان الكامل',
        selectedPlan: 'الباقة المختارة',
        completeBooking: 'إتمام الحجز 🚀',
        orderSummary: 'ملخص الطلب',
        basePrice: 'السعر:',
        total: 'المجموع:',
        securePayment: '🔒 الدفع الآمن',
        securePaymentDesc: 'جميع المعاملات محمية',
        dayGuarantee: '✓ ضمان 30 يوماً',
        guaranteeDesc: 'استرجاع كامل للمبلغ',
        customizableImages: '🎨 صور ملهمة قابلة للتخصيص',
        designYourImage: 'صمم صورتك الخاصة مع رسالتك الملهمة',
        customizeDownload: 'تخصيص وتحميل 📥',
        personalDashboard: '📊 لوحة التحكم الشخصية',
        totalExperiments: 'إجمالي التجارب',
        completionRate: 'نسبة الإنجاز',
        achievements: 'الإنجازات',
        progressByParts: 'التقدم حسب الأجزاء',
        experimentDescription: 'وصف التجربة',
        experimentGoal: 'الهدف',
        expectedTime: 'الوقت المتوقع',
        completeExperiment: 'إتمام التجربة ✓',
        experimentCompleted: 'تم إكمال هذه التجربة',
        experimentCompletedSuccess: '🎉 رائع! تم إكمال التجربة',
        processing: 'جاري المعالجة...',
        successMessage: '🎉 تم إرسال طلبك بنجاح!',
        achievementStart: 'البداية',
        achievementCommitted: 'الملتزم',
        achievementPersistent: 'المثابر',
        achievementAdvanced: 'المتقدم',
        achievementMaster: 'المتمكن',
        experimentsCount: 'تجربة',
        saudiArabia: 'السعودية',
        uae: 'الإمارات',
        egypt: 'مصر',
        jordan: 'الأردن',
        digitalIdentity: 'الهوية الرقمية',
        digitalBalance: 'التوازن الرقمي',
        deepConnections: 'العلاقات العميقة',
        personalGrowth: 'النمو الشخصي',
        digitalLegacy: 'الإرث الرقمي',
        closeModal: 'إغلاق',
        addNotes: 'إضافة ملاحظات',
        saveNotes: 'حفظ الملاحظات',
        minutes: 'دقيقة',
        price: 'السعر',
        sar: 'ر.س',
        getBook: 'احصل على الكتاب',
        fullBook: 'الكتاب الكامل',
        allExperiments: 'جميع التجارب التفاعلية',
        freeUpdates: 'تحديثات مجانية',
        moneyBack: 'ضمان استرجاع المال'
    },
    en: {
        home: 'Home',
        lab: 'Lab',
        dashboard: 'Dashboard',
        booking: 'Book Now',
        images: 'Images',
        whoAreYou: 'Who Are You When The Screen Goes Off?',
        practicalGuide: 'Your practical guide to real life in the digital age',
        primaryButton: 'Start Your Journey',
        secondaryButton: 'Learn More',
        parts: 'Parts',
        chapters: 'Chapters',
        experiences: 'Experiences',
        totalProgress: 'Progress',
        readyToTransform: 'Ready to Transform?',
        startJourney: 'Start with 48 interactive experiences',
        bookYourCopy: 'Book Now',
        interactiveLab: '🧪 Interactive Lab',
        practicalExperiments: 'practical experiments',
        yourProgress: 'Your Progress',
        completed: 'Completed',
        part: 'Part',
        experiment: 'Experiment',
        bookNow: 'Book Now',
        bookNowTitle: '📝 Book Your Copy',
        bookingInfo: 'Booking Info',
        fullName: 'Full Name',
        email: 'Email',
        phone: 'Phone',
        country: 'Country',
        selectCountry: 'Select Country',
        address: 'Address',
        selectedPlan: 'Plan',
        completeBooking: 'Complete 🚀',
        orderSummary: 'Summary',
        basePrice: 'Price:',
        total: 'Total:',
        securePayment: '🔒 Secure',
        securePaymentDesc: 'Protected',
        dayGuarantee: '✓ 30 Days',
        guaranteeDesc: 'Money back',
        customizableImages: '🎨 Images',
        designYourImage: 'Design your image',
        customizeDownload: 'Download 📥',
        personalDashboard: '📊 Dashboard',
        totalExperiments: 'Total',
        completionRate: 'Rate',
        achievements: 'Achievements',
        progressByParts: 'Progress',
        experimentDescription: 'Description',
        experimentGoal: 'Goal',
        expectedTime: 'Time',
        completeExperiment: 'Complete ✓',
        experimentCompleted: 'Completed',
        experimentCompletedSuccess: '🎉 Done!',
        processing: 'Processing...',
        successMessage: '🎉 Sent!',
        achievementStart: 'Start',
        achievementCommitted: 'Committed',
        achievementPersistent: 'Persistent',
        achievementAdvanced: 'Advanced',
        achievementMaster: 'Master',
        experimentsCount: 'experiments',
        saudiArabia: 'Saudi Arabia',
        uae: 'UAE',
        egypt: 'Egypt',
        jordan: 'Jordan',
        digitalIdentity: 'Digital Identity',
        digitalBalance: 'Digital Balance',
        deepConnections: 'Deep Connections',
        personalGrowth: 'Personal Growth',
        digitalLegacy: 'Digital Legacy',
        closeModal: 'Close',
        addNotes: 'Add Notes',
        saveNotes: 'Save',
        minutes: 'min',
        price: 'Price',
        sar: 'SAR',
        getBook: 'Get Book',
        fullBook: 'Full Book',
        allExperiments: 'All Experiments',
        freeUpdates: 'Free Updates',
        moneyBack: 'Money Back'
    },
    fr: {
        home: 'Accueil',
        lab: 'Labo',
        dashboard: 'Tableau',
        booking: 'Réserver',
        images: 'Images',
        whoAreYou: 'Qui Êtes-Vous?',
        practicalGuide: 'Guide pratique',
        primaryButton: 'Commencer',
        secondaryButton: 'En savoir plus',
        parts: 'Parties',
        chapters: 'Chapitres',
        experiences: 'Expériences',
        totalProgress: 'Progrès',
        readyToTransform: 'Prêt?',
        startJourney: '48 expériences',
        bookYourCopy: 'Réserver',
        interactiveLab: '🧪 Labo',
        practicalExperiments: 'expériences',
        yourProgress: 'Progrès',
        completed: 'Terminé',
        part: 'Partie',
        experiment: 'Expérience',
        bookNow: 'Réserver',
        bookNowTitle: '📝 Réserver',
        bookingInfo: 'Info',
        fullName: 'Nom',
        email: 'Email',
        phone: 'Téléphone',
        country: 'Pays',
        selectCountry: 'Sélectionner',
        address: 'Adresse',
        selectedPlan: 'Plan',
        completeBooking: 'Finaliser 🚀',
        orderSummary: 'Résumé',
        basePrice: 'Prix:',
        total: 'Total:',
        securePayment: '🔒 Sécurisé',
        securePaymentDesc: 'Protégé',
        dayGuarantee: '✓ 30 jours',
        guaranteeDesc: 'Remboursement',
        customizableImages: '🎨 Images',
        designYourImage: 'Concevoir',
        customizeDownload: 'Télécharger 📥',
        personalDashboard: '📊 Tableau',
        totalExperiments: 'Total',
        completionRate: 'Taux',
        achievements: 'Succès',
        progressByParts: 'Progrès',
        experimentDescription: 'Description',
        experimentGoal: 'Objectif',
        expectedTime: 'Temps',
        completeExperiment: 'Terminer ✓',
        experimentCompleted: 'Terminé',
        experimentCompletedSuccess: '🎉 Fait!',
        processing: 'Traitement...',
        successMessage: '🎉 Envoyé!',
        achievementStart: 'Début',
        achievementCommitted: 'Engagé',
        achievementPersistent: 'Persévérant',
        achievementAdvanced: 'Avancé',
        achievementMaster: 'Maître',
        experimentsCount: 'expériences',
        saudiArabia: 'Arabie',
        uae: 'Émirats',
        egypt: 'Égypte',
        jordan: 'Jordanie',
        digitalIdentity: 'Identité',
        digitalBalance: 'Équilibre',
        deepConnections: 'Connexions',
        personalGrowth: 'Croissance',
        digitalLegacy: 'Héritage',
        closeModal: 'Fermer',
        addNotes: 'Notes',
        saveNotes: 'Sauver',
        minutes: 'min',
        price: 'Prix',
        sar: 'SAR',
        getBook: 'Obtenir',
        fullBook: 'Livre',
        allExperiments: 'Expériences',
        freeUpdates: 'Mises à jour',
        moneyBack: 'Garantie'
    },
    de: {
        home: 'Start',
        lab: 'Labor',
        dashboard: 'Dashboard',
        booking: 'Buchen',
        images: 'Bilder',
        whoAreYou: 'Wer Bist Du?',
        practicalGuide: 'Leitfaden',
        primaryButton: 'Beginnen',
        secondaryButton: 'Mehr',
        parts: 'Teile',
        chapters: 'Kapitel',
        experiences: 'Erfahrungen',
        totalProgress: 'Fortschritt',
        readyToTransform: 'Bereit?',
        startJourney: '48 Erfahrungen',
        bookYourCopy: 'Buchen',
        interactiveLab: '🧪 Labor',
        practicalExperiments: 'Experimente',
        yourProgress: 'Fortschritt',
        completed: 'Fertig',
        part: 'Teil',
        experiment: 'Experiment',
        bookNow: 'Buchen',
        bookNowTitle: '📝 Buchen',
        bookingInfo: 'Info',
        fullName: 'Name',
        email: 'Email',
        phone: 'Telefon',
        country: 'Land',
        selectCountry: 'Wählen',
        address: 'Adresse',
        selectedPlan: 'Plan',
        completeBooking: 'Abschließen 🚀',
        orderSummary: 'Zusammenfassung',
        basePrice: 'Preis:',
        total: 'Gesamt:',
        securePayment: '🔒 Sicher',
        securePaymentDesc: 'Geschützt',
        dayGuarantee: '✓ 30 Tage',
        guaranteeDesc: 'Geld zurück',
        customizableImages: '🎨 Bilder',
        designYourImage: 'Gestalten',
        customizeDownload: 'Laden 📥',
        personalDashboard: '📊 Dashboard',
        totalExperiments: 'Gesamt',
        completionRate: 'Rate',
        achievements: 'Erfolge',
        progressByParts: 'Fortschritt',
        experimentDescription: 'Beschreibung',
        experimentGoal: 'Ziel',
        expectedTime: 'Zeit',
        completeExperiment: 'Fertig ✓',
        experimentCompleted: 'Fertig',
        experimentCompletedSuccess: '🎉 Erledigt!',
        processing: 'Laden...',
        successMessage: '🎉 Gesendet!',
        achievementStart: 'Start',
        achievementCommitted: 'Engagiert',
        achievementPersistent: 'Beharrlich',
        achievementAdvanced: 'Fortgeschritten',
        achievementMaster: 'Meister',
        experimentsCount: 'Experimente',
        saudiArabia: 'Saudi-Arabien',
        uae: 'VAE',
        egypt: 'Ägypten',
        jordan: 'Jordanien',
        digitalIdentity: 'Identität',
        digitalBalance: 'Balance',
        deepConnections: 'Verbindungen',
        personalGrowth: 'Wachstum',
        digitalLegacy: 'Erbe',
        closeModal: 'Schließen',
        addNotes: 'Notizen',
        saveNotes: 'Speichern',
        minutes: 'Min',
        price: 'Preis',
        sar: 'SAR',
        getBook: 'Holen',
        fullBook: 'Buch',
        allExperiments: 'Experimente',
        freeUpdates: 'Updates',
        moneyBack: 'Garantie'
    }
};

const currencies = {
    SAR: { symbol: 'ر.س', rate: 1 },
    USD: { symbol: '$', rate: 0.27 },
    EUR: { symbol: '€', rate: 0.24 },
    GBP: { symbol: '£', rate: 0.21 },
    AED: { symbol: 'د.إ', rate: 0.98 }
};

const experiments = [
    // Part 1: Digital Identity
    { id: 1, part: 1, name_ar: 'من أنا خلف الشاشة؟', name_en: 'Who am I behind the screen?', name_fr: 'Qui suis-je?', name_de: 'Wer bin ich?', time: 20, icon: '🪞' },
    { id: 2, part: 1, name_ar: 'صورتي الرقمية vs حقيقتي', name_en: 'My digital image vs reality', name_fr: 'Image vs réalité', name_de: 'Bild vs Realität', time: 25, icon: '🎭' },
    { id: 3, part: 1, name_ar: 'تحدي الصمت الرقمي', name_en: 'Digital silence challenge', name_fr: 'Défi silence', name_de: 'Stille-Herausforderung', time: 30, icon: '🤫' },
    { id: 4, part: 1, name_ar: 'قيمي الحقيقية', name_en: 'My true values', name_fr: 'Mes valeurs', name_de: 'Meine Werte', time: 35, icon: '💎' },
    { id: 5, part: 1, name_ar: 'رسالة لنفسي المستقبلية', name_en: 'Letter to future self', name_fr: 'Lettre future', name_de: 'Brief Zukunft', time: 40, icon: '✉️' },
    { id: 6, part: 1, name_ar: 'خريطة هويتي الرقمية', name_en: 'My digital identity map', name_fr: 'Carte identité', name_de: 'Identitätskarte', time: 30, icon: '🗺️' },
    { id: 7, part: 1, name_ar: 'يوم بلا فلاتر', name_en: 'A day without filters', name_fr: 'Jour sans filtres', name_de: 'Tag ohne Filter', time: 1440, icon: '📸' },
    { id: 8, part: 1, name_ar: 'أنا الحقيقي', name_en: 'The real me', name_fr: 'Le vrai moi', name_de: 'Das wahre Ich', time: 45, icon: '🌟' },
    { id: 9, part: 1, name_ar: 'مرآة الذات', name_en: 'Self mirror', name_fr: 'Miroir de soi', name_de: 'Selbstspiegel', time: 35, icon: '🪞' },
    { id: 10, part: 1, name_ar: 'بصمتي الرقمية', name_en: 'My digital footprint', name_fr: 'Empreinte digitale', name_de: 'Digitaler Fußabdruck', time: 40, icon: '👣' },

    // Part 2: Digital Balance
    { id: 11, part: 2, name_ar: 'تحدي 24 ساعة بلا هاتف', name_en: '24h no phone challenge', name_fr: 'Défi 24h', name_de: '24h Challenge', time: 1440, icon: '📵' },
    { id: 12, part: 2, name_ar: 'روتين الصباح المثالي', name_en: 'Perfect morning routine', name_fr: 'Routine matinale', name_de: 'Morgenroutine', time: 60, icon: '☀️' },
    { id: 13, part: 2, name_ar: 'تنظيف رقمي شامل', name_en: 'Complete digital detox', name_fr: 'Détox digital', name_de: 'Digital Detox', time: 120, icon: '🧹' },
    { id: 14, part: 2, name_ar: 'حدود صحية', name_en: 'Healthy boundaries', name_fr: 'Limites saines', name_de: 'Gesunde Grenzen', time: 45, icon: '🚧' },
    { id: 15, part: 2, name_ar: 'وقت الشاشة الواعي', name_en: 'Mindful screen time', name_fr: 'Temps écran', name_de: 'Bildschirmzeit', time: 30, icon: '⏰' },
    { id: 16, part: 2, name_ar: 'التوازن الذهبي', name_en: 'Golden balance', name_fr: 'Équilibre doré', name_de: 'Goldenes Gleichgewicht', time: 50, icon: '⚖️' },
    { id: 17, part: 2, name_ar: 'إشعارات أقل، حياة أكثر', name_en: 'Less notifications, more life', name_fr: 'Moins notifications', name_de: 'Weniger Benachrichtigungen', time: 40, icon: '🔕' },
    { id: 18, part: 2, name_ar: 'عطلة رقمية', name_en: 'Digital vacation', name_fr: 'Vacances digitales', name_de: 'Digitaler Urlaub', time: 10080, icon: '🏝️' },
    { id: 19, part: 2, name_ar: 'التركيز العميق', name_en: 'Deep focus', name_fr: 'Concentration', name_de: 'Tiefe Konzentration', time: 90, icon: '🎯' },
    { id: 20, part: 2, name_ar: 'النوم الطبيعي', name_en: 'Natural sleep', name_fr: 'Sommeil naturel', name_de: 'Natürlicher Schlaf', time: 480, icon: '😴' },

    // Part 3: Deep Connections
    { id: 21, part: 3, name_ar: 'محادثة حقيقية', name_en: 'Real conversation', name_fr: 'Conversation réelle', name_de: 'Echtes Gespräch', time: 60, icon: '💬' },
    { id: 22, part: 3, name_ar: 'إفطار عائلي بلا هواتف', name_en: 'Phone-free family breakfast', name_fr: 'Petit-déj famille', name_de: 'Familienfrühstück', time: 45, icon: '🍳' },
    { id: 23, part: 3, name_ar: 'رسالة قلبية مكتوبة', name_en: 'Heartfelt written letter', name_fr: 'Lettre sincère', name_de: 'Herzlicher Brief', time: 30, icon: '💌' },
    { id: 24, part: 3, name_ar: 'يوم الاستماع الكامل', name_en: 'Full listening day', name_fr: 'Journée écoute', name_de: 'Zuhörtag', time: 1440, icon: '👂' },
    { id: 25, part: 3, name_ar: 'لقاء وجهاً لوجه', name_en: 'Face-to-face meeting', name_fr: 'Rencontre directe', name_de: 'Persönliches Treffen', time: 120, icon: '🤝' },
    { id: 26, part: 3, name_ar: 'تواصل عميق', name_en: 'Deep connection', name_fr: 'Connexion profonde', name_de: 'Tiefe Verbindung', time: 90, icon: '❤️' },
    { id: 27, part: 3, name_ar: 'العلاقات الحقيقية', name_en: 'Real relationships', name_fr: 'Relations réelles', name_de: 'Echte Beziehungen', time: 60, icon: '👥' },
    { id: 28, part: 3, name_ar: 'التعاطف الإنساني', name_en: 'Human empathy', name_fr: 'Empathie humaine', name_de: 'Menschliches Mitgefühl', time: 50, icon: '🫂' },
    { id: 29, part: 3, name_ar: 'الحضور الكامل', name_en: 'Full presence', name_fr: 'Présence totale', name_de: 'Volle Präsenz', time: 75, icon: '🧘' },
    { id: 30, part: 3, name_ar: 'جسر القلوب', name_en: 'Bridge of hearts', name_fr: 'Pont des coeurs', name_de: 'Brücke der Herzen', time: 90, icon: '🌉' },

    // Part 4: Personal Growth
    { id: 31, part: 4, name_ar: 'مهارة جديدة أوفلاين', name_en: 'New offline skill', name_fr: 'Nouvelle compétence', name_de: 'Neue Fähigkeit', time: 120, icon: '📚' },
    { id: 32, part: 4, name_ar: 'التأمل اليومي', name_en: 'Daily meditation', name_fr: 'Méditation quotidienne', name_de: 'Tägliche Meditation', time: 20, icon: '🧘‍♂️' },
    { id: 33, part: 4, name_ar: 'كتابة يومياتي', name_en: 'Journaling', name_fr: 'Journal intime', name_de: 'Tagebuch', time: 30, icon: '📔' },
    { id: 34, part: 4, name_ar: 'القراءة العميقة', name_en: 'Deep reading', name_fr: 'Lecture profonde', name_de: 'Tiefes Lesen', time: 60, icon: '📖' },
    { id: 35, part: 4, name_ar: 'الإبداع الحر', name_en: 'Free creativity', name_fr: 'Créativité libre', name_de: 'Freie Kreativität', time: 90, icon: '🎨' },
    { id: 36, part: 4, name_ar: 'رحلة استكشافية', name_en: 'Exploration journey', name_fr: 'Voyage exploration', name_de: 'Entdeckungsreise', time: 180, icon: '🗺️' },
    { id: 37, part: 4, name_ar: 'تطوير الذات', name_en: 'Self development', name_fr: 'Développement personnel', name_de: 'Selbstentwicklung', time: 120, icon: '📈' },
    { id: 38, part: 4, name_ar: 'الامتنان اليومي', name_en: 'Daily gratitude', name_fr: 'Gratitude quotidienne', name_de: 'Tägliche Dankbarkeit', time: 15, icon: '🙏' },
    { id: 39, part: 4, name_ar: 'أهدافي الحقيقية', name_en: 'My real goals', name_fr: 'Mes vrais objectifs', name_de: 'Meine wahren Ziele', time: 45, icon: '🎯' },
    { id: 40, part: 4, name_ar: 'النسخة الأفضل مني', name_en: 'Better version of me', name_fr: 'Meilleure version', name_de: 'Bessere Version', time: 60, icon: '⭐' },

    // Part 5: Digital Legacy
    { id: 41, part: 5, name_ar: 'بصمتي في العالم', name_en: 'My impact on the world', name_fr: 'Mon impact', name_de: 'Mein Einfluss', time: 60, icon: '🌍' },
    { id: 42, part: 5, name_ar: 'محتوى ذو قيمة', name_en: 'Valuable content', name_fr: 'Contenu précieux', name_de: 'Wertvoller Inhalt', time: 90, icon: '💡' },
    { id: 43, part: 5, name_ar: 'التأثير الإيجابي', name_en: 'Positive impact', name_fr: 'Impact positif', name_de: 'Positiver Einfluss', time: 120, icon: '✨' },
    { id: 44, part: 5, name_ar: 'رسالتي للعالم', name_en: 'My message to the world', name_fr: 'Mon message', name_de: 'Meine Botschaft', time: 75, icon: '📣' },
    { id: 45, part: 5, name_ar: 'الإرث الرقمي', name_en: 'Digital legacy', name_fr: 'Héritage numérique', name_de: 'Digitales Erbe', time: 90, icon: '🏛️' },
    { id: 46, part: 5, name_ar: 'القيمة الحقيقية', name_en: 'Real value', name_fr: 'Valeur réelle', name_de: 'Echter Wert', time: 60, icon: '💰' },
    { id: 47, part: 5, name_ar: 'التغيير الإيجابي', name_en: 'Positive change', name_fr: 'Changement positif', name_de: 'Positive Veränderung', time: 100, icon: '🦋' },
    { id: 48, part: 5, name_ar: 'وعد للمستقبل', name_en: 'Promise to the future', name_fr: 'Promesse future', name_de: 'Versprechen Zukunft', time: 45, icon: '🌱' }
];

const partNames = {
    ar: ['الهوية الرقمية', 'التوازن الرقمي', 'العلاقات العميقة', 'النمو الشخصي', 'الإرث الرقمي'],
    en: ['Digital Identity', 'Digital Balance', 'Deep Connections', 'Personal Growth', 'Digital Legacy'],
    fr: ['Identité Numérique', 'Équilibre Digital', 'Connexions Profondes', 'Croissance Personnelle', 'Héritage Numérique'],
    de: ['Digitale Identität', 'Digitales Gleichgewicht', 'Tiefe Verbindungen', 'Persönliches Wachstum', 'Digitales Erbe']
};

function t(key) {
    return translations[currentLanguage][key] || key;
}

function formatPrice(price) {
    const currency = currencies[currentCurrency];
    const convertedPrice = Math.round(parseFloat(price) * currency.rate);
    return `${convertedPrice} ${currency.symbol}`;
}

function changeLanguage(lang) {
    currentLanguage = lang;
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', lang);
    render();
}

function changeCurrency(curr) {
    currentCurrency = curr;
    render();
}

const dataHandler = {
    onDataChanged(data) {
        allData = data;
        completedExperiments = data.filter(item => item.completed && item.type === 'experiment');
        render();
    }
};

async function initApp() {
    const dataResult = await window.dataSdk.init(dataHandler);
    if (!dataResult.isOk) console.error("SDK init failed");

    if (window.elementSdk) {
        window.elementSdk.init({
            defaultConfig,
            onConfigChange: async (config) => {
                render();
            },
            mapToCapabilities: (config) => ({
                recolorables: [
                    { get: () => config.background_color || defaultConfig.background_color, set: (v) => window.elementSdk.setConfig({ background_color: v }) },
                    { get: () => config.primary_color || defaultConfig.primary_color, set: (v) => window.elementSdk.setConfig({ primary_color: v }) },
                    { get: () => config.accent_color || defaultConfig.accent_color, set: (v) => window.elementSdk.setConfig({ accent_color: v }) }
                ],
                borderables: [],
                fontEditable: { get: () => config.font_family || defaultConfig.font_family, set: (v) => window.elementSdk.setConfig({ font_family: v }) },
                fontSizeable: undefined
            }),
            mapToEditPanelValues: (config) => new Map([
                ["book_title", config.book_title || defaultConfig.book_title],
                ["book_subtitle", config.book_subtitle || defaultConfig.book_subtitle],
                ["author_name", config.author_name || defaultConfig.author_name],
                ["book_price", config.book_price || defaultConfig.book_price],
                ["primary_button_text", config.primary_button_text || defaultConfig.primary_button_text],
                ["secondary_button_text", config.secondary_button_text || defaultConfig.secondary_button_text]
            ])
        });
    }
    render();
}

function getConfig() {
    return window.elementSdk?.config || defaultConfig;
}

function navigateTo(page, param = null) {
    currentPage = page;
    if (page === 'booking') window.selectedPlan = param || 'book';
    render();
    window.scrollTo(0, 0);
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    if (menu) menu.classList.toggle('hidden');
}

function openExperimentModal(experimentId) {
    selectedExperiment = experiments.find(e => e.id === experimentId);
    render();
}

function closeExperimentModal() {
    selectedExperiment = null;
    render();
}

async function completeExperiment(experimentId) {
    if (completedExperiments.length >= 999) {
        showNotification('⚠️ تم الوصول للحد الأقصى (999 تجربة)', 'warning');
        return;
    }

    const experiment = experiments.find(e => e.id === experimentId);
    const button = document.querySelector(`[data-experiment="${experimentId}"]`);
    if (button) {
        button.disabled = true;
        button.textContent = t('processing');
    }

    const experimentData = {
        id: `exp_${experimentId}_${Date.now()}`,
        type: 'experiment',
        experiment_id: experimentId,
        part_number: experiment.part,
        experiment_name: experiment[`name_${currentLanguage}`],
        completed: true,
        completion_date: new Date().toISOString(),
        notes: ''
    };

    const result = await window.dataSdk.create(experimentData);

    if (result.isOk) {
        showNotification(t('experimentCompletedSuccess'), 'success');
        closeExperimentModal();
    } else {
        showNotification('❌ حدث خطأ، حاول مرة أخرى', 'error');
        if (button) {
            button.disabled = false;
            button.textContent = t('completeExperiment');
        }
    }
}

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `fixed top-24 left-1/2 transform -translate-x-1/2 ${type === 'success' ? 'bg-green-500' : type === 'warning' ? 'bg-yellow-500' : 'bg-red-500'} text-white px-8 py-4 rounded-full z-50 font-bold shadow-lg`;
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
}

function isExperimentCompleted(experimentId) {
    return completedExperiments.some(e => e.experiment_id === experimentId);
}

function renderNavbar() {
    return `
        <nav class="bg-gray-900 bg-opacity-95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
            <div class="container mx-auto px-4 py-4">
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-3 cursor-pointer" onclick="navigateTo('home')">
                        <svg width="40" height="40" viewBox="0 0 100 100" class="text-orange-500">
                            <circle cx="50" cy="25" r="10" fill="none" stroke="currentColor" stroke-width="3"/>
                            <line x1="50" y1="35" x2="50" y2="70" stroke="currentColor" stroke-width="3"/>
                            <line x1="30" y1="50" x2="70" y2="50" stroke="currentColor" stroke-width="3"/>
                            <circle cx="30" cy="50" r="4" fill="currentColor"/>
                            <circle cx="70" cy="50" r="4" fill="currentColor"/>
                        </svg>
                        <h1 class="text-white font-bold text-base">${t('whoAreYou').substring(0, 20)}...</h1>
                    </div>
                    <div class="hidden lg:flex items-center gap-6">
                        <a onclick="navigateTo('home')" class="nav-link text-gray-300 hover:text-white cursor-pointer ${currentPage === 'home' ? 'active text-white' : ''}">${t('home')}</a>
                        <a onclick="navigateTo('lab')" class="nav-link text-gray-300 hover:text-white cursor-pointer ${currentPage === 'lab' ? 'active text-white' : ''}">${t('lab')}</a>
                        <a onclick="navigateTo('dashboard')" class="nav-link text-gray-300 hover:text-white cursor-pointer ${currentPage === 'dashboard' ? 'active text-white' : ''}">${t('dashboard')}</a>
                        <a onclick="navigateTo('images')" class="nav-link text-gray-300 hover:text-white cursor-pointer ${currentPage === 'images' ? 'active text-white' : ''}">${t('images')}</a>
                        <a onclick="navigateTo('booking')" class="nav-link text-gray-300 hover:text-white cursor-pointer ${currentPage === 'booking' ? 'active text-white' : ''}">${t('booking')}</a>
                        <select onchange="changeCurrency(this.value)" class="bg-gray-800 text-white px-3 py-1 rounded-lg text-sm">
                            ${Object.keys(currencies).map(c => `<option value="${c}" ${currentCurrency === c ? 'selected' : ''}>${c}</option>`).join('')}
                        </select>
                        <select onchange="changeLanguage(this.value)" class="bg-gray-800 text-white px-3 py-1 rounded-lg text-sm">
                            <option value="ar" ${currentLanguage === 'ar' ? 'selected' : ''}>العربية</option>
                            <option value="en" ${currentLanguage === 'en' ? 'selected' : ''}>English</option>
                            <option value="fr" ${currentLanguage === 'fr' ? 'selected' : ''}>Français</option>
                            <option value="de" ${currentLanguage === 'de' ? 'selected' : ''}>Deutsch</option>
                        </select>
                    </div>
                    <button onclick="toggleMobileMenu()" class="lg:hidden text-white"><i class="fas fa-bars text-xl"></i></button>
                </div>
                <div id="mobile-menu" class="hidden lg:hidden mt-4 pb-4 border-t border-gray-800 pt-4">
                    <div class="flex flex-col gap-3">
                        <a onclick="navigateTo('home')" class="text-gray-300 hover:text-white cursor-pointer">${t('home')}</a>
                        <a onclick="navigateTo('lab')" class="text-gray-300 hover:text-white cursor-pointer">${t('lab')}</a>
                        <a onclick="navigateTo('dashboard')" class="text-gray-300 hover:text-white cursor-pointer">${t('dashboard')}</a>
                        <a onclick="navigateTo('images')" class="text-gray-300 hover:text-white cursor-pointer">${t('images')}</a>
                        <a onclick="navigateTo('booking')" class="text-gray-300 hover:text-white cursor-pointer">${t('booking')}</a>
                        <select onchange="changeCurrency(this.value)" class="bg-gray-800 text-white px-3 py-1 rounded-lg text-sm">
                            ${Object.keys(currencies).map(c => `<option value="${c}" ${currentCurrency === c ? 'selected' : ''}>${c}</option>`).join('')}
                        </select>
                        <select onchange="changeLanguage(this.value)" class="bg-gray-800 text-white px-3 py-1 rounded-lg text-sm">
                            <option value="ar" ${currentLanguage === 'ar' ? 'selected' : ''}>العربية</option>
                            <option value="en" ${currentLanguage === 'en' ? 'selected' : ''}>English</option>
                            <option value="fr" ${currentLanguage === 'fr' ? 'selected' : ''}>Français</option>
                            <option value="de" ${currentLanguage === 'de' ? 'selected' : ''}>Deutsch</option>
                        </select>
                    </div>
                </div>
            </div>
        </nav>
    `;
}

function renderHomePage() {
    const config = getConfig();
    const completed = completedExperiments.length;
    const percentage = Math.round((completed / 48) * 100);

    return `
        <div class="fade-in">
            <section class="hero-gradient text-white py-20 px-4">
                <div class="container mx-auto max-w-6xl">
                    <div class="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 class="text-5xl md:text-6xl font-bold mb-6 leading-tight">${config.book_title || defaultConfig.book_title}</h1>
                            <p class="text-xl text-blue-100 mb-8">${config.book_subtitle || defaultConfig.book_subtitle}</p>
                            <div class="flex flex-col sm:flex-row gap-4">
                                <button onclick="navigateTo('booking')" class="pulse-button bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg">
                                    ${config.primary_button_text || defaultConfig.primary_button_text} 🚀
                                </button>
                                <button onclick="navigateTo('lab')" class="bg-white bg-opacity-10 hover:bg-opacity-20 text-white px-8 py-4 rounded-lg font-bold text-lg border-2 border-white border-opacity-30">
                                    ${config.secondary_button_text || defaultConfig.secondary_button_text}
                                </button>
                            </div>
                        </div>
                        <div class="bg-gradient-to-br from-gray-900 via-gray-800 to-black p-8 rounded-3xl shadow-2xl">
                            <div class="text-center space-y-6">
                                <div class="text-6xl">📱</div>
                                <h3 class="text-white text-2xl font-bold">${config.book_title || defaultConfig.book_title}</h3>
                                <p class="text-gray-300">${config.author_name || defaultConfig.author_name}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="bg-gray-900 py-16 px-4">
                <div class="container mx-auto max-w-6xl">
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div class="stats-card text-center p-6 rounded-xl">
                            <div class="text-4xl md:text-5xl font-bold text-blue-400 mb-2">5</div>
                            <div class="text-gray-300 font-semibold">${t('parts')}</div>
                        </div>
                        <div class="stats-card text-center p-6 rounded-xl">
                            <div class="text-4xl md:text-5xl font-bold text-orange-400 mb-2">24</div>
                            <div class="text-gray-300 font-semibold">${t('chapters')}</div>
                        </div>
                        <div class="stats-card text-center p-6 rounded-xl">
                            <div class="text-4xl md:text-5xl font-bold text-green-400 mb-2">48</div>
                            <div class="text-gray-300 font-semibold">${t('experiences')}</div>
                        </div>
                        <div class="stats-card text-center p-6 rounded-xl">
                            <div class="text-4xl md:text-5xl font-bold text-purple-400 mb-2">${percentage}%</div>
                            <div class="text-gray-300 font-semibold">${t('totalProgress')}</div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="bg-gradient-to-r from-blue-600 to-orange-600 py-20 px-4">
                <div class="container mx-auto max-w-4xl text-center">
                    <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">${t('readyToTransform')}</h2>
                    <p class="text-xl text-blue-50 mb-8">${t('startJourney')}</p>
                    <button onclick="navigateTo('booking')" class="bg-white text-blue-600 px-12 py-5 rounded-full font-bold text-xl hover:scale-105 transition-transform">
                        ${t('bookYourCopy')} 🎯
                    </button>
                </div>
            </section>
        </div>
    `;
}

function renderLabPage() {
    const completed = completedExperiments.length;
    const percentage = Math.round((completed / 48) * 100);

    return `
        <div class="bg-gray-900 min-h-screen py-12 px-4 fade-in">
            <div class="container mx-auto max-w-6xl">
                <div class="text-center mb-12">
                    <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">${t('interactiveLab')}</h1>
                    <p class="text-xl text-gray-300">48 ${t('practicalExperiments')}</p>
                    <div class="mt-6 inline-block bg-gray-800 rounded-full px-6 py-3">
                        <span class="text-gray-400">${t('yourProgress')}: </span>
                        <span class="text-orange-400 font-bold">${percentage}%</span>
                        <span class="text-gray-400"> (${completed}/48)</span>
                    </div>
                </div>

                ${[1, 2, 3, 4, 5].map(partNum => {
                    const partExperiments = experiments.filter(e => e.part === partNum);
                    const partCompleted = completedExperiments.filter(e => e.part_number === partNum).length;
                    const partPercentage = Math.round((partCompleted / partExperiments.length) * 100);

                    return `
                        <div class="bg-gray-800 rounded-2xl p-6 mb-8">
                            <div class="flex items-center justify-between mb-6">
                                <h2 class="text-2xl md:text-3xl font-bold text-white">
                                    ${t('part')} ${partNum}: ${partNames[currentLanguage][partNum - 1]}
                                </h2>
                                <div class="text-orange-400 font-bold">${partCompleted}/${partExperiments.length}</div>
                            </div>
                            <div class="w-full bg-gray-700 rounded-full h-3 mb-6">
                                <div class="bg-gradient-to-r from-orange-500 to-orange-600 h-3 rounded-full transition-all duration-500" style="width: ${partPercentage}%"></div>
                            </div>
                            <div class="grid gap-4">
                                ${partExperiments.map(exp => {
                                    const isCompleted = isExperimentCompleted(exp.id);
                                    return `
                                        <div onclick="openExperimentModal(${exp.id})" class="experiment-card ${isCompleted ? 'completed' : ''} bg-gray-700 rounded-xl p-4 flex items-center justify-between">
                                            <div class="flex items-center gap-4">
                                                <div class="text-3xl">${exp.icon}</div>
                                                <div>
                                                    <h3 class="text-white font-bold text-lg">${exp[`name_${currentLanguage}`]}</h3>
                                                    <p class="text-gray-400 text-sm">${exp.time < 1440 ? exp.time + ' ' + t('minutes') : Math.round(exp.time / 1440) + ' ' + t('experiment')}</p>
                                                </div>
                                            </div>
                                            ${isCompleted ? '<div class="text-green-400 text-2xl">✓</div>' : '<div class="text-gray-500 text-2xl">○</div>'}
                                        </div>
                                    `;
                                }).join('')}
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
        ${selectedExperiment ? renderExperimentModal() : ''}
    `;
}

function renderExperimentModal() {
    if (!selectedExperiment) return '';
    const isCompleted = isExperimentCompleted(selectedExperiment.id);

    return `
        <div class="fixed inset-0 modal-overlay flex items-center justify-center z-50 p-4" onclick="if(event.target === this) closeExperimentModal()">
            <div class="bg-gray-800 rounded-2xl max-w-2xl w-full p-8 max-h-[90%] overflow-y-auto">
                <div class="flex items-center justify-between mb-6">
                    <div class="flex items-center gap-4">
                        <div class="text-5xl">${selectedExperiment.icon}</div>
                        <h2 class="text-3xl font-bold text-white">${selectedExperiment[`name_${currentLanguage}`]}</h2>
                    </div>
                    <button onclick="closeExperimentModal()" class="text-gray-400 hover:text-white text-3xl">&times;</button>
                </div>

                <div class="space-y-6">
                    <div class="bg-gray-700 rounded-xl p-6">
                        <h3 class="text-orange-400 font-bold mb-3 text-lg">${t('experimentDescription')}</h3>
                        <p class="text-gray-300 leading-relaxed">${t('practicalGuide')}</p>
                    </div>

                    <div class="bg-gray-700 rounded-xl p-6">
                        <h3 class="text-blue-400 font-bold mb-3 text-lg">${t('experimentGoal')}</h3>
                        <p class="text-gray-300">${t('practicalGuide')}</p>
                    </div>

                    <div class="bg-gray-700 rounded-xl p-6">
                        <div class="flex items-center gap-3">
                            <span class="text-green-400 font-bold">${t('expectedTime')}:</span>
                            <span class="text-white">${selectedExperiment.time < 1440 ? selectedExperiment.time + ' ' + t('minutes') : Math.round(selectedExperiment.time / 1440) + ' ' + t('experiment')}</span>
                        </div>
                    </div>

                    ${isCompleted ? `
                        <div class="bg-green-900 bg-opacity-30 border-2 border-green-500 rounded-xl p-6 text-center">
                            <div class="text-5xl mb-3">🎉</div>
                            <p class="text-green-400 font-bold text-xl">${t('experimentCompleted')}</p>
                        </div>
                    ` : `
                        <button data-experiment="${selectedExperiment.id}" onclick="completeExperiment(${selectedExperiment.id})" class="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-4 rounded-xl font-bold text-lg">
                            ${t('completeExperiment')}
                        </button>
                    `}
                </div>
            </div>
        </div>
    `;
}

function renderBookingPage() {
    const config = getConfig();
    return `
        <div class="bg-gray-900 min-h-screen py-12 px-4 fade-in">
            <div class="container mx-auto max-w-4xl">
                <h1 class="text-4xl md:text-5xl font-bold text-white mb-8 text-center">${t('bookNowTitle')}</h1>

                <div class="grid md:grid-cols-2 gap-8">
                    <div class="bg-gray-800 rounded-2xl p-8">
                        <h2 class="text-2xl font-bold text-white mb-6">${t('bookingInfo')}</h2>
                        <form id="booking-form" class="space-y-4">
                            <div>
                                <label class="block text-gray-300 mb-2 font-semibold" for="full-name">${t('fullName')} *</label>
                                <input type="text" id="full-name" required class="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-orange-500 focus:outline-none">
                            </div>
                            <div>
                                <label class="block text-gray-300 mb-2 font-semibold" for="email">${t('email')} *</label>
                                <input type="email" id="email" required class="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-orange-500 focus:outline-none">
                            </div>
                            <div>
                                <label class="block text-gray-300 mb-2 font-semibold" for="phone">${t('phone')} *</label>
                                <input type="tel" id="phone" required class="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-orange-500 focus:outline-none">
                            </div>
                            <div>
                                <label class="block text-gray-300 mb-2 font-semibold" for="country">${t('country')} *</label>
                                <select id="country" required class="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-orange-500 focus:outline-none">
                                    <option value="">${t('selectCountry')}</option>
                                    <option value="SA">${t('saudiArabia')}</option>
                                    <option value="AE">${t('uae')}</option>
                                    <option value="EG">${t('egypt')}</option>
                                    <option value="JO">${t('jordan')}</option>
                                </select>
                            </div>
                            <div>
                                <label class="block text-gray-300 mb-2 font-semibold" for="address">${t('address')}</label>
                                <textarea id="address" rows="3" class="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-orange-500 focus:outline-none"></textarea>
                            </div>
                            <button type="submit" class="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 rounded-lg font-bold text-lg hover:from-orange-600 hover:to-orange-700">
                                ${t('completeBooking')}
                            </button>
                        </form>
                    </div>

                    <div class="space-y-6">
                        <div class="bg-gray-800 rounded-2xl p-8">
                            <h2 class="text-2xl font-bold text-white mb-6">${t('orderSummary')}</h2>
                            <div class="space-y-4">
                                <div class="flex justify-between items-center">
                                    <span class="text-gray-300">${t('fullBook')}</span>
                                    <span class="text-white font-bold text-xl">${formatPrice(config.book_price || defaultConfig.book_price)}</span>
                                </div>
                                <div class="border-t border-gray-700 pt-4">
                                    <div class="flex justify-between text-xl font-bold text-white">
                                        <span>${t('total')}</span>
                                        <span class="text-orange-400">${formatPrice(config.book_price || defaultConfig.book_price)}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="bg-blue-900 bg-opacity-30 border-2 border-blue-500 rounded-2xl p-6">
                            <h3 class="text-white font-bold mb-3">${t('securePayment')}</h3>
                            <p class="text-blue-200 text-sm">${t('securePaymentDesc')}</p>
                        </div>

                        <div class="bg-green-900 bg-opacity-30 border-2 border-green-500 rounded-2xl p-6">
                            <h3 class="text-white font-bold mb-3">${t('dayGuarantee')}</h3>
                            <p class="text-green-200 text-sm">${t('guaranteeDesc')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderImagesPage() {
    return `
        <div class="bg-gray-900 min-h-screen py-12 px-4 fade-in">
            <div class="container mx-auto max-w-6xl">
                <div class="text-center mb-12">
                    <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">${t('customizableImages')}</h1>
                    <p class="text-xl text-gray-300">${t('designYourImage')}</p>
                </div>

                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    ${[1, 2, 3, 4, 5, 6].map(i => `
                        <div class="card-hover bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-center">
                            <div class="text-6xl mb-4">🎨</div>
                            <h3 class="text-white text-2xl font-bold mb-4">${t('customizableImages')} ${i}</h3>
                            <button class="bg-white text-blue-600 px-6 py-3 rounded-full font-bold hover:scale-105 transition-transform">
                                ${t('customizeDownload')}
                            </button>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

function renderDashboardPage() {
    const completed = completedExperiments.length;
    const percentage = Math.round((completed / 48) * 100);

    return `
        <div class="bg-gray-900 min-h-screen py-12 px-4 fade-in">
            <div class="container mx-auto max-w-6xl">
                <h1 class="text-4xl md:text-5xl font-bold text-white mb-8 text-center">${t('personalDashboard')}</h1>

                <div class="grid md:grid-cols-3 gap-6 mb-12">
                    <div class="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 text-white">
                        <div class="text-5xl mb-3">🎯</div>
                        <div class="text-blue-100 text-sm mb-1">${t('totalExperiments')}</div>
                        <div class="text-4xl font-bold">${completed}/48</div>
                    </div>
                    <div class="bg-gradient-to-br from-orange-600 to-orange-700 rounded-2xl p-6 text-white">
                        <div class="text-5xl mb-3">📊</div>
                        <div class="text-orange-100 text-sm mb-1">${t('completionRate')}</div>
                        <div class="text-4xl font-bold">${percentage}%</div>
                    </div>
                    <div class="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-6 text-white">
                        <div class="text-5xl mb-3">🏆</div>
                        <div class="text-green-100 text-sm mb-1">${t('achievements')}</div>
                        <div class="text-4xl font-bold">${Math.floor(percentage / 20)}/5</div>
                    </div>
                </div>

                <div class="bg-gray-800 rounded-2xl p-8 mb-8">
                    <h2 class="text-2xl font-bold text-white mb-6">${t('progressByParts')}</h2>
                    <div class="space-y-6">
                        ${[1, 2, 3, 4, 5].map(partNum => {
                            const partExperiments = experiments.filter(e => e.part === partNum);
                            const partCompleted = completedExperiments.filter(e => e.part_number === partNum).length;
                            const partPercentage = Math.round((partCompleted / partExperiments.length) * 100);

                            return `
                                <div>
                                    <div class="flex justify-between mb-2">
                                        <span class="text-white font-bold">${t('part')} ${partNum}: ${partNames[currentLanguage][partNum - 1]}</span>
                                        <span class="text-orange-400 font-bold">${partCompleted}/${partExperiments.length}</span>
                                    </div>
                                    <div class="w-full bg-gray-700 rounded-full h-4">
                                        <div class="bg-gradient-to-r from-orange-500 to-orange-600 h-4 rounded-full transition-all duration-500" style="width: ${partPercentage}%"></div>
                                    </div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>

                <div class="bg-gray-800 rounded-2xl p-8">
                    <h2 class="text-2xl font-bold text-white mb-6">${t('achievements')} 🏆</h2>
                    <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
                        ${[
                            { icon: '🌟', title: t('achievementStart'), count: 5 },
                            { icon: '💪', title: t('achievementCommitted'), count: 12 },
                            { icon: '🔥', title: t('achievementPersistent'), count: 24 },
                            { icon: '🚀', title: t('achievementAdvanced'), count: 36 },
                            { icon: '👑', title: t('achievementMaster'), count: 48 }
                        ].map(achievement => {
                            const achieved = completed >= achievement.count;
                            return `
                                <div class="bg-gray-900 rounded-xl p-6 text-center ${achieved ? 'border-2 border-orange-500' : 'opacity-50'}">
                                    <div class="text-4xl mb-2">${achievement.icon}</div>
                                    <div class="text-white font-bold text-sm mb-1">${achievement.title}</div>
                                    <div class="text-gray-400 text-xs">${achievement.count} ${t('experimentsCount')}</div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
}

function render() {
    const app = document.getElementById('app');
    let content = '';

    switch(currentPage) {
        case 'home': content = renderHomePage(); break;
        case 'lab': content = renderLabPage(); break;
        case 'booking': content = renderBookingPage(); break;
        case 'images': content = renderImagesPage(); break;
        case 'dashboard': content = renderDashboardPage(); break;
        default: content = renderHomePage();
    }

    app.innerHTML = renderNavbar() + content;

    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            if (allData.filter(item => item.type === 'booking').length >= 999) {
                showNotification('⚠️ تم الوصول للحد الأقصى (999 حجز)', 'warning');
                return;
            }

            const submitButton = e.target.querySelector('button[type="submit"]');
            submitButton.disabled = true;
            submitButton.textContent = t('processing');

            const bookingData = {
                id: `booking_${Date.now()}`,
                type: 'booking',
                full_name: document.getElementById('full-name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                country: document.getElementById('country').value,
                address: document.getElementById('address')?.value || '',
                plan: 'book',
                created_at: new Date().toISOString()
            };

            const result = await window.dataSdk.create(bookingData);

            if (result.isOk) {
                showNotification(t('successMessage'), 'success');
                bookingForm.reset();
            } else {
                showNotification('❌ حدث خطأ', 'error');
            }

            submitButton.disabled = false;
            submitButton.textContent = t('completeBooking');
        });
    }
}

initApp();