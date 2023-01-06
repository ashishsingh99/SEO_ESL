import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'
import Header from './Mycomponent/share/header'
import { Country, ranktracking_withAPi } from './services/constants'

const Layout = () => {
    // localStorage data
    const prdatal = localStorage.getItem('prId').split(',');
    const webURL = localStorage.getItem('websiteurl')

    // redux dispatecher
    const dispatch = useDispatch();

    useEffect(() => {
        let Headers = {
            headers: {
                'Authorization': 'Basic c2luZ2hhc2hpc2gxLnNoQGdtYWlsLmNvbTo1ZDA4NWVlMTE0ODNiNzk2'
            }
        }

        prdatal && prdatal.map((prl) => {
            axios.get(ranktracking_withAPi() + prl, Headers)
                .then((res) => {
                    const data = res.data
                    // setRankData(data)
                    data.tasks.map((data) => {
                        data.result && data.result.map((ab) => {

                            // we use finding by user weburl given in create project
                            const Finding = ab.items.filter(obj => {
                                if (obj.domain === webURL) { return obj.domain === webURL }
                                else { return obj.domain === 'www.' + webURL }
                            });
                            dispatch({ type: 'PRDATA', payload: Finding })

                            const TypeOrganic = ab.items.filter(obj => {
                                if (obj.type === 'organic') {
                                    return obj
                                }
                            })
                            dispatch({ type: 'ORGANIC', payload: TypeOrganic })

                        })
                    })

                    dispatch({ type: 'ALLPRDATA', payload: data })


                });
        });

        axios.get(Country(), Headers)
            .then((res) => {
                const country = res.data;
                dispatch({ type: 'GETCOUNTRY', payload: country })
            });


    }, [prdatal]);

    return (
        <div>
            <div className='hm-page' >
                <Header />
                <div style={{ margin: "0 8rem" }}>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Layout