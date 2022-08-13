# SPBEAUTY

## Структура проекта
В директории `public` хранится манифест, подключение разных библиотек, скрипты на запуск и фавиконки. В директории `src` хранятся непосредственно файлы с кодом экранов.
### `public`
Здесь можно найти `index.html` с `head`, `body` и скриптами на запуск проекта, куда можно, например, вставить скрипты метрики. Здесь же подключаются шрифты.
### `src`
Главный скрипт с запуском всего приложения — `index.js`, именно он запускает модуль с приложением `App.js`. Также здесь подключаются: 
* Стили Bootstrap.
* `index.css` с фундаментальными стилями, относящимися ко всему проекту. Например, стили для тегов.
* `typography.css` со стилями для текста. Все стили задаются с помощью селекторов CSS-классов.
* `App.css` с временными стилями. В проекте не предполагается использование иных CSS-файлов кроме перечисленных уже двух с заданными функциями, вместо этого в продуктовой версии исползьзуется библиотека `styled-components`. Но если решить задачу с помощью библиотеки невозможно или разработчику не хватает компетенций, то временно прописать селекторы с CSS-классами можно в этот файл. Далее более старший по уровню разработчик перепишет все стили с использованием библиотеки и снова очистит его.

Также в `src` хранятся несколько директорий с главными принципом *«название директории описывает содержимое»*.

### `Components`
Универсальные компоненты, которые не привязаны своим использованием к конкретному разделу.
### `Icons`
React-компоненты из SVG иконок. Применяются в коде как обычные компоненты в виде HTML-тегов. Например, `<SearchIcon/>` внутри какого-либо контейнера поместит иконку поиска. Иконки можно спокойно помещать в любые контейнеры наравне с текстом.
### `Images`
Оригиналы изображений в PNG. Для использования необходимо вставлять путь в атрибут `src` тега `img`.
### `Layouts`
Экраны с собственными компонентами. Каждый визуальный блок описан в своей директории и состоит из главного JS-файла, одноимённого с названием директории, и компонентов, используемых для описания блока. Если компонентов для данного визуального блока использовано больше 2, их очень желательно собрать в отдельной папке `Components`.

## Использованные библиотеки
* React. Особенностью библиотеки являются то, что вместо атрибута `class` необходимо использовать `className`. Это работает абсолютно так же, как и `class` в HTML, просто другой стандарт в нейминге.
* Bootstrap. Полезными в вёрстке будут материалы: [про отступы](https://getbootstrap.com/docs/5.0/utilities/spacing/), [про флекс](https://getbootstrap.com/docs/5.0/utilities/flex/), [про грид](https://getbootstrap.com/docs/5.0/layout/grid/).
* `styled-components`. Полезным в вёрстке будет [стартовый материал](https://styled-components.com/docs/basics#getting-started). В проекте использование библиотеки ограничивается быстрым созданием компонентов, наследуемых от стандартных тегов в HTML, но с дополнительными стилями, которые записываются внутри \`обратных кавычек\`. Например, сниппет снизу создаёт обычный `div`, потом применяет к нему стиль, где фоновый цвет становится красным, а затем сохраняет это как компонент `RedRect`.
    ```
    const RedRect = styled.div`
        background-color: red;
    `;
    ```
    В дальнейшем этот прямоугольник можно использовать как обычный React-компонент: `<RedRect></RedRect>` или `<RedRect/>`.

## Гид по кнопкам
### `Clickable`
Универсальная обёртка, чтобы сделать любой элемент кликабельным в браузере. Никаких коллбэков нет, никакую функцию ваш кликабельный объект не сможет выполнять, это нужно только чтобы визуально курсор сменился со стрелочки на руку с пальчиком. Этот компонент использован для всех кнопок, его не нужно редактировать. 

### `PrimaryButton` и `SecondaryButton`
Компоненты для кнопок, оба имеют атрибут `minWidth`. Дефолтное значение на данный момент `144px`. Если контента больше чем на `144px`, то кнопка растянется в ширину, если меньше — примет ширину `minWidth`.
Контент для кнопок указывать внутри открывающего и закрывающего тегов.
Пример использования без атрибутов:
```
<PrimaryButton>Нормалбная кнобка</PrimaryButton>
```
Примеры с атрибутом:
```
<PrimaryButton midWidth='0px'>Уская кнобка</PrimaryButton>
```
```
<PrimaryButton midWidth='800px'>Шерокая кнобка ваще капец</PrimaryButton>
```

### `IconAndTextButton`
Компонент для кнопки, состоящей из иконки и подписи справа как, например, кнопка «На главную». 
Получает два атрибута: `icon` и `text`, иконку надо указывать в фигурных скобках как HTML-тег, а текст как обычно в кавычках. Пример:
```
<IconAndTextButton text='На главную' icon={<ArrowBackIcon/>}/>
```

### `IconOnlyButton`
Компонент для кнопки, состоящей из одной только иконки. Пример: кнопки с чатом и уведомлениями в хэдере. Внутри это `Clickable` с `opacity` 80% на ховер.
Получает один атрибут `icon` с иконкой внутри фигурных скобок как обыкновенный компонент.
Пример:
```
<IconOnlyButton icon={<MessagesIcon/>}/>
```