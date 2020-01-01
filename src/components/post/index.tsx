import React from "react";
import "./hello.module.less";
import { Row, Col, Button, message } from "antd";
import { GetPostsProps, Post as PostProp } from "../../generated/graphql";

interface Props {
  post: {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    title: string;
    content?: string;
    published: boolean;
  };
}

const Post: React.FC<Props> = ({ post }) => {
  return <div>{post.title}</div>;
};

export default Post;
