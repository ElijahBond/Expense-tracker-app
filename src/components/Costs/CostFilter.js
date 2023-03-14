import './costFilter.scss';

const CostFilter = ({ onChooseYear, year }) => {

    const setYearHandler = (e) => {;
        onChooseYear(e.target.value);
    }

    return (
        <div className="cost-filter">
            <div className="cost-filter__control">
                <label>Choose year</label>
                <select 
                    onChange={setYearHandler}
                    value={year}>
                    <option value='2023'>2023</option>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                </select>
            </div>
        </div>
    )
};

export default CostFilter;