export async function signUp(signUpData) {
    const response = await fetch(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDe2VlLrzxhf8f_PW46fjEuMfYRy6yDvSY',
        {
            method: 'POST',
            body: JSON.stringify(signUpData),
            headers: {
                'Content-Type': 'application/json',
            },
        }
    );
    const responseData = await response.json();
}