import { Star } from "lucide-react"
export default async function AverageReview(){
    return (
        <div>
            <div className="flex gap-1.5">
                {
                [...Array(5)].map((_,index)=> <Star className="text-black" fill="currentColor" key={index} size={18}/> )
                }
            </div>
            <h3>4.5 out of 5</h3>
            <p>Based on 8 reviews</p>
        </div>
    )
}