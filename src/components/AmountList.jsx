/* eslint-disable react/prop-types */
// import { Link } from "react-router-dom"

function AmountList({amount, date}) {
    return (
        <div className="amount-list-container">
            <div className="left-list-content">
                <h1>{amount}</h1>
                <p>{date}</p>
            </div>

            {/* <div className="payment-date">
                <p>{date}</p>
            </div> */}

            <div className="right-list-content">
                <>
                <p>See Details</p>
                </>

            </div>
            
        </div>
    )
}

export default AmountList
