"use client"

import { useEffect, useState } from "react";

interface ComponentProp{
    data: string|number
}

export const formatter = new Intl.NumberFormat("en-US",{style:'currency',currency:'USD'});


function Currency({data}:ComponentProp) {
    const [mounted, setMounted] = useState(false);

    useEffect(()=>{setMounted(true)},[])
    
    if (!mounted){
        return null;
    }

  return (
    <div className="font-semibold">{formatter.format(Number(data))}</div>
  )
}

export default Currency