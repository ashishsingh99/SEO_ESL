import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { profile_withApi } from '../../services/constants';
import logo from '../Assets/seoimg/logo.png'
import '../css/header.css';

const Header = () => {

    const [profile, setProfile] = useState('');
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token');

        let Headers = {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }

        axios.get(profile_withApi(), Headers)
            .then((res) => {
                setProfile(res.data.name)
                console.log( 'profile Nam',res);
            });

    });

    const ProType = () => {
        const loginOut = localStorage.getItem('loginOut')
        if (loginOut === 'true') {
            return <>
                <div className='d-flex nv-select' style={{ alignItems: "center" }}>
                    <div className='us-logo '>
                        <i className="fa-solid fa-user"></i>
                    </div>

                    <div className='nv-select'>
                        {profile ? profile :'AdminTest'}
                        <div className='nv-select_con '>
                            <ul>
                                <li>Profile</li>
                                <li onClick={Logout}>Logout</li>

                            </ul>

                        </div>
                    </div>
                </div>
            </>
        }

        else {
            return <>
                <Link to='login'>  <button className='he-si-btn'> Sign in</button>  </Link>
            </>
        }
    }

    const Logout = () => {
        localStorage.removeItem('loginOut')
        localStorage.removeItem('status')
        localStorage.removeItem('token')
        localStorage.removeItem('prId')
        localStorage.removeItem('websitename')
        localStorage.removeItem('language')
        localStorage.removeItem('websiteurl')
        navigate('/')
    }

    return (
        <>
            <div className='navBar'>
                <div className=' d-flex'>
                    <div className='nv-logo'>
                        <Link to='/'>    <img src={logo} alt='img'></img> </Link>
                    </div>
                    <ul className='nv-ul ms-auto'>
                        <Link to='/upgrade'>   <li>  <button className='cm-btn'>Upgrade</button></li> </Link>
                        <li>
                            <ProType />
                        </li>
                    </ul>
                </div>
            </div>

            <div className='nv-btn'>
                <ul className='nv-ul2'>
                    <li>
                        <NavLink to='/'>  <i className="fa-solid fa-table"></i>  Dashboard </NavLink>
                    </li>
                    <li>
                        <NavLink to='/rank'>    <i className="fa-solid fa-circle-nodes"></i> Rank Tracking </NavLink>
                    </li>
                    <li>
                        <NavLink to='/siteaudit'>       <i className="fa-solid fa-file"></i>   Site Audit </NavLink>
                    </li>
                    <li>
                        <NavLink to='/keywords'>    <i className="fa-solid fa-bolt-auto"></i>  Keywords </NavLink>
                    </li>
                    <li>
                        <NavLink to='/traffic'>     <i className="fa-solid fa-people-group"></i>   Traffic </NavLink>
                    </li>
                    <li>
                        <NavLink to='/backlinks'>   <i className="fa-solid fa-link"></i>  Backlinks </NavLink>
                    </li>


                </ul>
            </div>

        </>

    )

}

export default Header;