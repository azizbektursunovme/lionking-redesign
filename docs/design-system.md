# Dizayn tizimi — "Qora va oltin"

Jonli ko'rinishi: `/styleguide/`. Kod: `src/styles/global.css` (`:root` tokenlari).
Tuzilma T-LOGISTICS redizayni bilan bir xil (Pinterest'dagi yuk tashish saytlari tahlilidan tanlangan); ranglar Lion King logotipidan.

## Ranglar

| Token | Hex | Qayerda |
|---|---|---|
| `--dark-900` | `#0E0E10` | Yuqori qator, hero, footer |
| `--dark-800` | `#18181B` | Coverage bandi, dispatch paneli |
| `--gold` | `#C9A227` | Logotip oltini: tugmalar (qora matn bilan), qora fondagi aksent |
| `--gold-700` | `#7A5F0E` | Oq fondagi oltin matn va havolalar (kontrast 6:1) |
| `--gold-300` | `#E6C96A` | Fokus halqasi, hover, qora fondagi aksent |
| `--gold-50` | `#FBF5E2` | Ikonka doiralari, info xabar |
| `--ink` / `--text` / `--muted` | `#18181B` / `#3F3F46` / `#63636B` | Sarlavha, matn, ikkinchi darajali matn |
| `--soft` / `--line` | `#F5F5F4` / `#E4E4E7` | Ikkinchi fon, chegaralar |

Qoida: oq fonda oltin hech qachon `--gold` emas, faqat `--gold-700` (eski saytdagi o'qilmaydigan oltin muammosi).

## Kun / tun mavzusi

Header'dagi oy/quyosh tugmasi saytni oq (kun) va qora (tun) rejimga o'tkazadi. Birinchi kirishda telefon/kompyuter sozlamasiga qaraydi, tanlov shu qurilmada eslab qolinadi (`localStorage`, kalit `lk-theme`). Mavzu sahifa chizilishidan oldin qo'yiladi, miltillash yo'q. JavaScript o'chiq bo'lsa sayt oq rejimda, tugma ko'rinmaydi.

Tun rejimida (`<html data-theme="dark">`) faqat tokenlar almashadi:

| Token | Kun | Tun |
|---|---|---|
| `--bg` (sahifa) | `#FFFFFF` | `#111113` |
| `--surface` (kartalar, formalar, header) | `#FFFFFF` | `#1B1B1E` |
| `--soft` | `#F5F5F4` | `#161618` |
| `--ink` / `--text` / `--muted` | `#18181B` / `#3F3F46` / `#63636B` | `#F4F4F5` / `#D4D4D8` / `#A1A1AA` |
| `--line` | `#E4E4E7` | `#2E2E33` |
| `--gold-700` (oltin matn, havolalar) | `#7A5F0E` | `#E6C96A` |
| `--gold-50` (ikonka doiralari) | `#FBF5E2` | `#2A2412` |

Logotip: oq fonda asl logotip (qora "TRANSPORT CORP"), qora fonda (hero, footer, tun rejimi) yozuvi oq varianti `public/brand/logo-light-*.webp`.

## Shrift, oraliqlar, komponentlar

- Archivo (variable), h1/h2 katta harflarda 800, matn 17px. Telefonda inputlar 17px (16px dan katta), tugmalar 48px (kichigi 44px).
- 4px oraliq tizimi, kontent 1200px, breakpoint'lar 640 / 768 / 900 / 960 / 1024 / 1100 / 1200.
- Komponentlar: shaffof→oq header, foto hero, qisqa forma paneli, raqamlar qatori, suratli kartalar, AQSh xaritasi, ikonkali xususiyatlar, lavozim kartalari, 5 qadamli jarayon, CTA juftligi, 2 qadamli formalar (holatlari bilan), dispatch paneli, brendli 404.
- Animatsiya yo'q (faqat hover), `prefers-reduced-motion` hurmat qilinadi.
