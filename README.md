# Plan Formy 1.9.0

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

## Dieta: własne posiłki (1.9.0)
- Pod każdym posiłkiem: „Własny posiłek” (zamiast dania z planu) i „＋ Składnik do dania”. Sekcja „Dodatkowe posiłki” na przekąski.
- Nowy posiłek: kcal i makro albo ze składników; „Moje posiłki” do ponownego użycia, własne produkty (makro na 100 g).
- Ze zrzutu (np. Fitatu): wklejony tekst z Live Text albo „Wybierz zrzut” (odczyt w telefonie, pierwsze użycie pobiera ok. 7 MB).
- Własne pozycje są odejmowane od celu dnia, dania z planu się zmniejszają. Przekroczenie puli keto — ostrzeżenie, bez blokady.

## Pomiar i treningi dodatkowe (1.8.2)
- Obwody ciała (szyja, klatka, talia, brzuch, biodra, ramię, udo, łydka), zawartość tłuszczu (US Navy albo ręcznie), „Jak się mierzyć?”.
- Dotychczasowa „talia na wysokości pępka” przeszła do pola „Brzuch”.
- Dziś: dodatkowy trening (rodzaj, minuty, aktywne kcal). Dieta → Ja: „Uwzględnij kalorie z dodatkowych treningów” (50/75/100%).

## Okna i dane (1.8.1)
- „Zamknij ✕” w każdym oknie. Dziś → ⚙ Ustawienia → „Wyczyść dane…”: wybrane moduły, przy synchronizacji także w repo i na Macu.

## Redukcja: kroki, cel wagi, realne zero
- Kroki: Skrót Zdrowie 1.8.0 dopisuje kroki z Apple Watch (24 h przed porannym zapisem → wczoraj). Kafel na Dziś, karta w Pomiarze (trasa / dom osobno, wpis ręczny), alarm przy spadku ≥25% na redukcji, wiersze w Kompasie.
- Dieta → Ja: cel wagi z terminem (tempo, limit 1%/tydz., deficyt, „Wpisz kcal”), realne zero z trendu wagi i kalorii z planu, plan po dojściu do celu.
- Dieta → Pomoc: głód na redukcji, brak głodu na keto, koniec redukcji, kroki.

## Oddech: muzyka w tle (własna sesja)
- „Spotify”: muzyka z innej aplikacji gra dalej, Plan Formy gra na niej (przełącznik wyciszenia wyłączony).
- „Moje pliki”: MP3/M4A w `PlanFormy-data/oddech/muzyka/` → Oddech → ⚙ Ustawienia → Sprawdź repo → Pobierz. Ściszają się pod komendy.

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
