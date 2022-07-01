import React from "react";
import Netflix from "./Netflix";
import Amazon from "./Amazon";
import Sdata from "./Sdata";
import Card from "./Cards";

//const favSeries = 'amazon';
//const FavS = () => {
//if(favSeries === 'netflix'){
//    return (
//        <Netflix/>
//      );
//} else {
//    return (
//        <Amazon/>
//      );
//}
//}

function ncard(val){
return(
  <Card 
          key={val.id}
          sname= {val.sname}
          imgsrc= {val.imgsrc}
          title={val.title}
          links= {val.links}
  />
);
}
const App = () => (
    <>
       <h1 className="heading_style">List of Most viewed Original Series</h1>
        {/*<FavS />*/}
        {/*(favSeries === 'netflix') ? <Netflix/> : <Amazon/>*/}
        

  {Sdata.map(ncard)}
    </>
);


export default App;