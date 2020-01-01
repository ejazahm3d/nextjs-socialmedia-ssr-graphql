type Maybe<T> = T | null;
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  DateTime: any,
};

export type Comment = {
  id: Scalars['ID'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  content: Scalars['String'],
  author: User,
};

export type CommentCreateInput = {
  id?: Maybe<Scalars['ID']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  content: Scalars['String'],
  post: PostCreateOneWithoutPostInput,
  author: UserCreateOneWithoutAuthorInput,
};

export type CommentCreateManyWithoutCommentsInput = {
  create?: Maybe<Array<CommentCreateWithoutPostInput>>,
  connect?: Maybe<Array<CommentWhereUniqueInput>>,
};

export type CommentCreateWithoutPostInput = {
  id?: Maybe<Scalars['ID']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  content: Scalars['String'],
  author: UserCreateOneWithoutAuthorInput,
};

export type CommentWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};


export type Mutation = {
  signupUser: User,
  deleteOnePost?: Maybe<Post>,
  createComment: Comment,
  deleteComment?: Maybe<Comment>,
  createDraft: Post,
  publish?: Maybe<Post>,
};


export type MutationSignupUserArgs = {
  data: UserCreateInput
};


export type MutationDeleteOnePostArgs = {
  where: PostWhereUniqueInput
};


export type MutationCreateCommentArgs = {
  data: CommentCreateInput
};


export type MutationDeleteCommentArgs = {
  where: CommentWhereUniqueInput
};


export type MutationCreateDraftArgs = {
  title: Scalars['String'],
  content?: Maybe<Scalars['String']>,
  authorEmail?: Maybe<Scalars['String']>
};


export type MutationPublishArgs = {
  id?: Maybe<Scalars['ID']>
};

export type Post = {
  id: Scalars['ID'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  title: Scalars['String'],
  content?: Maybe<Scalars['String']>,
  published: Scalars['Boolean'],
  author?: Maybe<User>,
};

export type PostCreateManyWithoutPostsInput = {
  create?: Maybe<Array<PostCreateWithoutAuthorInput>>,
  connect?: Maybe<Array<PostWhereUniqueInput>>,
};

export type PostCreateOneWithoutPostInput = {
  create?: Maybe<PostCreateWithoutCommentsInput>,
  connect?: Maybe<PostWhereUniqueInput>,
};

export type PostCreateWithoutAuthorInput = {
  id?: Maybe<Scalars['ID']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  published?: Maybe<Scalars['Boolean']>,
  title: Scalars['String'],
  content?: Maybe<Scalars['String']>,
  comments?: Maybe<CommentCreateManyWithoutCommentsInput>,
};

export type PostCreateWithoutCommentsInput = {
  id?: Maybe<Scalars['ID']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  published?: Maybe<Scalars['Boolean']>,
  title: Scalars['String'],
  content?: Maybe<Scalars['String']>,
  author?: Maybe<UserCreateOneWithoutAuthorInput>,
};

export type PostWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type Query = {
  post?: Maybe<Post>,
  comment?: Maybe<Comment>,
  comments: Array<Comment>,
  posts: Array<Post>,
  hello: Scalars['String'],
  feed: Array<Post>,
  filterPosts: Array<Post>,
};


export type QueryPostArgs = {
  where: PostWhereUniqueInput
};


export type QueryCommentArgs = {
  where: CommentWhereUniqueInput
};


export type QueryCommentsArgs = {
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['ID']>,
  before?: Maybe<Scalars['ID']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryPostsArgs = {
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['ID']>,
  before?: Maybe<Scalars['ID']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryHelloArgs = {
  name?: Maybe<Scalars['String']>
};


export type QueryFilterPostsArgs = {
  searchString?: Maybe<Scalars['String']>
};

export type User = {
  id: Scalars['ID'],
  name?: Maybe<Scalars['String']>,
  email: Scalars['String'],
  posts: Array<Post>,
};

export type UserCreateInput = {
  id?: Maybe<Scalars['ID']>,
  email: Scalars['String'],
  name?: Maybe<Scalars['String']>,
  posts?: Maybe<PostCreateManyWithoutPostsInput>,
  comments?: Maybe<CommentCreateManyWithoutCommentsInput>,
};

export type UserCreateOneWithoutAuthorInput = {
  create?: Maybe<UserCreateWithoutCommentsInput>,
  connect?: Maybe<UserWhereUniqueInput>,
};

export type UserCreateWithoutCommentsInput = {
  id?: Maybe<Scalars['ID']>,
  email: Scalars['String'],
  name?: Maybe<Scalars['String']>,
  posts?: Maybe<PostCreateManyWithoutPostsInput>,
};

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
  email?: Maybe<Scalars['String']>,
};

export type GetPostsQueryVariables = {};


export type GetPostsQuery = ({ __typename?: 'Query' } & { posts: Array<({ __typename?: 'Post' } & Pick<Post, 'id' | 'title' | 'content' | 'createdAt' | 'updatedAt' | 'published'>)> });


import gql from 'graphql-tag';
import * as React from 'react';
import * as ReactApollo from 'react-apollo';

export const GetPostsDocument = gql`
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

export class GetPostsComponent extends React.Component<Partial<ReactApollo.QueryProps<GetPostsQuery, GetPostsQueryVariables>>> {
  render() {
      return (
          <ReactApollo.Query<GetPostsQuery, GetPostsQueryVariables> query={GetPostsDocument} {...(this as any)['props'] as any} />
      );
  }
}
export type GetPostsProps<TChildProps = {}> = Partial<ReactApollo.DataProps<GetPostsQuery, GetPostsQueryVariables>> & TChildProps;
export function withGetPosts<TProps, TChildProps = {}>(operationOptions: ReactApollo.OperationOption<
  TProps, 
  GetPostsQuery,
  GetPostsQueryVariables,
  GetPostsProps<TChildProps>> | undefined) {
    return ReactApollo.withQuery<TProps, GetPostsQuery, GetPostsQueryVariables, GetPostsProps<TChildProps>>(GetPostsDocument, operationOptions);
};