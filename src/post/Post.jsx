import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postimg"
        src="https://cdn.pixabay.com/photo/2022/06/21/08/57/male-7275449__340.jpg"
        alt=""
      />
      <div className="postinfo">
        <div className="postcats"></div>
        <span className="postcat">Music</span>
        <span className="postcat">Life</span>
        <span className="posttitle">Lorem ipsum dolor</span>
        <span className="postdate">1 hr Ago</span>
      </div>
    </div>
  );
}
