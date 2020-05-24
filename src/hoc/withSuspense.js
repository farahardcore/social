import React from "react";
import Preloader from "../components/preloader/preloader";

export const withSuspense = (Component) => {
    return (props) =>{
        return <React.Suspense fallback={<div>Loading...</div>}>
            <Component {...props} />
        </React.Suspense>
    }
};