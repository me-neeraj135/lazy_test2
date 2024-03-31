import React from 'react';
import {BrowserRouter} from "react-router-dom";
import AllRoutes from "./AllRoutes";
import { styled } from 'linaria/react';
const Page1 = React.lazy(() => import("./Page1"));
const Page2 = React.lazy(() => import("./Page2"));

const Button = styled.button`
  color: red;
`;
export const App = () =>{
    return (
        <BrowserRouter>
            <Button>Click me</Button>
            <AllRoutes />
        </BrowserRouter>
    )
}