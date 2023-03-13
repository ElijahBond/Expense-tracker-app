import CostDate from './CostDate';
import './costItem.scss';

const CostItem = ({ date, description, amount }) => {
    return (
        <div className='cost-item'>
            <CostDate date={date} />
            <div className='cost-item__description'>
                <h2>{description}</h2>
                <div className='cost-item__price'>${amount}</div>
            </div>
            <button onDoubleClick={() => console.log('Double click')}>Change description</button>
        </div>
    )
}

export default CostItem;