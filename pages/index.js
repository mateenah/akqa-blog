import Layout from "../components/myLayout.js";
import Link from "next/link";
import { createClient } from "../helpers/getcontent";
import React from "react";
import { type } from "os";

function getPosts() {
  return [
    { id: "hello-nextjs", title: "Hello Next.js" },
    { id: "learn-nextjs", title: "Learn Next.js is awesome" },
    { id: "deploy-nextjs", title: "Deploy apps with Zeit" }
  ];
}
const PostLink = ({ post }) => (
  <li>
    <Link
      key="{post.title}"
      as={`/p/${post.id}`}
      href={`/post?title=${post.title}`}
    >
      <a>{post.title}</a>
    </Link>
  </li>
);

const ContentfulCard = ({ data }) => (
  <div className="col-md-4 mb-3 card-box">
    <div className="card text-white bg-primary mb-3">
      <div className="card-title">
        <h3 key="{data.fields.title}">{data.fields.title}</h3>
      </div>

      <div className="card-body">
        {/* <h5 className="card-title">Special title treatment</h5> */}
        <h5 className="card-subtitle text-muted" key="{data.fields.slug}">
          {data.fields.slug}
        </h5>
      </div>
      <div className="card-body">
        <p className="card-text" key="{data.fields.content}">
          {data.fields.content}
        </p>

        {data.fields.media ? (
          <img
            src={data.fields.media && data.fields.media.fields.file.url}
            key="{data.fields.media}"
            className="card-link"
          />
        ) : (
          <div
            width="200"
            height="345"
            key="{data.fields.embedLink}"
            dangerouslySetInnerHTML={{ __html: data.fields.embedLink }}
          />
        )}
        <p className="card-subtitle text-muted" key="{data.fields.mediaLink}">
          {data.fields.mediaLink}
        </p>
      </div>
    </div>
    <style jsx>{`
      .card-box {
        padding-top: 25px;
      }
      h3 {
        padding: 20px 0 0 20px;
        font-size: 1.7em;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
      .card-link {
        width: 100%;
      }
      .card:hover {
        transform: scale(1.1);
        transition: 0.2s all cubic-bezier(0.175, 0.885, 0.32, 1.275);
        boxshadow: 0 30px 30px rgba(0, 0, 0, 0.5);
      }
    `}</style>
  </div>
);

const divStyle = {
  width: "100%"
};

export default class extends React.Component {
  static async getInitialProps() {
    const client = createClient();
    const entries = await client.getEntries({
      content_type: type,
      include: 1
    });
    const someEntryAsProp = entries.items;
    for (let i = 0; i < someEntryAsProp.length; i++) {
      const entries111 = entries.items[i];
      console.log("entries111", entries111);
    }

    // console.log("someEntryAsProp",someEntryAsProp)
    //  console.log("entries111",entries111.fields.mediaLink.fields.file)
    console.log("> Content gotten and written for");
    return { someEntryAsProp };
  }

  render() {
    return (
      <Layout>
        <h1>Finidngs</h1>
        <div className="row">
          {this.props.someEntryAsProp.map(data => (
            <ContentfulCard key={data.id} data={data} />
          ))}
        </div>
      </Layout>
    );
  }
}
