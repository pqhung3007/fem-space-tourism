export async function fetchCorrespondingData<Type>(property: string) {
  const res = await fetch("http://localhost:3000/data.json");
  const data = await res.json();
  // get keyof (typeof data: object) : destinations/crew/technology
  const correspondingData: Type[] = data[property as keyof typeof data];

  return correspondingData;
}

/* interface Person {
  name: string;
  age: number;
}
// `keyof Person` here creates a union type of "name" and "age", other strings will not be allowed
function printPersonProperty(person: Person, property: keyof Person) {
  console.log(`Printing person property ${property}: "${person[property]}"`);
}
let person = {
  name: "Max",
  age: 27
};
printPersonProperty(person, "name"); // Printing person property name: "Max" */
