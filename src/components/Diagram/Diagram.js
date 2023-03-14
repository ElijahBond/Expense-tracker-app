import DiagramBar from './DiagramBar';

import './diagram.scss'

const Diagram = ({ dataSets }) => {

    const dataSetsValues = dataSets.map(el => el.value)
    const maxMonthCosts = Math.max(...dataSetsValues)
    
    const monthBars = dataSets.map(data => (
        <DiagramBar 
            value={data.value}
            maxValue={maxMonthCosts}
            label={data.label}
            key={data.label} />
    ))

    return (
        <div className='diagram'>
            { monthBars }
        </div>
    )
;}

export default Diagram;