import {useLoaderData} from "react-router-dom"
import AmountList from "../components/AmountList.jsx";
import AmountTitle from "../components/AmountTitle.jsx";
import FilterButton from "../components/FilterButton.jsx";
import DownloadButton from "../components/DownloadButton.jsx";
import DownloadIcon from "../assets/download-report.svg"
import Chat from "../components/Chat.jsx";
// import sendIcon from "./assets/send.svg"


export default function CryptoIncome(){
    const cryptoExpensesData = useLoaderData()
    const cryptoCurrencyOptions = [
        { value: 'btc', label: 'BTC' },
        { value: 'eth', label: 'ETH' },
        { value: 'ltc', label: 'LTC' },
    ];

    const styles ={
        color:"#9747FF",
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
                <FilterButton/>
                </div>
                <AmountTitle componentTitle="Total Crypto Expenses" amountOfMoney={1.0045863}  selectCurrency={cryptoCurrencyOptions}  amountStyle={styles}/>
            </div>

            <div className="amount-list-and-report-container">
                <div className="amount-list">
                    {/* <AmountList/> */}
                    {cryptoExpensesData.map((data, index)=>(
                        <div key={index}>
                            <AmountList amount= {`${data.amount} BTC`} date={data.date}/>

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

// export const fiatLoader = async () => {
//     try {
//         const response = await fetch("http://localhost:3001/income");
//         if (!response.ok) {
//             throw new Error("Failed to fetch data");
//         }
//         return response.json();
//     } catch (error) {
//         console.error(error);
//         throw error;
//     }
// };


