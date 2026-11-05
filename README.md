# MG CoDe — الموقع الرسمي

موقع تعريفي عربي لمجتمع **MG CoDe**، بتصميم داكن احترافي ومتجاوب مع الجوال والكمبيوتر.

## بنية المشروع

```text
MG-CoDe-Website/
├── index.html
├── style.css
├── script.js
├── css/
│   ├── base.css
│   ├── accounts.css
│   ├── about.css
│   ├── contact.css
│   └── bots.css
├── sections/
│   ├── accounts.html
│   ├── about.html
│   ├── contact.html
│   └── bots.html
└── assets/
    ├── 15.png
    ├── 11.png
    ├── 9.png
    └── 10.png
```

كل قسم HTML مستقل داخل `sections/`، ولكل قسم ملف CSS مستقل داخل `css/`. ملف `style.css` يجمع ملفات التنسيق، و`script.js` مسؤول عن تحميل الأقسام وتشغيل قائمة الهاتف.

## تشغيل الموقع محلياً

لأن الأقسام تُحمّل كملفات HTML منفصلة، شغّل الموقع من خلال خادم محلي بدلاً من فتح `index.html` مباشرة:
- في VS Code: ثبّت إضافة **Live Server**، ثم اضغط بزر الفأرة الأيمن على `index.html` واختر **Open with Live Server**.
- أو من مجلد المشروع باستخدام Python:

```powershell
python -m http.server 8000
```

ثم افتح `http://localhost:8000`.

## رفع المشروع إلى GitHub

1. أنشئ مستودعاً جديداً على GitHub، مثلاً `mg-code-website`.
2. افتح PowerShell داخل مجلد المشروع.
3. نفّذ الأوامر التالية، واستبدل `YOUR-USERNAME` باسم حسابك على GitHub:

```powershell
git init
git add .
git commit -m "Create MG CoDe website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/mg-code-website.git
git push -u origin main
```

إذا كنت قد ربطت المستودع مسبقاً، لا تكرر أمر `git remote add origin`؛ استخدم `git remote set-url origin https://github.com/YOUR-USERNAME/mg-code-website.git` عند الحاجة.

## نشر الموقع مجاناً عبر GitHub Pages

1. افتح المستودع في GitHub.
2. ادخل إلى **Settings → Pages**.
3. في **Build and deployment** اختر **Deploy from a branch**.
4. اختر الفرع `main` والمجلد `/ (root)` ثم اضغط **Save**.
5. انتظر اكتمال النشر، وسيظهر رابط الموقع في صفحة Pages.

## الروابط والبيانات

- البريد: `mg7app@gmail.com`
- Discord: `https://discord.com/channels/1530185520834023576/1547282882786103469`
- اسم الحساب: `! 𝑴𝑮〢𝓜𝓱𝓶𝓪𝓭 89`
- Username: `mg7code`
- دعوة MG Security: `https://tinyurl.com/MG-Security`
- دعوة MG System: `https://tinyurl.com/mgsystem89`
- دعوة MG Ticket: `https://tinyurl.com/mgticet7`

> ملاحظة: رابط ديسكورد المضاف هو رابط قناة/محادثة داخل السيرفر كما زوّدتني به، وليس رابط دعوة عام للسيرفر.
