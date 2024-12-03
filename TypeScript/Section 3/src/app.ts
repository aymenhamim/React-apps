class User {
  username: string;
  pwd: string;

  constructor(name: string, pwd: string) {
    this.username = name;
    this.pwd = pwd;
  }
}

console.log(new User("AymenHa", "123"));
