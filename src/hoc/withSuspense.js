import React from "react";
import Preloader from "../components/preloader/preloader";

export const withSuspense = (Component) => {
    return (props) =>{
       return <React.Suspense fallback={<Preloader/>}>
            <Component {...props} />
        </React.Suspense>
    }
};