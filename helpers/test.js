

export const test = () => {
    return true 
}

export default test


// import Layout from '../components/myLayout.js'
// import Link from 'next/link'
// import {createClient} from '../helpers/getcontent';
// import React from 'react'
// import { type } from 'os';


// function getPosts(){
//   return [
//     { id:'hello-nextjs' , title:'Hello Next.js' },
//     { id:'learn-nextjs' , title:'Learn Next.js is awesome' },
//     { id:'deploy-nextjs' , title:'Deploy apps with Zeit' },
//   ]
// }
// const PostLink = ({ post }) => (
//   <li>
//     <Link as={`/p/${post.id}`} href={`/post?title=${post.title}`}>
//       <a>{post.title}</a>
//     </Link>
//   </li>
// )



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

//   Index.getInitialProps = async () => {
    
//     console.log('> Starting import',);
//    const client = createClient();
//      const entries = await client.getEntries({
//       // some query
//       content_type:type,
//       include:1
//      });

//      const someEntryAsProp = entries.items[0].fields;

//     // console.log(entries)
//     console.log("entries.items[0]-----",entries.items[0])
//     console.log("someEntryAsProp----",someEntryAsProp)
//     // console.log('> Content gotten and written for',)
    
//     return { someEntryAsProp };
//     //return {};
//   };


  
//   export default Index  






  