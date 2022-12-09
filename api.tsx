const myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzdlOGRlZWY5YzMyYjNmNjM0MjgxNDUiLCJpYXQiOjE2NjkyMzgzNTEsImV4cCI6MTY2OTMyNDc1MX0.2X21rdoXpojhWcNwpD_BJN5s8jT79a_NviYllbuSYH4");

const requestOptions = {
  method: 'GET',
  headers: myHeaders
};

const login = async () => {
  
}

const fetch_games = async () => {
    // const project  = await fetch("http://api.cup2022.ir/api/v1/match", requestOptions)
    // const json = await project.json();
    // return json.data;
    const text = await Deno.readTextFile("./result.json");
    return (await JSON.parse(text)).data;

};


const fetch_game = async (id: string) => {
    // const project  = await fetch("http://api.cup2022.ir/api/v1/match/" + id, requestOptions)
    // const json = await project.json();
    // return json.data;
    const text = await Deno.readTextFile("./1.json");
    return (await JSON.parse(text)).data;
};

export {fetch_games, fetch_game};