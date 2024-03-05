const $myForm = document.querySelector('.page-form');

$myForm.addEventListener('submit', function createNewPostController (eventInfos) {
    eventInfos.preventDefault();
    const $postInput = document.querySelector(".post-input");
    const $postList = document.querySelector(".post-list");

    $postList.insertAdjacentHTML('afterbegin', `<li> ${$postInput.value} </li>`);
    $postInput.value = '';
});

