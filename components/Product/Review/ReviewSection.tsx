import AverageReview from "./AverageReview"
import CustomerReview from './CustomerReview'

export default async function ReviewSection(){
    return (
        <div className="py-20 grid grid-cols-1 space-y-4 sm:space-y-0 sm:grid-cols-3 items-center justify-between">
            <AverageReview/>
            <CustomerReview/>
            <button className="btn-primary">Write a Review</button>
        </div>
    )
}