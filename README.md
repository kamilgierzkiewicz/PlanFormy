# Plan Formy 1.3.1

Trening, dieta keto, protokół suplementacji i mobilność w jednej PWA.
© 2026 Kamil Gierzkiewicz (MVT). Wszelkie prawa zastrzeżone.

## Wgranie na GitHub Pages
1. Nowe repozytorium `PlanFormy` → wgraj **całą zawartość** tego folderu, razem z katalogiem `clips/`.
2. Settings → Pages → Deploy from a branch → `main`, folder `/ (root)` → Save.
3. Adres: `https://LOGIN.github.io/PlanFormy/` → Safari → Udostępnij → Do ekranu początkowego.

## Synchronizacja (iPhone ↔ MacBook)
- Dane: prywatne repo `PlanFormy-data` (plik `data.json`, folder `zdrowie/` na pliki ze Skrótów).
- Token fine-grained tylko do tego repo, uprawnienie **Contents: Read and write**.
- Dziś → ⚙ Ustawienia → Synchronizacja → repo `LOGIN/PlanFormy-data` + token → Połącz.
- Token zostaje tylko na urządzeniu — nie trafia do repo ani do kopii zapasowych. Apka odmówi połączenia z publicznym repo.
- Przy konflikcie wygrywa nowsza zmiana danego modułu.

## Pliki
- `index.html` — cała aplikacja
- `sw.js`, `manifest.webmanifest` — tryb offline i instalacja
- `clips/*.webp` — pętle ćwiczeń mobilności z Twoich nagrań
- `icon-*.png`, `apple-touch-icon.png`, `favicon-32.png` — ikony

## Przeniesienie danych ze starych aplikacji
Jeśli stare apki działały pod tym samym adresem `*.github.io` w tej samej przeglądarce, dane pojawią się same (te same klucze).
Apki z ekranu początkowego iPhone'a mają osobne magazyny — wtedy:
1. W każdej starej apce zrób kopię: Trening (menu ⋯ albo ⚙ → Zapisz kopię), Suplementy (ustawienia → Eksport kopii), Mobilność (Postępy → Eksport JSON).
2. W Plan Formy: Dziś → ⚙ Ustawienia → Wczytaj kopię → zaznacz wszystkie pliki naraz.
3. Stara Dieta nie miała eksportu — wpisz ponownie wagę, kcal i nielubiane składniki w Dieta → Ja.

## Powiązania
- Jeden przełącznik „dzień treningowy” steruje Dietą (pula węgli), Suplementami (pre-workout, 2. shake) i ekranem Dziś.
- Dzień z wpisanymi seriami w Treningu liczy się jako treningowy automatycznie.
- Godzina treningu wyznacza pre-workout (−35 min) i posiłek z dodatkowymi węglami (obiad albo kolacja).
- Shake'i i neurokawa z protokołu są wliczane do bilansu diety (do wyłączenia w Dieta → Ja).
- Poranny check-in, sygnały przeciążenia, oddech z timerem i pomiar tygodniowy na ekranie Dziś.
- Lista zakupów na następny tydzień (2 zakupy świeżych), dowolne danie z listy w każdym posiłku.
- Pełna kopia wszystkich modułów: Dziś → ⚙ Ustawienia → Pełna kopia.
