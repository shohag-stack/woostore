export default function ShippingInfo({onBack}:{onBack:()=>void}){

    const handleButton = ()=>{
        onBack()
    }
    return (
        <div>
            <h1>shipping info</h1>
            <button onClick={handleButton} className="btn-primary"> Return to Information</button>
        </div>
    )
}