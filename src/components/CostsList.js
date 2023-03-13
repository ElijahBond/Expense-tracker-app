import CostItem from "./CostItem";

import './costsList.scss'

const CostsList = ({ costs }) => {

    const costsListView = costs.map(el => {
        const { date, description, amount } = el;

        return (
            <CostItem date={date} description={description} amount={amount}></CostItem>
        )
    })

    return (
        <div className="costs-list">
            {costsListView}
        </div>
    )
}

export default CostsList;