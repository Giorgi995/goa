class User{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}
export function getusername(user){
    console.log(user.name)
}
export function getuserage(user){
    console.log(user.age)
}
export default User;