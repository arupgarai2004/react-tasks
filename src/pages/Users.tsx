import { useEffect, useState } from "react";


/*
1 Prps: Props are used to pass data from one component to another. Like angular @Input() decorator. 
2. State: like angular Signal. State is used to manage data within a component. When the state changes, the component re-renders to reflect the new state.
3. List + Keya: loop to show data like @for  in angular. Key is used to uniquely identify each item in the list. It helps React to efficiently update and re-render the list when the data changes.
4 Conditional Rendering: Like @if in angular
5 UseEffect: Like angular lifecycle hooks. useEffect is used to perform side effects in a component. 
It runs after the component renders and can be used for tasks like data fetching, subscriptions, or manually changing the DOM.
*/

type UserProps = {
  name: string;
  age: number;
};

// Child Component
function User({ name, age }: UserProps) {
  return <h1>Hello {name}, you are {age}</h1>;
}


export default function Users() {

        const [count, setCount] = useState(0);
        //linke angular signal, useState is used to manage state in a functional component. 
        const increment = () => {
        setCount(count + 1);
        };
        const reset = () => {
        setCount(0);
        };


        useEffect(() => {
            document.title = `Count: ${count}`; 
        }, [count]);

        const users = [
            { id: 1, name: 'Arup', age: 45 },
            { id: 2, name: 'John', age: 35 },
            { id: 3, name: 'David', age: 10 },
        ];
    return (
            <div>
                {/* Props: Passing props from the parent component to the child component */}
            <User name="Arup" age={45} />

            {/* State: Using state in the parent component */}
            <h1>Count: {count}</h1>
            <button onClick={increment}>
                Increment
            </button>
            <button onClick={reset}>
                reset
            </button>

            {/* List + Key: Rendering a list of users using the map function and providing a unique key for each item */}
            {users.map((user) => (
                <p key={user.id}>
                {user.name} is {user.age} years old.
                {user.age >= 18 ? ' Adult' : ' Minor'} {/* Conditional rendering: Using a ternary operator.*/}
                </p>
            ))} 
            </div>
    );
     
}
