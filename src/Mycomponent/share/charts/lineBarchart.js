import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';
// import faker from 'faker';
import { Line } from 'react-chartjs-2';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useState } from 'react';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);



const LineChart = () => {
    const searchCompany = useSelector(state => state.prdata);
    const [companyRank, setCompanyRank]= useState('')
    const [companyName, setCompanyName]= useState('')

    useEffect(() => {
        searchCompany && searchCompany.map((cDeatils, key) => {
           setCompanyRank(cDeatils.rank_group)
           setCompanyName(cDeatils.domain)
        })
        // console.log('company rank',companyRank)
    })

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top'
            },
            title: {
                display: true,
                // text: 'Chart.js Line Chart',
            },
        },

    };

    const labels = ['', companyName,'Ranks'];
    const dataSet = [0,companyRank ,100]
    const data = {
        labels,
        datasets: [
            {
                fill: true,
                label: 'Dataset 2',
                data: dataSet,
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
                fill: true,
                tension: 0.2
            },
        ],
    };

    return (
        <div className='vertical-bar'><Line options={options} data={data} /></div>
    )
}

export default LineChart