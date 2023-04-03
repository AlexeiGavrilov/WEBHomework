// Необходимо пользователя попросить ввести температуру в градусах Цельсия, 
// преобразовать введенное пользователем значение в соответствующую температуру в градусах по Фаренгейту и вывести в alert сообщение с текстом(пример): Цельсий: 21, Фаренгейт: 69.8
// Формула перевода градусов Цельсия в градусы Фаренгейта:

// градусы Фаренгейта = (9 / 5) * градусы Цельсия + 32

const degrees = Number.parseFloat(prompt("Введите температуры в цельсиях"));

function translationInFahrenheit(a) {
    const result = (9 / 5) * a + 32;
    return Math.round(result * 10) / 10;

}

alert(`Температура в Цельсиях ${degrees} и температуры в Фаренгейтах ${translationInFahrenheit(degrees)}`);