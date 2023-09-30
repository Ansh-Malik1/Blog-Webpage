import { useContext, useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { AppContext } from "../context/AppContext"
import Header from "../components/Header"
import Spinner from "../components/Spinner"
import Card from "../components/Cards"
import { baseUrl } from "../baseUrl"

export default function Blog(){
    const [currentBlog , setBlog] = useState('')
    const [relatedBlogs , setRelatedBlog] = useState([])
    const { loading , setLoading} = useContext(AppContext)
    const location = useLocation()
    const navigate = useNavigate()
    const blogId = location.pathname.split("/").at(-1)
    async function getDataById(){
        setLoading(true)
        let url= `https://codehelp-apis.vercel.app/api/get-blog?blogId=${blogId}`
        try{
            const response = await fetch(url)
            const data = await response.json()
            setBlog(data.blog)
            setRelatedBlog(data.relatedBlogs)
        }
        catch(error){
            alert("An unexpected error occured , Please try again later")
            setBlog(null)
            setRelatedBlog([])
        }
        setLoading(false)
    }

    useEffect(()=>{
        if(blogId){getDataById()}
        
    },[location.pathname])
    return(
        <div className="">
          <Header/>
          <div>
            <button onClick={()=>{navigate(-1)}}></button>
          </div>
          {
            loading? (<Spinner/>) :
            currentBlog? (
                <div className=" my-28 w-[90%] lg:w-[50%] mx-auto flex flex-col gap-5">
                <Card post={currentBlog}/>
                <button className="border-2 w-full lg:w-[50%] mx-auto py-2 px-6 font-semibold border-gray-500 rounded-lg" onClick={()=>{navigate(-1)}}>Back</button>
                <h2 className="mt-6 mb-2 text-2xl font-semibold ml-2">Related Blogs</h2>
                {
                    relatedBlogs.map((blog)=>(
                        <div className="">
                            <Card key={blog.id} post={blog}/>
                        </div>
                    ))
                }
                </div>
            ) : 
            (<div>
                <h1>No Blogs Found</h1>
            </div>)
            }
        </div>
    )
}