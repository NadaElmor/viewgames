// ===================(games page)========================
//====================(home page)=========================

//==========================class
export class returnGamesinfo {
  //function dispaly games
  async returnGames(category) {
    //appear loading menu
    this.appearScreen();

    //getting api
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "2dd71f1ef6mshe03e2a70f015c92p116f99jsnfed854c2f350",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    const req = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,
      options
    );

    let response = await req.json();
    console.log(response.length);
    this.hideLoading();
    return response;
  }
  //loading section
  //hide loading when ready
  hideLoading() {
    let loadingSection = document.querySelector(".loading");
    loadingSection.classList.add("d-none");
    document.querySelector("body").classList.remove("overflow-hidden");
  }
  //appear loading section
  appearScreen() {
    document.querySelector(".loading").classList.remove("d-none");
    document.querySelector("body").classList.add("overflow-hidden");
  }
  //return details of a specific game
  async detailsOfGame(id) {
    //api
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "2dd71f1ef6mshe03e2a70f015c92p116f99jsnfed854c2f350",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    const req = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
      options
    );
    let responseGame = await req.json();
    // console.log(responseGame);
    return responseGame;
  }
}
