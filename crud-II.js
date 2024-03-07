// Our database:

const miniSocialMedia = {
  users: [
    {
      username: "kaynan45",
    },
  ],
  posts: [
    {
      id: 1,
      owner: "kaynan45",
      content: "My first tweet",
    },
  ],

  loadPosts() {
    miniSocialMedia.posts.forEach(({ owner, content }) => {
      miniSocialMedia.createPost({ owner: owner, content: content }, true);
    });
  },

  //Create posts on memory (Array/Object)
  createPost(data, htmlOnly = false) {
    if (!htmlOnly) {
      miniSocialMedia.posts.push({
        id: miniSocialMedia.posts.length + 1,
        owner: data.owner,
        content: data.content,
      });
    }
    //Create post on html
    const $postList = document.querySelector(".post-list");
    $postList.insertAdjacentHTML(
      "afterbegin",
      `<li> ${data.content} <button class="js-delete-button" data-post-id>Delete</button> </li>`
    );
  },
};

const $myForm = document.querySelector(".page-form");

//CRUD: [READ]
miniSocialMedia.loadPosts();
//CRUD: [CREATE]
$myForm.addEventListener(
  "submit",
  function createNewPostController(eventInfos) {
    eventInfos.preventDefault();
    const $postInput = document.querySelector(".post-input");

    miniSocialMedia.createPost({
      owner: "kaynan45",
      content: $postInput.value,
    });
    $postInput.value = "";
    console.log(miniSocialMedia.posts);
  }
);

//CRUD: [DELETE]

//This function removes the html (li) element by clicking the respective delete button. eventInfos.target is the local of the page that is been clicked (because de addEventListener 'click'), and 
//eventInfos.target.classList.contains('js-delete-button') is checking if this element have the class: js-delete-button. By using this const = actualElement we don't need to create an data-postId for example or use an addEventListenerAll.
document.querySelector(".post-list").addEventListener('click', (eventInfos) => {

  const actualElement = eventInfos.target;
  const deleteBtnClicked = eventInfos.target.classList.contains('js-delete-button');

  if(deleteBtnClicked) {
    actualElement.parentNode.remove();
  }
});
