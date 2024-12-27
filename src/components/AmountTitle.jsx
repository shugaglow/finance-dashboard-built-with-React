/* eslint-disable react/prop-types */
function AmountTitle({componentTitle, amountOfMoney, selectCurrency, amountStyle}) {
    return (
        <div className="amount-title-container">

            <div className="left-content">
                <h1>{componentTitle}</h1>
            </div>

            <div className="right-content">
            <h1 style={amountStyle}>{amountOfMoney}</h1>
                <select name="currency" id="currency">
                    {selectCurrency.map((currency, index) => (
                        <option key={index} value={currency.value}>
                            {currency.label}
                        </option>
                    ))}
                </select>

            </div>
            
        </div>
    )
}

export default AmountTitle
