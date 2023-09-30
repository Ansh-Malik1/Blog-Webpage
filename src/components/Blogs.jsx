import { useContext } from "react"
import { AppContext } from "../context/AppContext"
import Card from "./Cards"
import Spinner from "./Spinner"
import { useLocation } from "react-router-dom"

export default function Blogs(){
    const{posts,loading} = useContext(AppContext)
    const location = useLocation()
    let margin=""
    console.log(location.pathname.includes("categories"))
    // location.pathname.includes("categories")? (margin="my-20") : (margin="my-28")
    location.pathname.includes("tags") || location.pathname.includes("categories") ? (margin="my-6") : (margin="my-28")
    return(
        <div className={` w-[90%] lg:w-[50%] mx-auto flex flex-col gap-6 ${margin} mb-20`}>{
        loading? (<Spinner/>) : 
        (posts.length==0? (<div className="flex justify-center items-center"><h1 className=" text-4xl font-bold">No posts found</h1></div>) : 
        (posts.map((post) =>(<Card key={post.id} post={post}/>)))) 
        }
        </div>
    )

}