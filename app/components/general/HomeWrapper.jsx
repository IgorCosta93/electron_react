import React from "react";
import Home from "./homeWrapper/Home";

function HomeWrapper({ data, history }){

    let props = {
        data: data,
        history: history
    }

    return (
        <Home props={props}/>
    );
}

export default HomeWrapper;