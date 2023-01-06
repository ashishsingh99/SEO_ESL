
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { taskPost_withApi } from "../../../services/constants";
import Keygatter from "./keygatter";

export const AddKeyword = () => {
    const messagesEndRef = useRef(null);
    const [keyword, setKeyword] = useState('')
    const [item, setItem] = useState([]);
    const [keyId, setKeyId] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView();
    }, [item])

    const ItemEvent = (e) => {
        setKeyword(e.target.value);
    }

    const DeleteKey = (id) => {
        setItem((oldItems) => {
            return oldItems.filter((arrelm, index) => {
                return index !== id;
            })
        })
    }

    const Listofitems = (e) => {
        e.preventDefault();
        item.filter(name => name.includes(keyword)).map(filtered => {
            const filterd = filtered
            console.log('filterKeyword', filterd);
            localStorage.setItem('filtered', filterd)
        });
        const filterds = localStorage.getItem('filtered')
        if (keyword.trim().length === 0) {
            e.preventDefault();
        }
        else if (keyword === filterds) {
            alert('this keyword is already exits')
            localStorage.removeItem('filtered')
        }

        else {
            setItem((olditems) => {
                return [...olditems, keyword]
            })
            setKeyword('');
        };



    }


    const getproject = () => {

        var data = item && item.map((itemData) => {
            return {
                language_code: "en",
                location_code: 2356,
                keyword: itemData,
                language_name: "English",
                location_name: "India",
                priority: 2,
                url: "https://www.google.co.uk/search?q=albert%20einstein&hl=en&gl=GB&uule=w+CAIQIFISCXXeIa8LoNhHEZkq1d1aOpZS",
            }
        })


        console.log('add keyword data post list', data)

        var config = {
            method: 'post',
            url: taskPost_withApi(),
            headers: {
                'Authorization': 'Basic c2luZ2hhc2hpc2gxLnNoQGdtYWlsLmNvbTo1ZDA4NWVlMTE0ODNiNzk2'
            },
            data: data
        };

        axios(config)
            .then(function (res) {
                const dataTask = res.data.tasks
                console.log('data tasks with id', res.data.tasks)
                dataTask.map((e) => {

                    const eid = e.id;
                    // setKeyId(eid)
                    setKeyId((olditems) => {
                        return [...olditems, eid]
                    })


                });


            })
            .catch(function (error) {
                console.log(error);
            });


        // post api for getting data with multi id

        // const postId = [{
        //     id: keyId
        // }]
        // axios.post(`https://9e07-223-233-77-71.in.ngrok.io/api/user/KeywordId/`, postId)
        //     .then(res => {
        //         alert(res.data)
        //     })


    }
    useEffect(() => {

        if (keyId !== '') {
            alert('Submit Successfully')
            localStorage.setItem('prId', keyId);
            navigate('/');
        }

    }, [keyId, item,])


    return <>
        <div className='cmd-b'>
            <div className=' add-pr-url key-te-in'>
                <form>
                    <h1>Add Keyword</h1>
                    <p>
                        Attract the right traffic by entering the languages and locations you do business in.
                    </p>
                    {
                        item === '' ? '' :
                            <div>
                                <ul className='key-fm-ul' >                             {
                                    item.map((itemVal, index) => {
                                        return <Keygatter
                                            key={index}
                                            id={index}
                                            text={itemVal}
                                            onSelect={DeleteKey}
                                        />
                                    })
                                }
                                    <div ref={messagesEndRef}></div>

                                </ul>
                            </div>

                    }

                    <input type='text' placeholder='type keyword' value={keyword} onChange={ItemEvent} />

                    <div className='add-pr-btn'>
                        <Link to={-1}><button className='cm-btn' type='button'>Back</button></Link>
                        <button className='cm-btn' type='submit' style={{ visibility: 'hidden' }} onClick={Listofitems}>Next</button>
                        <button className='cm-btn' type='button' onClick={getproject}>Submit</button>

                    </div>

                </form>
            </div>
        </div>
    </>
}