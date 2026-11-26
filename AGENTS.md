# AGENTS.md

## Typography

- One font family site-wide, set on `body` in `src/index.css`; headings inherit it. Never add a second typeface or an inline `style={{ fontFamily }}` override — use the shared classes `.eyebrow` (section label), `.h-sec` (section title), `.h-card` (card/panel title) and Tailwind text utilities instead.
- One heading weight (`font-extrabold` / 800) and no arbitrary text sizes (`text-[10px]` etc.); use the standard scale so section titles stay identical everywhere.

## AI advisor
- Run recommendation prompts and AI Gateway SDK calls only in the public franchise-advisor Edge Function; validate input and output, store no leads, and hand enquiries to WhatsApp to preserve the account-free prospect flow.
- Keep advisor fee and budget checks in the function's rules module with tests; recommendations must not imply program fees cover outlet setup costs.
- Keep confirmed city presence in a data module; do not fabricate individual outlet pins without supplied addresses.
- Store outlet-format investments and indicative specifications in the outlet-models module with concrete price tests; distinguish total outlet investment from training and brand program fees.

## Partner stories
- Label sample testimonials, portraits and outcomes as fictional at section and item level until verified partner material replaces them, to avoid presenting examples as customer evidence.
- Use the shared Embla carousel for sliding story content with swipe and accessible manual navigation, avoiding automatic motion.

## Hero slideshow
- Use the shared Embla carousel and its autoplay plugin for hero slides; pause on hover/focus and disable automatic motion for reduced-motion preferences to preserve accessible navigation.

## Franchise CRM
- Store CRM leads, trainers and activities only in the connected Google Sheet; route access through the franchise-crm Edge Function to keep connector credentials server-only.
- Validate staff identity with getUser and a protected user_roles admin grant on every CRM request; the obscure admin URL is navigation, never authorization.
- Do not auto-grant admin to new signups or first visitors; an owner must explicitly approve staff accounts.
- Keep public enquiries account-free and WhatsApp-only; staff enter lead records in the private workspace, avoiding an anonymous writable CRM endpoint.

## Franchise research
- Keep published comparison guides in the local curated content collection with official sources for named competitor facts; this prevents unsupported pricing and availability claims.
- Give public research routes their own metadata through Helmet, with canonical URLs owned by each route and a sitemap excluding private workspace routes; the static head remains the sitewide social fallback.

## Authentication emails
- Use the managed email SDK in the scaffolded auth-email-hook; do not add email queues or cron infrastructure because this project uses platform-managed sending.
