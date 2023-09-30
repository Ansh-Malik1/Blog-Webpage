import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import "./App.css"
import { Routes ,Route, useSearchParams, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Tag from "./pages/Tag";
import Category from "./pages/Category";

export default function App() {
  const {getData} = useContext(AppContext)
  const [searchParams , setSearchParams] = useSearchParams()
  const location = useLocation()
  useEffect(()=>{
    const page = searchParams.get("page")?? 1
    if(location.pathname.includes("tags")){
      const tag = location.pathname.split('/').at(-1).replaceAll("-" , " ")
      getData(Number(page) , tag , null) 
     
    }
    else if(location.pathname.includes("categories")){
      const category  = location.pathname.split('/').at(-1).replaceAll("-" , " ")
      getData(Number(page) , null , category) 
    }
    else{
      getData(Number(page))
    }
  },[location.pathname , location.search])
  return(
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/blog/:blogId" element={<Blog/>}></Route>
      <Route path="/tags/:tag" element={<Tag/>}></Route>
      <Route path="/categories/:category" element={<Category/>}></Route>
    </Routes>
  ) 
}
