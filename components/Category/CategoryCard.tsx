import { Category } from "@/lib/types/types"
import Link from "next/link"
import Image from "next/image"

type categoryProps = {
    category: Category
}

export default function CategoryCard({category}: categoryProps){

    return (
        <Link className="card" href={`${category.slug}`}>
            <div className="relative w-[196] h-[241] bg-amber-300 cursor-pointer hover:-translate-y-2 ease-in-out transition-all duration-300" >
            {category.image ? (
                <Image
                    src={category.image.src}
                    alt={category.title}
                    width={196}
                    height={241}
                    objectFit="cover"
                    className="w-[196] h-[241] ooverflow-hidden"
                />
            ) : (
                <div style={{ width: 196, height: 241, background: '#f0f0f0' }}>
                    No Image
                </div>
            )}

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] bg-white bg-opacity-90 text-black text-center py-2 font-medium">
                <p className="text-md text-primary">
                    {category.title}
                </p>
            </div>
        </div>
        </Link>
    )
}