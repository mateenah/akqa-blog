import Layout from '../components/myLayout.js'
import Link from 'next/link'
import {createClient} from '../helpers/getcontent';
import React from 'react'
import { type } from 'os';


function getPosts(){
  return [
    { id:'hello-nextjs' , title:'Hello Next.js' },
    { id:'learn-nextjs' , title:'Learn Next.js is awesome' },
    { id:'deploy-nextjs' , title:'Deploy apps with Zeit' },
  ]
}
const PostLink = ({ post }) => (
  <li>
    <Link as={`/p/${post.id}`} href={`/post?title=${post.title}`}>
      <a>{post.title}</a>
    </Link>
  </li>
)



  const ContentfulCard = ({ data }) => (
     <div class="col-4 mb-3">
      <div class="card text-white bg-primary mb-3">

              <div class="card-title text-muted"><h3 key="{data.fields.title}">{data.fields.title}</h3></div>

              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <h4 class="card-subtitle text-muted" key="{data.fields.slug}">{data.fields.slug}</h4>
              </div>
              
              <div class="card-body">
                  <a class="card-link" href="{data.fields.media.fields.file.url}">{data.fields.media.fields.file.url}</a> 
              </div>  
              {/* <img src="" alt="Card image"/> */}
              
              <div class="card-body">
                <p class="card-text" key="{data.fields.content}">{data.fields.content}</p>
                <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a>
              </div>

              
      </div>
    </div>
 )
      
        
  

  
 export default class extends React.Component {
          static async getInitialProps() {
                  const client = createClient();
                  const entries = await client.getEntries({
                    content_type:type,
                    include:1
                  });   
                  const someEntryAsProp = entries.items;
                  for(let i = 0; i<someEntryAsProp.length; i++) {
                    const entries111 = entries.items[i];
                    console.log("entries111", entries111.fields)
                }
                
                  // console.log("someEntryAsProp",someEntryAsProp)
                  //console.log("entries111",entries111.fields.media.fields.file)
                  console.log('> Content gotten and written for')
                  return { someEntryAsProp };
          }

          render() {
            return (
              <Layout>
              <h1>My Blog</h1>
              <div class="row">
              <div class="col-12 mb-3" style= {divStyle}>
             
                  {this.props.someEntryAsProp.map(data =>   
                  <ContentfulCard key={data.id} data={data} />)}  
                 
              </div>
            </div>
            </Layout>
            );
          }
      
        }

    
        const divStyle = {
          display:'inline-flex'
        };

  