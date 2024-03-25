import React from 'react'
import BackToHome from './BackToHome'
import Blogs from './Blogs'
import blog1 from '../assets/images/blog-1.jpg'

const BlogPage = () => {
  return (
    <>
      <BackToHome title={"BLOGS"} />
      <div className="mx-xxl-5 my-5 ">
        <div className="row gap-3">
          <div className="col-md-3">
            <div className="shadow d-flex flex-column p-2">
              <h4>Find by Catogories</h4>
              <span className="text-muted mb-2">watch</span>
              <span className="text-muted mb-2">tv</span>
              <span className="text-muted mb-2">cemera</span>
              <span className="text-muted mb-2">Laptop</span>
            </div>
          </div>
          <div className="col-md-8">
           <div className="row">
            <div className="col-12 ms-sm-4">
            <div className="blogs mx-auto gap-5 d-flex flex-wrap">
              <Blogs length={'col-md-5 col-sm-5'} imgSrc={blog1} />
              <Blogs length={'col-md-5 col-sm-5'} imgSrc={"https://www.etq.com/app/uploads/2020/07/etq-product-launch-whiteboard-notes.jpg"} />
              <Blogs length={'col-md-5 col-sm-5'} imgSrc={"https://imageio.forbes.com/specials-images/imageserve/6350000b820a60464ab5c039/Concept-of-augmented-reality-technology-in-glasses/0x0.jpg?format=jpg&crop=1353,761,x0,y55,safe&width=960"} />
              <Blogs length={'col-md-5 col-sm-5'} imgSrc={"https://qph.cf2.quoracdn.net/main-qimg-c35574e4df73905d6eebafa94da2f975-lq"} />
            </div>
            </div>
           </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogPage