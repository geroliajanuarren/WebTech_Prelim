import React from "react";
import dynamic from 'next/dynamic';
// import Dashboard from "./Dashboard/page";
const DynamicHeader = dynamic(() => import('./Dashboard/page'), {
  ssr: false
}) 
const LandingPage = () => {
  return ( <>
    <DynamicHeader/>
  </> );
}
 
export default LandingPage;