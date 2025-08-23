'use client'
import {Search} from "lucide-react"
import { useSearchParams,useRouter } from 'next/navigation'
import { useDebounce } from '@uidotdev/usehooks'
import { useEffect, useState, useCallback } from "react"
import { Suspense } from "react";
 
 export function SearchInbox() {
  
  const [searchTerm, setSearchTerm] = useState('')
  const debounceTerm:string = useDebounce(searchTerm, 500)
  const searchParams = useSearchParams()
  const router = useRouter()

  const handleSearch = useCallback((term: string) => {
  const newParams = new URLSearchParams(searchParams)
  if (term) {
    newParams.delete("search")
    newParams.set("search", term)
  } else {
    newParams.delete("search")
  }
  router.replace(`/search?${newParams.toString()}`)
}, [router])

useEffect(() => {
  setSearchTerm(searchParams.get("search") || "")
}, [searchParams])

  useEffect(()=>{
    const currentSearch = searchParams.get("search") || "";
    if (debounceTerm === currentSearch) return
      handleSearch(debounceTerm)
  }, [debounceTerm,handleSearch])


  return (
    <div className='relative'>
        <Search className="w-5 h-5 absolute left-10 top-1/2 transform -translate-y-1/2 text-primary" />
      <input 
      onChange={(e)=>setSearchTerm(e.target.value)}
      value={searchTerm}
      className='py-4 px-20 placeholder:text-grey-100 focus:outline-none' name="search" placeholder='Search 150+ Products' />
    </div>
  )
}

export default function SearchBox(){
  return (
    <Suspense>
      <SearchInbox/>
    </Suspense>
  )
}