interface User {
    name: string;
    age: number;
    id: number;
}
const user: User = {
    name: 'John',
    age: 30,
    id: 1
}
function updateUser(user: User, age: number, id:number) {
    user.age = age;
    user.id = id;
}
function createUser(name: string, age: number, id: any): User {
    return { name: name, age: age, id: id };
}
const Alex = createUser('Alex', 30, "vailonaz");
   