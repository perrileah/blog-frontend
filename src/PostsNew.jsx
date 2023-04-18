import { useState } from "react";

export function PostsNew(props) {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    props.onCreatePost(params);
    event.target.reset();
  };

  return (
    <div id="posts-new">
      <h1>New post</h1>
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <p>
          {" "}
          <strong>Title</strong> <input name="title" input type="text" />{" "}
        </p>
        <p>
          {" "}
          <strong>Body</strong> <input name="body" input type="text" />{" "}
        </p>
        <p>
          {" "}
          <strong>Image URL</strong> <input name="image" input type="text" />
        </p>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
