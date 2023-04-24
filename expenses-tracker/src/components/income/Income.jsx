import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import style from  "./income.module.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const Income = ({ incomeData }) => {
    
    const updatedData = {
        labels: incomeData.map(item => item.category),
        datasets: [
            {
                label: '# of Votes',
                data: incomeData.map(item => item.amount),
                backgroundColor: [
                    '#eb3434',
                    '#ff5f81',
                    '#269ff1',
                    '#ffcd56',
                    '#34eb80',
                    '#eb34ba',
                ],
                borderColor: [
                    '#fff',
                    '#fff',
                    '#fff',
                    '#fff',
                    '#fff',
                    '#fff',
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className={style.incomeContainer}>
            <h2>Income Chart</h2>
            <div>
                <Pie data={updatedData} />
            </div>
        </div>
    )
}

export default Income