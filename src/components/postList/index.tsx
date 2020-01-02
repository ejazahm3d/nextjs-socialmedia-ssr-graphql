import React from "react";
import Post from "../post";
import { GetPostsQuery } from "../../generated/graphql";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { Row } from "antd";
import "./post.styles.less";
import { Typography } from "antd";

const { Title } = Typography;

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
          <Typography.Title
            level={2}
            style={{ textAlign: "center", marginBottom: 30 }}
          >
            News Feed
          </Typography.Title>
          <Row gutter={16} style={{ marginRight: "10%", marginLeft: "10%" }}>
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
