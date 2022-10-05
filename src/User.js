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

// const addTo = function (item) {
//   if (this[arrName].includes(item)) {
//     this[arrName] = this[arrName].filter((elem) => elem !== item);
//     item[itemArrName] = item[itemArrName].filter((elem) => elem !== this);
//     return;
//   }
//   this[arrName].push(item);
//   item[itemArrName].push(this);
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

  const addMethods = [
    {
      functionName: 'addToFriends',
      arrName: 'friends',
      itemArrName: 'friends',
    },
    {
      functionName: 'likeBook',
      arrName: 'likes',
      itemArrName: 'likedUsers',
    },
    {
      functionName: 'removeFriend',
      arrName: 'friends',
      itemArrName: 'friends',
    },
    {
      functionName: 'unlikeBook',
      arrName: 'likes',
      itemArrName: 'likedUsers',
    },
  ];

  addMethods.forEach(({ functionName, arrName, itemArrName }) => {
    this[functionName] = function (item) {
      if (this[arrName].includes(item)) {
        this[arrName] = this[arrName].filter((elem) => elem !== item);
        item[itemArrName] = item[itemArrName].filter((elem) => elem !== this);
        return;
      }
      this[arrName].push(item);
      item[itemArrName].push(this);
    };
  });

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
