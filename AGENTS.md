<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Internationalization (i18n) Rules

- **NO HARDCODED TEXT**: All UI strings must be wrapped in the `t()` function from `LanguageContext`.
- **Translations Registry**: All new translation keys must be added to `src/context/LanguageContext.tsx` for all supported languages (en, vi, es, ru, ar).
- **Locale-Aware Routing**: All internal links must include the current locale (e.g., `/${language}/#features`).
- **RTL Support**: Arabic (ar) uses Right-to-Left layout. Ensure layout components respect the `dir` attribute from `LanguageContext`.
