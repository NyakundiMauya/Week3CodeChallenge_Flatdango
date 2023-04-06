// Your code here
document.addEventListener("DOMContentLoaded", () => {
    fetch("http://localhost:3000/films/1", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((firstFilm) => {
        //console.log(firstMovie);
        let firstFilmName = document.getElementById("title");
        firstFilmName.textContent = firstFilm.title;
  
        let firstFilmRunTime = document.getElementById("runtime");
        firstFilmRunTime.textContent = firstFilm.runtime;
  
        let firstFilmDesc = document.getElementById("film-info");
        firstFilmDesc.textContent = firstFilm.description;
  
        let firstFilmShowtime = document.getElementById("showtime");
        firstFilmShowtime.textContent = firstFilm.showtime;
  
        let firstFIlmAvailableTickets = document.getElementById("ticket-num");
        firstFIlmAvailableTickets.textContent =
          firstFilm.capacity - firstFilm.tickets_sold;
  
        let firstFilmPoster = document.getElementById("poster");
        firstFilmPoster.setAttribute("alt", firstFilm.title);
        firstFilmPoster.setAttribute("src", firstFilm.poster);
      });
    fetch("http://localhost:3000/films", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((films) => {
        let filmUl = document.getElementById("films");
        films.forEach((film) => {
          let filmLi = document.createElement("li");
          filmLi.textContent = film.title;
          filmUl.appendChild(filmLi);
          filmLi.addEventListener("click", () => {
            let filmTitle = document.getElementById("title");
            filmTitle.textContent = film.title;
  
            let filmRunTime = document.getElementById("runtime");
            filmRunTime.textContent = film.runtime;
  
            let filmDesc = document.getElementById("film-info");
            filmDesc.textContent = film.description;
  
            let filmShowtime = document.getElementById("showtime");
            filmShowtime.textContent = film.showtime;
  
            let filmAvailableTickets = document.getElementById("ticket-num");
            filmAvailableTickets.textContent =
              film.capacity - film.tickets_sold;
  
            let filmPoster = document.getElementById("poster");
            filmPoster.setAttribute("alt", film.title);
            filmPoster.setAttribute("src", film.poster);
  
            let ticketButton = document.getElementById("buy-ticket");
            let ticketNo = document.getElementById("ticket-num");
            ticketButton.addEventListener("click", (event) => {
              event.preventDefault();
              if ((parseInt(filmAvailableTickets.textContent) - 1) >= 0) {
                filmAvailableTickets.textContent =
                  parseInt(filmAvailableTickets.textContent) - 1;
              }
            });
          });
        });
      });
  });
  