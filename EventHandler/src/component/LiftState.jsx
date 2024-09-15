import { useState } from "react"

export const LiftState = () => {
    const [inputValue, setInputValue] = useState("");
    return (
        <>
            <InputComponent inputValue={inputValue} setInputValue={setInputValue} />
            <DisplayComponent inputValue={inputValue} />
        </>
    )
}


const InputComponent = ({inputValue, setInputValue}) => {

    return (
        <>
            <input
                type="text"
                placeholder="Enter your Name"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
        </>
    )
}

const DisplayComponent = ({inputValue}) => {
    return (
        <p>The current input value is:{ inputValue }</p>
    )
}

