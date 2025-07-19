import {test, expect} from '@playwright/test';

test.beforeEach(async({page}) => {
 await page.goto('http://localhost:4300/')
 await page.getByText('Forms').click()
 await page.getByText('Form Layouts').click()
})

test.describe('Launch app url and go to a particular page', () => {
test('Launch app url and go to form layouts', async ({page}) => {
    await page.getByText('Form Layouts').click()
})

test('Launch app url and go to data picker', async ({page}) => {
    await page.getByText('Datepicker').click()
})

})

test('fetching locators', async ({page}) => {
   await page.locator('#inputEmail1').fill('abdullasuhail@gmail.com')
})

test('To fill in basic form', async ({page}) => {

await page.locator('nb-card').filter({hasText: 'Basic form'}).getByRole('textbox', {name: "Email"}).fill('test@test.com')
await page.locator('nb-card').filter({hasText: 'Basic form'}).getByRole('textbox', {name: "Password"}).fill('Welcome123')
await page.locator('nb-card').filter({hasText: 'Basic form'}).getByText('Check me out').click()
await page.locator('nb-card').filter({hasText: 'Basic form'}).getByRole('button', {name: 'Submit'}).click()

expect(page.locator('nb-card').filter({hasText: 'Basic form'}).getByRole('textbox', {name: "Email"})).toHaveValue('test@test.com')

})

test('To fill in Using the Grid form', async ({page}) => {

await page.locator('input#inputEmail1').fill('test@test.com')
await page.locator('input#inputPassword2').fill('Welcome123')
await page.locator('nb-card').locator('nb-radio :text-is("Option 1")').click()
await page.locator('nb-card').filter({hasText: 'Using the Grid'}).getByRole('button', {name: 'Sign in'}).click()

expect(page.locator('nb-card').filter({hasText: 'Using the Grid'}).getByRole('textbox', {name: "Email"})).toHaveValue('test@test.com')

})


test('To get the content of a text ', async ({page}) => {

const buttonText = await page.locator('nb-card').filter({hasText: 'Form without labels'}).getByRole('button', {name: 'Send'}).textContent()

expect(buttonText).toEqual('Send')

})

test('To get the content of all text ', async ({page}) => {

const allTextValues = await page.locator('nb-card nb-radio').allTextContents()

expect(allTextValues).toContain('Option 1')

})

test('To get the content of input values ', async ({page}) => {

await page.locator('nb-card').filter({hasText: 'Form without Labels'}).getByRole('textbox', {name: 'Recipients'}).fill('abdullasuhail')
const receipientsText = await page.locator('nb-card').filter({hasText: 'Form without Labels'}).getByRole('textbox', {name: 'Recipients'}).inputValue()

expect(receipientsText).toContain('abdullasuhail')

})

test('To get value of an attribute ', async ({page}) => {
    
const attributeValue = await page.locator('nb-card').filter({hasText: 'Form without Labels'}).getByRole('textbox', {name: 'Recipients'}).getAttribute('placeholder')

expect(attributeValue).toContain('Recipients')

})


test('Generic assertions ', async ({page}) => {
    
const value = 5
expect(value).toEqual(5)

})

test('Locator assertions ', async ({page}) => {
    
const buttonText = page.locator('nb-card').filter({hasText: 'Form without labels'}).getByRole('button', {name: 'Send'})
await expect(buttonText).toHaveText('Send')

})

test('soft assertions ', async ({page}) => {
    
const buttonText = page.locator('nb-card').filter({hasText: 'Form without labels'}).getByRole('button', {name: 'Send'})
await expect.soft(buttonText).toHaveText('Send1')
await buttonText.click()
console.log('This is a soft assertion, the test will not fail even if the assertion fails')

})




