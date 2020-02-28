import { User } from './models/User';

// const user = new User({ name: "New record", age: 1 })

// user.fetch();
// user.set({ name: 'Romeo', age: 25 })
// user.save();

const updateUser = new User({ id: 6 });
updateUser.set({ name: 'Savage 21', age: 20000});

updateUser.save();

console.log(updateUser)