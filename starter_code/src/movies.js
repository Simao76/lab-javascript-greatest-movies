/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals

/*

Solução 1

function calculateAverageMovieRate (movieArray) {
let sum = 0;
for (let i = 0; i < movieArray.length; i++) {
    sum += movieArray[i]["rate"];
}
    let average = sum / movieArray.length;
    return Math.round(average * 100) / 100;
}

calculateAverageMovieRate (MOVIES)
*/


// Solução com Reduce Method

function calculateAverageMovieRate (movieArray) {
    let sum = movieArray.reduce((accumulator, value, index, array) => {
        return accumulator + value["rate"]
    }, 0);

    let average = sum / movieArray.length;
    return (average * 100) / 100;

}
 calculateAverageMovieRate (MOVIES)

// Iteration 2: Drama movies - Get the average of Drama Movies

function calculateAverageDramaRate (movieArray) {
    for (let i = 0; i < movieArray.length; i ++) {
        if (movieArray[i].genre.includes("Drama")) {
            const filteredmovieArray = movieArray.filter((value, index, originalArray) => {
                if (value["genre"].includes("Drama")) {
                return true;
                } else {
                return false;
                }
                });
                return calculateAverageMovieRate(filteredmovieArray);

        } 
    
     else {
        return 0;
    };
}}

    calculateAverageDramaRate (MOVIES); 

 

// Iteration 3: Ordering by Year - Order Year, ascending (in growing order)
 

function orderByYear (movieArray) {
   let newMovieArray = [ ...movieArray];
   newMovieArray.sort((a, b) => {
       if (a["year"] < b["year"]) return -1;
       if (a["year"] > b["year"]) return 1;
       if (a["title"] < b["title"]) return -1;
       if (a["title"] > b["title"]) return 1;
       });
   return newMovieArray
   }
   orderByYear(MOVIES);


calculateAverageDramaRate (MOVIES); 

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

function countSpielbergDramaMovies (a) 
         {
            let spielbergDrama = a.filter((value, index, originalArray) => {
                if (a["genre"].includes("Drama") && a["director"].includes("Spielberg"))
                {
                  return true 
                }
              else {
                return false
              }
                
                });
                return spielbergDrama.length

 
         }
countSpielbergDramaMovies (MOVIES)

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
