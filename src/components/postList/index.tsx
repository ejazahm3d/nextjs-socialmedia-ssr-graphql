import React from "react";
import Post from "../post";
import { GetPostsQuery } from "../../generated/graphql";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { Row } from "antd";
import "./post.styles.less";

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
      <>
        <div className="post">
          <Row gutter={16} align="stretch">
            {data?.posts?.map(post => (
              <Post key={post.id} post={post} />
            ))}
          </Row>
        </div>
      </>
    );
  }
};

export default PostList;
