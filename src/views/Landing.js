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

    if (loading) {
        return (
            <h4>Content loading</h4>
        )
    }

    return (
        <>
            {/* <h1>Hello from the Landing component!</h1> */}
            <h4>Content loaded.</h4>
            {/* {
                postData.data.map((item) => {
                    return (
                        <div>
                            <h2>{item.attributes.title}</h2>
                            <h2>{item.attributes.body}</h2>
                        </div>
                    )
                })
            } */}
        </>
    )
}

export default Landing

