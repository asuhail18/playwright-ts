import {test, expect} from "@playwright/test"


test.beforeEach(async ({page}) => {
    await page.goto('http://localhost:4300/')
    await page.getByText('Modal & Overlays').click()
    
})

test('checkboxes tests', async ({page}) => {
    await page.getByText('Toastr').click()
    await page.getByRole('checkbox', {name: "Hide on click"}).check({force: true})
    await expect( page.getByRole('checkbox', {name: "Hide on click"})).toBeChecked()

    const allboxes = page.getByRole("checkbox")
    for(const box of await allboxes.all()){
        await box.uncheck({force: true})
        expect(await box.isChecked()).toBeFalsy()
    }
})

test('tooltips tests', async ({page}) => {
await page.getByText('Tooltip').click()
const tooltipcard =  page.locator('nb-card', {hasText: "Tooltip Placements"});
tooltipcard.getByRole('button', {name: "Top"}).hover()
const tooltipText = await page.locator('nb-tooltip').textContent()
expect(tooltipText).toEqual('This is a tooltip')
})


test('Webtables tests 1', async ({page}) => {
await page.getByText('Tooltip').click()
const tooltipcard =  page.locator('nb-card', {hasText: "Tooltip Placements"});
tooltipcard.getByRole('button', {name: "Top"}).hover()
const tooltipText = await page.locator('nb-tooltip').textContent()
expect(tooltipText).toEqual('This is a tooltip')
})