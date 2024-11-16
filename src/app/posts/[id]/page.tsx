import React from 'react';
import {IPost} from "@/app/Models/IPost";

type Params = {
    id: string;
}
const PostPage = async ({params}: { params: Params }) => {
    const post:IPost = await fetch('https://jsonplaceholder.typicode.com/posts/' + params.id).then(res => res.json());
    return (
        <div>
            <div>{post.title} - {post.id}</div>
        </div>
    );
};

export default PostPage;