// bài 1
function getFirstLast(array) {
    const [first, ...rest] = array;
    const last = array.slice(-1);
    return [first, last];
}
const array = [1, 2, 3, 4];
// console.log(getFirstLast(array));
// bai 2
function getUserInfo(user) {
    const {
        personalInfo: {
            name,
            contact: { email }
        }
    } = user;

    return { name, email };
}

console.log(getUserInfo(user));

// { name: 'javascript', email: 'javascript@email.com' }
// bai 3
function delay(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

delay(2000).then(() => console.log("2 seconds passed"));
