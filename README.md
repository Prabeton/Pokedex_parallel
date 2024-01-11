---------------------------------------- \* ----------------------------------
DOKUMENTACJA APLIKACJI POKEDEX
---------------------------------------- \* ----------------------------------
I. Cel projektu, krótki opis projektu i ogólne funkcje. Napisać jak projekt wykorzystuje Pokemon API.

Cel powstania projektu był na początku czysto szkoleniowy. Chodziło w nim o podsumowanie i praktyczne wykorzystanie zdobytej wcześniej wiedzy poprzez stworzenie niewielkiej aplikacji webowej. Zakres materiału objemuje takie technologie jak: HTML, CSS, JavaScript i bibliotekę React oraz kożysta z wielu innych bibliotek tj. "Notistack", "uuid", "react-query" i innych.
Aplikacja wykorzystuje pokemon API aby dostarczyć użytkownikowi mnóstwa informacji na temat samych pokemonów, ich zwyczajów i wielu umiejętności.
Pokemony są pokazywane w Kartach dzie widać ich imię, zjdjęcie i cztery własności. Aplikacja wyświetla je wszystkie w komponencie List - jest to strona główna aplikacji. Po kliknięciu w Kartę pokemona przechodzimy do osobnego okna gdzie mamy wyszczególnione jego cechy i możliwość dodnia pokemona do zakładki "ulubione" jak również możemy dodać pokemona do Areny gdzie po dodaniu kolejnego mogą stoczyć walkę i zostaje ogłoszony zwycięzca. Dla zalogowanych urzytkowników jest jeszcze jedna opcja - dodanie do warsztatu gdzie możemy nadać pokemonowi nowe imię i zmienić wartoooooosci jego cech. Nowo utworzonego pokemona zapisujemy korzystając z 'json-server'. Za pomocą 'json-server' zapisywane są również pokemony dodane do ulubionych. Odświerzanie i wyświetlanie list - zarówno nowych pokemonów jak i ulubionych - odbywa się w czasie rzeczywistym. W aplikacji mamy oczywiście system rejestracji i logowania. Aplikacja wydaje się rozwojowa. Możnaby docelowo "ulubione" traktować jako własne pokemony, które szkolimy a potem walczymy nimi na arenie. System "wzbogacania" umiejętności pokemonów możnaby oprzeć na zdobywanych punktach. Niestety tej mechaniki nie zaimplementowałem.  
---------------------------------------- \* ----------------------------------
II. Uruchomienie Aplikacji w środowisku developerskim.

1. Aby uruchomić aplikację na swoim komputerze w środowisku deweloperskim upewnij się, że masz zainstalowany: Node.js i program do kontroli wersji (np. Git) Na początku uruchom VSC i otwórz termianl (ctrl + `). Wybierz katalog, w którym chcesz przechować pliki projektu. Może to być dowolny katalog, np. ten w którym trzymasz inne projekty React. Przejdź do tego katalogu w terminalu używając komendy 'cd nazwa_katalogu'. Następnie sklonuj repozytorium od razu tworząc nowy katalog o adekwatnej nazwie. Wpisz w terminalu 'git clone https://github.com/DEVSTOCK-PL/4ED_Pokedex.git Pokedex' - zostanie utworzony nowy folder o nazwie 'Pokedex' a do niego zostanie sklonowane repozytorium. Jeśli chcesz możesz użyć dowolnej nazwy dla tego folderu np. 'Pokedex_inna_wersja' wpisując ją po adresie url.
2. Przejdz do katalogu projektu w terminalu wpisując 'cd Pokedex' i wpisze komendę 'npm install' co pozwoli zainstalować zależności projektu w Twoim środowisku na Twoim komputerze.
3. Wpisz komendę 'npm run dev' i poczekaj aż aplikacja się odpali. Po uruchomieniu się aplikacji w terminalu wciśnij klawisz 'o' w celu wyświetlenia jej w przeglądarce. Aplikacja uruchomi się pod adresem 'http://localhost:5175/'. Aplikacja uruchamia się na porcie 5175 który jest inny niż port domyśny Vite w celu wyeliminowania konfliktów w przypadku działania innej aplikacji na porcie domyślnym, którym jest port 5173.
4. Następnie otwórz nowe okno terminalu, przejdź do katalogu projektu i uruchom 'json-serwer' wpsując komendę 'npm run json-server'. Json-server uruchomi się na porcie 3002 i będzie "patrzył" czy "nasłuchiwał" zminy w pliku database.json. Plik 'database.json' pełni rolę bazy danych dla tej aplikacji.

---------------------------------------- \* ----------------------------------
III. Struktura Projektu: Opis struktury plików i folderów projektu. Wyjaśnienie, gdzie znajdują się kluczowe komponenty, usługi, style i pliki konfiguracyjne.

Wszelkie komponenty jsx przechowywane są w folderze 'src'. Bezpośrednio w tym folderze widzimy pliki App.jsx, main.jsa i RouterApp.jsx. Kolejne są poukładane w foldery. W katalogu components mamy podstrony (List, Register czy Arene) oraz komponenty wspólne wykożystywane w różnych miejscach (Card, PokemonDetailsModal). W folderze 'context' został umieszczonyplik z kontekstem, w folderze 'hooks' przechowujemy custom hooki, które służą do obsługi pobierania danych z API lub obsługująlogikę rejestracji czy logowania, w folderze services' jest umieszczony plik GlobalStyles. Poza folderem 'src' znajduję się plik index.html, database.json i kilka plikow konfiguracyjnych tj. package.json, .babelrc, eslintrc.cjs, .gitignore czy vite.config.js. W tym katalogu znajduję się też plik README.md.

---------------------------------------- \* ----------------------------------
IV. Komponenty i Logika: Dokładny opis kluczowych komponentów React używanych w projekcie, wraz z ich stanem, właściwościami i funkcjami. Opis, jak te komponenty wchodzą w interakcje z Pokémon API.

W Pokedex wykorzystujemy szereg kluczowych komponentów React, które tworzą naszą interaktywną aplikację. Oto opis kilku z tych kluczowych komponentów:

1. **List** Ten komponent jest odpowiedzialny za wyświetlanie listy Pokemonów. Przechowuje stan aplikacji, który zawiera listę Pokemonów pobraną z Pokémon API i json-server. Działa jako kontener do wyświetlania pojedynczych kart Pokemonów.

2. **Card** Komponent ten reprezentuje kartę pojedynczego Pokemona. Przyjmuje właściwości, takie jak nazwa, obrazek i typ Pokemona, a także zawiera funkcje obsługujące wydarzenia kliknięcia na kartę.

3. **PokemonDetailsModal** Głównym celem tego komponentu jest wyświetlanie szczegółowych informacji o wybranym Pokemonie. Pobiera dane z API na podstawie wyboru użytkownika i prezentuje je w czytelnej formie. Przechowuje również lokalny stan, aby zarządzać wybranym Pokemonem.

4. **TextField** Ten komponent oferuje funkcjonalność wyszukiwania Pokemonów na podstawie wprowadzonych fraz. Przekazuje wprowadzone dane do API, a następnie aktualizuje listę Pokemonów na podstawie wyników wyszukiwania.

Interakcje z Pokémon API są realizowane za pomocą funkcji i żądań HTTP.Ta operacja robiona jest tylko raz a następnie wszystkie 151 pokemonów a pokemon API jest zapisywany w tablicy a robione jest to przy udziale biblioteki 'react-query' i 'axios'. Podobnie, `TextField` komunikuje się z tablicami, które przechowują aktualną listę pokemonów aby uzyskać wyniki wyszukiwania, a `List` przechowuje dane Pokemonów z API w swoim stanie i renderuje je jako karty Pokemonów.

Każdy komponent jest odpowiednio podzielony, aby zapewnić klarowność i modułowość projektu. To pozwala na łatwe zrozumienie logiki aplikacji i umożliwia rozwijanie i modyfikowanie projektu w przyszłości.

---------------------------------------- \* ----------------------------------
V. Routingu i Nawigacja: Opis systemu routingu aplikacji, w tym struktury URL i mapowania routów do konkretnych komponentów.

Aby zapewnić nawigację między różnymi widokami w Pokedex, wykorzystujemy system routingu oparty na bibliotece React Router. Poniżej znajduje się opis struktury URL i mapowania routów do konkretnych komponentów:

1. **Struktura URL**: Nasza aplikacja posiada następującą strukturę URL:
   - Strona główna: `/` lub '/home - Główny widok listy Pokemonów - pochodzących zarówno a API jak i z json-server.
   - Strona ulubionych: `/favorites` - Lista pokemonów dodanych do ulubionych.
   - Arena `/arena` - miejsce gdzie możemy dodać dwa pokemony i stoczyć walkę.
   - Edition `/edition` - miejsce do którego możemy dodać pokemona celem jego ulepszenia i zapisania jako nowego.
   - Rejestracja `/register` - miejsce w którym możemy wypełnić i wysłać formularz rejestracji.
   - Logowanie `/login` - miejsce gdzie możemy zalogować się na swoje konto.

Dzięki temu systemowi routingu użytkownicy mogą łatwo przemieszczać się między różnymi widokami naszej aplikacji. Jest to nie tylko wygodne, ale także pomaga utrzymać naszą aplikację zorganizowaną i skalowalną.

---------------------------------------- \* ----------------------------------
VI. Zarządzanie Stanem: Opis wykorzystania stanu w aplikacji, np context

W aplikacji wykorzystuję context do przechowywania i zarządzania zmiennymi, które wykorzystuje globalnie. Są to zmienne: isDarkTheme, isLogin, workshopBody, blueCornerPokemon, redCornerPokemon. Do zarządzania stanem można też wykorzystać biblitekę 'react-query'.

---------------------------------------- \* ----------------------------------
VII. Stylowanie: Informacja o przyjętym wariancie styli:

Przyjąłem warian z urzyciem biblioteki 'styled-components' i tak jest włąściwie w całym projekcie z wyjątkiem kompnentu <TextField />,
który pochodzi z biblioteki Matrial-UI i pełni rolę szukajki.
Style globalne też pozostają wykonane wraz z biblioteką 'styled-components'.
---------------------------------------- \* ----------------------------------

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md)
  uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
  ------------------------------------------ \* --------------------------------
