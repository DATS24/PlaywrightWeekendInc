import {test, expect} from '@playwright/test'

test('Get By Username API', async({page})=>{
    const response = await page.request.get('https://petstore.swagger.io/v2/user/', {
        data: {
            "username": "user2"
        }
    });
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    console.log(responseBody);
    expect(responseBody).toEqual({
        id: 4294967694,
        username: "user2",
        firstName: "string",
        lastName: "string",
        email: "string",
        password: "string",
        phone: "string",
        userStatus: 0
    });      
})