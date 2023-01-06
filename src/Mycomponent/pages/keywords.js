import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { json } from 'react-router-dom';
import { keywordId_withApi, ranktracking_withAPi } from '../../services/constants';


const Keywords = () => {
    const PRID = localStorage.getItem('prId').split(',')
    // const PRIDJson = JSON.parse(PRID)
    const [mlID, setMLID] = useState(PRID);


    useEffect(() => {
        console.log(PRID)
        let Headers = {
            headers: {
                'Authorization': 'Basic c2luZ2hhc2hpc2gxLnNoQGdtYWlsLmNvbTo1ZDA4NWVlMTE0ODNiNzk2',
                "Access-Control-Allow-Origin": "*",
            }
        }
        // mlID.map((sd) => {
        //     axios.get(ranktracking_withAPi() + sd, Headers)
        //       .then((res)=>{
        //         console.log(res.data)
        //       })
        // })

        let keyHead = {
            keyword: mlID
        }

        axios.post(keywordId_withApi(), keyHead)
            .then((res) => {
                console.log(res.data);
            })


        axios.get(`http://43.204.238.20:8000/api/user/KeywordGetId/`,Headers)
            .then((resGet) => {
                console.log(resGet)
            })
    }, []);







    return (
        <div>
            <div className='cmd-b'>Keywords</div>
            <div className='cmd-b'>
                <div className='d-block w-100'>
                    <div>
                        <div className='hm-b-ta'>
                            <div className='cmd mb-3'>
                                <div> Content Ideas </div><button className="cm-btn"> Export to CSV</button>
                            </div>
                            <table className="table" style={{ borderBottom: "none !important" }}>
                                <thead style={{ borderBottom: "none !important" }}>
                                    <tr style={{ borderBottom: "none !important" }} >
                                        <th scope="col" style={{ borderBottom: "none !important" }}>Page Title Url</th>
                                        <th scope="col">EST.Visits</th>
                                        <th scope="col">Backlinks</th>


                                    </tr>
                                </thead>
                                <tbody style={{ borderTop: "none !important" }}>
                                    <tr style={{ borderTop: "none !important" }}>

                                        <td> <div className='con-ideas'>Using uk Three mobile phone in vegas  - Las Vegas Message ... <p>tripadvisor.co.uk</p> </div> </td>
                                        <td><select><option>0 keywords</option></select></td>
                                        <td><select><option>0 Links</option></select></td>

                                    </tr>
                                    <tr>

                                        <td> <div className='con-ideas'>Using uk Three mobile phone in vegas  - Las Vegas Message ... <p>tripadvisor.co.uk</p> </div> </td>

                                        <td><select><option>0 keywords</option></select></td>
                                        <td><select><option>0 Links</option></select></td>
                                    </tr>
                                    <tr>

                                        <td> <div className='con-ideas'>Using uk Three mobile phone in vegas  - Las Vegas Message ... <p>tripadvisor.co.uk</p> </div> </td>

                                        <td><select><option>0 keywords</option></select></td>
                                        <td><select><option>0 Links</option></select></td>
                                    </tr>

                                    <tr>

                                        <td> <div className='con-ideas'>Using uk Three mobile phone in vegas  - Las Vegas Message ... <p>tripadvisor.co.uk</p> </div> </td>

                                        <td><select><option>0 keywords</option></select></td>
                                        <td><select><option>0 Links</option></select></td>
                                    </tr>

                                    <tr>

                                        <td> <div className='con-ideas'>Using uk Three mobile phone in vegas  - Las Vegas Message ... <p>tripadvisor.co.uk</p> </div> </td>

                                        <td><select><option>0 keywords</option></select></td>
                                        <td><select><option>0 Links</option></select></td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div>
                        <div className='hm-b-ta'>

                            <table className="table" style={{ borderBottom: "none !important" }}>
                                <thead style={{ borderBottom: "none !important" }}>
                                    <tr style={{ borderBottom: "none !important" }} >
                                        <th scope="col" style={{ borderBottom: "none !important" }}>KEYWORD</th>
                                        <th scope="col">VOLUME</th>
                                        <th scope="col">Position</th>
                                        <th scope="col">Esit.Visit</th>
                                        <th scope='col'>CPC</th>
                                        <th scope="col">PD</th>
                                        <th scope="col">SD</th>

                                    </tr>
                                </thead>
                                <tbody style={{ borderTop: "none !important" }}>
                                    <tr style={{ borderTop: "none !important" }}>
                                        <td>star wars ringtones</td>
                                        <td>260</td>
                                        <td>6</td>
                                        <td>4</td>
                                        <td>₹0</td>
                                        <td>1</td>
                                        <td>51</td>

                                    </tr>

                                    <tr style={{ borderTop: "none !important" }}>
                                        <td>star wars ringtones</td>
                                        <td>260</td>
                                        <td>6</td>
                                        <td>4</td>
                                        <td>₹0</td>
                                        <td>1</td>
                                        <td>51</td>

                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div>
                        <button className='cm-btn-b'>EXPORT TO CSV</button>
                        <table className='table mt-3'>
                            <tbody style={{ borderTop: "none !important" }}>
                                <tr style={{ borderTop: "none !important" }}>

                                    <td> <div className='con-ideas'>Using uk Three mobile phone in vegas  - Las Vegas Message ... <p>tripadvisor.co.uk</p> </div> </td>
                                    <td><select><option>0 keywords</option></select></td>
                                    <td><select><option>0 Links</option></select></td>

                                </tr>
                                <tr>

                                    <td> <div className='con-ideas'>Using uk Three mobile phone in vegas  - Las Vegas Message ... <p>tripadvisor.co.uk</p> </div> </td>

                                    <td><select><option>0 keywords</option></select></td>
                                    <td><select><option>0 Links</option></select></td>
                                </tr>



                            </tbody>
                        </table>
                        <p className='v_All'>View all Content Ideas</p>


                    </div>

                </div>
            </div>
        </div>
    )
}

export default Keywords;
