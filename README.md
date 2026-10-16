# Plan Formy 1.7.0

Trening, dieta keto, protokół suplementacji, mobilność i oddech w jednej PWA.
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

## Oddech (metoda Wima Hofa)
- Nagrania są tylko w prywatnym repo danych: `PlanFormy-data/oddech/` (glos.m4a, poziom-1…4.m4a, razem ok. 39 MB).
- W aplikacji: Oddech → ⚙ Ustawienia → Pobierz wszystkie. Pobierasz raz na każde urządzenie, potem działają offline.
- Historia sesji synchronizuje się jak reszta danych (klucz `forma.oddech.v1`).

## Post przerywany
- Dieta → Post: schemat 12:12 … 23:1, licznik startuje sam 30 min po kolacji; kafel z fazą na ekranie Dziś.
- „Dopasuj godziny posiłków”: okno kończy się kolacją, posiłek 1 i obiad (oraz suple i plan dnia) przesuwają się do okna. Wyłączenie przywraca poprzednie godziny.
- Historia postów synchronizuje się jak reszta danych (klucz `forma.post.v1`).

## Kompas: wyniki, tłuszcze, życie
- Wyniki badań (Pomiar → Wyniki badań albo alert na Dziś): lipidogram, ApoB, Lp(a), glukoza, HbA1c, ALT/AST, TSH; non-HDL i TG/HDL liczone same; przypomnienie o kontroli 8–12 tyg. po zmianie diety. Klucz `forma.lab.v1`.
- Dieta → Plan: jakość tłuszczu (nasycone g / % energii, proporcja nienasycone : nasycone, główne źródła, zamiennik).
- Check-in: głód i trawienie (opcjonalnie). Pomiar tygodniowy: ciśnienie.
- Przegląd 8 tygodni: cel, co się poprawiło / pogorszyło, podpowiedzi, dwa pytania, „najmniejszy sensowny ruch”.
- Dziś: dzień w trasie / trudny dzień (minimum + licznik białka + jedzenie w trasie), „Zjadłem poza planem” (powrót bez karania), etapy keto, „po co”. Klucz `forma.zycie.v1`.
- Post: opcjonalny pomiar glukozy i ketonów.

## Trening: postęp i trasa
- Ćwiczenia kontrolne (Trening → Ćwiczenia kontrolne): jedno na partię na cały rok, wykres e1RM, zastój → „+1 seria” zamiast zmiany planu.
- Pod ćwiczeniem „Cel dziś” (ciężar / powtórzenia do pobicia), w polach wartości z ostatniej sesji.
- Gotowość z wyników: dwa treningi z rzędu słabiej niż tydzień wcześniej → ostrzeżenie.
- Tydzień utrzymania (trasa) w Bilansie partii + plan „Trasa · utrzymanie” (bez sprzętu / gumy + hantle).
- Pomiar: tempo wagi na tle pasma celu z Diety (masa: zależnie od stażu).

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
