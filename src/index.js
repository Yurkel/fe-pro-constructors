import { User } from './User.js';
import { Book } from './Book.js';
import { Author } from './Author.js';

const one = new User('one', new Date());
const jonny = new Author('Jonny', new Date(1944, 1, 1));
const billy = new Author('Billy', new Date(1944, 1, 1));
const authors = [jonny, billy];
const firstBook = new Book('first', new Date(), one, authors);
const newUser = new User('Mike', new Date(2020, 1, 1));
one.addToFriends(newUser);
one.likeBook(firstBook);

// one.removeFriend(newUser);
// one.unlikeBook(firstBook);

console.log(one);
console.log(firstBook);
console.log(newUser);
