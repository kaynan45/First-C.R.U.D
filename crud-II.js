// Our database:

const miniSocialMedia = {
  users: [
    {
      username: "kaynan45",
    },
  ],
  posts: [
    {
      id: Date.now(),
      owner: "kaynan45",
      content: "My first tweet",
    },
  ],

  loadPosts() {
    miniSocialMedia.posts.forEach(({id, owner, content }) => {
      miniSocialMedia.createPost({id, owner: owner, content: content }, true);
    });
  },

  //Create posts on memory (Array/Object)
  createPost(data, htmlOnly = false) {
    const insideId = Date.now();
    if (!htmlOnly) {
      miniSocialMedia.posts.push({
        id: data.id || insideId,
        owner: data.owner,
        content: data.content,
      });
    }
    //Create post on html
    const $postList = document.querySelector(".post-list");
    $postList.insertAdjacentHTML(
      "afterbegin",
  `<li data-id="${insideId}"> 
    ${data.content}
    <button class="js-delete-button">Delete</button> 
  </li>`
    );
  },
  postDelete(id) {
    UpdatedPostsList = miniSocialMedia.posts.filter((actualPost) => {
      return actualPost.id !== Number(id);
    });
    miniSocialMedia.posts = UpdatedPostsList;
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
document.querySelector(".post-list").addEventListener("click", (eventInfos) => {
  const actualElement = eventInfos.target;
  const deleteBtnClicked =
    eventInfos.target.classList.contains("js-delete-button");

  if (deleteBtnClicked) {
    const id = actualElement.parentNode.getAttribute("data-id");
   
   //manipulate the ServerSide/DataBase/File/Font.
    miniSocialMedia.postDelete(id);
    //manipulate the View/OutPut and etc.
    actualElement.parentNode.remove();
  }
  console.log(miniSocialMedia.posts);
});
