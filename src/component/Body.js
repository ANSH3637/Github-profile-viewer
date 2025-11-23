import React, { useEffect } from "react";
import useFetch from "../useFetch";
function Body(){
    
    /*const [profile,setProfile] = React.useState([]);
    const [numberofProfile,setNumberofProfile] = React.useState("");
    
        async function generateProfile(count = 10){
            const ran = Math.floor(1+Math.random()*10000);
            const response = await fetch(`https://api.github.com/users?since=${ran}&per_page=${count}`);
            const data = await response.json();
            setProfile(data);
        }
    
        useEffect(()=>{
            generateProfile();
        },[])
    */

    console.log("Body first");
    const {profile,numberofProfile,setNumberofProfile,generateProfile} = useFetch();
    console.log("Body last");

    // profile = user data
    return(
        <div className="but">
        {/*<input type="text" className="inpu" value={numberofProfile} onChange={(e)=>{setNumberofProfile(e.target.value)}} placeholder="Search here"></input>*/}
        <button onClick={()=>{generateProfile(Number(numberofProfile) || 10)}}>Refresh</button>
            <div className="profiles">
                {
                    profile.map((value)=>{
                        return(
                            <div key={value.id} className="cards">
                                <img src={value.avatar_url}></img>
                                <h2>{value.login}</h2>
                                <h3><a href={value.html_url} target="_blank">Profile</a></h3>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Body;

// try catch functionality add karo
// useCallback function add karne ki koshish
// search button: Name ke bassis: User profile exist, display kara dena