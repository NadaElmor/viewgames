//=========================================(UI page)====================================

//====================class
export class games {
  //display all games
  dispalyAllGames(response) {
    let cartoona = "";
    for (let i = 0; i < response.length; i++) {
      cartoona += `<div class="col-lg-3 col-md-6">
      <div class="item text-white border border-1 rounded-2 border-dark h-100">
      <div class="gameId d-none">${response[i].id}</div>
        <div class="info p-3">
  
          <img src="${
            response[i].thumbnail
          }" alt="game" class="w-100 rounded-1">
  
          <div class="d-flex justify-content-between py-2">
            <h2 class="fs-5 ">${response[i].title}</h2>
            <button class="btn btn-primary">free</button>
          </div>
          <p class="text-secondary text-center">${
            response[i].short_description.substr(0, 50) + ".."
          }</p>
  
        </div>
        <div class="info2 d-flex justify-content-between p-2 border-top border-dark">
          <span>${response[i].genre}</span>
          <span>${response[i].platform} </span>
        </div>
      </div>
    </div>`;
    }
    document.querySelector("#main-content .row").innerHTML = cartoona;
  }
  //diplay details of a game
  displayGame(response) {
    console.log(response);
    document.querySelector("#details").classList.remove("d-none");
    let section = document.querySelector("#details .row");
    section.innerHTML = ` <div class="row">
    <div class="col-lg-4">
      <div class="item">
        <h2>Details Game</h2>
        <img src="${response.thumbnail}" alt="game" class="w-100">
      </div>
    </div>
    <div class="col-lg-8">
      <div class="item">
        <h3>Title: ${response.title}</h3>
        <div class="info d-flex align-items-center ">
          <h4 class="pe-3">Category : </h4>
          <span> ${response.genre} </span>
        </div>
        <div class="info d-flex align-items-center">
          <h4  class="pe-3">platform : </h4>
          <span> ${response.platform} </span>
        </div>
        <div class="info d-flex align-items-center">
          <h4  class="pe-3">status : </h4>
          <span> ${response.status} </span>
        </div>
        <p>${response.description}</p>
        <button class="btn btn-outline-warning text-white"><a href="${response.game_url}" target="_blank" class="text-white text-decoration-none" >Show
        Game</a></button>
      </div>
    </div>
  </div>`;

    //hide scroll
    document.querySelector("body").classList.add("overflow-hidden");
  }

  //close details section
  closeDetailsSection() {
    document.querySelector("#details ").classList.add("d-none");

    //appear scroll
    document.querySelector("body").classList.add("overflow-visible");
  }
}
