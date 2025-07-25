function fetchPostData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("post data fetched");
    }, 2000);
  });
}
function fetchCommentData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("comment data fetched");
    }, 3000);
  });
}
async function getBlogData() {
  try {
    console.log("Fetching blog data");
    // const blogData = await fetchPostData();
    // const commentData = await fetchCommentData();

    const [postData, commentData] = await Promise.all([
      fetchPostData(),
      fetchCommentData(),
    ]);
    console.log(postData);
    console.log(commentData);

    console.log("fetch complete");
  } catch (error) {
    console.error("error fetching blog data", error);
  }
}

getBlogData();
