import React from "react";
import { gql } from "apollo-boost";
import PostList from "../src/components/postList";

const Hello = () => {
  return (
    <>
      <PostList />
    </>
  );
};

export default Hello;
