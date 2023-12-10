import React from 'react'


export const Button = ({ children }) => {

    return <button style={{ color: 'red' }}>{children}</button>
}


const ChildrenProp = () => {
    return (
        <Button>ChildrenProp</Button>
    )
}

export default ChildrenProp