const receivesAFunction = function(cb){
    return cb();
};
const returnsANamedFunction = function(){
    const namedFunction = ()=>0;
    return namedFunction;
}
const returnsAnAnonymousFunction = function(){
    return ()=>{return 0};
}