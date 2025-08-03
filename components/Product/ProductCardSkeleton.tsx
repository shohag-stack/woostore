"use client"
import { Skeleton } from "../ui/skeleton"
export default function ProductCardSkeleton(){
    return (
        <>
        <div>
        <div className=" bg-amber-50 object-cover w-full h-[310px]"/>
        <div className="flex flex-col gap-3 py-4">
            <Skeleton className="font-bold"></Skeleton>
            <div> <Skeleton className="w-full h-2"></Skeleton></div>
            <div className="flex space-x-3">
                <Skeleton className="w-full h-2"></Skeleton>
            </div>
            <div className="flex space-x-1.5">
               <Skeleton className="w-30 h-2"></Skeleton>
            </div>
        </div>
        <Skeleton
          className="w-35 h-5"> 
          </Skeleton>
    </div>
        </>
    )
}