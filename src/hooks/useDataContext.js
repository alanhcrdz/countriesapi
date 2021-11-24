import React, { createContext, useContext, useState, useEffect } from 'react';

import api from '../services/api';

const DataContext = createContext();

export function ContextProvider({ children }) {

    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [search, setSearch] = useState('')
    const [service, setService] = useState('all');
    const [region, setRegion] = useState('');
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        const fetchCountries = async () => {
            setIsLoading(true)
            try {
                await api.get(`/${service}/${region}`)
                    .then(res => {
                        setCountries(res.data)

                    });
            } catch (err) {
                console.error(err)
            } finally {
                setIsLoading(false);
            }


        }
        fetchCountries()
    }, [service, region])

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    useEffect(() => {
        setFilteredCountries(countries.filter(country => {
            return country.name.toLowerCase().includes(search.toLowerCase())
        }));

    }, [search, countries])




    const handleRegion = (e) => {
        setService('region');
        setRegion(e.target.value);
    }



    return (
        <DataContext.Provider value={{
            countries,
            filteredCountries,
            isLoading,
            handleChange,
            handleRegion
        }}>

            {children}

        </DataContext.Provider>
    )
}
export function  useDataContext() {
    const context = useContext(DataContext);
    return context;
}