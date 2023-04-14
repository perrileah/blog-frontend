export function PostsShow(props) {
  return (
    <div id="recipes-show">
      <h2>{props.post.title}</h2>
      <p>{props.post.body} </p>
      <img src={props.post.image}></img>
    </div>
  );
}
