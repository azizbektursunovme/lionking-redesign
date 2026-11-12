# Lion King Transport Corp — sayt redizayni

[lionkingtransport.com](https://lionkingtransport.com) uchun yangi versiya. Asos: ClickUp'dagi "lionkingtransport.com — sayt va dizayn ko'rigi" xulosasi.
Bu alohida repo; asosiy saytga ko'chirish dasturchi bilan kelishiladi.

- Ko'rish havolasi: https://azizbektursunovme.github.io/lionking-redesign/
- Repo: https://github.com/azizbektursunovme/lionking-redesign

- Uslub: **qora va oltin** (logotip ranglari), T-LOGISTICS redizayni bilan bir xil tuzilma: katta yuk mashinasi surati hero'da, hero ichida qisqa narx so'rash formasi, suratli xizmat kartalari, AQSh xaritasi, tepada shaffof navbar.
- **Kun / tun mavzusi**: header'dagi oy/quyosh tugmasi; birinchi kirishda qurilma sozlamasiga qaraydi, tanlov eslab qolinadi ([docs/design-system.md](docs/design-system.md)).
- Texnologiya: [Astro 7](https://astro.build), statik HTML, faqat kichik skriptlar (menyu, formalar, telefon havolasi).
- Shrift: Archivo (o'zimizda, 35 KB). Tashqi CDN va kuzatuv skriptlari yo'q.
- Suratlar: **vaqtinchalik** bepul litsenziyali suratlar (Wikimedia Commons), mualliflari `/credits/` da. Haqiqiy Lion King suratlari kelganda almashtiriladi.
- Logotip: hozirgi oq fonli JPG'dan shaffof PNG/WebP yasalgan (`public/brand/`). Asl SVG kutilmoqda.

## Ishga tushirish

Node.js **22.23.4 yoki undan yangi** kerak (Node 24 LTS tavsiya).

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # dist/ papkaga statik sayt
npm run preview    # build'ni lokal ko'rish
npm run deploy:pages   # preview'ni GitHub Pages'ga (gh-pages branch) joylash
```

Sozlamalar (`.env.example` dan `.env` qiling):

| O'zgaruvchi | Nima uchun |
|---|---|
| `PUBLIC_QUOTE_ENDPOINT` | Narx so'rash formasi (`/contact/`) JSON yuboradigan API. Bo'sh bo'lsa **preview rejim**: hech narsa yuborilmaydi. |
| `PUBLIC_APPLY_ENDPOINT` | Haydovchi ariza formasi (`/careers/#apply`) JSON yuboradigan API. Bo'sh bo'lsa preview rejim. |
| `PUBLIC_NOINDEX` | `true` bo'lsa sahifalar Google'da indekslanmaydi (preview uchun). |

## Sahifalar

URL'lar eski sayt bilan bir xil, ko'chirishda havolalar buzilmaydi.

| Sahifa | Holati | Izoh |
|---|---|---|
| `/` | Tayyor | Foto hero + qisqa forma, raqamlar, 4 xizmat (har "Learn more" o'z xizmatiga), 48 shtat xaritasi, "nega biz", CTA |
| `/services/` | Tayyor | 4 xizmat (`#last-mile`, `#long-haul`, `#dispatch`, `#freight-management`), 5 qadamli jarayon, sohalar |
| `/fleet/` | Tayyor, suratlar vaqtinchalik | 10 Freightliner sleeper, jihozlar, texnologiya |
| `/careers/` | Tayyor, API kutilmoqda | Imtiyozlar, 3 lavozim, talablar, ariza formasi |
| `/about/` | Tayyor | Tarix, missiya, qadriyatlar |
| `/contact/` | Tayyor, API kutilmoqda | 2 qadamli narx so'rash formasi (yuk turi va jihoz bilan), ish vaqti |
| `/privacy-policy/`, `/terms-of-service/` | Tayyor | Matn eski saytdan o'zgarishsiz, brend ranglarida |
| `/credits/`, `/styleguide/`, `404` | Tayyor | 404 brendli |

Batafsil: [docs/sitemap.md](docs/sitemap.md), [docs/design-system.md](docs/design-system.md), [docs/needs.md](docs/needs.md).

## Ko'rikdagi muammolar qanday hal qilindi

| Muammo (eski sayt) | Yangi versiyada |
|---|---|
| Telefonda header 399px, menyu tugmasi chetdan chiqadi va 28×24px | Header 64px, "Menu" tugmasi 44px+ va ekran ichida; "Drive with us" menyu ichida |
| 1024px'da menyu sig'maydi, "Get a Quote" kesiladi | 1024–1440px'da bitta qatorda (1024–1199px'da telefon raqami ikonka bo'ladi) |
| Hero'da Adobe Stock namunasi, xira | Vaqtinchalik CC0 surat (1920px); haqiqiy surat kutilmoqda |
| Fleet sahifasida rasm yo'q | Fleet sahifasida suratlar (vaqtinchalik, "Sample photo") |
| Oq fonda oltin matn o'qilmaydi, legal sahifalar ko'k | Oq fonda to'q oltin (#7A5F0E, 6:1); legal sahifalar brend ranglarida |
| Logotip oq fonli JPG | Shaffof PNG/WebP (vaqtincha), SVG kutilmoqda |
| Ishonch bloki yo'q, tasdiqlanmagan da'volar | "Amazon DSP", "FMCSA fully compliant", "98%", "$100k+" olib tashlandi; USDOT/MC va sharhlar `site.ts` ga qo'shilsa o'zi chiqadi |
| Raqamlar zid (100+ va ~10 haydovchi) | Hamma joyda bir xil: 10 truck, 10 driver, 2015, 1,000+, 48 |
| Ijtimoiy havolalar "#", hamma "Learn more" bitta sahifaga | "#" havolalar yo'q (haqiqiy havola kelguncha yashirin); har "Learn more" o'z xizmatiga |
| Formada yuk turi va jihoz yo'q, SMS majburiy | Yuk turi, jihoz maydonlari bor; SMS ixtiyoriy, Privacy bilan mos; telefonda input 17px, tugmalar 44px+ |
| 404 brendsiz | Brendli 404 |
| Formada holatlar yo'q | Yuborilmoqda / xato / yuborildi. Ko'rish: `?state=error`, `?state=sending` |

## Tezlik

GitHub Pages preview, 2026-11-13: PageSpeed Insights bosh sahifa va Contact: telefonda 99, kompyuterda 100 (LCP 1.4–1.5 s, TBT 0 ms, CLS 0).
Lighthouse 13.6 (Services, Fleet, Careers, About): telefonda 99–100, kompyuterda 100. Accessibility va Best Practices hamma joyda 100 (tun rejimida bosh sahifa ham).
SEO 63 faqat preview'dagi noindex sababli; asosiy domenda `PUBLIC_NOINDEX` bo'sh qoldiriladi.

## Ma'lumotlarni o'zgartirish

Hamma kompaniya ma'lumoti `src/data/site.ts` da: telefon, manzil, USDOT/MC, ijtimoiy havolalar, xizmatlar, park, lavozimlar, sharhlar. `PENDING` deb belgilanganlar rahbardan keladi.
Haqiqiy suratlar: `public/photos/` dagi bir xil nomli WebP fayllarni almashtiring va `src/data/credits.ts` dan o'chiring.
Xarita: `src/data/us-map.json` (`node scripts/build-us-map.mjs`, bosh ofis koordinatasi skriptda).

## Forma API (dasturchi uchun)

Narx so'rash: `POST PUBLIC_QUOTE_ENDPOINT`, JSON: `pickup, delivery, pickupDate, freightType, equipment, commodity, weightLbs, name, company, email, phone, notes, smsConsent, source, submittedAt`.
Ariza: `POST PUBLIC_APPLY_ENDPOINT`, JSON: `name, email, phone, position, experience, cdl, message, source, submittedAt`.
2xx javob = yuborildi, boshqasi = xato. API boshqa domenda bo'lsa, CORS'da sayt domenini ruxsat eting.
