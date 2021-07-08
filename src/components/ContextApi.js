import React, { createContext, useState, useContext, useEffect } from 'react'



const ContextApi = createContext()

export function useContextApi() {
    return useContext(ContextApi)
}

export function Api({ children }) {

    const globalData = useState({});

    useEffect(() => {


        async function getData() {
            const response = await fetch("https://coronavirus-tracker-api.herokuapp.com/v2/locations")
            let data = await response.json()


            const CountryData = data.locations;

            const latestData = data.latest;
            globalData[1](latestData);

        }
        getData();
    }, [])

    const screenConfig = useState(0);

    const ApiContext = useContext(ContextApi)

    return (
        <ContextApi.Provider value={
            screenConfig,
            globalData
        }>
            {children}
        </ContextApi.Provider>
    )
}


export default ContextApi