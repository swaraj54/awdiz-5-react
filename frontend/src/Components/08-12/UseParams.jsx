import React from 'react'
import { useParams } from 'react-router-dom'

const UseParams = () => {

    const { age } = useParams()

    return (
        <div>UseParams - {age}</div>
    )
}

export default UseParams