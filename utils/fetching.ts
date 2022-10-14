export async function fetchCorrespondingData<Type>(property: string) {
  const res = await fetch(
    "https://raw.githubusercontent.com/pqhung3007/fem-space-tourism/main/public/data.json"
  );
  const data = await res.json();
  // get keyof (typeof data: object) : destinations/crew/technology
  const correspondingData: Type[] = data[property as keyof typeof data];

  return correspondingData;
}
