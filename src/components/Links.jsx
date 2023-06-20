import { Grid, Typography } from '@mui/material'
import React, { useContext } from 'react'

import { NavLink } from 'react-router-dom'
import { SearchResults } from '../App'



const Link = [
    {
        icon: "🔍",
        title: "All",
        url: "/search"
    },
    {
        icon: "📰",
        title: "News",
        url: "/news"
    },
    {
        icon: "📸",
        title: "Images",
        url: "/images"
    },
    {
        icon: "📺",
        title: "Videos",
        url: "/videos"
    },
]



const Links = () => {

    const { setSearchKey } = useContext(SearchResults)

    return (
        <Grid container >
            <Grid
                item
                container
                ml={{ xs: 0, sm: "18rem", }}
                mt={{ xs: "4rem", sm: 0 }}
                justifyContent={{ xs: "center", sm: "flex-start" }}
            >
                {

                    Link.map((item, index) => (
                        <NavLink
                            to={item.url}
                            key={index}
                            style={{ marginLeft: "1rem", textDecoration: "none", color: "#000" }}
                            onClick={() => setSearchKey(item.url)}
                        >

                            < Grid item >
                                <Grid item container>
                                    <Grid item mr=".2rem">
                                        {item.icon}
                                    </Grid>
                                    <Grid item>
                                        <Typography>{item.title}</Typography>
                                    </Grid>
                                </Grid>
                            </Grid >
                        </NavLink>

                    ))

                }
            </Grid>

        </Grid >
    )
}

export default Links