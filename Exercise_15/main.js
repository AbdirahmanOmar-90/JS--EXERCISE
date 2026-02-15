// for in and for of exercise_15

let people = [
  { name: 'ali', age: 10, city: 'mugadishu', yearofbarth: 2011 },
  { name: 'abdi', age: 20, city: 'mugadishu', yearofbarth: 2005 },
  { name: 'aisha', age: 30, city: 'mugadishu', yearofbarth: 1995 },
]
console.log('propertes and value of each person')
for (let person of people) {
  for (let key in person) {
    console.log(key, ':', person[key])
  }
  console.log('----')
}
