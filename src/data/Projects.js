export const projects = [
    {
        id: 0,
        id_name: 23,
        id_description: 24,
        img: 'BP_logo.png',
        technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
        git: 'https://github.com/wiacix/BiuroPodrozy/tree/main'
    },
    {
        id: 1,
        id_name: 29,
        id_description: 30,
        img: 'P_logo.png',
        technologies: ["HTML", "CSS", "JavaScript"],
        git: 'https://github.com/wiacix/portfolio'
    },
    {
        id: 2,
        id_name: 10,
        id_description: 11,
        img: 'HR_logo.png',
        technologies: ["HTML", "CSS", "JavaScript"],
        git: 'https://github.com/wiacix/wiacekHR/tree/main'
    },
    {
        id: 3,
        id_name: 27,
        id_description: 28,
        img: 'TDA_logo.png',
        technologies: ["Kotlin"],
        git: 'https://github.com/wiacix/ToDoApp'
    },
    {
        id: 4,
        id_name: 25,
        id_description: 26,
        img: 'C_logo.png',
        technologies: ["HTML", "CSS", "JavaScript"],
        git: 'https://github.com/wiacix/Calculator'
    }
]



export const projects_img = [
    {
        id: 0,
        img: ['BP1.png', 'BP2.png', 'BP3.png', 'BP4.png', 'BP5.png', 'BP6.png', 'BP7.png', 'BP8.png', 'BP9.png'],
        describeIMG_pl: ['Strona główna z animacją, prostym kalkulatorem napisanym w JS oraz nawigacją (po najechaniu na element OFERTY)', 'Niżej na stronie głównej znajduje się odliczanie dynamiczne do określonej daty oraz galeria zdjęć', 'Po kliknięcu na uzyskanie rabatu włącza się prosta gra napisana w JS, gdy zaznaczy się odpowiedni kolor (za każdym razem generowany losowo), otrzymuje się kod stworzony w kluczu wyrażenia regularnego, który obniża szacowany koszt o 10%', 'Na kolejnej podstronie jest slider oraz element przeszukania bazy danych w celu wypisania pasujących (margines dni oraz uczestników +/- 3) wycieczek', 'Moduł tworzenia kont oraz logowania się', 'Na kontach użytkowników można dodawać wpisy na blog, przeglądać wpisy innych użytkowników, dodawać komentarze oraz kontaktować się z administratorem', 'Można usunąć własny wpis', 'Na koncie administratora są moduły zarządzania, administrator może: dodać ofertę wycieczki, usunąć każdy wpis na blogu, usunąć każdy komentarz na blogu', 'Może również odpowiadać na zgłoszenia użytkowników, którzy się kontaktowali za pomocą zakładki kontakt. Po odpowiedzi administratora, zmienia się status oraz na koncie użytkownika pojawi się informacja o nowej wiadomości'],
        describeIMG_en: ['Home page with animation, a simple calculator written in JS and navigation (when hovering over the OFFER element)', 'Lower on the home page there is a dynamic countdown to a specific date and a photo gallery', 'After clicking to get a discount, a simple game written in JS starts. When you select the appropriate color (randomly generated each time), you receive a code created in a regular expression key, which reduces the estimated cost by 10%.', 'On the next subpage there is a slider and an element for searching the database to select matching (margin of days and participants +/- 3) trips', 'Account creation and login module', 'In user accounts you can add blog entries, view other users entries, add comments and contact the administrator', 'You can delete your own entry', 'There are management modules in the administrator account, the administrator can: add a trip offer, delete each blog entry, delete each blog comment', 'It can also respond to reports from users who contacted you via the contact tab. After the administrator responds, the status changes and information about a new message will appear on the users account'],
        visible: false
    },
    {
        id: 1,
        img: ['P1.png', 'P2.png', 'P3.png', 'P4.png'],
        describeIMG_pl: ['Po załadowaniu strony jest 12 sekundowe intro, które przełącza się automatycznie a po nim włącza się główna zawartość strony', 'Jest możliwość zmiany języka suwakiem na górze strony, wartość jest przechowywana jako Cookies, więc po przeładowaniu zobaczymy intro w odpowiednim języku', 'Można przeglądać galerię z opisami każdego projektu', 'Dodatkowo są zapisane moje doświadczenie i ukończone kursy'],
        describeIMG_en: ['After loading the page, there is a 12-second intro that switches automatically and then the main content of the page starts', 'It is possible to change the language using the slider at the top of the page, the value is stored as Cookies, so after reloading we will see the intro in the appropriate language', 'You can browse the gallery with descriptions of each project', 'Additionally, my experiences and completed courses are recorded'],
        visible: false
    },
    {
        id: 2,
        img: ['HR1.png', 'HR2.png', 'HR3.png', 'HR4.png', 'HR5.png'],
        describeIMG_pl: ['Pierwsza strona, tytuł strony, to animacja pisania natomiast podtytuły wjeżdżają od boków, menu w formie zdjęć po najechaniu na pierwszy element', 'Jedna z podstron, nawigacja po najechaniu na element przypisuje klasę i poprzez animację doprowadza to widocznej postaci', 'Na dole każdej strony jest galeria w formie automatycznego slidera', 'Rozwijana nawigacja na innej podstronie', 'Cytaty w formie pergaminów z dynamiczną wysokością'],
        describeIMG_en: ['The first page, the page title is a writing animation and the subtitles appear from the sides, the menu in the form of photos when you hover over the first element', 'One of the subpages, navigation, when hovering over an element, assigns a class and through animation it brings it to the visible form', 'At the bottom of each page there is a gallery in the form of an automatic slider', 'Drop-down navigation on another subpage', 'Quotes in the form of parchment with dynamic height'],
        visible: false
    },
    {
        id: 3,
        img: ['TDA1.png', 'TDA2.png', 'TDA3.png', 'TDA4.png', 'TDA5.png', 'TDA6.png', 'TDA7.png'],
        describeIMG_pl: ['Lista zadań zaciągnięta z bazy danych, można dodać nowe zadanie przez kliknięcie + na dole strony', 'Dodając zadanie musimy podać jego tytuł, godzina, do której chcemy je zrealizować, datę oraz priorytet', 'TimePicker w formie wygodnego zegarka', 'DatePicker w formie wygodnego kalendarza', 'Dodane zadanie, w zależności od priorytetu Low->zielone/Medium->żółte/High->czerwone. Po kliknięcu na zadanie można je edytować', 'Edycja zadania, można je również usunąć', 'Zmieniony priorytet, po kliknięciu na górze w czerwonego X usuwamy wszystkie zadania'],
        describeIMG_en: ['List of tasks downloaded from the database, you can add a new task by adding an additional + at the bottom of the page', 'When adding a task, we must provide its title, time by which we want to complete it, date and priority', 'TimePicker in the form of a comfortable watch', 'DatePicker in the form of a convenient calendar', 'Task added, depending on priority Low->green/Medium->yellow/High->red. After clicking on a task, you can edit it', 'Edit a task, you can also delete it', 'Changed priority, after clicking the red X at the top we delete all tasks'],
        visible: false
    },
    {
        id: 4,
        img: ['C1.png', 'C2.png', 'C3.png', 'C4.png'],
        describeIMG_pl: ['Wygląd prostego kalkulatora', 'Po kliknięciu LICZ otrzymujemy w oknie wynik oraz zapisuje się nam działanie pod spodem', 'Kilika działań w historii oraz czyszczenie ekranu po kiknięcu C', 'Wciśnięcie AC czyści nam zarówno ekran jak i historię działań'],
        describeIMG_en: ['The appearance of a simple calculator', 'After clicking NUMBERS, we get the result in the window and the operation below is saved', 'Several actions in history and clearing the screen after clicking C', 'Pressing AC clears both the screen and the history of activities'],
        visible: false
    }
]
