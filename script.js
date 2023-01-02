// // Реалізуйте клас Student, який успадковуватиметься від класу User. Цей клас повинен мати такі властивості:
// // // name приватна властивість (ім'я, успадковується від User),
// // // surname приватна властивість (прізвище, успадковується від User),
// // // year (рік вступу до вузу).
// // // Клас повинен мати метод getFullName() (успадковується від User), за допомогою якого можна вивести одночасно ім'я та прізвище студента.
// // // Також клас повинен мати метод getCourse(), який виводитиме поточний курс студента (від 1 до 5, якщо значення перевищує 5  курс виводити що студент являєтсья випускником).
// // // Курс обчислюється так: потрібно від поточного року відняти рік вступу до вузу. Поточний рік отримаєте самостійно (читати документацію!!!).
// // // Приклад ініціалізації екземпляру класа:
// // // const student = new Student('Петрик', 'Пяточкин', 2019);

// // // student.getFullName(); //поверне 'Петрик Пяточкин'
// // // student.getCourse();   //поверне 3 (третій курс)
// class User {
//     static counter = 0;
//     static addUser() {
//         this.counter += 1;
//         console.log(this.counter);
//     }

//   #name
//   #surname
//   constructor(name, surname) {
//     this.#name = name;
//       this.#surname = surname;
//       User.addUser()
//   }
//   getFullName() {
//     return `${this.#name} ${this.#surname}`
//   }
// }
// class Student extends User {
//   constructor(name, surname, year) {
//     super(name, surname);
//     this.year = year;
//   }
//   getCourse() {
//     let today = new Date();
//     let currentYear = today.getFullYear();
//     let course = currentYear - this.year;
//     if (course >= 5) {
//       return `Cтудент ${this.getFullName()} являєтmся випускником`
//     }
//     return course;
//   }
// }

// const student = new Student('Петрик', 'Пяточкин', 2019);
// const student1 = new Student('Jak', 'Dam', 2019);

// console.log(student1.getFullName()); //поверне 'Петрик Пяточкин'
// console.log(student1.getCourse());   //поверне 3 (третій курс)
    
    
//     const cars = [{
//         car: "Honda",
//         type: "Civic",
//         price: 12000,
//     },
//     {
//         car: "Audi",
//         type: "Q7",
//         price: 40000,
//     },
//     {
//         car: "BMW",
//         type: "5 siries",
//         price: 9000,
//     },
//     {
//         car: "Honda",
//         type: "Accord",
//         price: 20000,
//     },
//     {
//         car: "Volvo",
//         type: "XC60",
//         price: 7000,
//     },
// ];

// function getCheapestCar(Arr) {
//   Arr.sort((a, b) => a.price - b.price);
//   console.log(Arr);
//   return Arr[0];
// }
// console.log(getCheapestCar(cars));

// const nameCar = prompt().toLowerCase();
// function searchCars(Arr, nameCar) {
//   const result = Arr.filter((car) =>
//     car.car.toLowerCase().includes(nameCar)
//   ).map(({ car }) => car);
//   return result;
// }
// console.log(searchCars(cars, nameCar));

// / Є рядок в якому довільна кількість літер, гарантовано в рядку немає пробілів та розділових знаків, потрібно повернути об'єкт де кожна літера буде ключем, а кількість раз яку вона дублюється буде значенням ключа
// const str = 'absdabsrgbadgtdswwbetflg';
// Результат на який очікуємо
// const obj = {
//     a: 3,
//     b: 4,
//     s: 2,
//     // ...
// }
// const str = 'absdabsrgbadgtdswwbetflg';
// const letters = str.split('').reduce((acc, item) => {
//     if (!acc.hasOwnProperty(item)) {
//         acc[item] = 1;
//     }
//     else {
//         acc[item] += 1
//     };
//      return acc;
// },{});
// console.log(letters);

// const students = [{
//         name: "Манго",
//         score: 83
//     },
//     {
//         name: "Полі",
//         score: 59
//     },
//     {
//         name: "Аякс",
//         score: 37
//     },
//     {
//         name: "Ківі",
//         score: 94
//     },
// ];
// const select = document.querySelector(".pizza-select");
// const textOutput = document.querySelector(".text-output");
// const valueOutput = document.querySelector(".value-output");

// setOutput();

// select.addEventListener("change", setOutput);

// function setOutput() {
//   const selectedOptionValue = select.value;
//   const selectedOptionIndex = select.selectedIndex;
//   const selectedOptionText = select.options[selectedOptionIndex].text;

//   textOutput.textContent = selectedOptionText;
//     valueOutput.textContent = selectedOptionValue;
//     // console.log(select.options[selectedOptionIndex])
//     console.log(select.value);
//     console.log(select.options[selectedOptionIndex].text)
// }

//  eachCons([1, 2, 3, 4], 2)
// function eachCons(array, n) {
//   const r = [];
//   for (let i = 0; i <= array.length - n; i += 1) {
//     // console.log(array[i])
//     const chunk = [];
//     for (let j = i; j < i + n; j += 1) {
//       console.log(j)
//       chunk.push(array[j]);
//       // console.log(chunk)

//     }
//     r.push(chunk);
//   }
 
//   // console.log(r)
// }

// !////////// таблиця множення

const out = document.querySelector('.out')

for (let i = 1; i < 10; i += 1) {
  for (let j = 1; j < 10; j += 1){
    out.innerHTML += `${i} * ${j} = ${i * j}<br>`
  }
  out.innerHTML += '<hr>';
 }