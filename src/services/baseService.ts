import * as fs from "fs";

const userJsonPath = "./src/data/users.json";

export function getUsers() {
    const userJson = JSON.parse(fs.readFileSync(userJsonPath).toString());

    return userJson.users;
}

export function hello(receivedData : any) {
    console.log('Data received:', receivedData);
    return 'Received data: ' + receivedData;
}

export function addUser(name: string, email: string) {
    const userJson = JSON.parse(fs.readFileSync(userJsonPath).toString());

    const newUser = {
        name,
        email
    };

    fs.writeFileSync(userJsonPath, JSON.stringify({
        users: [...userJson.users, newUser]
    }));

    return newUser;
}