/* eslint-disable max-len */
export async function getCharacters() {
  const response = await fetch('https://hey-arnold-api.herokuapp.com/api/v1/characters');
  const json = await response.json();

  return json;

}

export async function getCharacterById(id) {
  const response = await fetch(`https://hey-arnold-api.herokuapp.com/api/v1/characters/${id}`);
  const json = await response.json();

  return json;
}
