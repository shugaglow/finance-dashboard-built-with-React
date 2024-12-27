import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import RootLayout from "./RootLayout.jsx";

import SettingsLayout from "./layout/SettingsLayout.jsx";
import NotificationsSettings from "./settings page/NotificationsSettings.jsx";
import PrivacyAndSecurity from "./settings page/PrivacyAndSecurity.jsx";
import FAQS from "./settings page/FAQS.jsx";

import IncomeLayout from "./layout/IncomeLayout.jsx";
import CryptoIncome from "./income page/CryptoIncome.jsx";
import TotalIncome from "./income page/TotalIncome.jsx";
import FiatIncome from "./income page/FiatIncome.jsx";

import ExpensesLayout from "./layout/ExpensesLayout.jsx";
import CryptoExpenses from "./expenses page/CryptoExpenses.jsx";
import FiatExpenses from "./expenses page/FiatExpenses.jsx";
import TotalExpenses from "./expenses page/TotalExpenses.jsx";

import { 
    fiatExpensesLoader,
    cryptoExpensesLoader,
    totalExpensesLoader,

    fiatLoader, 
    cryptoLoader, 
    totalLoader,
    
    fiatInvestmentsLoader,
    cryptoInvestmentsLoader,  
    totalInvestmentsLoader, 
} from "./data.js";

import InvestmentLayout from "./layout/InvestmentLayout.jsx"
import FiatInvestments from "./investments page/FiatInvestments.jsx";
import CryptoInvestments from "./investments page/CryptoInvestments.jsx";
import TotalInvestments from "./investments page/TotalInvestments.jsx";

import SmsLayout from "./layout/SmsLayout.jsx";
import AllSms from "./sms page/AllSms.jsx";
import TransactionSms from "./sms page/TransactionSms.jsx";
import SystemUpdateSms from "./sms page/SystemUpdateSms.jsx";




function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<RootLayout />}>
                <Route path="/" element={<IncomeLayout />}>
                    <Route index element={<FiatIncome />} loader={fiatLoader} />
                    <Route path="fiat" element={<FiatIncome />} loader={fiatLoader} />
                    <Route path="crypto" element={<CryptoIncome />} loader={cryptoLoader} />
                    <Route path="total" element={<TotalIncome />} loader={totalLoader} />
                </Route>

                <Route path="expenses" element={<ExpensesLayout />}>
                <Route index element={<FiatExpenses />} loader={fiatExpensesLoader} />
                    <Route path="fiatExpenses" element={<FiatExpenses />} loader={fiatExpensesLoader} />
                    <Route path="cryptoExpenses" element={<CryptoExpenses />} loader={cryptoExpensesLoader} />
                    <Route path="totalExpenses" element={<TotalExpenses />} loader={totalExpensesLoader} />
                </Route>

                <Route path="investments" element={<InvestmentLayout />}>
                    <Route index element={<FiatInvestments/>} loader={fiatInvestmentsLoader} />
                    <Route path="fiatInvestments" element={<FiatInvestments/>} loader={fiatInvestmentsLoader} />
                    <Route path="cryptoInvestments" element={<CryptoInvestments/>} loader={cryptoInvestmentsLoader} />
                    <Route path="totalInvestments" element={<TotalInvestments/>} loader={totalInvestmentsLoader} />
                </Route>


                <Route path="settings" element={<SettingsLayout/>}>
                <Route index element={<NotificationsSettings/>} />
                <Route path="notifications" element={<NotificationsSettings/>}/>
                <Route path = "privacyandsecurity" element={<PrivacyAndSecurity/>}/>
                <Route path="faqs" element={<FAQS/>}/>
                </Route>

                <Route path="sms" element={<SmsLayout/>}>
                <Route index element={<AllSms/>}/>
                <Route path="all" element={<AllSms/>}/>
                <Route path="transaction" element={<TransactionSms/>}/>
                <Route path="systemupdate" element={<SystemUpdateSms/>}/>

                </Route>

            </Route>
        )
    );

    return <RouterProvider router={router} />;
}

export default App;
