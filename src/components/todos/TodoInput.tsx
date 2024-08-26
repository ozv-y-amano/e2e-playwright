"use client";

type TodoInputProps = {
	newTodo: string;
	setNewTodo: (value: string) => void;
	handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
	addTodo: () => void;
};

const TodoInput = ({
	newTodo,
	setNewTodo,
	handleKeyDown,
	addTodo,
}: TodoInputProps) => {
	return (
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
	);
};

export default TodoInput;
