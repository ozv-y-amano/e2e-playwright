import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
	// サーバーの起動確認を追加
	await page.waitForFunction(
		() =>
			fetch("http://localhost:3000/todos")
				.then((res) => res.ok)
				.catch(() => false),
		{ timeout: 30000 }
	);

	await page.goto("http://localhost:3000/todos");
	await page.getByPlaceholder("Add a new task").click();
	await page.getByPlaceholder("Add a new task").fill("新しいタスク");
	await page.getByPlaceholder("Add a new task").press("Enter");
	await page.getByRole("button", { name: "Delete" }).click();
	await expect(
		page.locator("li", { hasText: "新しいタスク" })
	).not.toBeVisible();
});
