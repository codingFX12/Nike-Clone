import { reviews } from '../constants'
import ReviewCard from '../components/ReviewCard'

const CustomerReviews = () => {
  return (
    <section id='customerReviews' className='w-full max-container'>
      <h2 className='text-4xl font-palanquin font-bold text-center'>
        What Our
        <span className='text-coral-red'> Customers </span>
        Say
      </h2>
      <p className='info-text text-center mt-4 max-w-lg m-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet facilis quam autem!</p>

      <div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-10'>
        {reviews.map((review) => (
          <ReviewCard 
            key={review.customerName}
            {...review}
          />
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews