import { createContext, useState } from "react";
import {baseUrl} from "../baseUrl"
import { useNavigate } from "react-router-dom";

export const AppContext = createContext()

export default function AppContextProvider({children}){
    const [loading , setLoading] = useState(false)
    const [posts , setPosts] = useState([])
    const [page , setPage] = useState(1)
    const [totalPages , setTotalPages] = useState(null)
    const navigate = useNavigate()


    async function getData (page=1 , tag=null , category){
        setLoading(true)
        let url = `${baseUrl}?page=${page}`
        if(tag){url+=`&tag=${tag}`}
        else if(category){url+= `&category=${category}`}
        try{
            const result = await fetch(url)
            const data = await result.json()
            if(!data.posts || data.posts.length===0){
                throw new Error("Something went wrong")
            }
            setPage(data.page)
            setPosts(data.posts)
            setTotalPages(data.totalPages)
        }
        catch(error){
            alert("Something went wrong , try again later")
            setPage(1)
            setPosts([])
            setTotalPages(null )
        }
        setLoading(false)
    }

    function handleChange(page){
        setPage(page)
        navigate({search : `?page=${page}`})
    }

    const value={
        loading , 
        setLoading,
        posts , 
        setPosts,
        page , 
        setPage,
        totalPages , 
        setTotalPages,
        handleChange,
        getData

    }
    return <AppContext.Provider value={value}>             {/*Synatx!!!!!!!!!!!!!!!!!*/}
             {children}
           </AppContext.Provider>
    
}