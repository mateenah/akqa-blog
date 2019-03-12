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

  // const MediaItem = ({item}) => {
  //   item.isVideo ? <video /> : <img />
  // }

const CheckMediaItem = ({data1}) => {

  if(dataCheck.fields.media) { /* do stuff */ 
        <div className="card-body">
        {/* <MediaItem item={data.fields.media.fields.file}/>  */}
            <img src={dataCheck.fields.media && dataCheck.fields.media.fields.file.url} className="card-link" style= {divStyle}/>
        </div> 
      }else{
         <div className="card-body">
                <p className="card-text" key="{data.fields.content}">{data.fields.content}</p>
                {/* <a className="card-link" href={data.fields.mediaLink}>{data.fields.mediaLink}</a>  */}
                <div width="200" height="345" dangerouslySetInnerHTML={{ __html: data.fields.embedLink}} >
                </div>
              </div>
      }


  }


  const ContentfulCard = ({ data }) => (
     <div className="col-4 mb-3">
      <div className="card text-white bg-primary mb-3">

              <div className="card-title text-muted"><h3 key="{data.fields.title}">{data.fields.title}</h3></div>

              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <h4 className="card-subtitle text-muted" key="{data.fields.slug}">{data.fields.slug}</h4>
              </div>
              
                   {(data.fields.media) ? 
                    ( <div className="card-body">
                         <p className="card-text" key="{data.fields.content}">{data.fields.content}</p>
                          <img src={data.fields.media && data.fields.media.fields.file.url} key="{data.fields.media}" className="card-link" style= {divStyle}/>
                      </div> ):
                  (
                      <div className="card-body">
                              <p className="card-text" key="{data.fields.content}">{data.fields.content}</p>
                              <div width="200" height="345"key="{data.fields.embedLink}"  dangerouslySetInnerHTML={{ __html: data.fields.embedLink}} >
                              </div>
                            </div>
                  )} 
               

              

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
                    console.log("entries111", entries111.fields.media)
                }
                
                  // console.log("someEntryAsProp",someEntryAsProp)
                //  console.log("entries111",entries111.fields.mediaLink.fields.file)
                  console.log('> Content gotten and written for')
                  return { someEntryAsProp };
          }

          render() {
            return (
              <Layout>
              <h1>My Blog</h1>
              <div className="row">
                  {this.props.someEntryAsProp.map(data =>   
                  <ContentfulCard key={data.id} data={data} />)}        
              </div>

             
            </Layout>
            );
          }
      
        }

    
        const divStyle = {
          width: '100%'
        };

        const crouselStyle = {
          width: '100%'
        };

  