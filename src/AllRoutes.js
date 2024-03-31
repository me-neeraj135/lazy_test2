import React from 'react';
import {Suspense} from "react";
import {Route, Routes} from "react-router-dom";
const Page1 = React.lazy(() => import("./Page1"));
const Page2 = React.lazy(() => import("./Page2"));
const Loading = () => <h1 style={{ color: 'red' }}>Loading</h1>

const AllRoutes=()=>{
    return (
        <Routes>
            <Route path={'/page1'} element={(
                <Suspense fallback={<Loading/>}>
                    <Page1/>
                </Suspense>
            )} />
            <Route path={'/page2'} element={(
                <Suspense fallback={<Loading/>}>
                    <Page2/>
                </Suspense>
            )} />
        </Routes>
    )
}

export default AllRoutes