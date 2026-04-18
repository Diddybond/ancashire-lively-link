
The reference shows a warm, friendly senior-wellbeing site. I'll pull only the **palette and aesthetic cues** — not the layout, copy, or imagery.

## What I'm taking from the reference

- **Sage/forest green** as the primary accent (replacing current amber)
- **Warm cream** background (slightly warmer than current stone-50)
- **Soft beige/peach card tints** for service/pricing cards
- **Deep forest green** footer band
- **Rounded pill buttons** with generous padding
- **Soft, friendly serif headings** (Lora stays — already a good fit)

## Changes

1. **`src/styles.css`** — token swap only:
   - `--background`: warm cream (~oklch 0.97 0.015 90)
   - `--primary`: sage green (~oklch 0.55 0.08 145), keep good contrast for white text on buttons
   - `--primary-foreground`: white/cream
   - `--secondary` / `--accent` / `--muted`: soft beige tints
   - `--ring`: matches new primary

2. **`src/components/landing/Header.tsx`** — pill-shaped CTA button to match reference

3. **`src/components/landing/Hero.tsx`** — pill CTA, slightly warmer background tone

4. **`src/components/landing/TrustBar.tsx`** — softer card, sage icon chips

5. **`src/components/landing/Services.tsx`** — beige-tinted card backgrounds (not white), rounded corners, sage icons

6. **`src/components/landing/Pricing.tsx`** — sage primary button, beige card tint

7. **`src/components/landing/ScopeNotice.tsx`** — re-tint with new primary (sage/10)

8. **`src/components/landing/Contact.tsx`** — sage submit button (pill)

9. **`src/components/landing/Footer.tsx`** — deep forest green background band, cream text

## Out of scope

- No copy changes
- No new sections or layout restructuring
- No new images (Sabrina's photo stays as-is)
- Typography unchanged (Lora + Inter)
