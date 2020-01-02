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
    <Col
      span={8}
      xs={24}
      md={12}
      lg={8}
      xl={6}
      sm={12}
      className="post__row__col"
    >
      <Card title={post.title} bordered={false}>
        {post.content}
      </Card>
    </Col>
  );
};

export default Post;
