import { useState } from "react";
import {
  useGetPostsQuery,
  useCreatePostsMutation,
} from "./services/jsonPlaceHolderApi";
function App() {
  const [newPost, setNewPost] = useState({ title: "", body: "", id: 12784 });
  const { data, error, isLoading } = useGetPostsQuery();
  const [createPost, { isLoading: isCreating, error: createError }] =
    useCreatePostsMutation();

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>There was an error :(</p>;

  //  ###############################

  if (createError) return <p>There was an error creating post</p>;
  console.log(data);

  async function handleCreatePost() {
    await createPost(newPost);
  }

  return (
    <div className="main">
      <h1>LETS FETCH DATA</h1>

      <div>
        <input
          type="text"
          placeholder="title"
          onChange={(e) =>
            setNewPost((prev) => ({ ...prev, title: e.target.value }))
          }
        />
        <br />
        <input
          type="text"
          placeholder="body"
          onChange={(e) =>
            setNewPost((prev) => ({ ...prev, body: e.target.value }))
          }
        />
        <br />
        <button onClick={handleCreatePost} disabled={isCreating}>
          Create Post
        </button>
      </div>

      <div>
        {data.map((post) => (
          <>
            <p key={post.title}>{post.title}</p>
            <br />
          </>
        ))}
      </div>
    </div>
  );
}

export default App;
