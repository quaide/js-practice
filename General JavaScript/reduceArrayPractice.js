const people = [
    {name: 'Kyle', age: 26},
    {name: 'John', age: 31},
    {name: 'Sally', age: 42},
    {name: 'Jill', age: 42}
]

const reduced = people.reduce((groupedPeople, person) => {
    const age = person.age
    if(groupedPeople[age] == null) groupedPeople[age] = []
    groupedPeople[age].push(person)
    return groupedPeople
}, {})

// console.log(reduced)

//----------------------------------------------------

const numbers = [13, 2, 5]

const totalNumbers = numbers.reduce((total, value) => {
    return total + value
}, 0)

// console.log(totalNumbers)

//----------------------------------------------------

const groceries = [
    { id: 173, name: "Soup" }, 
    { id: 964, name: "Apple" },
    { id: 535, name: "Cheese" }
  ];
  
  const indexedGroceries = groceries.reduce((accumulator, val) => {
    accumulator[val.id] = val;
    return accumulator;
  }, {});
  
//   console.log(indexedGroceries);
  /**
   * {
   *   "173": { id: 173, name: "Soup" },
   *   "964": { id: 964, name: "Apple" },
   *   "535": { id: 535, name: "Cheese" },
   * }
   */