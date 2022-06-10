# Vitaly Rogozin

## Contacts:
* e-mail: **wiification@gmail.com**
* telegram: **@WiiJoy**
* discord: **Vitaly Rogozin (@wiijoy)**
* github: **https://github.com/WiiJoy**

## About me:
* 28 years
* I started to study html, css, JavaScript & Vue.js in January 2021
* I have been supporting and developing a web app since September 2021 (Vue v.2)
* I think practice is the best way to learn programming
* I'm looking for new experience and approaches to solving different tasks

## Skills:
* **HTML** (HTML5, Adaptive Layout, Semantic Layout)
* **CSS** (preprocessor SASS/SCSS)
* **JavaScript** (Basic, OOP, Asynchronous JavaScript, DOM, ES6)
* **Vue.js** (v.2, Vuex, Vue Router)
* **Git**
* **Other** (Figma, Photoshop, Movavi VideoEditor, etc.)

## Code examples
### Education:
1. [Movies: first education project on js](https://github.com/WiiJoy/prMovies), Udemy, Instructor: Иван Петриченко
1. [FOOD: project for js](https://github.com/WiiJoy/FOOD), Udemy, Instructor: Иван Петриченко
1. [Portfolio: last layout project](https://github.com/WiiJoy/portfolio), Udemy, Instructor: Иван Петриченко
1. [TODO: standart education project](https://github.com/WiiJoy/todo-project), Udemy, Instructor: Денис Мещеряков
1. [BudgetApp: first Vue experience](https://github.com/WiiJoy/budget-app), Udemy, Instructor: Денис Мещеряков
1. [MoviesApp: education project on Vue and Vuex](https://github.com/WiiJoy/moviesapp)

### Project:
_**Description:** Given some text with html tags, return this text with replacement unmark list's items for items with 'li'_
```
function modifyLi(text) {
    const regP = /\/(p|li)><p>(-|·)\s\D.+[,.;:]<\/p>/s

    while (regP.test(text)) {
        let foundP =  text.match(regP)

        let handledP = foundP[0].replaceAll('</p>', '</li>').replaceAll('<p>- ', '<li>').replaceAll('<p>· ', '<li>')
        text = text.replaceAll(foundP[0], handledP)
    }

    return text
}
```

## Experience:
4 months: supporting and developing a massive web app for handling html text document.

## Education
Russian University of Transport (MIIT), "Automation and telemechanics in railway transport", 2011 - 2016

## Courses:
1. [Основы HTML и CSS с нуля](https://www.udemy.com/course/html-css-from-zero/)
1. [Полный курс по JavaScript + React - с нуля до результата](https://www.udemy.com/course/javascript_full/)
1. [Современный JavaScript + Vue с нуля на реальных проектах](https://www.udemy.com/course/modern-javascript-from-beginning/)
1. [Learn JavaScript](https://learn.javascript.ru/)
1. Documentation, Google :)

## Languages:
1. Russian - Native
1. English - Elementary/Pre-Intermediate
