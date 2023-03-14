import { useState } from "react";

import CostFilter from "./CostFilter";
import CostItem from "./CostItem";
import CostsDiagram from "./CostsDiagram";

import './costsList.scss'

const CostsList = ({ costs }) => {

    const [ year, setYear ] = useState('2021');

    const filteredCosts = costs.filter(el => el.date.getFullYear().toString() === year)
    const costsListView = filteredCosts.map(el => {
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
        setYear(year)
    };

    return (
        <div className="costs-list">
            <CostFilter 
                onChooseYear={yearFilterHandler}
                year={year} />
            <CostsDiagram costs={filteredCosts} />
            {
                costsListView.length === 0 ?
                <h3 className="empty">No expense in this year</h3> : 
                costsListView
            }
        </div>
    )
}

export default CostsList;