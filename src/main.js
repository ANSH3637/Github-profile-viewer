import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import Header from "./component/Header";
import Body from "./component/Body";

function GithubProfile(){
    //Header
    //Body - card Show Karenge

    return(
        <>
        <Header></Header>
        <Body></Body>
        </>
    )

}

ReactDOM.createRoot(document.getElementById("root")).render(<GithubProfile/>);