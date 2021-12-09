const url = 'https://mylibrary-f5f0a-default-rtdb.firebaseio.com/books.json';

// export async function signUp(signUpData) {
//     const response = await fetch(
//         'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDe2VlLrzxhf8f_PW46fjEuMfYRy6yDvSY',
//         {
//             method: 'POST',
//             body: JSON.stringify(signUpData),
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         }
//     );
//     const responseData = await response.json();
// }

export async function getBooks() {
    const httpResponse = await fetch(url);

    const parseResponse = await httpResponse.json();

    return parseResponse;
}

export async function addNewBook(newBook) {
    const httpResponse = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(newBook),
        headers: { 'Content-Type': 'application/json' },
    });

    const parseResponse = await httpResponse.json();
    console.log(parseResponse);
}

export async function deleteBook(bookID) {
    const httpResponse = await fetch(
        `https://mylibrary-f5f0a-default-rtdb.firebaseio.com/books/${bookID}.json`,
        {
            method: 'DELETE',
            headers: { 'Content-type': 'application/json' },
        }
    );

    console.log(httpResponse);
}
