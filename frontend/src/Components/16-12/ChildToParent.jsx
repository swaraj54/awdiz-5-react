import { useContext, useState } from "react"
import { MyContext } from "../../context/AuthContext"

function ChildrenComponent({ ChangeValue }) {

    return (
        <input onChange={ChangeValue} />
    )
}

function ChildToParent() {  // Parent Component - cart
    const [myValue, setMyValue] = useState('')

    const { state } = useContext(MyContext)

    
    function ChangeValue(e) {
        setMyValue(e.target.value)
    }

    return (
        <div>
            <h1>Typed value : {myValue} , state = {state.test}</h1>
            <ChildrenComponent ChangeValue={ChangeValue} />
            {/* products, pricing, offers  */}
        </div>
    )
}

export default ChildToParent