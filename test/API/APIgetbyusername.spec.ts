import {test, expect} from '@playwright/test'

test('Get By Username API', async({page})=>{
    const response = await page.request.get('https://petstore.swagger.io/v2/user/', {
        data: {
            "username": "user1"
        }
    });
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    console.log(responseBody);
    expect(responseBody).toEqual({
        id: 0,
        username: "user1",
        firstName: "string",
        lastName: "string",
        email: "string",
        password: "string",
        phone: "string",
        userStatus: 0
    });      
})