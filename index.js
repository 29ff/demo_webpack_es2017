'use strict';

let add = (a, b) => {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         if (a == undefined || b == undefined) {
            return reject(new Error('You have to pass the argument'));
         }
         if (typeof a != 'number' || typeof b != 'number') {
            return reject(new Error('The argument have to be a number'));
         }
         return resolve(a + b);
      }, 1000)
   });
};

let multiply = (a, b) => {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         if (a == undefined || b == undefined) {
            return reject(new Error('You have to pass the argument'));
         }
         if (typeof a != 'number' || typeof b != 'number') {
            return reject(new Error('The argument have to be a number'));
         }
         return resolve(a * b);
      }, 1000)
   });
};

let divide = (a, b) => {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         if (a == undefined || b == undefined) {
            return reject(new Error('You have to pass the argument'));
         }
         if (typeof a != 'number' || typeof b != 'number') {
            return reject(new Error('The argument have to be a number'));
         }
         if (b === 0) {
            return reject(new Error('Can not divide by 0'));
         }
         return resolve(a / b);
      })
   });
};

let calculateArea = async (a, b, h) => {
   // Từ khoá await chỉ được sử dụng trong function async
   // Sử dụng từ khoá await cho một function thực thi không đồng bộ sẽ giúp function đó thực thi đồng bộ
   try {
      let ab = await add(a, b);
      let abh = await multiply(ab, h);
      let area = await divide(abh, 2);
      return Promise.resolve(area);
   } catch (error) {
      return Promise.reject(error);
   }
};

calculateArea(4, 5, 6)
.then(result => console.log(`Result: ${result}`))
.catch(error => console.log(error.toString()));

console.log('Block code !');