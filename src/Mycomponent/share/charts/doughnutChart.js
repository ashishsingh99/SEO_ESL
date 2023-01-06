import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChartone = () => {

    const data = {
        labels: ['no clicks', 'seo', 'paid'],
        datasets: [
            {
                label: '# of Votes',
                data: [12, 19, 10],
                backgroundColor: [
                    'rgb(127,143,237)',
                    'rgb(255,99,132)',
                    'rgb(247,185,38)',

                ],
                borderColor: [
                    'rgb(127,143,237)',
                    'rgb(255,99,132)',
                    'rgb(247,185,38)',

                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        plugins: {
            legend:{
                display:false,
                position:'right',

            }

        }
    }
    return (
        <div  className='dough-one' style={{padding:'15px'}} >
        <Doughnut data={data} options={options} />
        </div>
    )
}

export default DoughnutChartone;


