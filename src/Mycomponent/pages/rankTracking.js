import React, { useEffect, useState } from 'react';
import PlLogin from './login/plLogin';
import '../css/rankTracking.css';
import DoughnutChartone from '../share/charts/doughnutChart';
import DoughnutCharttwo from '../share/charts/doughtnetcharttwo';
import LineChart from '../share/charts/lineBarchart';
import { useDispatch, useSelector } from 'react-redux';
import { CSVLink } from 'react-csv';
import Loader from '../share/loader';
import PlAdd from './login/plAdd';

const RankTracking = () => {

  // redux selector for data fatching
  const loginOut = localStorage.getItem('loginOut')
  const AllprDta = useSelector(state => state.allprdata);
  const AllOrganic = useSelector(state => state.organic);
  const TruePR = localStorage.getItem('websitename')

  // useState for saving credentials
  const [detailsCSV, setDetailsCSV] = useState('')
  const [lastIndex, setLastIndex] = useState('');
  const [postPerPage, setPostPerPage] = useState(5);
  const [firstPageIndex, setFirstPageIndex] = useState(1);
  const [lastPageIndex, setLastPageIndex] = useState();
  const [startData, setStartData] = useState(0);
  const [endData, setEndData] = useState(5);


  useEffect(() => {
    AllprDta.tasks && AllprDta.tasks.map((data) => {
      data.result && data.result.map((ab) => {
        setDetailsCSV(ab.items)
        // lastIndex number of table
        setLastIndex(ab.items.length)
        const totalArrayLength = ab.items.length / postPerPage;
        const totalRows = Math.ceil(totalArrayLength)
        setLastPageIndex(totalRows)
        setFirstPageIndex(Math.ceil(endData / postPerPage))

      })
    })
  }, [AllprDta, endData, postPerPage,]);


  const getPrevPage = () => {
    if (firstPageIndex === 1) {
      return false
    }
    else {
      setStartData(startData - postPerPage);
      setEndData(endData - parseInt(postPerPage));
    }

  }

  const getNextPage = () => {
    if (lastPageIndex === firstPageIndex) {
      return false
    }
    else {
      setStartData(endData);
      setEndData(endData + parseInt(postPerPage));
    }
  }

  const AllKeywords = () => {
    setStartData(startData);
    setEndData(lastIndex);
  }

  const PerPageChange = (e) => {
    const SSdata = e.target.value;
    setPostPerPage(e.target.value)
    setStartData(0);
    setEndData(parseInt(SSdata));

  }

  if (loginOut === 'true') {
    return (
      <div className='rank-main'>
        <div className='cmd-b'>
          <div className='d-flex' style={{ alignItems: 'center' }}>
            <select className='hm-b1-select'>
              <option>
                Keywords Overview
              </option>
              <option> keyword Ideas  </option>
              <option> keyword by traffic  </option>
              <option> Competing Domains  </option>
              <option> Content Ideas  </option>
            </select>
            <p className='m-0 p-0'>Desktop</p>

          </div>

          <div className='rank-se'>
            <span className='me-3'>  India  </span> <i className='fa-solid fa-earth'> </i>
            <button className='cm-btn ms-3'>Search</button>
          </div>
        </div>
        {TruePR ?

          <div className='cmd-b'>
            <div className='d-block w-100'>

              <div className='row'>
                <div className='col-6'>
                  <div className='row'>
                    <div className='col-6'>
                      <div className='rank-chartd m-0'>
                        <h5> 1,830,000 </h5>
                        <p>Search Volume</p>
                      </div>
                    </div>
                    <div className='col-6'>
                      <div className='rank-chartd m-0'><h5> ₹3.23</h5>
                        <p>Search Volume</p>

                      </div>
                    </div>
                    <div className='col-6'>
                      <div className='rank-chartd'> <h5> 81 </h5>
                        <p>Search Volume</p>
                      </div>
                    </div>
                    <div className='col-6'>
                      <div className='rank-chartd'><h5> 90 </h5>
                        <p>Search Volume</p>
                      </div>
                    </div>

                  </div>
                </div>
                <div className='col-6 '>
                  <div className='row'>
                    <div className='col-6' ><DoughnutChartone /></div>
                    <div className='col-6'><DoughnutCharttwo /></div>
                  </div>
                </div>
              </div>

              <div className='se-vol'>

                <div>  Search Volume</div>
                <div><span><i className='fa-solid fa-box'></i> Desktop</span> <span className='ms-5'> <i className='fa-solid fa-box' style={{ color: '#FF6384' }}></i> Mobile</span></div>

              </div>

              <div>
                {/* <VerticalBar /> */}
                <LineChart />
              </div>

              <div>

                <div className='hm-b-ta'>
                  <div className='cmd mb-3'>
                    <div> Keyword Rank </div> <CSVLink data={detailsCSV}> <button className="cm-btn"> Export To CSV</button> </CSVLink>
                  </div>
                  <table className="table" style={{ borderBottom: "none !important" }}>
                    <thead style={{ borderBottom: "none !important" }}>
                      <tr style={{ borderBottom: "none !important" }} >
                        <th scope="col" style={{ borderBottom: "none !important" }}>Keyword</th>
                        <th scope="col">Ranks</th>
                        <th scope="col">URL</th>
                      </tr>
                    </thead>
                    <tbody >

                      <>
                        {
                          AllprDta ? AllprDta.tasks && AllprDta.tasks.map((data) => {
                            return data.result && data.result.map((reData) => {
                              return AllOrganic && AllOrganic.slice(startData, endData).map((taData, key) => {
                                if (taData) {
                                  return <tr key={key}>
                                    <td>{reData.keyword}</td>
                                    <td>{taData.rank_group}</td>
                                    <td><a href={taData.url} target='_blank'>{taData.url} </a></td>
                                  </tr>
                                }

                              })

                            })
                          }) : <Loader />
                        }
                      </>

                    </tbody>
                  </table>
                  <div className='tab-pagination'>
                    Rows Per Page :<select value={postPerPage} onChange={PerPageChange}>
                      <option value={5}>5 </option>
                      <option value={10}>10 </option>
                      <option value={20} >20 </option>
                    </select><span onClick={() => getPrevPage()}> <i className="fa-solid fa-caret-left"></i></span> <span >{firstPageIndex} of {lastPageIndex} </span> <span onClick={() => getNextPage()}> <i className="fa-solid fa-caret-right"></i></span> </div>

                </div>

                <p className='v_All' onClick={AllKeywords}>View all Keywords Ideas</p>
                <hr />

              </div>


            </div>
          </div>

          : <PlAdd />

        }
      </div>
    )
  }
  else {
    return <PlLogin />
  }

}

export default RankTracking