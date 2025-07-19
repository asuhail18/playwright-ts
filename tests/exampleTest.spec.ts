import {test, expect} from "@playwright/test"


test.beforeEach(async ({page}) => {
    await page.goto('http://localhost:4300/')
    await page.getByText('Forms').click()
    await page.getByText('Form Layouts').click()
})

test('Fill Inline form', async ({page}) => {
await page.locator('nb-card').filter({hasText: "Inline form"}).getByRole('textbox', {name: "Jane Doe"}).fill('Abdulla')
await page.locator('nb-card').filter({hasText: "Inline form"}).getByRole('textbox', {name: "Email"}).fill('Abdulla@test.com')

})


test('Fill Using the grid form', async ({page}) => {
test.step('Fill in the email and password fields', async () => {
const emailField = page.locator('nb-card').filter({hasText: "Using the Grid"}).getByRole('textbox', {name: "Email"})    
await emailField.fill('Abdulla')
await page.locator('nb-card').filter({hasText: "Using the Grid"}).getByRole('textbox', {name: "Password"}).fill('Abdulla@test.com')
await page.locator('nb-card nb-radio').filter({hasText : "Option 2"}).click()
await page.locator('nb-card').filter({hasText: "Using the Grid"}).getByRole('button', {name: 'Sign in'}).click()
expect(emailField).toHaveValue('Abdulla')
})})

test('To fill in Block form', async({page}) => {
    await page.locator('nb-card').filter({hasText: "Block form"}).getByRole('textbox', {name: "Website"}).fill('https://example.com')

})