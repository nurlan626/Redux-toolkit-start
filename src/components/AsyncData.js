import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../reduxToolkit/asyncData";

const AsyncData = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);
  const posts = useSelector((state) => state.asyncData.posts);
  return (
    <div>
        <hr></hr>
      <h2> Async fetch createAsyncThunk </h2>
      <button>Fetch data</button>
      {posts.map((post) => {
        return <div key={post.title}>{post.title}</div>;
      })}
    </div>
  );
};

export default AsyncData;
