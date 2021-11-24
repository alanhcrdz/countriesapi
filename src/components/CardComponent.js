
import React from 'react';
import ReactLoading from 'react-loading';
import './CardComponent.css';
import { Regions } from './Regions';
import { 
     Link,
     } from 'react-router-dom';
import { useDataContext } from '../hooks/useDataContext';

const CardComponent = () => {

    const { 
        filteredCountries, 
        search, 
        isLoading,
        handleChange,
        handleRegion,

     } = useDataContext()

   





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
                                <Link className="link" to={{ pathname: `/country/${country.name.toLowerCase()}`, state: { countries: country } }}>
                                <div className="cards" key={country.cca2}>
                                    <div className="flag">
                                        <img src={country.flag} alt={country.alpha2Code} />
                                    </div>


                                    <div className="description">
                                        <h2>{country.name}</h2>
                                        <p>Population: {country.population.toLocaleString("pt-BR")} </p>
                                        <p>Region: {country.region} </p>
                                        <p>Capital: {country.capital} </p>
                                    </div>

                                </div>
                                </Link>

                            ))}
                            </div>

                }
           

        </>
    )
}


export default CardComponent;


