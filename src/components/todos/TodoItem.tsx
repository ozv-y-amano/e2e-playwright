"use client";

type Todo = {
	id: number;
	text: string;
	completed: boolean;
};

type TodoItemProps = {
	todo: Todo;
	toggleTodo: (id: number) => void;
	deleteTodo: (id: number) => void;
};

const TodoItem = ({ todo, toggleTodo, deleteTodo }: TodoItemProps) => {
	return (
		<li
			className={`flex justify-between items-center p-2 mb-2 border ${
				todo.completed ? "bg-green-100 line-through" : "bg-white"
			} rounded`}
		>
			<span onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
			<button onClick={() => deleteTodo(todo.id)} className="text-red-500">
				Delete
			</button>
		</li>
	);
};

export default TodoItem;
