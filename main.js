const solution = (str, ending) => str.slice(- ending.length) === ending || ending === '' ? true : false;



/* first attempt wwith comments
function solution(str, ending){
    //find length of ending
    let endLength = ending.length
    
    //if statement, str(?) === ending?
    if(str.slice(-endLength)===ending || ending === ''){
      return true
    }else{
      return false
    }
}


function solution(str, ending){
  return str.endsWith(ending);
}
*/
