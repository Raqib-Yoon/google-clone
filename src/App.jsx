import React, { createContext, useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Links from "./components/Links"

import axios from 'axios';

import './components/style.css'

import Navbar from "./components/Navbar"
import Results from './components/Results'

const SearchResults = createContext()

const BASE_URL = 'https://google-search72.p.rapidapi.com/search/q=cricket&num=40';

const App = () => {

    const [searchKey, setSearchKey] = useState("")
    const [Result, setResult] = useState()
    const [isLoading, setIsLoading] = useState(false)

    const getResult = async (search_for, searchKey) => {

        setIsLoading(true)

        const options = {
            method: 'GET',
            url: `https://google-search72.p.rapidapi.com/${search_for}`,
            params: {
                query: `${searchKey}`,
                gl: 'us',
                lr: 'en',
                num: '10',
                start: '0',
                sort: 'relevance'
            },
            headers: {
                'X-RapidAPI-Key': '8f42ae1204mshb087429a097b55dp185835jsn9f105a4b79fa',
                'X-RapidAPI-Host': 'google-search72.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);

            console.log(response.data);
            setResult(response.data)

        } catch (error) {

            console.error(error);

        }


        setIsLoading(false)

    }


    return (
        <>
            <SearchResults.Provider
                value={{ setSearchKey, searchKey, Result, setResult, setIsLoading, isLoading, getResult }}
            >
                <Navbar />
                <Links />
                <Results />
                <Routes>
                    <Route path="/" element={<div>helo</div>} />
                </Routes>
            </SearchResults.Provider >
        </>
    )
}

export default App
export { SearchResults }