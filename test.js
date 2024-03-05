//CRUD
const names = {
  people: [
    {
      cpf: 0,
      name: "kaynan",
      occupation: "software engineer",
    },
    {
      cpf: 1,
      name: "daniel",
      occupation: "sexist",
    },
  ],
};

//CREATE
function createPerson(data) {
  names.people.push({
    cpf: names.people.length,
    name: data.name,
    occupation: data.occupation,
  });
}
createPerson({ name: "marquin da pitu", occupation: "fucker" });

//READ
function takeNamesList() {
  return names.people;
}

console.log(takeNamesList());

//UPDATE

function updatePeople(cpf, newName) {
    const nameToBeUpdated = takeNamesList().find((person) => person.cpf === cpf);
    nameToBeUpdated.name = newName;
};

updatePeople(2, 'kleber bambam');
console.log(takeNamesList());
//DELETE

function deletePeople(cpf) {
    const updatedNamesList = takeNamesList().filter((person) => person.cpf !== cpf)
    names.people = updatedNamesList;
};

deletePeople(2);
console.log(takeNamesList());