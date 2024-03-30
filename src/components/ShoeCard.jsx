const ShoeCard = ({ imgURL, changeBigShoe, bigShoeImg }) => {
  const handleClick = () => {
      if(bigShoeImg !== imgURL.bigShoe){
        changeBigShoe(imgURL.bigShoe)
      }
  }

  return (
    <div className={`border-2 rounded-xl ${bigShoeImg === imgURL.bigShoe ? 'border-coral-red' : 'border-transparent'} cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="flex items-center justify-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-lg:p-4">
        <img src={imgURL.thumbnail} alt="shoe image" width={127} height={103} className="object-contain" />
      </div>
    </div>
  )
}

export default ShoeCard