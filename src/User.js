import { Book } from './Book.js';

// const addTo = function (friend) {
//   if (this.friends.includes(friend)) {
//     this.friends = this.friends.filter((user) => user !== friend);
//     friend.friends = friend.friends.filter((user) => user !== this);
//     return;
//   }
//   this.friends.push(friend);
//   friend.friends.push(this);
// };

// const likeTo = function (book) {
//   if (this.likes.includes(book)) {
//     this.likes = this.likes.filter((user) => user !== book);
//     book.likes = book.likes.filter((user) => user !== this);
//     return;
//   }
//   this.likes.push(book);
//   book.likes.push(this);
// };

/**
 * @param {string} name
 * @param {Date} date
 * @constructor
 * @property {string} name
 * @property {Date} date
 * @property {Book[]} myBooks
 * @property {User[]} friends
 * @property {Book[]} likes
 */
export function User(name, date) {
  this.name = name;
  this.date = date;
  this.myBooks = [];
  this.friends = [];
  this.likes = [];
  this.addToFriends = addMethods(this.friends);

  const addMethods = [
    {
      functionName: 'addToFriends',
      includesMass: 'friends',
      findValue: 'friend',
    },
    {
      functionName: 'likeBook',
      includesMass: 'likes',
      findValue: 'book',
    },
  ];

  addMethods.forEach(({ functionName, includesMass, findValue }) => {
    this.functionName = function (findValued) {
      if (this[includesMass].includes(findValue)) {
        this[includesMass] = this[includesMass].filter(
          (user) => user !== findValue
        );
        findValue[includesMass] = findValue[includesMass].filter(
          (user) => user !== this
        );
      }
      this[includesMass].push(findValue);
      findValue[includesMass].push(this);
    };
  });

  this.likeBook = addMethods(this.likes);

  this.removeFriend = addMethods(this.friends);

  this.unlikeBook = addMethods(this.likes);

  Object.defineProperty(this, 'friendsNames', {
    get() {
      return this.friends
        .map(({ name }) => {
          return `${name}`;
        })
        .join(', ');
    },
  });

  Object.defineProperty(this, 'likedBooks', {
    get() {
      return this.likes
        .map(({ title }) => {
          return `${title}`;
        })
        .join(', ');
    },
  });

  Object.defineProperty(this, 'publishedBooks', {
    get() {
      return this.myBooks
        .map(({ title }) => {
          return `${title}`;
        })
        .join(', ');
    },
  });
}
