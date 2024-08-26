"use client";
import React, { useState } from "react";

interface Todo {
	id: number;
	text: string;
	completed: boolean;
}

const TodoPage: React.FC = () => {
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
		<div className="max-w-md mx-auto mt-10 bg-white p-5 rounded ">
			<h1 className="text-2xl font-bold text-center mb-4">To-Do List</h1>
			<div className="flex mb-4">
				<input
					type="text"
					value={newTodo}
					onChange={(e) => setNewTodo(e.target.value)}
					onKeyDown={handleKeyDown}
					className="border border-gray-300 p-2 flex-grow mr-2 rounded"
					placeholder="Add a new task"
				/>
				<button
					onClick={addTodo}
					className="bg-blue-500 text-white px-4 py-2 rounded"
				>
					Add
				</button>
			</div>
			<ul>
				{todos.map((todo) => (
					<li
						key={todo.id}
						className={`flex justify-between items-center p-2 mb-2 border ${
							todo.completed ? "bg-green-100 line-through" : "bg-white"
						} rounded`}
					>
						<span onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
						<button
							onClick={() => deleteTodo(todo.id)}
							className="text-red-500"
						>
							Delete
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default TodoPage;
