import Layout from '../components/myLayout.js'
import Link from 'next/link'


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

const Index = () => (
  <Layout>
    <h1>My Blog</h1>
    <ul>
    { getPosts().map((post) => (
       <PostLink key={post.id} post={post}/>
    ))}
    </ul>
  </Layout>
  )
  
  export default Index  






  