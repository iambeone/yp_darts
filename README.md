# Monorepo проекта Darts

### ТЗ проекта
- https://www.notion.so/Workspace-9bdd0c3a41534c66b40ef3af785ae21b

### Инструкция по запуску dev mode
- склонировать репозиторий
- в папке backend переименовать .env.example в .env , для запуска подойдут текущие настройки
- создать docker container в папке backend: cd backend && docker compose up -d
- установить зависимости в папке frontend: cd frontend && npm install
- запуcтить frontend: npm run start
- в Postman создать админа, в коллекции: auth - signup, скопировать токен, вставить в frontend/src/utils/constants.ts

### Api Docs
- Swagger - https://app.swaggerhub.com/apis/darts-api/darts-api/1.0.0
- Postman - https://www.postman.com/orange-crescent-343881/workspace/darts

### Готово на фронтенде
- переиспользуемые компоненты для форм: InputText, InputDate, RadioButtons, RadioOption(два варинта, горизонтальное и вертикальное), CheckBox, SelectOption, Button, ToggleTabs(переключение между документами внутри формы), UploadInput(только для загрузки фото в формах), TabMenu(переключение между формами)
- попапы: ContextMenu, ProfileMenu, DialogWindow(три варианта использования), Modals(обертка basic и фильтр поиска по юзерам)
- общие для страниц: Header(три типа для разных страниц), SideBar(основное меню в левой части), SearchBar, PageTitle
- в папке Forms собраны 4 формы для создания\редактирования игрока, сделана валидация
- в папке DataTable сверстана таблица GamersTable для отрисовки списка игроков
- в папке pages собраны страницы игроки (с таблицей), создание игрока, редактирование игрока, информация по игроку
- в папке services написаны экшены\редюсеры для getPlayers( +query для фильтра), getPlayer(по id), deletePlayer, сделана типизация

### Не доделано по фунционалу Игроки
- логика создания и редактирование игрока
- валидация нецензурной лексики
- на странице с информацией по игроку нужно проверить как отрисовываются все поля, есть проблемы с датами
- авторизация админа и private route
