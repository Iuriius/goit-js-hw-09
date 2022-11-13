(Math.random(),void setTimeout((()=>{isSuccess?resolve("success value"):reject("error")}),2e3)).then((({position:e,delay:o})=>{console.log(`✅ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{console.log(`❌ Rejected promise ${e} in ${o}ms`)}));
//# sourceMappingURL=03-promises.b50e801b.js.map
