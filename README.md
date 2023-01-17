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

### Ограничения реализации
Не хватило ни информации в ТЗ, ни выделенного времени команде, на реализацию следующего функционала:
- Разделение участников на группы. Не подробно описано в ТЗ.
- Протоколы. Не описано в ТЗ.
