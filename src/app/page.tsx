"use client";
import { useState } from "react";
import TodoItem from "@/components/todo/TodoItem";
import TodoInput from "@/components/todo/TodoInput";

type Todo = {
	id: number;
	text: string;
	completed: boolean;
};

const TodoPage = () => {
	const [todos, setTodos] = useState<Todo[]>([]);
	const [newTodo, setNewTodo] = useState("");

	const addTodo = () => {
		if (newTodo.trim() === "") return;

		const newTask: Todo = {
			id: Date.now(),
			text: newTodo,
			completed: false,
		};

		setTodos([...todos, newTask]);
		setNewTodo("");
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			addTodo();
		}
	};

	const toggleTodo = (id: number) => {
		setTodos(
			todos.map((todo) =>
				todo.id === id ? { ...todo, completed: !todo.completed } : todo
			)
		);
	};

	const deleteTodo = (id: number) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	return (
		<div className="max-w-md mx-auto mt-10 bg-white p-5 rounded">
			<h1 className="text-2xl font-bold text-center mb-4">To-Do List</h1>
			<TodoInput
				newTodo={newTodo}
				setNewTodo={setNewTodo}
				handleKeyDown={handleKeyDown}
				addTodo={addTodo}
			/>
			<ul>
				{todos.map((todo) => (
					<TodoItem
						key={todo.id}
						todo={todo}
						toggleTodo={toggleTodo}
						deleteTodo={deleteTodo}
					/>
				))}
			</ul>
		</div>
	);
};

export default TodoPage;
