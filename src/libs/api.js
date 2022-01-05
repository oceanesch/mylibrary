// const url = 'https://mylibrary-f5f0a-default-rtdb.firebaseio.com/books.json';

// export async function getBooks() {
//     const httpResponse = await fetch(url);

//     const parseResponse = await httpResponse.json();

//     return parseResponse;
// }

// export async function addNewBook(newBook) {
//     const httpResponse = await fetch(url, {
//         method: 'POST',
//         body: JSON.stringify(newBook),
//         headers: { 'Content-Type': 'application/json' },
//     });

//     const parseResponse = await httpResponse.json();
//     console.log(parseResponse);
// }

// export async function deleteBook(bookID) {
//     const httpResponse = await fetch(
//         `https://mylibrary-f5f0a-default-rtdb.firebaseio.com/books/${bookID}.json`,
//         {
//             method: 'DELETE',
//             headers: { 'Content-type': 'application/json' },
//         }
//     );

//     console.log(httpResponse);
// }

// import database from '../api/firebaseConfig/firebaseConfig';
// import { ref, onValue } from 'firebase/database';

// export async function addNewBook(newBook) {}

// export function getBooks() {
//     const shelfRef = ref(database, 'shelves/shelf1');
//     shelfRef.
//     onValue(shelfRef, (snapshot) => {
//         const data = snapshot.val();
//         return data;
//     });
// }
