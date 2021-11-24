import React from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


import './css/styles.css';


function CountryDetails() {

    const { state } = useLocation();
    
    function onSeparate(arr) {
        if (arr === null || arr === undefined) {
            return "-";
        }
        return arr.join(', ');
    }

    return (
        <>
            <Link to={{ pathname: '/' }} className="button">
                <FontAwesomeIcon icon={faArrowLeft} />
                <button>Back</button>
            </Link>
            <div className="contentWrapper">
                <div className="countryFlag">
                    <img src={state.countries.flags.png} alt={state.countries.flags.png} />
                </div>
                <div className="details">
                    <h2>{state.countries.name}</h2>
                    <div className="list">
                        <ul>
                            <li>Native Name: <span>{state.countries.nativeName}</span></li>
                            <li>Population:  <span>{state.countries.population.toLocaleString('pt-BR')}</span></li>
                            <li>Region:  <span>{state.countries.region}</span></li>
                            <li>Sub Region:  <span>{state.countries.subregion}</span></li>
                            <li>Capital:  <span>{state.countries.capital}</span></li>
                        </ul>
                        <ul>
                            <li>Top Level Domain: <span>{state.countries.topLevelDomain}</span></li>
                            <li>Currencies: <span>{state.countries.currencies[0].name}</span></li>
                            <li>Languages: {state.countries.languages[0].name}</li>
                        </ul>
                    </div>
                            
                    <div className="border">
                        <ul>
                            <li>Border Countries: <span>{onSeparate(state.countries.borders)}</span></li>
                        </ul>
                    </div>

                </div>
            </div>
        </>
    )
}

export default CountryDetails;
