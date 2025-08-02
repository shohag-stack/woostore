'use client'

import { useRouter, useSearchParams } from "next/navigation"

export default function FilterSidebar({categories} : {categories: any[]} ) {
  const router = useRouter()
  const searchParams = useSearchParams()  
    
    const handleCategoryClick = (categoryId:number) => {
    const params = new URLSearchParams(searchParams.toString())
    const currentParams = params.get("category")
    const newParams = String(categoryId)
    if (currentParams === newParams) {
      params.delete('category')
    } else {
      params.set('category', newParams)
    }

    router.push(`/shop?${params}`)
  }
   
  
  
  
  return (
        <aside className="left-filter w-1/4 pr-4">
      <h5 className="font-semibold mb-2">Categories</h5>
      <ul>
        {categories.map((cat:any) => (
          <li key={cat.id}>
            <button
              onClick={() => handleCategoryClick(cat.id)}
              className="text-left text-blue-600 hover:underline"
            >
              {cat.name}
            </button>
          </li>
        ))}
      </ul>
    </aside>
    )
}