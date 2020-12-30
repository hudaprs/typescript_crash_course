// Usually you doing this
// const makeTodo = (todo: { title: string; text: string }) => {
//   return `${todo.title} ${todo.text}`
// }

// const todo = {
//   title: 'Learn',
//   text: 'Learning TypeScript'
// }

// makeTodo(todo)

/** Dont do method above, use below method */
interface TodoInterface {
  title: string
  text: string
}

const makeTodo = (todo: TodoInterface) => {
  return `${todo.title} ${todo.text}`
}

const todo = {
  text: 'Learn',
  title: 'Learning TypeScript better way'
}

makeTodo(todo)
