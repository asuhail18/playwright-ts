import {test, expect} from '@playwright/test';

test.beforeEach(async ({page}) => {
    await page.goto('http://localhost:4300/');
    await page.getByText('Forms').click();
    await page.getByText('Form Layouts').click();
})

test('Fill using the grid form', async ({page}) => {
    const emailField = page.locator('nb-card').filter({hasText: "Using the Grid"}).getByRole('textbox', {name:"Email"})
    await emailField.fill('Abdulla');
    await emailField.clear()
    await page.locator('nb-card').filter({hasText: "Using the Grid"}).getByRole('textbox', {name:"Email"}).pressSequentially('Abdulla', {delay:500});
    await expect(emailField).toHaveValue('Abdulla');
})

test('Radio buttons test', async ({page}) => {
    const radioButton = page.locator('nb-card').filter({hasText: "Using the Grid"})
    await radioButton.getByRole('radio', {name:"Option 2"}).check({force: true});
    expect(radioButton.getByRole('radio', {name:"Option 2"})).toBeTruthy()

   const radio2 = await radioButton.getByRole('radio', {name:"Option 1"}).isChecked()
    expect(radio2).toBeFalsy()
})