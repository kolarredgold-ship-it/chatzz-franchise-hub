# AGENTS.md

## Typography

- One font family site-wide, set on `body` in `src/index.css`; headings inherit it. Never add a second typeface or an inline `style={{ fontFamily }}` override — use the shared classes `.eyebrow` (section label), `.h-sec` (section title), `.h-card` (card/panel title) and Tailwind text utilities instead.
- One heading weight (`font-extrabold` / 800) and no arbitrary text sizes (`text-[10px]` etc.); use the standard scale so section titles stay identical everywhere.

## AI advisor
- Run recommendation prompts and AI Gateway SDK calls only in the public franchise-advisor Edge Function; validate input and output, store no leads, and hand enquiries to WhatsApp to preserve the account-free prospect flow.
- Keep advisor fee and budget checks in the function's rules module with tests; recommendations must not imply program fees cover outlet setup costs.
- Keep confirmed city presence in a data module; do not fabricate individual outlet pins without supplied addresses.

## Partner stories
- Label sample testimonials, portraits and outcomes as fictional at section and item level until verified partner material replaces them, to avoid presenting examples as customer evidence.
- Use the shared Embla carousel for sliding story content with swipe and accessible manual navigation, avoiding automatic motion.
