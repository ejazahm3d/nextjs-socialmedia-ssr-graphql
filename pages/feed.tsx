import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import PostList from "../components/postList";

const CATEGORYLIST = gql`
  {
    posts {
      id
      title
      content
      published
    }
  }
`;

const Hello = () => {
  const { data, loading, error } = useQuery(CATEGORYLIST, {
    variables: { id: 2 }
  });
  if (error) console.log(error);
  if (loading) console.log(loading);

  console.log(data);
  return (
    <>
      <PostList />
    </>
  );
};

export default Hello;
