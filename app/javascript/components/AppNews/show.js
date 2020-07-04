import React, {useState, useEffect} from 'react';

const Show = (props) => {
    const [airline, setAirline] = useState({})
    const [review, setReviews] = useState({})

    useEffect(() => {
        const slug = props.match.params.slug
        const url = `/api/v1/news/${slug}`
        console.log(props)
    }, [])

    return <div>este es el show</div>
}

export default Show;