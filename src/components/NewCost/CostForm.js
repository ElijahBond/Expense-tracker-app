import './costForm.scss';

const CostForm = () => {
    return (
        <form>
            <div className='new-cost__controls'>
                <div className='new-cost__control'>
                    <label>Label</label>
                    <input type='text' />
                </div>

                <div className='new-cost__control'>
                    <label>Amount</label>
                    <input type='number' />
                </div>

                <div className='new-cost__control'>
                    <label>Data</label>
                    <input type='date' />
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