import { Star } from "lucide-react"
import { Progress } from "@/components/ui/progress"
export default async function CustomerReview(){
    return (
        <div>
            <h5>Customer Reviews</h5>
            <div>
                
            <div className="flex gap-6 items-center">
                <div className="flex gap-2">
                    {
                    [...Array(5)].map((_,index)=> <Star className="text-black" fill="currentColor" key={index} size={18}/> )
                    }
                </div>
                <div className="flex gap-3 justify-center items-center">
                    <Progress value={100} className="w-[100] h-[10]"/>
                    <p>5</p>
                </div>
            </div>

            <div className="flex gap-6 items-center">
                <div className="flex gap-2">
                    {
                    [...Array(5)].map((_,index)=> <Star className="text-black" fill="currentColor" key={index} size={18}/> )
                    }
                </div>
                <div className="flex gap-3 justify-center items-center">
                    <Progress value={100} className="w-[100] h-[10]"/>
                    <p>5</p>
                </div>
            </div>

            <div className="flex gap-6 items-center">
                <div className="flex gap-2">
                    {
                    [...Array(5)].map((_,index)=> <Star className="text-black" fill="currentColor" key={index} size={18}/> )
                    }
                </div>
                <div className="flex gap-3 justify-center items-center">
                    <Progress value={30} className="w-[100] h-[10]"/>
                    <p>5</p>
                </div>
            </div>

            <div className="flex gap-6 items-center">
                <div className="flex gap-2">
                    {
                    [...Array(5)].map((_,index)=> <Star className="text-black" fill="currentColor" key={index} size={18}/> )
                    }
                </div>
                <div className="flex gap-3 justify-center items-center">
                    <Progress value={20} className="w-[100] h-[10]"/>
                    <p>5</p>
                </div>
            </div>

            <div className="flex gap-6 items-center">
                <div className="flex gap-2">
                    {
                    [...Array(5)].map((_,index)=> <Star className="text-black" fill="currentColor" key={index} size={18}/> )
                    }
                </div>
                <div className="flex gap-3 justify-center items-center">
                    <Progress value={10} className="w-[100] h-[10]"/>
                    <p>5</p>
                </div>
            </div>

            
            </div>
        </div>
    )
}