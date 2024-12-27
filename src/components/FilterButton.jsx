/* eslint-disable react/prop-types */
// import { Link } from "react-router-dom"
// import FilterIcon from "../assets/filter.svg"


function FilterButton() {
    return (
        <div>
            <button>
            <div className="the-filter-button">
                {/* <p>Filter Applied: {filterNumber}</p>
                <img src={FilterIcon} alt="filter" /> */}
                <select>
                    <option value="">Filter</option>
                <option value="">Filter by Number</option>
                <option value="">Filter by Days</option>
                <option value=""> Filter by Months</option>
        </select>
            </div>
            </button>
        </div>
    )
}

export default FilterButton


