export function PostsNew() {
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <form>
        <p>
          {" "}
          <strong>Title</strong> <input type="text" />{" "}
        </p>
        <p>
          {" "}
          <strong>Body</strong> <input type="text" />{" "}
        </p>
        <p>
          {" "}
          <strong>Image</strong> <input type="file" />
        </p>
        <button>Submit</button>
      </form>
    </div>
  );
}
