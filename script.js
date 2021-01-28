const names = {
    '1': {
        prof: prompt('Введите имя', 'name'),
        age: +prompt('Введите возраст')
    },
    '2': {
        prof: prompt('Введите имя', 'name'),
        age: +prompt('Введите возраст')
    },
    '3': {
        prof: prompt('Введите имя', 'name'),
        age: +prompt('Введите возраст')
    }
}
let user = 1;
for (const key in names) {
    console.log('Пользователь ' + user++)
        console.log('Ваше имя ' + names[key].prof)
        console.log('Ваш возраст ' + names[key].age)
    }
console.log(names);
    