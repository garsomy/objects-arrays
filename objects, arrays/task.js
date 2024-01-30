// 1.1
// let arr = ['Привет, ', 'мир', '!'];
// console.log(arr.join(''));

// 1.2
// let arr = ['Привет, ', 'мир', '!'];
// let text = arr.join('');
// console.log(text);

// 1.3
// let arr = ['Привет, ', 'мир', '!'];
// arr[0] = 'Пока, ';
// let text = arr.join('');
// console.log(text);

// 1.4
// let obj = {
//     'Петя': 1000,
//     'Коля': 500,
//     'Вася': 200,
// };
//
// console.log(obj['Петя']);
// console.log(obj['Коля']);

// 1.5
// let arr = {
//     'ru':['голубой', 'красный', 'зеленый'],
//     'eu':['blue', 'red', 'green'],
// }
//
// console.log(arr['ru'][1]);

// 2.1
// arr = ['a', 'b', 'c']
// alert(arr)

// 2.2
// arr = ['a', 'b', 'c']
// alert(arr[0])
// alert(arr[1])
// alert(arr[2])

// 2.3
// let arr = ['a', 'b', 'c', 'd'];
// let res = arr[0] + '+' + arr[1] + ', ' + arr[2] + '+' + arr[3];
// console.log(res);

// 2.4
// let arr = [2, 5, 3, 9];
// let res = (arr[0] * arr[1]) + (arr[2] * arr[3]);
// console.log(res);

// 3.1
// let obj = {
//     a: 1,
//     b: 2,
//     c: 3
// };
// console.log(obj['c']);
// console.log(obj.c);

// 3.2
// let obj = {
//     'Коля': 1000,
//     'Вася': 300,
//     'Петя': 200,
// };
// console.log(obj['Петя'])
// console.log(obj['Коля'])

// 3.3
// let days = {
//     1: 'Понедельник',
//     2: 'Вторник',
//     3: 'Среда',
//     4: 'Четверг',
//     5: 'Пятница',
//     6: 'Суббота',
//     7: 'Воскресенье'
// };
//
// let today = new Date().getDay();
// let cur = days[today];
// console.log('Сегодня ' + cur);

// 3.4
// let days = {
//     1: 'Понедельник',
//     2: 'Вторник',
//     3: 'Среда',
//     4: 'Четверг',
//     5: 'Пятница',
//     6: 'Суббота',
//     7: 'Воскресенье'
// };
//
// let day = 3;
//
// let cur = days[day];
// console.log('День недели: ' + cur);

// 4.1
// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// let num = arr[1][0];
// console.log(num)

// 4.2
// let obj = {js:['jQuery', 'Angular'], php: 'hello', css: 'world'};
// let word = obj.js[0];
// console.log(word);

// 4.3
// let days = {
//     'ru': ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
//     'en': ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
// };
//
// let rumon = days['ru'][0];
// let newen = days['en'][2];
//
// console.log(rumon)
// console.log(newen)

// 4.4
// let days = {
//     'ru': ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
//     'en': ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
// };
//
// let lang = 'ru';
// let day = 3;
//
// let cur = days[lang][day - 1];
// console.log(cur);