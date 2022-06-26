import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../reduxToolkit/asyncData";

const AsyncData = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);
  const {posts, status, error} = useSelector((state) => state.asyncData);

  return (
    <div>
        <hr></hr>
      <h2> Async fetch createAsyncThunk </h2>
      <button>Fetch data</button>
      {status === 'loading' && <div>loading</div>}
      {error && <div>error</div>}
      {posts.map((post) => {
        return <div key={post.title}>{post.title}</div>;
      })}
    </div>
  );
};

export default AsyncData;
