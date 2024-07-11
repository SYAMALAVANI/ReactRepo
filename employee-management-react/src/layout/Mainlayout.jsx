// import Header from "../components/mainlayout/Header"
// import UserDetails from "../components/mainlayout/UserDetails"

import UserDetails from "../components/mainlayout/UserDetails"
import Header from "../components/mainlayout/Header"



export  const MainLayout = () => {
    return (
        <div className="mainLayout">
            <Header  company={'Employee Management'}/>
            <UserDetails/>
        </div>
    )
}

// const MainLayout = ()=>{

//     return (
//        <div className="mainLayout">
//         <Header company={'Employee Management'}/>
//         <UserDetails />
       
//        </div>
//     )
// }

// export default MainLayout