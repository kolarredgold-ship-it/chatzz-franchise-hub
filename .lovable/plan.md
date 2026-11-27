# Replace the site logo

No logo file was supplied, so a new Bangarpet Chatzz logo will be created and used in place of the current text name.

## What changes
1. Create a new logo: a simple badge mark (a pani puri / chaat bowl symbol) next to the "Bangarpet Chatzz" name, in the brand saffron-orange and deep green on a transparent background.
2. Top bar: replace the text name with the logo image; it still links to the top of the home page.
3. Footer: replace the text name with the logo image (light version that reads on the dark footer).
4. Browser tab icon: use the badge mark instead of the default icon.
5. If you later upload your own logo, it can be swapped into the same three places.

## Technical details
- Generate the mark with the image CLI, store it as a Lovable asset pointer under `src/assets/`.
- `Header.tsx` and `Footer.tsx`: swap the gradient text `<a>/<Link>` for `<img>` with `alt="Bangarpet Chatzz"`, height ~40px.
- Favicon: 64x64 `public/favicon.png`, update `index.html`, delete `public/favicon.ico`.
- Check header and footer at desktop and phone sizes.
