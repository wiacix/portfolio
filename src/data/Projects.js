export const projects = [
    {
        id: 0,
        id_name: 10,
        id_description: 11,
        img: 'HR_logo.png',
        technologies: ["HTML", "CSS", "JavaScript"],
        git: 'https://github.com/wiacix/wiacekHR/tree/main'
    },
    {
        id: 1,
        id_name: 23,
        id_description: 24,
        img: 'BP_logo.png',
        technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
        git: 'https://github.com/wiacix/BiuroPodrozy/tree/main'
    },
    {
        id: 2,
        id_name: 25,
        id_description: 26,
        img: 'C_logo.png',
        technologies: ["HTML", "CSS", "JavaScript"],
        git: 'https://github.com/wiacix/Calculator'
    },
    {
        id: 3,
        id_name: 27,
        id_description: 28,
        img: 'TDA_logo.png',
        technologies: ["Kotlin"],
        git: 'https://github.com/wiacix/ToDoApp'
    }
]



export const projects_img = [
    {
        id: 0,
        img: ['HR1.png', 'HR2.png', 'HR3.png', 'HR4.png', 'HR5.png'],
        describeIMG_pl: ['Pierwsza strona, tytuł strony, to animacja pisania natomiast podtytuły wjeżdżają od boków, menu w formie zdjęć po najechaniu na pierwszy element', 'Jedna z podstron, nawigacja po najechaniu na element przypisuje klasę i poprzez animację doprowadza to widocznej postaci', 'Na dole każdej strony jest galeria w formie automatycznego slidera', 'Rozwijana nawigacja na innej podstronie', 'Cytaty w formie pergaminów z dynamiczną wysokością'],
        describeIMG_en: ['The first page, the page title is a writing animation and the subtitles appear from the sides, the menu in the form of photos when you hover over the first element', 'One of the subpages, navigation, when hovering over an element, assigns a class and through animation it brings it to the visible form', 'At the bottom of each page there is a gallery in the form of an automatic slider', 'Drop-down navigation on another subpage', 'Quotes in the form of parchment with dynamic height'],
        visible: false
    },
    {
        id: 1,
        img: ['BP1.png', 'BP2.png', 'BP3.png', 'BP4.png', 'BP5.png', 'BP6.png', 'BP7.png', 'BP8.png', 'BP9.png'],
        describeIMG_pl: ['Strona główna z animacją, prostym kalkulatorem napisanym w JS oraz nawigacją (po najechaniu na element OFERTY)', 'Niżej na stronie głównej znajduje się odliczanie dynamiczne do określonej daty oraz galeria zdjęć', 'Po kliknięcu na uzyskanie rabatu włącza się prosta gra napisana w JS, gdy zaznaczy się odpowiedni kolor (za każdym razem generowany losowo), otrzymuje się kod stworzony w kluczu wyrażenia regularnego, który obniża szacowany koszt o 10%', 'Na kolejnej podstronie jest slider oraz element przeszukania bazy danych w celu wyrzucenia pasujących (margines dni oraz uczestników +/- 3) wycieczek', 'Moduł tworzenia kont oraz logowania się', 'Na kontach użytkowników można dodawać wpisy na blog, przeglądać wpisy innych użytkowników, dodawać komentarze oraz kontaktować się z administratorem', 'Można usunąć własny wpis', 'Na koncie administratora są moduły zarządzania, administrator może: dodać ofertę wycieczki, usunąć każdy wpis na blogu, usunąć każdy komentarz na blogu', 'Może również odpowiadać na zgłoszenia użytkowników, którzy się kontaktowali za pomocą zakładki kontakt. Po odpowiedzi administratora, zmienia się status oraz na koncie użytkownika pojawi się informacja o nowej wiadomości.'],
        describeIMG_en: [],
        visible: false
    },
    {
        id: 2,
        img: ['C1.png', 'C2.png', 'C3.png', 'C4.png'],
        describeIMG_pl: ['Wygląd prostego kalkulatora', 'Po kliknięciu LICZ otrzymujemy w oknie wynik oraz zapisuje się nam działanie pod spodem', 'Kilika działań w historii oraz czyszczenie ekranu po kiknięcu C', 'Wciśnięcie AC czyści nam zarówno ekran jak i historię działań'],
        describeIMG_en: ['The appearance of a simple calculator', 'After clicking NUMBERS, we get the result in the window and the operation below is saved', 'Several actions in history and clearing the screen after clicking C', 'Pressing AC clears both the screen and the history of activities'],
        visible: false
    },
    {
        id: 3,
        img: ['TDA1.png', 'TDA2.png', 'TDA3.png', 'TDA4.png', 'TDA5.png', 'TDA6.png', 'TDA7.png'],
        describeIMG_pl: ['Lista zadań zaciągnięta z bazy danych, można dodać nowe zadanie przez kliknięcie + na dole strony', 'Dodając zadanie musimy podać jego tytuł, godzina, do której chcemy je zrealizować, datę oraz priorytet', 'TimePicker w formie wygodnego zegarka', 'DatePicker w formie wygodnego kalendarza', 'Dodane zadanie, w zależności od priorytetu Low->zielone/Medium->żółte/High->czerwone. Po kliknięcu na zadanie można je edytować', 'Edycja zadania, można je również usunąć', 'Zmieniony priorytet, po kliknięciu na górze w czerwonego X usuwamy wszystkie zadania'],
        describeIMG_en: ['List of tasks downloaded from the database, you can add a new task by adding an additional + at the bottom of the page', 'When adding a task, we must provide its title, time by which we want to complete it, date and priority', 'TimePicker in the form of a comfortable watch', 'DatePicker in the form of a convenient calendar', 'Task added, depending on priority Low->green/Medium->yellow/High->red. After clicking on a task, you can edit it', 'Edit a task, you can also delete it', 'Changed priority, after clicking the red X at the top we delete all tasks'],
        visible: false
    }
]
