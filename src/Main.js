import { Box } from "@mui/material";
import { useEffect, useState } from "react";

function Main() {

    const [moviesData, setMoviesData] = useState([])

    const fetchData = () => {

        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=89eef3426d167c3c8145a257ebe68357&%27").then((res) => {
            return res.json()

        }).then((res) => {
            setMoviesData(res)
        })
    }
    
    useEffect(() => {
        fetchData()
    },[])

    console.log(moviesData, "data")

    return (
        <Box style={{ backgroundColor: "#373b69" }}>

        </Box>
    )
}
export default Main;