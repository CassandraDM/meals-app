export const handleCreate = async (
  name: string,
  instructions: string,
  category: string
) => {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/create.php",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        instructions,
        category,
      }),
    }
  );
  console.log("~ 🐈‍⬛🐈 ~ handleCreate ~ response:", response);
};
