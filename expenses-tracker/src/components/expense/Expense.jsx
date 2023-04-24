import React from 'react'
import style from "./expense.module.css"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend);

const Expense = ({expenseData}) => {
    const updatedData = {
        labels: expenseData.map(item => item.category),
        datasets: [
            {
                label: '# of Votes',
                data: expenseData.map(item => item.amount),
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
        <div className={style.expenseContainer}>
            <h2>Expense Chart</h2>
            <div>
                <Pie data={updatedData} />
            </div>
        </div>
    )
}

export default Expense