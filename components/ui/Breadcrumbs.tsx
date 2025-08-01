'use client'
import { usePathname } from "next/navigation"
import Link from "next/link"
export default function Breadcrumbs(){

    const pathName = usePathname()
    const segmants = pathName.split('/').filter(Boolean)
    return (
        <div className="container mx-auto pb-3 pt-2">
            <ul className="flex">
                <li><Link className="hover:underline px-1" href="/">Home</Link><span>/</span></li>
                {segmants.map((segmant, index)=>{
                    const href = '/' + segmants.slice(0, index + 1).join('/')
                    const isLast = index === segmants.length - 1
                    return (
                        <li key={index}><Link className="hover:underline px-1" href={href}> {decodeURIComponent(segmant)}</Link>
                        {!isLast && <span>/</span>}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}