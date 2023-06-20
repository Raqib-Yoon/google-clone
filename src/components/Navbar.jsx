import React, { useState, useContext } from 'react'

import { AppBar, Grid, Toolbar, Typography, useTheme } from '@mui/material'
import { SearchResults } from '../App'
import { useNavigate } from 'react-router-dom'



const Navbar = () => {

    const theme = useTheme()

    const { setSearchKey } = useContext(SearchResults)
    const [search, setSearch] = useState("")
    const navigate = useNavigate()

    const handleClick = (e) => {
        e.preventDefault()

        if (e.target.value !== "") {
            navigate('/search')
            setSearchKey(search)
        }
        setSearch("")
    }

    return (
        <AppBar position='static'
            sx={{
                backgroundColor: "white",
                height: 100,
                boxShadow: 0
            }}
        >
            <Toolbar>
                <Grid
                    container
                    direction={{ xs: "column", sm: "row" }}
                    gap={{ xs: "2rem", sm: 0 }}
                    alignItems="center"
                    sx={{
                        marginTop: { xs: "4rem", sm: "1.5rem" }
                    }}>
                    <Grid item>
                        <Typography variant="h6" color="primary" sx={{ color: "#000", backgroundColor: "#3e92e5", px: 2, borderRadius: 2 }}>Google🔎</Typography>
                    </Grid>
                    <Grid item ml={{ xs: 0, sm: "10rem" }}>
                        <Grid container
                            sx={{
                                px: 2, py: 1, borderRadius: 5, boxShadow: theme.shadows[8],
                            }}>
                            <Grid item >
                                <form onSubmit={handleClick}>
                                    <input
                                        type="text"

                                        style={{
                                            border: "none",
                                            fontSize: "1.1rem",
                                            outline: "none"
                                        }}
                                        placeholder="Search anything..."
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                    />
                                </form>
                            </Grid>
                            <Grid item ml="1rem">
                                <span >🔎</span>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}


export default Navbar