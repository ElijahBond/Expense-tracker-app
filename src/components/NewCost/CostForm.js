import { useState } from 'react';
import './costForm.scss';

const CostForm = ({ onSaveCostData, onViewForm}) => {

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

        onSaveCostData(costData)

        setLabel('');
        setAmount('');
        setData('');
        onViewForm(false)
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-cost__controls'>
                <div className='new-cost__control'>
                    <label>Label</label>
                    <input 
                        required
                        type='text' 
                        onChange={e => setLabel(e.target.value)}
                        value={label} />
                </div>

                <div className='new-cost__control'>
                    <label>Amount</label>
                    <input 
                        required
                        type='number'
                        onChange={e => setAmount(e.target.value)}
                        value={amount} />
                </div>

                <div className='new-cost__control'>
                    <label>Data</label>
                    <input 
                        required
                        type='date'
                        onChange={e => setData(e.target.value)}
                        value={data} />
                </div>

                <div className='new-cost__actions'>
                    <button type='submit'>Add expense</button>
                </div>

                <div className='new-cost__actions'>
                    <button onClick={() => onViewForm(false)}>Cancel</button>
                </div>
            </div>
        </form>
    )
};

export default CostForm;