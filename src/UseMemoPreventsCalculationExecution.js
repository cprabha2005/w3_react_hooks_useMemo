import { useState , useMemo } from 'react'
function UseMemoPreventsCalculationExecution(){
    const [todos,setTodos]=useState([]);
    const [count,setCount]=useState(0);

    const increment = ()=>{setCount(c=>c+1)};
    const addTodo = ()=>{setTodos((todo)=>[...todo,"New Todo"])};
    const expensiveCalculation = (count)=>{
        console.log("Calculating ....");
        for(var i=0;i<100000000;i++){
            count+=i;
        }
        return count;
    }
    const calc = useMemo(()=>expensiveCalculation(count),[count]);
    return(
        <>
            {todos.map((todo,index)=>{return <p key={index}>{todo}</p>})}
            <button type="button" onClick={addTodo}>Add Todo</button>
            <p>{count}</p>
            <button type="button" onClick={increment}>Click to increment</button>
            <p>Expensive Calculation : {calc}</p>
        </>
    );
}
export default UseMemoPreventsCalculationExecution