//CRUD
const miniTwitter = {
  users: [
    {
      username: "kaynan45",
    },
  ],
  posts: [
    {
      owner: "kaynan45",
      content: "My first tweet",
    },
  ],
};
//create
function createPost(data) {
  miniTwitter.posts.push({
    owner: data.owner,
    content: data.content,
  });
}

createPost({ owner: "kaynan45", content: "My second tweet" });
console.log(miniTwitter.posts);
