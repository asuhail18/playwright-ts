import {test, expect} from '@playwright/test';

test.beforeEach(async ({page}) => {
    await page.goto('http://localhost:4300/');
    await page.getByText('Tables & Data').click();
    await page.getByText('Smart Table').click();

})

test('Webtables tests 1', async ({page}) => {
let age = "45";
const targetRow =  page.getByRole('row',{name: "mdo@gmail.com"})
await targetRow.locator('.nb-edit').click()
await targetRow.getByPlaceholder('Age').clear()
await targetRow.getByPlaceholder('Age').fill(age)
await targetRow.locator('.nb-checkmark').click()
const targetRowAge = await page.locator('.ng2-smart-row').locator('td').nth(6).textContent()
expect(targetRowAge).toEqual(age)
})

test('Webtables tests 2', async ({page}) => {
const targetPage2 = await page.locator('.ng2-smart-page-link', {hasText: '2'}).click()

})