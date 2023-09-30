import { useContext } from "react"
import { AppContext } from "../context/AppContext"



export default function PagiNation(){
    const {page , handleChange ,totalPages} = useContext(AppContext)
    function handlePrev(){
        handleChange(page-1)
    }
    function handleNext(){
        handleChange(page+1)
    }
    return(
    <div className="flex justify-around py-3 items-center border-t-2 border-gray-600 fixed bottom-0 w-full bg-white">
        <div className=" flex gap-3">
            { 
                page>1 && <button onClick={handlePrev} className=" font-semibold border-2 border-gray-500 py-1 rounded-md px-2">Previous</button>
            }
            {
                page<totalPages && <button onClick={handleNext} className=" font-semibold border-2 border-gray-500 py-1 rounded-md px-4">Next</button>
            }
        </div>
        <div className=" font-semibold"><p>Page {page} out of {totalPages}</p></div>
    </div>
    )

}