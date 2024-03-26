import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Suspense} from "react";
import {Page1} from "./Page1";
import {Page2} from "./Page2";

const Loading = () => <h1 style={{ color: 'red' }}>Loading</h1>

export const App = () =>{
    return (
        <BrowserRouter>
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
        </BrowserRouter>
    )
}