/*
Ваша часовая ставка 80$ и вы готовы рабтать не
более 5 часов в день 5 дней в неделю (кроме выходны).
К вам прихдит заказчик и предлагает заказ на 40 часов работы.
Сейчас понедельник.
Вы должны уехать через 11 дней.
Выведете в консоль:
- Boolean переменную успеете ли вы сделать работу
- Сколько вы за нее попросите?
*/

// Данные
const payRateUSD = 80;
const projectHours = 40;
const availableHours = (11 - 2) * 5;

// Результат
console.log('Смогу ли я сделать работу? ' + (availableHours > projectHours));
console.log('Стоимость работ: ' + projectHours * payRateUSD + '$');