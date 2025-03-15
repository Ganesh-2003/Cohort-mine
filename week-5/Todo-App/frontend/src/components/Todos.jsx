
/*todos = [
    {
        title: "Go to Gym",
        description: "Task is to go to the gym"
    }
]*/

export function Todos({todos}) {

    return <div>
        {
            todos.map(function(todo){
                return <div>
                    <h1>{ todo.title }</h1>
                    <h2>{ todo.description }</h2>
                    <button>{ todo.completed == true? "Completed" : "Mark as Completed" }</button>
                </div>
            })
        }
    </div>

    /*return <div>
        <h1> Go to Gym </h1>
        <h2> You need to go to the Gym </h2>
        <button>Mark As Completed</button>
    </div>*/
}