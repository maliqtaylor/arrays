//arrays
const numbers = [3, 4]

//add elements to end 
numbers.push(5, 6)

//add elements to beginning
numbers.unshift(1, 2)

//add elements to middle 
numbers.splice(2, 0, 'a', 'b')
/*parameters for splice are ->
(startIndex, deleteCount, elements you wany to add)
*/

//----------------------

//remove elements from the end
numbers.pop() //returns removed element

//remove elements from the front
numbers.shift() //returns removed element

//remove middle elements
numbers.splice(1, 2)
//startIndex also gets deleted (startIndex inclusive)

//----------------------

//combining arrays

/*empty array

numbers.length = 0
or if array isnt a consttant
numbers =[]

*/

//-------------------------------------

//finding elements (primitives)
console.log(numbers.indexOf('a'));
//returns index of 'a' in numbers array

console.log(numbers.indexOf('horse'));
//returns -1 (doesnt exist in numbers array)

console.log(numbers.includes(3))
//returns true

console.log(numbers.includes(13))
//returns false

//----------------------

//finding elements (reference)
const students = [
  { id: 1, name: 'a' },
  { id: 2, name: 'b' }
]

const student = students.find((student) => student.name === 'a')

const studentIdx = students.findIndex((student) => student.name === 'b')

console.log(studentIdx);
//similiar to indexOf but for reference type elements

//-------------------------------------
