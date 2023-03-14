import { useState } from 'react';
import './costForm.scss';

const CostForm = ({ onSaveCostData }) => {

    const [ label, setLabel ] = useState('');
    const [ amount, setAmount ] = useState('');
    const [ data, setData ] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();

        const costData = {
            label,
            amount,
            data: new Date(data)
        }

        // console.log(costData)
        onSaveCostData(costData)

        setLabel('');
        setAmount('');
        setData('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-cost__controls'>
                <div className='new-cost__control'>
                    <label>Label</label>
                    <input 
                        type='text' 
                        onChange={e => setLabel(e.target.value)}
                        value={label} />
                </div>

                <div className='new-cost__control'>
                    <label>Amount</label>
                    <input 
                        type='number'
                        onChange={e => setAmount(e.target.value)}
                        value={amount} />
                </div>

                <div className='new-cost__control'>
                    <label>Data</label>
                    <input 
                        type='date'
                        onChange={e => setData(e.target.value)}
                        value={data} />
                </div>

                <div className='new-cost__actions'>
                    <button type='submit'>Add expense</button>
                </div>

                <div className='new-cost__actions'>
                    <button>Cancel</button>
                </div>
            </div>
        </form>
    )
};

export default CostForm;