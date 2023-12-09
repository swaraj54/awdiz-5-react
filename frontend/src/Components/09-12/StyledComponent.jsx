import React from 'react'
import styled from 'styled-components'

const StyledComponent = () => {

    const MyComponent = styled.div`
    color : red;
    font-size : 40px;
    `;

    return (
        <MyComponent>StyledComponent</MyComponent>
    )
}

export default StyledComponent