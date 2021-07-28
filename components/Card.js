import Link from "next/link";
import React from "react";
import Image from "next/image";

// post accepted as a prop bc of index.js
export default function Card({ post }) {
    const { postName, slug, featuredImage } = post.fields;

    return (
        <div className="card">
            <div className="featured">
                <Image
                    src={"http://" + featuredImage.fields.file.url}
                    alt="blog images"
                    width={featuredImage.fields.file.details.image.width}
                    height={featuredImage.fields.file.details.image.height}
                />
            </div>
            <div className="content">
                <div className="info">
                    <h4>{postName}</h4>
                    {/* <p>published on {publishedDate} </p> */}
                    {/* <p>just read {content} </p> */}
                </div>
                <div className="actions">
                    {/* could do a fav button here or more info */}
                    {/* details page here */}
                    <Link href={"/posts/" + slug}>
                        <a>more info</a>
                    </Link>
                </div>
            </div>
        </div>
    );
}