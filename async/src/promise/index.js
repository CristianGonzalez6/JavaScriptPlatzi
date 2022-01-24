const somethingWillHappen = () => {
    return new Promise ((res, rej) => {
        true ? res('Hey!') : rej('Whoops!');
    })
}

somethingWillHappen()
.then((res) => console.log(res))
.catch((err) => console.log(err));

const somethingWillHappen2 = () => {
    return new Promise ((res, rej) => {
        true ? setTimeout(() => res('True'), 2000) : rej(new Error('Whoops!'));
    })
}

somethingWillHappen2()
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then((res) => console.log('Array of results', res))
    .catch((err) => console.log(err));