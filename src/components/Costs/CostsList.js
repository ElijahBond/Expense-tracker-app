import { useState } from "react";

import CostFilter from "./CostFilter";
import CostItem from "./CostItem";

import './costsList.scss'

const CostsList = ({ costs }) => {

    const [ year, setYear ] = useState('2022');

    const costsListView = costs.map(el => {
        const { date, description, amount } = el;

        return (
            <CostItem 
                date={date} 
                description={description} 
                amount={amount}
                key={amount}>
            </CostItem>
        )
    })

    const yearFilterHandler = (year) => {
        console.log(year)
        setYear(year)
    };

    return (
        <div className="costs-list">
            <CostFilter 
                onChooseYear={yearFilterHandler}
                year={year} />
            {costsListView}
        </div>
    )
}

export default CostsList;