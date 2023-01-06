import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {Country} from '../../../services/constants'
export const AddCountry = () => {
    const [country, setCountry] = useState('');
    const [countryName, setCountryName] = useState('no');
    const [pllocation, setPllocation] = useState('Location')
    const [language, setLanguage]= useState('english')
    const navigate = useNavigate();
    const getCountry = useSelector(state => state.getcountry);

    useEffect(() => {
      setCountry(getCountry)
    }, [country,getCountry]);

    const Languages = (e) => {
        e.preventDefault();

        if (countryName === 'no') {
            e.preventDefault();
            setPllocation('Please select Location')
        }
        else {
            e.preventDefault();
            localStorage.setItem('location', countryName)
            localStorage.setItem('language', language)
            navigate('/addpr/addkeyword');
        }


    }

    return <>
        <div className='cmd-b'>
            <div className=' add-pr-url'>
                <form>
                    <h1>Languages and Location</h1>
                    <p>
                        Attract the right traffic by entering the languages and locations you do business in.
                    </p>
                    <div className="add-sel">
                        <div className="">
                        <label className="">Languages</label>
                        </div>
                        <select className='prSelone' onChange={(e)=>setLanguage(e.target.value)} >
                            <option value="volvo">English</option>

                        </select>
                    </div>
                    <div className='ms-3 add-sel'>
                        <label >Location</label>

                        {
                            country ? country.tasks && country.tasks.map((index, key) => (
                                <select key={key} value={countryName} onChange={(e) => setCountryName(e.target.value)}>
                                    <option> {pllocation}</option>
                                    {
                                        index.result && index.result.slice(0, 100).map((item, key) => (

                                            <option className='' key={key}>
                                                {item.location_name}
                                            </option>
                                        ))
                                    }

                                </select>
                            ))
                                : <select >
                                    <option>select...</option>
                                </select>
                        }

                    </div>
                    <div className='add-pr-btn'>
                            <Link to={-1}>    <button className='cm-btn-b'>Back</button> </Link>
                            <button className='cm-btn' type='submit' onClick={Languages}>Next</button>
                        </div>
                </form>
            </div>
        </div>
    </>
}