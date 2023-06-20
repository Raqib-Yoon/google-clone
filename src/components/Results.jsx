import React, { useContext, useEffect } from 'react'
import { Grid, Typography } from "@mui/material"

import { useLocation } from "react-router-dom"  

import { SearchResults } from '../App'

import { NavLink } from "react-router-dom"
const Results = () => {

    const location = useLocation()
    const { searchKey, Result, getResult } = useContext(SearchResults)


    useEffect(() => {

        if (location.pathname === "/search") {
            getResult('search', searchKey)
            console.log(searchKey)
        } else if (location.pathname === "/images") {
            getResult('imagesearch', searchKey)
            console.log('image')
        }

    }, [searchKey, location.pathname])

    // console.log(Result.items);

    switch (location.pathname) {
        case '/search': {
            return (
                <Grid container sx={{ paddingLeft: "8rem", paddingRight: "8rem", marginTop: "2rem" }}>
                    {
                        Result?.items?.map(({ title, link }) => (
                            <Grid item container mt="1.5rem">

                                <NavLink style={{ borderBottom: "none", textDecoration: "none" }} to={link} >

                                    <Grid item>
                                        <Typography sx={{ color: "#000", fontSize: ".8rem" }}>
                                            {link}
                                        </Typography>
                                    </Grid>

                                    <Grid item>
                                        <Typography
                                            sx={{
                                                color: "rgb(62, 130, 231)", fontSize: "1.3rem",
                                                "&hover": {
                                                    textDecoration: "underline"
                                                }
                                            }}
                                            className="links"
                                        >
                                            {title}
                                        </Typography>
                                    </Grid>
                                </NavLink>
                            </Grid>
                        ))
                    }
                </Grid >
            )
        }

        // show result for images

        case '/images': {
            return (
                <Grid container sx={{ paddingLeft: "2rem", paddingRight: "2rem", gap: "1rem", marginTop: "2rem" }}>
                    {
                        Result?.items?.map((item) => (

                            <div style={{ maxWidth: "20rem", overflow: "hidden" }}>

                                <NavLink style={{ borderBottom: "none", textDecoration: "none" }} to={item.originalImageUrl} >

                                    <img src={item.thumbnailImageUrl} style={{ maxHeight: "10rem", maxWidth: "20rem" }} />
                                    <p style={{color:"black"}}>{item.title.slice(0, 20)}...</p>
                                </NavLink>
                            </div>
                        ))
                    }
                </Grid >
            )
        }

        case '/news': {
            return (
                <Grid container sx={{ paddingLeft: "8rem", paddingRight: "8rem", marginTop: "2rem" }}>
                    news
                </Grid>
            )
        }

        case '/videos': {
            return (
                <Grid container sx={{ paddingLeft: "8rem", paddingRight: "8rem", marginTop: "2rem" }}>
                    videos
                </Grid>
            )
        }

        default:

            break;
    }
}

export default Results