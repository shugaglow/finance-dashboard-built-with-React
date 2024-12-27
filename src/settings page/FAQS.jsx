import Accordion from "../components/Accordion";
import HeaderComponent from "../components/HeaderComponent";

function FAQS() {
    const faqs = [
        {
            title: "Is my financial data secure?",
            text:
            "Absolutely. We use bank-grade encryption and adhere to strict data privacy protocols to ensure your information is safe."
        },
        {
            title: "How often is my financial data updated?",
            text:
            "Your data is updated in real-time for linked accounts. For manual entries, you can update them anytime."
        },
    
        {
            title: "How do I generate reports?",
            text:
            "Go to the 'Reports' tab, select the type of report you need, choose a date range, and click 'Generate'"
        },
    
    ];

return (
    <div>
        <div className="top-notifications">
            <HeaderComponent headercaption="Frequently Asked Questions" headertext="Get quick answers to common questions about using our finance dashboard. From setup to advanced features, we’ve got you covered!"/>
        </div>
        <Accordion data={faqs} />
    </div>
)
}

export default FAQS