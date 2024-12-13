

function AllCards({data}) {
   
  return (
    <>
      <div className="flex flex-wrap my-5 justify-around w-[100%] gap-5">
        {data.map((singledata) => {
          return (
            <div key={singledata.id} className="w-[20%] ">
              <div className="bg-red-300 shadow-lg h-[70vh] rounded">
                <img src={singledata.images} alt="img"  className="w-[100%] aspect-square object-cover"/>
               <div className="p-3">
               <h2 className="text-lg font-semibold">{singledata.name}</h2>
                <p className="text-xs">{singledata.basePrice}</p>
                <p className="text-xs">{singledata.description}</p>
               </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default AllCards;
