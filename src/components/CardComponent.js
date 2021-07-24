
import React, { useState, useEffect } from 'react';
import ReactLoading from 'react-loading';
import './CardComponent.css';
import api from '../services/api';
import { Regions } from './Regions';

const CardComponent = () => {
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
        <>
            <div className="search">
                <div className="wrapper">
                    <i className="fas fa-search"></i>
                    <input
                        type="text"
                        placeholder="Search for a country..."
                        value={search}
                        onChange={handleChange} />
                </div>

                <div className="filter">
                    <select name="filter" id="filter" defaultValue="filter">
                        <option disabled value="filter">Filter by Region</option>
                        {Regions.map(region => (
                            <option key={region.id} onClick={handleRegion}
                                value={region.value}>{region.name}</option>
                        ))}
                    </select>
                </div>

            </div>

           
                {
                    isLoading ?
                        <div className="loading">
                            <ReactLoading
                            type="spin"
                            width={'40px'}
                            height={'40px'}
                            color="#1dd1a1"

                        />
                        </div>
                        
                        :
                        <div className="cardContainer">
                        {filteredCountries
                            .map(country => (

                                <div className="cards" key={country.alpha2Code}>
                                    <div className="flag">
                                        <img src={country.flag} alt={country.flag} />
                                    </div>


                                    <div className="description">
                                        <h2>{country.name}</h2>
                                        <p>Population: {country.population.toLocaleString("pt-BR")} </p>
                                        <p>Region: {country.region} </p>
                                        <p>Capital: {country.capital} </p>
                                    </div>

                                </div>

                            ))}
                            </div>

                }
           

        </>
    )
}


export default CardComponent;


