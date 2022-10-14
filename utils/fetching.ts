export async function fetchCorrespondingData<Type>(property: string) {
  const res = await fetch("http://localhost:3000/data.json");
  const data = await res.json();
  // get keyof (typeof data: object) : destinations/crew/technology
  const correspondingData: Type[] = data[property as keyof typeof data];

  return correspondingData;
}
