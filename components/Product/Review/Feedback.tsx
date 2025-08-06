import SingleFeedback from "./SingleFeedback";

export default async function Feedback(){
return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-9 py-10">
        {[...Array(6)].map((_,idx)=>(
            <SingleFeedback key={idx}/>
        ))}
    </div>
)
}