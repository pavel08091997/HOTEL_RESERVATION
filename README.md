Области хранения данных :
- БД на JSON Server
- BFF
- Redacts Store


Сущности и приложения:
- Пользователь : где будут храниться данные? (В бд(Список пользовавателей)), BFF (сессия тек пользователя),  в сторе (отображение в браузере)

- роль пользователя: БД(список ролей), БФФ(сессия пользовотеля с ролью), стор(использованипе на клиенте)

- Список: БД(Список отелей), стор(отображенип в браузере),
- комменты: БД(список комментов), стор(отображение в браузере)

Таблицы БД:

- Пользователи : USERS: id / login / password / regisred_at / role_id

- роли: roles: id / name
- Список отелей: cheeckList: id / addres / reiting / price / Image_url
- Описание номера: description : /content / reviews(отзывы)
- комментарии: comments: id / author_id/ content


Схема состояния на БФФ :

- сессия тек пользователя: login/ password / role

Схема для редакс сторе на клиенте:
- user : id / login / roleId /session
-hotelList: массив отелей: id / addres / reiting / price / ImageUrl /
- specificHotel: id / addres / reiting / price / description / ImageUrl /comments: id/autor/pablishADD

users:массив user: id / login // registerAT / role
