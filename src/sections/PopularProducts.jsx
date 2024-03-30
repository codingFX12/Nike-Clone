import { products } from "../constants"
import PopularProductCard from "../components/PopularProductCard"

const PopularProducts = () => {
  return (
    <section id='popularProducts' className='max-container'>
      <div className='flex flex-col gap-5'>
        <h1 className="font-montserrat font-bold text-4xl mt-10 md:mt-0">Our Popular Products</h1>
        <p className="text-sm opacity-80 lg:w-[45%] w-[85%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta vel illum et animi praesentium possimus maxime, illo at!.</p>
        <div className="mt-10 gap-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-1">
          {products.map((product) => (
            <PopularProductCard key={product.name} {...product}/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PopularProducts