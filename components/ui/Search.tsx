import Form from 'next/form'
import {Search} from "lucide-react"
import Image from 'next/image'
 
export default function SearchInput() {
  return (
    <Form action="/search" className='relative'>
      {/* On submission, the input value will be appended to
          the URL, e.g. /search?query=abc */}
        <Search className="w-5 h-5 absolute left-10 top-1/2 transform -translate-y-1/2 text-primary" />
      <input className='py-4 px-20 placeholder:text-grey-100 focus:outline-none' name="query" placeholder='Search 150+ Products' />
    </Form>
  )
}