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
  //Create posts on memory (Array/Object)
  createPost(data, htmlOnly = false) {
    if(!htmlOnly) {
        //Create post on html
        miniSocialMedia.posts.push({
            id: miniSocialMedia.posts.length + 1,
            owner: data.owner,
            content: data.content,
          });
    }
    const $postList = document.querySelector(".post-list");

    $postList.insertAdjacentHTML("afterbegin", `<li> ${data.content} </li>`);
  },
};

const $myForm = document.querySelector(".page-form");

//CRUD: [READ]
miniSocialMedia.posts.forEach(({owner, content}) => {
    miniSocialMedia.createPost({
        owner: owner,
        content: content,
      }, true);
});

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
