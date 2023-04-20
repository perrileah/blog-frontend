import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export function PostsShowPage() {
  const [post, setPost] = useState({});
  const params = useParams();

  const handleShowPost = () => {
    axios.get("http://localhost:3000/posts/${params.id}.json").then((response) => {
      setPost(response.data);
    });
  };

  useEffect(handleShowPost, []);

  return (
    <div>
      <h2>{post.title}</h2>
      <img src={post.image} alt="image link" />
      <p>{post.body}</p>
    </div>
  );
}
