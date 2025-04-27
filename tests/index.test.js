
const axios = require('axios');
function sum(a, b) {
    return a + b;
}

const Backend_Url ="http://localhost:3000";

// describe("Authentication", ()=>{
//     test ('User is able to signup',async ()=>{
//         const username = "Dru"+Math.random();
//         const password = "123456";
//         const response = await axios.post(`${Backend_Url}/api/v1/signup`,{username,password,type:"admin"});
//         expect(response.statusCode).toBe(200);
//     });

//     test ('User is not able to signup when username is null',async ()=>{
//         const username = "Dru"+Math.random();
//         const password = "123456";
//         const response = await axios.post(`${Backend_Url}/api/v1/signup`,{password});
//         expect(response.statusCode).toBe(400);
//     })
//     test ('signup successful if both username and password are correct',async ()=>{
//         const username = "Dru"+Math.random();
//         const password = "123456";
//         const response = await axios.post(`${Backend_Url}/api/v1/signup`,{username,password,type:"admin"});
//         expect(response.statusCode).toBe(200);
//         expect(response.body.token).toBeDefined
//     });
    // test('Signin fails if the username and password are incorrect', async() => {
    //     const username = `kirat-${Math.random()}`
    //     const password = "123456"

    //     await axios.post(`${BACKEND_URL}/api/v1/signup`, {
    //         username,
    //         password,
    //         role: "admin"
    //     });

    //     const response = await axios.post(`${BACKEND_URL}/api/v1/signin`, {
    //         username: "WrongUsername",
    //         password
    //     })

    //     expect(response.status).toBe(403)
    // })
// });

describe("User information endpoints", () => {
    let token = "";
    beforeAll(async () => {
        const username = "Dru"+Math.random();
        const password = "123456";

        await axios.post(`${Backend_Url}/api/v1/signup`,{
            username,
            password,
            type:"admin"
        });

        const response = await axios.post(`${Backend_Url}/api/v1/signup`,{
            username,
            password,
            type:"admin"
        });
        token = response.body.token;
        expect(response.statusCode).toBe(200);
    })
    test('test 1',()=>{
        expect(1).toBe(1);
    })
    test('test 2',()=>{
        expect(1).toBe(1);
    })
    test('test 3',()=>{
        expect(1).toBe(1);
    })
});