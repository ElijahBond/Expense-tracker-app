import { useState } from 'react';
import CostForm from './CostForm';

import './newCost.scss';

const NewCost = ({ onCostHandler }) => {

    const [ viewForm, setViewForm ] = useState(false)

    const saveCostDataHandler = (inputCostData) => {

        const costData = {
            ...inputCostData,
            id: Math.random().toString()
        }
        // console.log(costData);
        onCostHandler(costData)
    }

    const viewFormHandler = () => setViewForm(false);

    return (
        <div className='new-cost'>
            {
                viewForm ?
                <CostForm 
                onSaveCostData={saveCostDataHandler}
                onViewForm={viewFormHandler} /> :
                <button onClick={() => setViewForm(true)}>Add new expense</button>
            }
            
            
        </div>
    )
}

export default NewCost;