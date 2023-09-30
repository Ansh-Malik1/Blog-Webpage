import { NavLink } from "react-router-dom"

export default function Card({post}){
    console.log(post.id)
    return(
        <div className=" p-3 border-2 rounded-md">
            <NavLink to={`/blog/${post.id}`}><p className=" font-semibold text-xl">{post.title}</p></NavLink>
            <p className=" opacity-60 flex gap-1 flex-wrap mb-1">By <span className=" italic">{post.author}</span> on  
            <NavLink to={`/categories/${post.category.replaceAll(" " , "-")}`}><span className=" underline font-semibold"> {post.category}</span></NavLink></p>
            <p className=" opacity-60"> Posted on {post.date}</p>
            <p className=" opacity-80 leading-6">{post.content}</p>
            <div className=" flex flex-wrap gap-2">
                {post.tags.map((tag ,index)=>{
                    return( 
                        <NavLink key={index} to={`/tags/${tag.replaceAll(" " , "-")}`}><p className=" underline text-xs text-blue-500 cursor-pointer">#{tag}</p></NavLink>
                      
                    )
                })}
            </div>
        </div>
    )
}