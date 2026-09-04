# Fix production image loading

## What will change
- Replace every website image string such as `/images/logo.png` with a Vite import from the matching PNG in `src/assets`.
- Keep the favicon as a public root asset because document icons are served directly rather than imported by components.
- Set Vite's `base` to `/`, which is correct when the app is deployed at the root of a custom domain.
- Preserve all existing layout, styling, content, animation, and behavior.

## Verification
- Run the requested production build command.
- Confirm all imported PNGs are emitted into the production output with Vite-generated filenames.
- Scan source again to ensure no component still uses `/src/assets/...` or `/images/...` image paths.
