import React, { useEffect, useState } from "react"

const Landing = () => {
    const [postData, setPostData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getData = async () => {
            let response = await fetch("http://localhost:1337/api/posts")
            let data = await response.json()
            setPostData(data)
            setLoading(false)
        }
        getData()
    }, [])

    return (
        <>
            <h1>Hello from the Landing component!</h1>
            {
                loading ? 
                    <p>Content is loading...</p> 
                    :     
                    postData.data.map((item) => {
                        return (
                            <div>
                                <h2>{item.attributes.Title}</h2>
                                <h2>{item.attributes.Body}</h2>
                            </div>
                        )
                    })       
            }
        </>
    )
}

export default Landing

