const t=async({fetch:o})=>({notes:await(await o("/api/notes.json")).json()}),s=Object.freeze(Object.defineProperty({__proto__:null,load:t},Symbol.toStringTag,{value:"Module"}));export{s as _,t as l};
