const o=async({fetch:s})=>({posts:await(await s("/api/posts.json")).json()}),e=Object.freeze(Object.defineProperty({__proto__:null,load:o},Symbol.toStringTag,{value:"Module"}));export{e as _,o as l};
