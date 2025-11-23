import React from "react";
import { useState, useEffect } from "react";
export default function useFetch(){
    const [profile,setProfile] = React.useState([]);
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

    console.log("Custom Hook");

    return {profile,numberofProfile,setNumberofProfile,generateProfile};
}