import { useState, useEffect } from "react";


export function usefetch(url){

 const [data ,setData] = useState([])
 const [isLoading , setLoading] = useState(true)

useEffect(()=>{
    if (!url) return 

    async function fetchData() {

        const response = await fetch(url)

        const data = response.json

        setData(data)

        setLoading(false)
    }

    setLoading(true)

    fetchData()
}, [url])
 return {isLoading, data}

}