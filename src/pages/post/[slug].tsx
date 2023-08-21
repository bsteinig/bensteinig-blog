import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function Post() {
  const router = useRouter();
  const { slug } = router.query;
  const [post, setPost] = useState<String>("");

useEffect(() => {
    if (slug) {
        console.log(slug);
        setPost(slug);
    }
}, [slug]);

  return <>{!post ? <div>Post: Loading</div> : <div>Post: {post}</div>}</>;
}

export default Post;
