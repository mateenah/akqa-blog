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
          <div class="card text-white bg-success mb-3" >
            <div class="card-header">{data.fields.title}</div>
             <div class="card-body">
              <h4 class="card-title" key="{t.fields.slug}">{data.fields.slug}</h4>
              <p class="card-text" key="{t.fields.content}">{data.fields.content}</p>
            </div>  
          </div> 
        )
      
        
  

  
 export default class extends React.Component {
          static async getInitialProps() {
                  const client = createClient();
                  const entries = await client.getEntries({
                    // some query
                    content_type:type,
                    include:1
                  });   
                  const someEntryAsProp = entries.items;
                
                  console.log('> Content gotten and written for')
                  return { someEntryAsProp };
          }

          render() {
            return (
              <Layout>
              <h1>My Blog</h1>
              <div class="row">
              <div class="col-12 mb-3">
                 {this.props.someEntryAsProp.map(data =>   
                  <ContentfulCard key={data.id} data={data} />)}   
              </div>
            </div>
            </Layout>
            );
          }
      
        }

    


  