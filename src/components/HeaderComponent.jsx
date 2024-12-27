/* eslint-disable react/prop-types */
function HeaderComponent({headercaption,headertext}) {
return (
    <div className="notifications-header">
        <h1>{headercaption}</h1>
        <p>{headertext}</p>

    </div>
)
}

export default HeaderComponent