# 🚀 GTA Jet Ski — Complete Deployment & SEO Guide

كل الخطوات من **رفع الموقع** حتى **الظهور في Google** و**Google Business Profile**.

---

## 📋 جدول المحتويات

1. [نشر الموقع على Vercel (مجاناً)](#1-نشر-الموقع-على-vercel)
2. [شراء وربط الدومين](#2-شراء-وربط-الدومين)
3. [إنشاء Google Business Profile](#3-إنشاء-google-business-profile)
4. [Google Search Console (مهم جداً لـ SEO)](#4-google-search-console)
5. [التحقق من الموقع في Google](#5-التحقق-من-ظهور-الموقع-في-google)
6. [خطوات SEO إضافية](#6-خطوات-seo-إضافية)

---

## 1️⃣ نشر الموقع على Vercel

### الخطوة 1: إنشاء حساب Vercel
1. روح على https://vercel.com/signup
2. سجل دخول بـ **GitHub** (الأسهل) أو Email
3. اختر الخطة المجانية (Hobby Plan) — كافية تماماً

### الخطوة 2: رفع الكود على GitHub
```bash
# في فولدر المشروع
git init
git add .
git commit -m "Initial commit: GTA Jet Ski website"

# أنشئ repo جديد على github.com (private أو public)
git remote add origin https://github.com/YOUR_USERNAME/gta-jetski.git
git branch -M main
git push -u origin main
```

### الخطوة 3: ربط GitHub مع Vercel
1. على Vercel Dashboard → **Add New → Project**
2. اختر الـ repo الجديد (gta-jetski)
3. Vercel رح يكتشف تلقائياً أنه Next.js — لا تغير شي
4. اضغط **Deploy**
5. بعد ~30 ثانية → الموقع جاهز على `https://gta-jetski.vercel.app`

### الخطوة 4: ربط الدومين (بعد ما تشتري)
1. Vercel Dashboard → Project → **Settings → Domains**
2. ضيف الدومين (مثلاً `gtajetski.ca`)
3. Vercel رح يعطيك DNS records — انسخها وحطها عند مزود الدومين

---

## 2️⃣ شراء وربط الدومين

### 🎯 اقتراحات للدومين (بالترتيب):

| الدومين | الميزة | الأولوية |
|---------|--------|----------|
| **gtajetski.ca** | قصير، كندي، احترافي | ⭐⭐⭐ الأفضل |
| **gtajetskirentals.com** | شامل لكل الخدمة | ⭐⭐⭐ |
| **torontojetski.ca** | SEO ممتاز لـ Toronto | ⭐⭐⭐ |
| **rentjetski.ca** | Action-oriented | ⭐⭐ |
| **jetskigtarentals.com** | Long-tail SEO | ⭐⭐ |

### 🛒 من وين تشتري:
| المزود | السعر التقديري | الميزة |
|--------|--------------|--------|
| **Namecheap** | $10-15/سنة | الأرخص + Privacy مجاني |
| **Cloudflare Registrar** | بسعر التكلفة | الأرخص للتجديد + سريع |
| **GoDaddy** | $15-20/سنة | شعبي لكن أغلى |
| **Google Domains** (مغلق) | — | انتقل لـ Squarespace |

**النصيحة:** استخدم **.ca** للسوق الكندي — يعطيك ثقة محلية و SEO أفضل في Toronto.

### الخطوة العملية:
1. روح Namecheap.com
2. ابحث عن `gtajetski.ca`
3. ضيف على السلة + WhoisGuard مجاني
4. ادفع → الدومين جاهز خلال 5 دقائق
5. روح **Domain List → Manage → Advanced DNS**
6. ضيف الـ DNS records من Vercel:
   - `A Record`: @ → 76.76.21.21
   - `CNAME`: www → cname.vercel-dns.com

---

## 3️⃣ إنشاء Google Business Profile

**هذا أهم خطوة لتظهر في "jet ski rental near me" Google Maps!**

### الخطوة 1: التسجيل
1. روح https://business.google.com
2. سجل دخول بـ Gmail الخاص بالعمل
3. **Add your business to Google**
4. اكتب اسم العمل: `GTA Jet Ski Rentals`

### الخطوة 2: اختيار الفئة
- **Primary Category:** "Boat Rental Service" أو "Boat Tour Agency"
- **Secondary Categories:** 
  - Watercraft Rental Service
  - Outdoor Activity Organizer
  - Tourist Attraction

### الخطوة 3: العنوان
- **Service area business** ✓ (مهم — لأنكم بتخدمو GTA كلها)
- ضيف Service Areas:
  - Toronto
  - Mississauga
  - Scarborough
  - Etobicoke
  - North York

### الخطوة 4: معلومات الاتصال
- **Phone:** +1 (416) 420-8228
- **Website:** https://gtajetski.ca (بعد ما تنشر)
- **Email:** info@gtajetski.ca

### الخطوة 5: ساعات العمل
- **Season:** May 1 - October 31
- **Daily:** 9:00 AM - 8:00 PM
- ضبط Special Hours للأعياد

### الخطوة 6: التحقق (Verification)
Google رح يبعث كود بـ 3 طرق محتملة:
- **بريد عادي** (5-7 أيام) — كرت بكود
- **مكالمة هاتفية** (فوري)
- **SMS** (فوري)

اختار الأسرع المتاح.

### الخطوة 7: إكمال البروفايل (100%)
بعد التحقق، أضف:
- ✅ **الشعار** (logo)
- ✅ **صورة الغلاف** (cover photo) — استخدم Hero image
- ✅ **10+ صور** من الفلاير + الجت سكي + Lake Ontario
- ✅ **الخدمات (Services):**
  - 30 Minute Jet Ski Rental — $75
  - 1 Hour Jet Ski Rental — $130
  - Group Bookings
  - Birthday Parties
- ✅ **منشورات أسبوعية (Posts)** — مثل Instagram
- ✅ **Q&A** — جاوب على أسئلة شائعة
- ✅ **اطلب من العملاء يكتبوا Reviews!** (الأهم)

### 🎯 طلب التقييمات (Reviews):
- بعد كل تأجير ناجح، ابعث الزبون **رابط Google Review مباشر**
- الرابط: `https://g.page/r/YOUR_ID/review`
- هدفك: **10+ تقييمات بأول شهر** → ترتفع في Maps

---

## 4️⃣ Google Search Console

**هذا اللي بيخلي موقعك يظهر في Google Search.**

### الخطوة 1: التسجيل
1. روح https://search.google.com/search-console
2. سجل دخول بنفس Gmail
3. **Add Property** → اختار **URL prefix**
4. اكتب: `https://gtajetski.ca`

### الخطوة 2: التحقق من ملكية الموقع
أسهل طريقة: **HTML tag**
1. Google رح يعطيك tag مثل:
   ```html
   <meta name="google-site-verification" content="abc123xyz..." />
   ```
2. انسخ القيمة بعد `content=`
3. روح فايل `app/layout.tsx` في الكود
4. ابحث عن `'REPLACE_WITH_GOOGLE_VERIFICATION_CODE'` واستبدلها بالقيمة
5. اعمل push للكود → Vercel ينشر تلقائياً
6. ارجع لـ Search Console واضغط **Verify**

### الخطوة 3: تقديم Sitemap
1. في Search Console → **Sitemaps** (من القائمة الجانبية)
2. اكتب: `sitemap.xml`
3. اضغط **Submit**
4. Google رح يبدأ يفهرس الصفحات (خلال 24-48 ساعة)

### الخطوة 4: طلب الفهرسة الفورية
لكل صفحة مهمة:
1. **URL Inspection** (شريط البحث بالأعلى)
2. الصق رابط الصفحة (مثلاً `https://gtajetski.ca/pricing`)
3. اضغط **Request Indexing**
4. كرر للصفحات: Home, Pricing, Locations, About, FAQ, Contact

---

## 5️⃣ التحقق من ظهور الموقع في Google

### بعد 24-48 ساعة:
في Google ابحث عن:
- `site:gtajetski.ca` → يجب يظهر كل الصفحات
- `GTA Jet Ski Rentals` → يجب يظهر موقعك
- `jet ski rental Toronto` → بأول 2-4 أسابيع رح ترتفع

### أدوات اختبار SEO:
- **PageSpeed Insights:** https://pagespeed.web.dev/ — اختبر سرعة الموقع
- **Rich Results Test:** https://search.google.com/test/rich-results — اختبر Schema
- **Mobile-Friendly Test:** https://search.google.com/test/mobile-friendly
- **Schema Validator:** https://validator.schema.org/

---

## 6️⃣ خطوات SEO إضافية

### Backlinks (روابط من مواقع أخرى لموقعك):
1. **Yelp Canada** — أنشئ بروفايل + رابط
2. **TripAdvisor** — اضف الخدمة
3. **Kijiji** — إعلانات منتظمة
4. **Yellow Pages** — مجاني
5. **BlogTO** — حاول تكتب guest post
6. **GetMyBoat / AnchorsBook** — منصات تأجير

### Local SEO Hacks:
- اطلب من العملاء يحطو موقعكم على Google Maps "Visited"
- استخدم نفس العنوان وأرقام الهاتف **حرفياً** بكل مكان
- ضيف الموقع لـ **Apple Maps** و **Bing Places** كمان

### Content SEO (مدونة):
أنشئ صفحة `/blog` ومقالات مثل:
- "5 Best Places to Jet Ski in Toronto 2026"
- "What to Wear When Renting a Jet Ski"
- "Beginner's Guide to Jet Skiing on Lake Ontario"
- "Toronto vs Mississauga: Which Jet Ski Location is Right?"

كل مقال = صفحة جديدة في Google = traffic أكثر.

### Social Signals:
- انشر على Instagram **يومياً** خلال الموسم
- استخدم Hashtags: #TorontoJetSki #JetSkiRentalGTA #SeaDooToronto
- ربط Instagram بالموقع في كل منشور

---

## 📊 الملخص: Timeline متوقع

| الأسبوع | المهمة | النتيجة المتوقعة |
|---------|--------|----------------|
| **الأسبوع 1** | شراء domain + نشر Vercel + GBP + Search Console | الموقع live |
| **الأسبوع 2-3** | الفهرسة الأولية + التحقق من GBP | تبدأ تظهر |
| **الأسبوع 4-6** | جمع 10+ تقييمات + backlinks | ترتفع في Maps |
| **الشهر 2-3** | محتوى منتظم + SEO | تترتب في أعلى الصفحات |
| **الشهر 4+** | Top 3 في "jet ski rental Toronto" | 🎯 الهدف |

---

## 🆘 لو احتجت مساعدة

كل خطوة لها رابط رسمي:
- **Vercel:** https://vercel.com/docs
- **Google Business:** https://support.google.com/business
- **Search Console:** https://support.google.com/webmasters
- **Schema.org:** https://schema.org/LocalBusiness

---

*🌊 GTA Jet Ski — Feel the water, live the thrill.*
