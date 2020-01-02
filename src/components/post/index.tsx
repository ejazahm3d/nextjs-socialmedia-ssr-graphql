import React from "react";
import "./hello.module.less";
import { Col, Card } from "antd";

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
  return (
    <Col span={8} className="post__row__col">
      <Card title={post.title} bordered={false}>
        {post.content}
      </Card>
    </Col>
  );
};

export default Post;
