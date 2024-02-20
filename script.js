//CRUD
const miniTwitter = {
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
};

//CREATE
function createPost(data) {
  miniTwitter.posts.push({
    id: miniTwitter.posts.length + 1,
    owner: data.owner,
    content: data.content,
  });
}

createPost({ owner: "kaynan45", content: "My second tweet" });
//console.log(miniTwitter.posts);

//READ
function takePosts() {
  return miniTwitter.posts;
}

console.log(takePosts());

//UPDATE
function updatePostContent(id, newContent) {
  const postToBeUpdated = takePosts().find((post) => {
    return post.id === id;
  });
  postToBeUpdated.content = newContent
}

updatePostContent(1, "New post content");
console.log(takePosts());
