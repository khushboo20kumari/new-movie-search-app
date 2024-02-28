import './App.css';
import MainContent from "./MainContent"
function App() {
  return (
    <div className="App">
       <MainContent/>
    </div>
  );
}

export default App;



// import { Box, Typography } from "@mui/material";
// import { useEffect, useState } from "react";

// function Main() {
//     const [moviesData, setMoviesData] = useState([]);

//     const fetchData = () => {
//         fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=89eef3426d167c3c8145a257ebe68357&')
//             .then(response => response.json())
//             .then(movieData => {
//                 setMoviesData(movieData.results);
//             })
//             .catch(error => {
//                 console.error('Error fetching data:', error);
//             });
//     };

//     useEffect(() => {
//         fetchData();
//     }, []);

//     console.log(moviesData, "ddata");

//     return (
//         <Box style={{ backgroundColor: "#373b69" }}>
//             {moviesData.map((item, index) => (
//                 <Typography styl={{color:"red"}} key={index}>{item.title}</Typography>
//             ))}
//         </Box>
//     );
// }

// export default Main;



// import { Box, Typography } from "@mui/material";
// import { useEffect, useState } from "react";

// function App() {
//   const [movieData, setMovieData] = useState([]);
//   const fetchData = () => {
//     fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=89eef3426d167c3c8145a257ebe68357')

//       .then(response => response.json())

//       .then(movieData => {
//         setMovieData(movieData.results.slice(0, 10))
//         console.log(movieData,"ppp");
//       })

//       .catch(error => {
//         console.error('Error fetching data:', error)
//       });
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   console.log(movieData, "data");

//   return (
//     <div className="App">
//       <Box style={{ backgroundColor: "#373b69" }}>
//         {movieData.map((item, index) => (
//           <Typography style={{ color: "red" }} key={index}>{item.title}</Typography>
//         ))}
//       </Box>
//     </div>
//   );
// }

// export default App;



// import React, { useEffect, useState } from 'react';

// function App() {
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         fetch('https://www.omdbapi.com/?s=star&apikey=480344f1&r=json')
//             .then((response) => response.json())
//             .then((data) => {
//                 setData(data.Search);
//             });
//     }, []);
//     console.log(data)

//     return (
//         <div className='App'>
//             {data.map((item) => (
//                 <>
//                     <p>{item.Title}</p>
//                     <img className='img' src={item.Poster}></img>
//                 </>

//             ))}

//         </div>

//     );
// }

// export default App;