import { createContext,useState } from "react"

export let MyContext = createContext()

export let ContextProvider = ({children}) => {
    let [data, setData] = useState([])
      let [show, setShow] = useState(false);
    
    return (
        <MyContext.Provider value={{ data, setData,show,setShow }}>
    {children}
        </MyContext.Provider>
    )
}