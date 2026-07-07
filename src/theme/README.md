Design system tokens and usage

- Tokens for runtime consumption: `src/theme/tokens/index.ts`
- Tailwind (NativeWind) uses `src/theme/tokens.js` via `tailwind.config.js`.

Usage examples:

- Use colors in Tailwind classes: `bg-lingua-purple`, `text-text-primary`, `border-border`.
- Use font family: `font-poppins` via class `font-poppins` (mapped in config as `poppins`).

Font loading:

Fonts are loaded in `src/app/_layout.tsx` using `expo-font` so the `Poppins` family is available at runtime.

If you need to access tokens in JS/TS, import:

```ts
import tokens from 'src/theme/tokens';
console.log(tokens.colors.linguaPurple);
```
