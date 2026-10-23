import React from "react";

const Chapters = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts",
    {
      next: { revalidate: 600 },
    }
  );

  const posts = await response.json();

  return (
    <div>
      <h1>Chapters Page</h1>
      <h2>Posts Data</h2>

      {posts.map((post) => (
        <div key={post.id}>
          <p><strong>User ID:</strong> {post.userId}</p>
          <p><strong>Id:</strong> {post.id}</p>
          <p><strong>Title:</strong> {post.title}</p>
          <p><strong>Body:</strong> {post.body}</p>

          <hr />
        </div>
      ))}
    </div>
  );
};

export default Chapters;