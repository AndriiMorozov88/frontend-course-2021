const listOfPosts = document.body.querySelector('[data-main-box]');
const postFilter = document.body.querySelector('[data-filter]');
// const postSort = document.body.querySelector('[data-sort]');

const hideLoader = () => {
    document.querySelector('.loader_inner').classList.add('hide');
    document.querySelector('.loader').classList.add('hide');
};

const addPost = (title, text) => {
    const newEl = document.createElement('li');
    const newElCloseBtn = document.createElement('div');
    const newElCloseBtnLink = document.createElement('a');
    const newElCloseBtnImg = document.createElement('img');
    const newElTitle = document.createElement('h2');
    const newElText = document.createElement('p');
    newEl.classList.add('post-list__item');
    newElTitle.classList.add('post-list__item-title');
    newElText.classList.add('post-list__item-text');
    newElCloseBtn.classList.add('trash-bnt');
    newElCloseBtnLink.classList.add('trash-btn__link');
    newElCloseBtnImg.classList.add('trash-btn__icon');
    newElCloseBtnLink.href = '#';
    newElCloseBtnImg.src = 'Trash-Icon.png';
    newElCloseBtnImg.alt = 'Trash';
    newElCloseBtnImg.width = 66;
    newElCloseBtnImg.height = 42;
    newElText.textContent = text;
    newElTitle.textContent = title;
    newElCloseBtn.append(newElCloseBtnLink);
    newElCloseBtnLink.append(newElCloseBtnImg);
    newEl.append(newElTitle, newElText, newElCloseBtn);
    listOfPosts.append(newEl);
};

const filterPosts = (post) => {
    if (postFilter.value === '') {
        return true;
    } return !!post.title.includes(postFilter.value);
};

setTimeout(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => {
            json
                .filter((post) => filterPosts(post))
                // .sort((post) => addPost(post.title, post.body))
                .map((post) => addPost(post.title, post.body));
        })
        .then(hideLoader);
}, 3000);
