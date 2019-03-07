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



// const Index = () => (
//   <Layout>
//     <h1>My Blog</h1>
    
//     <p>{someEntryAsProp.text}</p>
//     <ul>
//     { getPosts().map((post) => (
//        <PostLink key={post.id} post={post}/>
//     ))}
//     </ul>
//   </Layout>
//   );

  // Index.getInitialProps = async () => {
    
  //   console.log('> Starting import',);
  //  const client = createClient();
  //    const entries = await client.getEntries({
  //     // some query
  //     content_type:type,
  //     include:1
  //    });

  //    const someEntryAsProp = entries.items[0].fields;

  //   // console.log(entries)
  //   console.log("entries.items[0]-----",entries.items[0])
  //   console.log("someEntryAsProp----",someEntryAsProp)
  //   // console.log('> Content gotten and written for',)
    
  //   return { someEntryAsProp };
  //   //return {};
  // };


  
  export default class extends React.Component {
    static async getInitialProps() {
            const client = createClient();
            const entries = await client.getEntries({
              // some query
              content_type:type,
              include:1
            });   
            const someEntryAsProp = entries.items;
          
            console.log('> Content gotten and written for',)
            
            return { someEntryAsProp };
    }




    render() {
      return (
        <Layout>
        <h1>My Blog</h1>
        
        <p></p>
        <p>{this.props.someEntryAsProp[1].fields.title}</p>
        <ul>
        { getPosts().map((post) => (
           <PostLink key={post.id} post={post}/>
        ))}
        </ul>
        <div class="row">
        <div class="col-12 mb-3">
        
        {(this.props.someEntryAsProp && this.props.someEntryAsProp.length > 0) ? 
          <div class="card text-white bg-success mb-3" >
          {this.props.someEntryAsProp.map(agency => 
            <div class="card-header" key="{agency.fields.title}">{agency.fields.title}</div>)}
            <div class="card-header">{this.props.someEntryAsProp[0].fields.title}</div>
            <div class="card-body">
              <h4 class="card-title">{this.props.someEntryAsProp[0].fields.slug}</h4>
              <p class="card-text">{this.props.someEntryAsProp[0].fields.content}</p>
            </div> 
          </div> : <p><strong>Have nothing!!</strong></p>}

          {/* <div class="card text-white bg-dark mb-3">
            <div class="card-header">{this.props.someEntryAsProp[1].fields.title}</div>
            <div class="card-body">
              <h4 class="card-title">{this.props.someEntryAsProp[1].fields.slug}</h4>
              <p class="card-text">{this.props.someEntryAsProp[1].fields.content}</p>
            </div>
          </div>

          <div class="card text-white bg-success mb-3" >
            <div class="card-header">{this.props.someEntryAsProp[0].fields.title}</div>
            <div class="card-body">
              <h4 class="card-title">{this.props.someEntryAsProp[0].fields.slug}</h4>
              <p class="card-text">{this.props.someEntryAsProp[0].fields.content}</p>
            </div>
          </div>

          <div class="card text-white bg-dark mb-3">
            <div class="card-header">{this.props.someEntryAsProp[1].fields.title}</div>
            <div class="card-body">
              <h4 class="card-title">{this.props.someEntryAsProp[1].fields.slug}</h4>
              <p class="card-text">{this.props.someEntryAsProp[1].fields.content}</p>
            </div>
          </div> */}
        </div>
      </div>
      </Layout>
      );
    }


  }  

  



  