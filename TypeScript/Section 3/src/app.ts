class User {
  username: string;
  pwd: string;

  constructor(name: string, pwd: string) {
    this.username = name;
    this.pwd = pwd;
  }

  describe(this: User) {
    console.log("User " + this.username);
  }
}

const me = new User("AymenHa", "123");
me.describe();
