import React from "react";
import Post from "../post";
import { GetPostsQuery } from "../../generated/graphql";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const GET_POSTS = gql`
  query getPosts {
    posts {
      id
      title
      content
      createdAt
      updatedAt
      published
    }
  }
`;

const PostList: React.FC = () => {
  const { data, loading, error } = useQuery<GetPostsQuery>(GET_POSTS);

  if (data) {
    return (
      <div>
        {data?.posts?.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    );
  }
};

export default PostList;
