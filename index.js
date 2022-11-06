 //task1
let user = {
    firstname: "giorgi",
    lastname: "smith",
    age: 25,
    studentstatus: "active"
  };
  console.log(user.studentstatus);

//task2
let array = [103, 112, 127, 198, 300, 165, 201, 109, 507];

for (let i = 0; i < array.length; i++) {
  if (array[i]) {
    console.log(array[i]);
}
}
let i = 0;
while (i < array.length) {
    console.log(array[i]);
    i++;
}


//task3
let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];
for( let i=0; i<numbers.length; i++){
  if(numbers[i]>5){
    console.log(numbers[i]);
  }
}

//task4
let user1 = {
  name: 'giorgi', 
  age:  20,
  studentstatus: 'active'
}
if (user1.age<18 && user1.studentstatus==='active' ){
  console.log('hello');
} else if (user1.name=='levani'){
  console.log('hello levani');
} else if (user1.studentstatus==='active' || user1.age < 25){
  console.log('hello world');
} else {
  console.log(error);
}

//task5
let array4 = [ [2, -3, 5, 10], [25, -24, -11, 100] , [-6, -7, 10] ]
let flat = array4.flat();
for (let i = 0; i < flat.length; i++) {
    if (flat[i] > 0) {
        console.log(flat[i]);
    }
}

//task6
let arr = [ 2, 3, 5, 10,25,24,11, 100 , 6,7, 10 ]
for (let y of arr) {
if (y % 2==0){
  console.log(y);
}
}

let arr1 = [ 2, 3, 5, 10,25,24,11, 100 , 6,7, 10 ]
for (let y of arr1) {
if (y % 2==1){
  console.log(y);
}
}

//task7
function addPositiveNumbers(...numbers2) {
  let sum = 0;
  for (let i = 0; i < numbers2.length; i++) {
      if (numbers2[i] > 0) {
          sum += numbers2[i];
      }
  }
  return sum;
}

console.log(addPositiveNumbers(2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8));

//task8
let user2 = {
  firstname: 'giorgi',
  lastname: 'saakadze',
  age: 32,
  isloggedin: true
}

function theuser(userr) {
  return `${userr.firstname} ${userr.lastname} ${userr.isloggedin}`
}

console.log(theuser(user2));

//task9
function returnHighest(array2) {
  let highest = 0;
  for (let i = 0; i < array2.length; i++) {
      if (array2[i] > highest) highest = array2[i];
  }
  return highest;
}
console.log(returnHighest([12, 27, 3, 71]));

//task10
let array3 = [1,2,4,10,34,5,7,87]
  for  (let i=0; i<array3.length; i++){
    if (10> array3 [i])
  console.log(array3[i]);
}

//task11
let numbers1 =[1,2,3,4,5,6,7,8,9,10]
for (let item of numbers1) {
  if (item==5){
    break;
  }
  console.log(item);
} 





  

