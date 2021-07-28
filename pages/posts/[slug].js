import { createClient } from "contentful";
import Image from "next/image";

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
    const res = await client.getEntries({
        content_type: "post",
    });
    const paths = res.items.map((item) => {
        return {
            params: { slug: item.fields.slug },
        };
    });
    return {
        paths,
        fallback: false,
    };
};

export async function getStaticProps({ params }) {
    // fetch a single item based on the page we are on
    // always returning an arr
    const { items } = await client.getEntries({
        content_type: "post",
        "fields.slug": params.slug,
    });

    return {
        props: { post: items[0] },
    };
}

export default function PostDetails({ post }) {
    // console.log("again the posts:", post);
    const { postName, content, publishedDate, featuredImage } = post.fields;
    return (
        <div className="banner">
            <h2>{postName}</h2>
            <Image
                src={"http://" + featuredImage.fields.file.url}
                alt={"single image"}
                width={featuredImage.fields.file.details.image.width}
                height={featuredImage.fields.file.details.image.height}
            />

            <div className="info">
                <h3 className="info-box">{content}</h3>
                <p>published on {publishedDate}</p>
            </div>
        </div>
    );
}
