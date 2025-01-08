# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

Резюме приложения
Общее описание:
Это система управления студентами. Оно позволяет:

Добавлять новых студентов через форму.

Искать студентов по различным критериям (имя, фамилия, отчество, факультет, дата рождения).

Отображать список студентов в таблице с возможностью сортировки по колонкам.

Показывать статистику по факультетам (сколько студентов учится, окончило и т.д.).

Использовать модальное окно для добавления студентов.

Основные технологии и инструменты:
React — для построения интерфейса.

Material-UI (MUI) — для стилизации и компонентов (таблицы, кнопки, текстовые поля и т.д.).

Formik — для управления формами (добавление студента, поиск).

TypeScript — для типизации и улучшения читаемости кода.

Локальное состояние — для управления данными (студенты, фильтры, сортировка).

Описание компонент
1. AddForm
   Что делает:

Форма для добавления нового студента.

Поля: имя, фамилия, отчество, дата рождения, год поступления, факультет, пол.

Как реализовано:

Использует Formik для управления состоянием формы и валидации.

При отправке формы создается новый объект Student и передается в родительский компонент через пропс onAddStudent.

Что применялось:

Formik для управления формой.

TextFieldWithFormik для отображения текстовых полей.

Тип AddFormProps для типизации пропсов.

2. SearchBar
   Что делает:

Форма для поиска студентов по критериям (имя, фамилия, отчество, факультет, дата рождения).

Кнопки:

Поиск — применяет фильтры.

Очистить — сбрасывает фильтры.

Показать всех — сбрасывает фильтры и показывает всех студентов.

Как реализовано:

Использует Formik для управления состоянием формы.

Применяет фильтры через пропс onSearch.

Что применялось:

Formik для управления формой.

Тип SearchFilters для типизации фильтров.

Тип SearchBarProps для типизации пропсов.

3. Table
   Что делает:

Отображает список студентов в таблице.

Поддерживает сортировку по колонкам.

Фильтрует студентов на основе критериев поиска.

Передает данные в TableBody, TableHeader и TableFooter.

Как реализовано:

Использует локальное состояние для управления фильтрами и сортировкой.

Передает данные в дочерние компоненты (TableBody, TableHeader, TableFooter).

Что применялось:

TableHeader для отображения заголовков таблицы.

TableBody для отображения строк таблицы.

TableFooter для отображения статистики.

Тип StudentTableProps для типизации пропсов.

4. TableHeader
   Что делает:

Отображает заголовки таблицы.

Поддерживает сортировку по колонкам (имя, фамилия, факультет и т.д.).

Как реализовано:

Использует TableSortLabel из MUI для сортировки.

При клике на заголовок вызывает функцию onSort из пропсов.

Что применялось:

TableSortLabel для сортировки.

Тип TableHeaderProps для типизации пропсов.

5. TableBody
   Что делает:

Отображает строки таблицы с данными о студентах.

Как реализовано:

Получает список студентов через пропс students.

Отображает данные в виде строк таблицы.

Что применялось:

Тип TableBodyComponentProps для типизации пропсов.

Тип StudentType для типизации данных о студентах.

6. TableFooter
   Что делает:

Отображает статистику по факультетам:

Сколько студентов учится.

Сколько студентов окончило обучение.

Общее количество студентов.

Как реализовано:

Получает данные через пропсы (facultyCounts, studyingCounts, graduatedCounts, totalCounts).

Отображает статистику в виде таблицы.

Что применялось:

Тип TableFooterProps для типизации пропсов.

Тип FacultyCount для типизации данных о факультетах.

7. Modal
   Что делает:

Модальное окно для добавления нового студента.

Как реализовано:

Использует компонент Dialog из MUI.

Отображает содержимое, переданное через пропс children.

Что применялось:

Тип ModalProps для типизации пропсов.

8. TextFieldWithFormik
   Что делает:

Кастомный компонент для текстовых полей, интегрированный с Formik.

Как реализовано:

Использует TextField из MUI.

Интегрируется с Formik через пропс formik.

Что применялось:

Тип TextFieldWithFormikProps для типизации пропсов.

9. Student (модель)
   Что делает:

Модель студента с методами для вычисления:

Полного имени (fullName).

Форматированной даты рождения (formattedBirthDate).

Возраста (age).

Годов обучения (yearsOfStudy).

Как реализовано:

Класс с геттерами для вычисляемых свойств.

Что применялось:

Тип StudentBase для базовых свойств студента.

10. sortArray (утилита)
    Что делает:

Сортирует массив студентов по указанному свойству.

Как реализовано:

Принимает массив студентов, свойство для сортировки и направление сортировки.

Возвращает отсортированный массив.

Что применялось:

Тип SortArrayProps для типизации параметров.
