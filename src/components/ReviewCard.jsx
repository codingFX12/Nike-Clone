import { star } from "../assets/icons"

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <img src={imgURL} alt="image Review card" width={200} height={120} className="rounded-full" />
      <h3 className="text-3xl text-center font-semibold font-montserrat">{customerName}</h3>
      <p className="info-text text-center xl:max-w-[90%]">{feedback}</p>

      <div className="flex items-center justify-center gap-2">
        <img src={star} alt="star icon" width={25}/>
        <h4 className="text-lg font-semibold">({rating})</h4>
      </div>
    </div>
  )
}

export default ReviewCard