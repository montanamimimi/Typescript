export interface Todo {
    userId: number
    id: number
    title: string
    completed: boolean
}

const allTodos: Map<number, Todo> = new Map<number, Todo>()

function instanceOfTodo(object: any): object is Todo {
    return object
}

function getNumber(list: Map<number, Todo>, num: number) {

    const myNum: Todo[] = []
    
    if ( num <= 0 ) {
        return 'You have no todos'
    } else {
        for (let i:number = 1; (i <= num) && (i <= list.size); i++) {
            const newItem = list.get(i)

            if (instanceOfTodo(newItem)){
                myNum.push(newItem)
            }
            
        }
    }  

    if (!myNum) {
        throw Error('Nothing there')
    }
    return myNum
}


export function getTodosByCount(counter:number) {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.text())
        .then<Todo[]>((responseText) => {
            return JSON.parse(responseText)
          })
        .then((responseArray) => {

            // Я так понимаю небыло задачи прочитать весь список из запроса, но хотелось потренироваться с Map()
            for (let i = 0; i < responseArray.length; i++) {
                allTodos.set(i+1, responseArray[i])
            }

            console.log('Our Todo list - ', getNumber(allTodos, counter))        
        })
}