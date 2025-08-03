'use client'
import ProductCardSkeleton from "./ProductCardSkeleton"
export default function ShopPageSekeleton() {

    return (
        <div className="w-3/4">
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                        {
                                    Array.from({length:100}).map((_, idx) => (
                                        <ProductCardSkeleton key={idx} />
                                    ))}
                                </div>
                </div>
    )

}