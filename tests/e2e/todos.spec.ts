import { test, expect } from "@playwright/test";

test("should add and delete a todo", async ({ page }) => {
	// サーバーの起動確認を追加
	await page.waitForFunction(
		() =>
			fetch("http://localhost:3000/todos")
				.then((res) => res.ok)
				.catch(() => false),
		{ timeout: 30000 }
	);

	// アプリケーションのURLに移動
	await page.goto("http://localhost:3000/todos");

	// 新しいタスクを入力
	const newTodoText = "新しいタスク";
	await page.fill('input[placeholder="Add a new task"]', newTodoText);

	// 少し待機
	await page.waitForTimeout(1000);

	// "Add" ボタンをクリック
	await page.click('button:has-text("Add")');

	// 少し待機
	await page.waitForTimeout(1000);

	// 新しいタスクがリストに追加されたことを確認
	const todoItem = page.locator("li", { hasText: newTodoText });
	await expect(todoItem).toBeVisible();

	// 少し待機
	await page.waitForTimeout(1000);

	// タスクの削除ボタンをクリック
	await todoItem.locator('button:has-text("Delete")').click();

	// 少し待機
	await page.waitForTimeout(1000);

	// タスクがリストから削除されたことを確認
	await expect(todoItem).not.toBeVisible();
});
