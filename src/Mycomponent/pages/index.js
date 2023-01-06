import React, { useState } from 'react';
import '../css/index.css';
import analyze from '../Assets/analyze.png';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../share/loader';

export const Home = () => {
  const TruePR = localStorage.getItem('websitename')

  const searchCompany = useSelector(state => state.prdata);
  const loading = useSelector(state => state.loading)

  const AllprDta = useSelector(state => state.allprdata);
  const [projectDetails, setProjectDetails] = useState('');
  const projectName = localStorage.getItem('websiteurl')
  const dispatch = useDispatch();
  useEffect(() => {
    setProjectDetails(AllprDta);
    dispatch({ type: 'NOTLOADING' });
  }, [AllprDta, projectDetails])

  return (
    <div>
      {loading ? <Loader /> :
        <div className='hm-body'>

          <div className='cmd-b'>
            <div className=''>
              <select className='hm-b1-select'>

                <option>
                  {projectName ? projectName : 'Add Project'}
                </option>

              </select>

              <Link to='/addpr'>  <button className='cm-btn'>    +  Add Project  </button></Link>
            </div>
            <div className='hm-b1-inp'>
              <div className='hm-b1-i'>
                <i className="fa fa-search"></i>
              </div>
              <input type='text' placeholder='Search Project'></input>
            </div>
          </div>

          <div className='cmd-b'>
            <div>

              <div>
                <select>
                  <option>
                    Last Month
                  </option>
                </select><span className='hm-b2-sp'> Jan 01 ,2022 - Jan 31, 2022 </span>
              </div>

              <div className='container hm-b2-con p-0'>
                <div className='hm-b2-cl ms-0'>
                  <h5>Keyword Rankings</h5>
                  <div className='hm-bg-move'>
                    <div className='hm-ng-18'>
                      <h2>18</h2>
                      Keywords Moved up
                    </div>
                    <div className='hm-ng-18'>
                      <h2>21</h2>
                      Keywords moved down
                    </div>
                  </div>
                  <p>
                    Data from <br />
                    Jan 03 , 2022 to  FEB 02, 2022
                  </p>
                </div>
                <div className='hm-b2-cl'>
                  <h5>User Visit</h5>
                  <div className='hm-bg-move'>
                    <div className='hm-ng-18'>
                      <h2>1,989</h2>
                      Visits
                    </div>
                    <div className='hm-ng-18'>

                    </div>
                  </div>
                  <p>
                    Data from <br />
                    Jan 03 , 2022 to  FEB 02, 2022
                  </p>
                </div>
                <div className='hm-b2-cl'>
                  <h5>Backlinks</h5>
                  <div className='hm-bg-move'>
                    <div className='hm-ng-18'>
                      <h2>71,387</h2>
                      Visits
                      <p>See Backlinks</p>
                    </div>
                    <div className='hm-ng-18'>
                    </div>
                  </div>
                  <p>
                    Data from <br />
                    Jan 03 , 2022 to  FEB 02, 2022
                  </p>
                </div>
                <div className='hm-b2-cl me-0'>
                  <h5>On-Page SEO Score</h5>
                  <div className='hm-bg-move'>
                    <div className='hm-ng-18' style={{ width: '100%' }}>
                      <h2>73</h2>
                      Great
                      <p>improve Seo Score</p>

                    </div>
                    <div className='hm-ng-18'>
                      <h2> </h2>

                    </div>
                  </div>
                  <p>
                    Data from <br />
                    Jan 03 , 2022 to  FEB 02, 2022
                  </p>

                </div>
              </div>

              <div className='hm-analyze'>
                <div className='hm-ana-img'><img src={analyze} alt="analyze img" /></div>
                <div className='hm-an-con'>
                  <h3>
                    Analyze your competitors SEO and get new opportinities to increase SEO Score
                  </h3>
                </div>
                <div className='hm-an-cm'>
                  <p>Analyze competitors -</p>
                </div>


              </div>

              <div className='hm-b-ta'>
                <table className="table" style={{ borderBottom: "none !important" }}>
                  <thead style={{ borderBottom: "none !important" }}>
                    <tr style={{ borderBottom: "none !important" }} >
                      <th scope="col" style={{ borderBottom: "none !important" }}>Keyword</th>
                      <th scope="col">Ranks</th>
                      <th scope="col">URL</th>
                    </tr>
                  </thead>
                  {TruePR ?
                    <tbody >

                      <>
                        {projectDetails ?
                          projectDetails.tasks && projectDetails.tasks.map((data) => {
                            return data.result && data.result.map((reData) => {
                              return searchCompany && searchCompany.map((cDeatils, key) => {
                                return <tr key={key}>
                                  <td>{reData.keyword}</td>
                                  <td>{cDeatils.rank_group}</td>
                                  <td><a href={cDeatils.url} target='_blank'>{cDeatils.url} </a></td>
                                </tr>
                              })
                            })
                          }) :<Loader />
                        }
                      </>
                    </tbody>
                    : <tbody>
                      <tr>
                        <td>No Project Added ---------</td>
                        <td></td>
                        <td></td>
                      </tr>
                    </tbody>
                  }
                </table>
              </div>
            </div>
          </div>
        </div >
      }

    </div>
  )


}
export default Home;