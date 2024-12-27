import {useLoaderData} from "react-router-dom"
import AmountList from "../components/AmountList.jsx";
import AmountTitle from "../components/AmountTitle.jsx";
import FilterButton from "../components/FilterButton.jsx";
import DownloadButton from "../components/DownloadButton.jsx";
import DownloadIcon from "../assets/download-report.svg"
import Chat from "../components/Chat.jsx";
// import sendIcon from "./assets/send.svg"


export default function TotalExpenses(){
    const totalExpensesData = useLoaderData()
    const fiatCurrencyOptions = [
        { value: 'usd', label: 'USD' },
        { value: 'eur', label: 'EUR' },
        { value: 'ngn', label: 'NGN' },
    ];

    const styles ={
        color:"#13EB08",
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
                <AmountTitle componentTitle="Total Expenses" amountOfMoney={147000} selectCurrency={fiatCurrencyOptions} amountStyle={styles}/>
            </div>

            <div className="amount-list-and-report-container">
                <div className="amount-list">
                    {totalExpensesData.map((data, index)=>(
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
        </div>
    )

    
}



