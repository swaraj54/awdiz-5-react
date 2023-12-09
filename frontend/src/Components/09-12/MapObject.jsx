import React from 'react'

const MapObject = ({ myStudentsData }) => {
    console.log(myStudentsData, "myStudentsData")
    return (
        <div>
            {myStudentsData.map((studentData) => (
                <div>
                    <img src={studentData.image} />
                    <h1>{studentData.name}</h1>
                    <p>{studentData.marks}</p>
                </div>
            ))}
        </div>
    )
}

export default MapObject