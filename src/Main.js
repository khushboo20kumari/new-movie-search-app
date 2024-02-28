import { Box } from "@mui/material";

function Main() {
    fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=89eef3426d167c3c8145a257ebe68357&%27").then((res)=>{
        return res.json()        
    }).then(res=>{
        
    })
    return (
        <Box style={{ backgroundColor: "#373b69" }}>

        </Box>
    )
}
export default Main;