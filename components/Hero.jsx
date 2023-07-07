import React from "react"

export default function Hero(){
    return (
        <div className="hero">
            <div className="hero-container">
                <h1 className="title-text">My adventure in Thailand</h1>
                <p className="small-title-text">"Embark backpacking adventure through the captivating landscapes and vibrant culture of Thailand." </p>
            </div>
            <div className="positionRight">
                <h1>Top 5 locations</h1>
            </div>
            <div className="profile-container">
                    <img className ="profile-pic" src="../images/profile-picture.jpeg" />
                    <p className="small-text">Zeno Degenkamp</p>
            </div>
        </div>
    )
}


// export default function Hero(){
//     return (
//         <div className="hero">
//             <div className="hero-container">
//                 <h1 className="title-text">My adventure in Thailand</h1>
//                 <h3 className="small-text"><bold>My top 5 locations</bold> during 2-month trip</h3>
//                 <div className="profile-container">
//                     <img className ="profile-pic" src="../images/profile-picture.jpeg" />
//                     <p className="small-text">Zeno Degenkamp</p>
//                 </div>
//             </div>
//         </div>
//     )
// }