import React from "react";
import HelloWorld from "../components/hello/HelloWorld";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const CATEGORYLIST = gql`
  query categoryList($id: Int!) {
    category(id: $id) {
      id
      children_count
      children {
        id
        path
        name
        image
        url_key
        url_path
        position
        children_count
        include_in_menu
      }
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
      <HelloWorld />
    </>
  );
};

export default Hello;
