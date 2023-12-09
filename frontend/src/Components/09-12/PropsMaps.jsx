import React from 'react'

const PropsMaps = ({ kuchbhi, myAge, ChangeName, myStudents }) => {
    // const { kuchbhi } = props;
    console.log(kuchbhi, myAge, myStudents, "kuchbhi")
    return (
        <div>
            <ul>
                {myStudents.map((student) => (
                    <p>{student}</p>
                ))}
            </ul>
            <h1>{kuchbhi}</h1>
            <button onClick={ChangeName}>Change Name</button>
        </div>
    )
}

export default PropsMaps