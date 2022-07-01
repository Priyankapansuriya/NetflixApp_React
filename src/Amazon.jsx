import React from "react";
import Card from "./Cards";
import Sdata from "./Sdata";

const Amazon = () => {

return (
    <Card 
          key={Sdata[4].id}
          sname= {Sdata[4].sname}
          imgsrc= {Sdata[4].imgsrc}
          title={Sdata[4].title}
          links= {Sdata[4].links}
  />
  );
}
export default Amazon;