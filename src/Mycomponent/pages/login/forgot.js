import React, { useState } from 'react';
import '../../css/login.css'
import logi from '../../Assets/login.jpg';
import logo from '../../Assets/seoimg/logo.png'
import google from '../../Assets/google.png'
import facebook from '../../Assets/facebook.png'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { forgot_withApi, login_withAPi } from '../../../services/constants'
import axios from 'axios';

const Forgot = () => {
    const dispatch = useDispatch();
    const [mydata, setMydata] = useState('');
    const [Email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const login = (e) => {

        e.preventDefault();
        dispatch({ type: 'LOADING' });
        let item = {
            email: Email,
        };
        axios.post(forgot_withApi(), item)
            .then(res => {
                console.log(res.data)


            })
            .then(err => {
                console.log(err);
            })
        dispatch({ type: 'NOTLOADING' });
    }


    return (
        <div className='lg-main-div'>
            <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                        <div className='lg-le-div'>
                            <div className='img-div-le'>
                                <img className='lg_pg-logo' src={logo} alt='login img'>
                                </img>

                                <img className='lg_pg-image' src={logi} alt='login img'>
                                </img>
                            </div>

                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='lg-ri-div'>
                            <form>
                                <div className='lg-ri-fm'>
                                    <h3 className='text-center'>Forgot Password</h3>
                                    <div className='lg-sn-op'>
                                        <ul>
                                            <li> <img src={google} alt='google img'></img>continue with google</li>
                                            <li><img src={facebook} alt='facebook img'></img>continue with facebook</li>
                                        </ul>
                                    </div>
                                    <div className='lg-line'> </div>
                                    <input type='text' placeholder='Email' onChange={(e) => setEmail(e.target.value)} ></input>
                                    <label id='lb'>Email</label>


                                    <div>
                                        <button type='submit' className='lg-button' onClick={login}>Submit</button>
                                        <h6 className='rs-now'> Don't have an account? <Link to='/register'> <b> Register Now </b> </Link></h6>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Forgot