import { useState } from "react";

export function PostsShow(props) {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    props.onUpdatePost(props.post.id, params);
    event.target.reset();
  };

  const handleClick = () => {
    props.onDestroyPost(props.post);
  };

  return (
    <div id="recipes-show">
      <h1>Update Post</h1>
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <p>
          {" "}
          <strong>Title</strong> <input defaultValue={props.post.title} name="title" input type="text" />{" "}
        </p>
        <p>
          {" "}
          <strong>Body</strong> <input defaultValue={props.post.body} name="body" input type="text" />{" "}
        </p>
        <p>
          {" "}
          <strong>Image URL</strong> <input defaultValue={props.post.image} name="image" input type="text" />
        </p>
        <button type="submit">Update</button>
      </form>
      <button onClick={handleClick}> Delete Post </button>
    </div>
  );
}
