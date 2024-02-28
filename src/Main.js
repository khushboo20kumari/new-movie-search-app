import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import * as React from 'react';
import { styled } from '@mui/material/styles';

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function Main() {
    const [moviesData, setMoviesData] = useState([]);

    const fetchData = () => {
        fetch('https://www.omdbapi.com/?s=star&apikey=480344f1&r=json')
            .then(response => response.json())
            .then(movieData => {
                setMoviesData(movieData.Search);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    console.log(moviesData, "ddata");

    return (
        <Box style={{marginTop:"130px"}}>
            <Grid container spacing={2}>
                {moviesData.map((item, index) => (
                    <>
                        <Grid item xs={6} md={6} sm={4} lg={4}>
                            <Item>
                                <img  style={{width:"90%",height:"400px"}} className="" src={item.Poster}></img>
                            </Item>
                        </Grid>

                    </>
                ))}
            </Grid>
        </Box>
    );
}

export default Main;

