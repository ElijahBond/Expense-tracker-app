import CostForm from './CostForm';

import './newCost.scss';

const NewCost = ({ onCostHandler }) => {

    const saveCostDataHandler = (inputCostData) => {

        const costData = {
            ...inputCostData,
            id: Math.random().toString()
        }
        // console.log(costData);
        onCostHandler(costData)
    }

    return (
        <div className='new-cost'>
            <CostForm 
                onSaveCostData={saveCostDataHandler} />
        </div>
    )
}

export default NewCost;