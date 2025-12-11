/**
 * =================================================================
 * ملف: js/dashboard.js
 * يحتوي على منطق الرسوم البيانية والآلة الحاسبة والإنجازات.
 * =================================================================
 */

// 1. منطق الرسم البياني (Chart.js)
function initializeChart() {
    // البيانات الافتراضية
    const data = {
        labels: ['أسبوع 1', 'أسبوع 2', 'أسبوع 3', 'أسبوع 4'], // ⚠️ هذه يجب ترجمتها في HTML باستخدام data-key أو تمريرها كمتغيرات
        datasets: [
            { 
                label: 'الإنتاج', // ⚠️ هذه يجب ترجمتها
                data: [1.5, 3, 3.5, 4.2], 
                borderColor: '#10b981', // green-500
                tension: 0.3 
            }, 
            { 
                label: 'الإلهاء', // ⚠️ هذه يجب ترجمتها
                data: [5, 4, 3, 1.8], 
                borderColor: '#ef4444', // red-500
                tension: 0.3 
            }
        ]
    };

    const ctx = document.getElementById('mainChart');
    if (ctx) {
        new Chart(ctx.getContext('2d'), {
            type: 'line',
            data: data,
            options: { 
                responsive: true, 
                plugins: { 
                    legend: { position: 'bottom' } 
                } 
            }
        });
    }
}

// 2. منطق الآلة الحاسبة (Calculator)
function calculate() {
    const screenTime = document.getElementById('screenTime');
    const prodTime = document.getElementById('prodTime');
    const resultEl = document.getElementById('result');
    
    const s = parseFloat(screenTime.value);
    const p = parseFloat(prodTime.value);

    // التحقق من القيم
    if (isNaN(s) || isNaN(p) || s <= 0 || p < 0) {
        // 🚨 [إصلاح: استخدام دالة الترجمة العامة (افتراض وجودها في i18n.js)]
        const getTranslation = (key) => window.translations && window.translations[window.localStorage.getItem('preferredLang') || 'ar'][key] || "أدخل قيماً صحيحة.";
        
        resultEl.innerText = getTranslation('error_valid_values'); // تم افتراض مفتاح ترجمة
        resultEl.className = "text-center mt-2 font-bold text-red-600";
        return;
    }

    const res = Math.round((p / s) * 100);
    
    // 🚨 [إصلاح: استخدام دالة الترجمة العامة]
    const getTranslation = (key) => window.translations && window.translations[window.localStorage.getItem('preferredLang') || 'ar'][key] || "";
    const efficiencyText = getTranslation('efficiency_text') || 'كفاءة';
    const excellentText = getTranslation('excellent_text') || 'ممتاز';

    resultEl.innerText = `${res}% ${efficiencyText} ` + (res > 50 ? "🟢" : "🔴");
    resultEl.className = "text-center mt-2 font-bold " + (res > 50 ? "text-green-600" : "text-red-600");
}

// 3. منطق النافذة المنبثقة (Modal) والإنجازات
function toggleModal(id) {
    document.getElementById(id).classList.toggle('hidden');
}

function saveAchievement() {
    // 🚨 [إصلاح: لا يمكن ترجمة رسائل alert() مباشرة، ولكن يمكن تحسين الرسالة لتكون أقل ثباتًا]
    // يفضل استخدام نافذة منبثقة (Modal) مُترجمة بدلاً من alert()
    alert("تم حفظ الإنجاز بنجاح! استمر يا بطل 🔥");
    toggleModal('achievementModal');
}

// جعل الدوال متاحة عالمياً ليتمكن الـ HTML من استدعائها
window.calculate = calculate;
window.toggleModal = toggleModal;
window.saveAchievement = saveAchievement;


// 4. التشغيل عند تحميل الصفحة
// 🚨 [إصلاح: تم إزالة هذا المستمع لأننا نعتمد على DOMContentLoaded في ملف dashboard.html]
// document.addEventListener('DOMContentLoaded', () => {
//     initializeChart();
// });
// تم ترك الكود لضمان أن initializeChart() جاهزة للاستدعاء من dashboard.html