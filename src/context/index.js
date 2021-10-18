import React from 'react'

const Context = React.createContext()

function Provider(props){
    
const [theme, setTheme] = React.useState(false)
let timeNow = new Date();
let hourNow = timeNow.getHours();

React.useEffect(() => {
    console.log("Hora:",hourNow)
    if(hourNow > 12 ){
        setTheme(true)
    }else{
        setTheme(false)
    }
}, [])
    
const [loader, setLoader] = React.useState(false)

const [hour] = React.useState(timeNow)
  
     

    return(
        <Context.Provider value={{
           theme,
           setTheme,
           hour
        }}>
            {props.children}
        </Context.Provider>
    )
}


export { Context, Provider };