// analytics.js

// تهيئة دالة gtag وdataLayer (كما كانت في HTML)
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}

// تحديد وقت التشغيل وضبط الحساب
gtag('js', new Date());
gtag('config', 'G-HJZHN8FQQ2'); 

// يمكن إضافة أي وظائف تتبع أخرى هنا لاحقاً

console.log("Google Analytics 4 initialized.");
