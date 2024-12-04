import { useEffect, useState } from 'react'
import React from 'react'
import './App.css'
// import { useFetch} from './hooks/useFetch'
// import { usePrev } from './hooks/usePrev';
import { useRef } from 'react';


function useDebounce(originalFn){
    const currentClock = useRef();


    const fn = ()=> {
      clearTimeout(currentClock.current);
      currentClock.current=setTimeout(originalFn, 2000);

    }
     return fn;
}

function App (){
   function sendDataToBackend(){
     console.log("data send to backend");
   }
 const debouncedFn = useDebounce(sendDataToBackend);



  return (
    <>
    <input type="text" onChange={debouncedFn} />
    
    
    
    </>
  );


}












// function App(){
//   const[state,setState] = useState(0);
//   const prev = usePrev(state);



//   function increaseCount(){
//     setState(state=>state+1);

//   }



//   return(
//   <>
//   <p> {state}</p> 
//   <button onClick={increaseCount}> Click</button>
//   <p> The Previous value was {prev}</p>
  
  
//   </>
//   )



// }











 
//  function App() {
//   const[currentPost, setCurrentPost] = useState(1);
   
//   const { finalData,loading } = useFetch('https://jsonplaceholder.typicode.com/posts/'+ currentPost)
//   if (loading){
//     return 
//     <div>
//       Loading...
//     </div>
//   }
//  return (
//      <div>
//       <button onClick={()=> setCurrentPost(1)}>1</button>
//       <button onClick={()=> setCurrentPost(2)}>2</button>
//       <button onClick={()=> setCurrentPost(3)}>3</button>
    
//        {JSON.stringify(finalData)}
//      </div>
//    )

 
// }

export default App
