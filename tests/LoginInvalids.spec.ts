import {test, expect} from '@playwright/test'

test.beforeEach(async ({ page }) => {
    await page.goto('https://katalon-demo-cura.herokuapp.com/')
    await page.locator("#btn-make-appointment").click()
})
test('Login with empty username', async({page})=>{
    await page.locator("#txt-password").fill("ThisIsNotAPassword")
    await page.locator("#btn-login").click()
    await expect.soft(page.locator(".text-danger")).toContainText("Login failed! Please ensure the username and password are valid")
})

test('Login with empty password', async({page})=>{
    await page.locator("#txt-username").fill("John Doe")
    await page.locator("#btn-login").click()
    await expect.soft(page.locator(".text-danger")).toContainText("Login failed! Please ensure the username and password are valid")
})

test('Login with empty username & password', async({page})=>{
    await page.locator("#btn-login").click()
    await expect.soft(page.locator(".text-danger")).toContainText("Login failed! Please ensure the username and password are valid")    
})

test('Login with invalid password', async({page})=>{
    await page.locator("#txt-username").fill("John Doe")
    await page.locator("#txt-password").fill("ThisIsAPassword")
    await page.locator("#btn-login").click()
    await expect.soft(page.locator(".text-danger")).toContainText("Login failed! Please ensure the username and password are valid")
})