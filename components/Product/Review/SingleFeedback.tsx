import {User,Star} from "lucide-react"
export default async function SingleFeedback(){
    return (
        <div className="flex gap-4">
                <div>
                    <User className="bg-amber-100" size={30}/>
                </div>
                <div className="flex-row space-y-1">
                    <div className="flex gap-2">
                        {
                        [...Array(5)].map((_,index)=> <Star className="text-black" fill="currentColor" key={index} size={18}/> )
                        }
                    </div>
                    <h6>Charlotte Tilbury</h6>
                    <p>I have read all these great reviews about Charlottes Tilbury products so I bought a lipstick I am finding it very drying on my lips.</p>
                </div>
        </div>
    )
}