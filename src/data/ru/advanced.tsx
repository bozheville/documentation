import * as React from "react"
import CodeArea from "../../components/CodeArea"
import accessibleCodeBase from "../../components/codeExamples/accessibleCodeBase"
import accessibleCodeFinal from "../../components/codeExamples/accessibleCodeFinal"
import Link from "../../styles/link"
import { Note } from "../../styles/typography"
import { step1, step2, step3 } from "../../components/codeExamples/formWizard"
import smartForm from "../../components/codeExamples/smartForm"
import { CodeHeading } from "../../components/ApiPage"
import form from "../../components/codeExamples/form"
import input from "../../components/codeExamples/input"
import { Link as PageLink } from "gatsby"

export default {
  title: "Сложные примеры",
  header: {
    title: "Сложные примеры",
    description: "Стройте сложные и доступные формы с React Hook Form.",
  },
  controlledMixedWithUnControlled: {
    title: "Управляемые вместе с неуправляемыми компонентами",
    description: (
      <p>
        React Hook Form работает с неуправляемыми компонентами, а так же
        совместим с управляемыми компонентами. Большинство UI библиотем
        построены на поддержке только управляемых компонентов, таких как{" "}
        <a
          href="https://github.com/mui-org/material-ui"
          target="_blank"
          rel="noopener noreferrer"
        >
          Material-UI
        </a>{" "}
        и{" "}
        <a
          href="https://github.com/ant-design/ant-design"
          target="_blank"
          rel="noopener noreferrer"
        >
          Antd
        </a>
        . К тому же, с React Hook Form ре-рендеринг управляемых компонентов так
        же был оптимизирован. Ниже пример где мы комбинируем управляемую и
        неуправляемую валидацию формы.
      </p>
    ),
  },
  errorMessage: {
    title: "Сообщение об ошибке",
    description: (
      <p>
        Сообщения об ошибке - это визуальная обратная связь для юзеров,
        связанная с их вводом. В React Hook Form мы предоставляем объект{" "}
        <code>errors</code>, чтобы вы легко могли извлечь ошибки при
        необходимости. Однако есть несколько способов улучшить рендериг ошибок
        на экран.
      </p>
    ),
    register: (
      <>
        Вы можете легко передать сообщение об ошибке в <code>value</code>{" "}
        атрибут во время регистрации поля ввода. Например:
      </>
    ),
    component: "Создайте ErrorMessage компонент чтобы проще выводить ошибки.",
    optionalChaining: (
      <>
        <p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining"
          >
            Оператор опциональной последовательности
          </a>{" "}
          <code>?.</code> позволяет читать объект <code>errors</code> без
          необходимости беспокоиться об обращении к несуществующему свойству с{" "}
          <code>null</code> или <code>undefined</code>.
        </p>
        <p>
          <code>{`errors?.firstName?.message`}</code>
        </p>
      </>
    ),
    get: (
      <p>
        Если вы используете в проекте{" "}
        <a href="https://lodash.com" target="_blank" rel="noopener noreferrer">
          lodash
        </a>
        , тогда вы можете использовать lodash{" "}
        <code>
          <a
            href="https://lodash.com/docs/4.17.15#get"
            target="_blank"
            rel="noopener noreferrer"
          >
            get
          </a>
        </code>{" "}
        функцию. Например:
        <br />
        <br />
        <code>{`get(errors, 'firstName.message')`}</code>
      </p>
    ),
  },
  accessibility: {
    title: "Доступность (A11y)",
    description: (
      <>
        <p>
          В React Hook Form есть поддержка нативной валидации, которая позволяет
          валидировать поля по вашим правилам. Поскольку мы разрабатыеваем формы
          по уникальным дизайнам и разметкам - важно, чтобы формы были
          доступными (A11y).
        </p>

        <p>
          Следующий пример кода работает как задумано, но может быть улучшен для
          лучшей доступности.
        </p>

        <CodeArea rawData={accessibleCodeBase} />

        <p>
          Следующий пример кода улучшен блягодаря{" "}
          <a
            rel="noopener noreferrer"
            href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA"
            target="_blank"
          >
            ARIA
          </a>
          .
        </p>
        <CodeArea rawData={accessibleCodeFinal} />

        <p>
          После этих изменений, скринридер скажет:{" "}
          <i>“Name, edit, invalid entry, This is required.”</i>
        </p>
      </>
    ),
  },
  wizard: {
    title: "Wizard Form / Funnel",
    description: (
      <>
        <p>
          Довольно распространенный кейс хранить информацию юзера пока он
          переходит по разным страницам/секциям. Мы рекомендуем использовать
          библиотеки управления состоянием, для хранения введенных юзером данных
          на разных страницах/секциях. В этом примере, мы используем{" "}
          <Link
            href="https://github.com/bluebill1049/little-state-machine"
            target="_blank"
          >
            little state machine
          </Link>{" "}
          как библиотеку для управления состоянием (вы можете заменить ее на{" "}
          <Link href="https://github.com/reduxjs/redux" target="_blank">
            redux
          </Link>
          , если более знакомы с ней).
        </p>

        <p style={{ textAlign: "center" }}>♦</p>

        <p>
          <Note>Шаг 1:</Note> Настройте страницы и хранилище.
        </p>
        <CodeArea
          rawData={step1}
          url="https://codesandbox.io/s/form-wizard-pages-kkg7m"
        />

        <p>
          <Note>Шаг 2:</Note> Создайте страницы, настройте их так, чтобы они
          агрегировали данные, при клике на "submit" данные записывались в
          хранилище и передавались на следующую страницу формы.
        </p>
        <CodeArea
          rawData={step2}
          url="https://codesandbox.io/s/form-wizard-pages-kkg7m"
        />

        <p>
          <Note>Шаг 3:</Note> Настройте финальное действие со всеми данными из
          хранилища.
        </p>
        <CodeArea
          rawData={step3}
          url="https://codesandbox.io/s/form-wizard-pages-kkg7m"
        />

        <p>
          Следуюя шаблону выше, вы сможете построить "wizard form/funnel" для
          агрегации данных юзера с нескольких страниц.
        </p>
      </>
    ),
  },
  smartForm: {
    title: "Умный компонент Form",
    description: (
      <>
        <p>
          В этом примере показано, как легко вы можете составить композицию
          формы и полей ввода. Мы создадим <code>Form</code> компонент чтобы
          автоманически собирать данные.
        </p>

        <CodeArea
          rawData={smartForm}
          url="https://codesandbox.io/s/react-hook-form-smart-form-component-eqb3n"
        />

        <p style={{ textAlign: "center" }}>♦</p>

        <p>Давайте посмотрим что в каждом из этих компонентов.</p>

        <CodeHeading>
          <h2>Form</h2>
        </CodeHeading>

        <p>
          Компонент <code>Form</code> ответственнен за передачу всех методов{" "}
          <code>react-hook-form</code> дочернему компоненту.
        </p>

        <CodeArea
          rawData={form}
          url="https://codesandbox.io/s/react-hook-form-smart-form-component-eqb3n"
        />

        <CodeHeading>
          <h2>Input / Select</h2>
        </CodeHeading>

        <p>
          Эти компоненты отвечают за их регистрацию в{" "}
          <code>react-hook-form</code>.
        </p>
        <CodeArea
          rawData={input}
          url="https://codesandbox.io/s/react-hook-form-smart-form-component-eqb3n"
        />

        <p>
          С <code>Form</code> компонентом, передающим{" "}
          <code>react-hook-form</code> <code>props</code> дочернему компоненту,
          вы можете легко создать сложные формы в вашем приложении.
        </p>
      </>
    ),
  },
  fieldArrays: {
    title: "Field Arrays",
    description: (
      <>
        <p>
          Это одна из лучших особенностей React Hook Form: вместо подключения
          сторонних библиотек, вы можете просто улучшить вашу существующую HTML
          разметку, чтобы достичь желаемой функциональности. Вся суть в{" "}
          <code>name</code> атрибуте. В React Hook Form, <code>name</code>{" "}
          атрибут представляет структуру данных которую вы хотите использовать.
        </p>

        <p>
          Следующий пример демонстрирует как вы можете создать Field Arrays
          манипулируя <code>name</code> атрибутом на поле ввода.
        </p>

        <p>
          <Note>Заметка:</Note> если в вашем приложении должна быть следующая
          функциональность: Delete, Insert, Append, Preprend. Вы можете найти
          реализацию{" "}
          <a
            href="https://codesandbox.io/s/react-hook-form-field-array-advanced-with-delete-insert-append-edit-l19pz"
            target="_blank"
            rel="noreferrer noopener"
          >
            по этой ссылке.
          </a>{" "}
          с <PageLink to={"/api#Controller"}>Controller</PageLink>.
        </p>
      </>
    ),
  },
  schema: {
    title: "Валидация по схеме",
    description: (
      <>
        <p>
          React Hook Form поддерживает валидацию формы по схеме с{" "}
          <a href="https://github.com/jquense/yup" target="_blank">
            Yup
          </a>
          , где вы можете передать <code>validationSchema</code> в{" "}
          <a href="/api#useForm">useForm</a> как опциональную настройку. React
          Hook Form будет валидировать ваши поля ввода по схеме и возвращать
          либо <a href="/api#errors">ошибки</a>, либо валидный результат.
        </p>
      </>
    ),
    step1: (
      <>
        <p>
          <Note>Шаг 1:</Note> Установите <code>Yup</code> в проект.
        </p>
      </>
    ),
    step2: (
      <p>
        <Note>Шаг 2:</Note> Настройте схему данных для валидации и
        зарегистрируйте поля ввода в React Hook Form.
      </p>
    ),
  },
  connectForm: {
    title: "Connect Form",
    description: (
      <p>
        Когда мы строим формы, иногда поля ввода располежены глубоко в дереве
        компонентов, для таких случаев{" "}
        <a href="/api#FormContext">FormContext</a> очень полезен. Однако мы
        можем улучшить опыт разработки созданием <code>ConnectForm</code>{" "}
        компонента с комбинированием{" "}
        <a href="https://reactjs.org/docs/render-props.html">renderProps</a>{" "}
        React'a. Плюс такого компонента в том, что вы можете подключать ваши
        поля ввода к React Hook Form откуда угодно.
      </p>
    ),
  },
  conditionalControlledComponent: {
    title: "Условные управляемые компоненты",
    description: (
      <>
        <p>
          React Hook Form позволяет очень легко работать с условными полями,
          потому что в момент, когда вы убираете поле ввода из дерева
          компонентов - оно отпишется автоматически.
          <a
            href="https://codesandbox.io/s/13ykqx4wx7"
            target="_blank"
            rel="noopener noreferrer"
          >
            вот пример
          </a>{" "}
          для подобного поведения. Однако это не сработает для управляемых
          компонентов, поскольку они не зарегистрирован с помощью{" "}
          <code>ref</code>, но мы можем сделать следующее:
        </p>
        <ul>
          <li>
            <p>
              Подключить <Link to="/api#Controller">Controller</Link> чтобы
              обернуть компонент и позволить ему регистрацию и отписку.
            </p>
          </li>
          <li>
            <p>
              Использовать{" "}
              <code>
                <a
                  href="https://reactjs.org/docs/hooks-effect.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  useEffect
                </a>
              </code>{" "}
              с регистрацией.
            </p>
          </li>
        </ul>
        <p> Примеры использования:</p>
      </>
    ),
  },
  formContext: {
    title: "FormContext производительность",
    description: (
      <p>
        React Hook Form <PageLink to="/api/#FormContext">FormContext</PageLink>{" "}
        построен на{" "}
        <a
          href="https://reactjs.org/docs/context.html"
          target="_blank"
          rel="noreferrer noopener"
        >
          React Context
        </a>{" "}
        API. Он решает проблему передачи данных по дереву компонентов без
        необходимости вручную передавать данные на каждом уровне. Это так же
        является причиной вызова ре-рендера дерева компонентов когда React Hook
        Form вызывает обновление состояния, но мы можем оптимизировать наше
        приложение если необходим с помощью примера ниже.
      </p>
    ),
  },
}