import { star } from "../assets/icons"


const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full items-center md:items-start max-sm:w-full">
      <img 
        src={imgURL} 
        alt="image popularProducts" 
        className="w-[280px] h-[280px]"
      />
      <div className="mt-6 flex justify-start gap-3">
        <img src={star} alt="Star" />
        <p className="font-montserrat font-light">(4.5)</p>
      </div>

      <h1 className="mt-3 font-montserrat font-bold text-xl xl:text-2xl">{name}</h1>
      <h2 className="mt-2 text-coral-red font-montserrat font-semibold">{price}</h2>
    </div>
  )
}

export default PopularProductCard