import Layout from '../components/myLayout.js'
import Link from 'next/link'
import { createClient } from '../helpers/getcontent';
import React from 'react'
import { type } from 'os';

function getPosts() {
    return [
        {id: 'hello-nextjs', title: 'Hello Next.js'},
        {id: 'learn-nextjs', title: 'Learn Next.js is awesome'},
        {id: 'deploy-nextjs', title: 'Deploy apps with Zeit'},
    ]
}

const PostLink = ({post}) => (
    <li>
        <Link key="{post.title}" as={`/p/${post.id}`} href={`/post?title=${post.title}`}>
            <a>{post.title}</a>
        </Link>
    </li>
)

const ContentfulCard = ({data}) => (
    <div className="col-md-4 mb-3 card-box">
        <div className="card text-white bg-primary mb-3">

            <div className="card-title"><h3 key="{data.fields.title}">{data.fields.title}</h3>
                <h5 className="card-subtitle text-muted" key="{data.fields.slug}">{data.fields.slug}</h5>
            </div>
            <div className="card-img">

                {(data.fields.media) ? (
                        <img src={data.fields.media && data.fields.media.fields.file.url} key="{data.fields.media}"
                             className="card-link"/>)
                    : (
                        <div width="200" height="345" key="{data.fields.embedLink}"
                             dangerouslySetInnerHTML={{__html: data.fields.embedLink}}>
                        </div>
                    )}

            </div>
            <div className="card-body">
                <p className="card-text" key="{data.fields.content}">{data.fields.content}</p>
                <p className="card-subtitle text-muted" key="{data.fields.mediaLink}">{data.fields.mediaLink}</p>
            </div>
        </div>
        <style jsx>{`
          .card {
            height: 100%;
            border: 0;
            transform: translateY(0px);
              transition: 0.5s all cubic-bezier(0.175, 0.885, 0.32, 1.275);
          }
          .card-img{
            line-height: 0px;
            margin-top: 10px;
            overflow: hidden;
            border-radius: 0px;
          }
          .card-img img{
            width: 100%;
            height: 100%;
            
            object-fit: cover;
          }
          .card-box{
            padding-top:25px
          }
          h3 {
              padding: 20px 0 0 20px;
              font-size: 1.4em;
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
          }
          h5 {
              padding: 5px 10px 0 20px;
              font-size: 0.9em;
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
          }
          .card-link{
              width:100%
          }
          .card-body{
            padding-bottom:0px;
          }
          .text-muted{
              color: #ffffff52 !important;
          }
          .card-text{
            max-height:200px;
            overflow: hidden;
            font-size: 0.9rem;
            line-height: 22px;
            opacity: 0.8;
          }
          .card:hover {
              transform: translateY(-6px);
          }
          `}</style>
        <style>{`iframe{
                width: 100% !important;
                height: 100%;
          }

          `}</style>
    </div>

)

const divStyle = {
    width: '100%'
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
            console.log("entries111", entries111)
        }

        // console.log("someEntryAsProp",someEntryAsProp)
        //  console.log("entries111",entries111.fields.mediaLink.fields.file)
        console.log('> Content gotten and written for')
        return {someEntryAsProp};
    }

    render() {
        return (
            <Layout>
                <div className="row">
                    {this.props.someEntryAsProp.map(data =>
                        <ContentfulCard key={data.id} data={data}/>)}
                </div>
            </Layout>
        );
    }

}



