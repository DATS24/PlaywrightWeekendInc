import {test, expect} from '@playwright/test'

test('Update User API', async({page})=>{
    const response = await page.request.put('https://petstore.swagger.io/v2/user/user1', {
        data: {
            "id": 0,
            "username": "string",
            "firstName": "string",
            "lastName": "string",
            "email": "string",
            "password": "string",
            "phone": "string",
            "userStatus": 0
        }
    });
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    console.log(responseBody);
    expect(responseBody).toEqual({
        code: 200,
        type: "unknown",
        message: "4294967781"
    });      
})