# AGENTS.md

## Typography

- One font family site-wide, set on `body` in `src/index.css`; headings inherit it. Never add a second typeface or an inline `style={{ fontFamily }}` override — use the shared classes `.eyebrow` (section label), `.h-sec` (section title), `.h-card` (card/panel title) and Tailwind text utilities instead.
- One heading weight (`font-extrabold` / 800) and no arbitrary text sizes (`text-[10px]` etc.); use the standard scale so section titles stay identical everywhere.
