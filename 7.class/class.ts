interface UserInterface {
  name: string
  email: string
  age: number

  createUser()
}

class User implements UserInterface {
  name: string
  email: string
  age: number

  constructor(name: string, email: string, age: number) {
    this.name = name
    this.email = email
    this.age = age
  }

  createUser() {
    console.log(`${this.name} created`)
  }
}

let user = new User('Huda Prasetyo', 'real.hudaprasetyo@gmail.com', 18)

console.log(user)
