import { Carousel } from "../Utils/Carousel/Carousel"

const Work = () => {
    return(
        <>
        <section>
            <div className="h-screen bg-[#0f172a]">
               {/* <h3 className="text-white">My Work</h3> */}
               <div className="flex items-center justify-center min-h-screen">

               <Carousel></Carousel>
               </div>
            </div>


        </section>
        
        </>
    )
}

export {Work};