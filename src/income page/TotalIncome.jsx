import {useLoaderData} from "react-router-dom"
import AmountList from "../components/AmountList.jsx";
import AmountTitle from "../components/AmountTitle.jsx";
import FilterButton from "../components/FilterButton.jsx";
import DownloadButton from "../components/DownloadButton.jsx";
import DownloadIcon from "../assets/download-report.svg"
import Chat from "../components/Chat.jsx";
// import sendIcon from "./assets/send.svg"


export default function TotalIncome(){
    const amountData = useLoaderData()
    const totalIncomeOptions = [
        { value: 'usd', label: 'USD' },
        { value: 'ngn', label: 'NGN' },
        { value: 'btc', label: 'BTC' },
    ];

    const styles ={
        color:"#1E1E1E",
        fontSize: "40px",
        fontweight: 500,
        lineHeight: "48px",
        letterSpacing: "-2px",
        textalign: "left"
    }

    return(
        <div>
            <div className="filter-and-amount-container">
                <div className="filter-button-container">
                <FilterButton />
                </div>
                <AmountTitle componentTitle="Total Income" amountOfMoney={187000} selectCurrency={totalIncomeOptions} amountStyle={styles}/>
            </div>

            <div className="amount-list-and-report-container">
                <div className="amount-list">
                    {/* <AmountList/> */}
                    {amountData.map((data, index)=>(
                        <div key={index}>
                            <AmountList amount={`$${data.amount}`} date={data.date}/>

                        </div>
                    ))}
                </div>
            </div>

            <div className="download-button-container">
                <DownloadButton buttonName="Download Report" icon={DownloadIcon}/>
            </div>

            <div className="chat-input-container">
                <Chat/>
            </div>
            {/* filter button */}
            {/* amount titl/e component */}
            {/* amount-list-component */}
            {/* download report button */}
            {/* input field */}
        </div>
    )

    
}




