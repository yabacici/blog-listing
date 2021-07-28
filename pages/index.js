import { createClient } from "contentful";
import Card from "../components/Card";

// Grab data, then use it to inject the props into comp to render it in browser
export async function getStaticProps() {
    // right credentials to connect
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    });

    const res = await client.getEntries({ content_type: "post" });

    // need to return an obj inside getStaticProps
    return {
        props: {
            // all items coming back from getEntries
            post: res.items,
        },
    };
}

export default function Listing({ post }) {
    console.log("the post list:", post);
    return (
        <div className="blog-listing">
            {post.map((post) => (
                // <div key={post.sys.id}>{post.fields.postName}</div>
                <Card key={post.sys.id} post={post} />
            ))}
        </div>
    );
}
