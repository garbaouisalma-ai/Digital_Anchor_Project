/**
 * =================================================================
 * ملف: js/dashboard.js
 * يحتوي على منطق الرسوم البيانية والآلة الحاسبة والأحداث الخاصة بلوحة القيادة.
 * =================================================================
 */

// 1. منطق الرسم البياني (Chart.js)
function initializeChart() {
    // البيانات الافتراضية
    const data = {
        labels: ['أسبوع 1', 'أسبوع 2', 'أسبوع 3', 'أسبوع 4'],
        datasets: [
            { 
                label: 'الإنتاج', 
                data: [1.5, 3, 3.5, 4.2], 
                borderColor: '#10b981', // green-500
                tension: 0.3 
            }, 
            { 
                label: 'الإلهاء', 
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
        resultEl.innerText = "أدخل قيماً صحيحة.";
        resultEl.className = "text-center mt-2 font-bold text-red-600";
        return;
    }

    const res = Math.round((p / s) * 100);
    
    resultEl.innerText = res + "% كفاءة " + (res > 50 ? "🟢" : "🔴");
    resultEl.className = "text-center mt-2 font-bold " + (res > 50 ? "text-green-600" : "text-red-600");
}

// 3. منطق النافذة المنبثقة (Modal) والإنجازات
function toggleModal(id) {
    document.getElementById(id).classList.toggle('hidden');
}

function saveAchievement() {
    alert("تم حفظ الإنجاز بنجاح! استمر يا بطل 🔥");
    toggleModal('achievementModal');
}

// جعل الدوال متاحة عالمياً ليتمكن الـ HTML من استدعائها
window.calculate = calculate;
window.toggleModal = toggleModal;
window.saveAchievement = saveAchievement;


// 4. التشغيل عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    initializeChart();
    // ⚠️ ملاحظة: وظيفة setLanguage من المفترض أن تكون موجودة في js/main.js
});