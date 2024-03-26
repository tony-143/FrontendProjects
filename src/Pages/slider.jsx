import React, { useEffect, useState } from 'react'
import { products } from '../products.json'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';
const Slider = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };


    return (
        <div className=''>
            <div className='d-flex justify-content-between'>
                <h2 className='h1 line w-100'>Features</h2>
            </div>
            <Carousel responsive={responsive}>
                {products.map((p, i) => {
                    return (
                        <div key={i} className="feature-card mx-2 shadow h-100" style={{ background: 'white', userSelect: 'none', borderRadius: '20px', scale: '1' }}>
                            <div className='item  position-relative' >
                                <div className='d-flex justify-content-center pt-2 pb-5'>
                                    <img className='img-fluid  py-2 ' style={{ height: '200px' }} width={200} src={p.images[0]} alt="" />
                                </div>
                                <div className='px-3 '>
                                    <h5 className='text-danger text-uppercase'>{p.brand}</h5>
                                    <p className='text-capitalize '>{p.description}</p>
                                    <div className='rating'>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value={p.rating}
                                            edit={false}
                                            isHalf={true}
                                            activeColor="#ffd700"
                                        />
                                        </div>
                                    <h6 className='price'>${p.price}</h6>
                                </div>
                                <div className="position-absolute end-0 top-0 ">
                                <i class="fa-regular fa-heart m-3 mb-0"></i>
                                </div>
                                <div className='m-3 position-absolute feature-card-icons mt-2 d-flex flex-column gap-2'>
                                <Link className='text-dark'> <i class="fa-solid fa-shuffle"></i></Link>
                                <Link className='text-dark'><i class="fa-regular fa-eye"></i></Link>
                                <Link className='text-dark'><i class="fa-solid fa-bag-shopping"></i></Link>
                                </div>
                            </div></div>
                    )
                })}</Carousel>



        </div>
    )
}
export function Cards({col}){
    let [page,setPage]=useState(1)

    let changePage=(pageNumber)=>{
        if(
            pageNumber>=1&&
            pageNumber<=products.length&&
            pageNumber!==page
        )
        setPage(pageNumber)
    }    
    return (

        <div className='row w-100'>
            
            {products.slice(page*8-8,page*8).map((p, i) => {
                    return (
                        <div key={i} className={`feature-card  col-lg-${col} col-sm-${col} col-sm-6 mb-2 shadow`} style={{ background: 'white', userSelect: 'none', borderRadius: '20px', scale: '1' }}>
                            <div className='item  position-relative' >
                                <div className='d-flex justify-content-center pt-2 pb-3'>
                                    <img className='img-fluid  ' style={{ height: '150px' }} width={200} src={p.images[0]} alt="" />
                                </div>
                                <div className='px-3 '>
                                    <h5 className='text-danger text-uppercase'>{p.brand}</h5>
                                    <p className='text-capitalize '>{p.description}</p>
                                    <div className='rating'>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value={p.rating}
                                            edit={false}
                                            isHalf={true}
                                            activeColor="#ffd700"
                                        />
                                        </div>
                                    <h6 className='price'>${p.price}</h6>
                                </div>
                                <div className="position-absolute end-0 top-0 ">
                                <i class="fa-regular fa-heart m-3 mb-0"></i>
                                </div>
                                <div className='m-3 position-absolute feature-card-icons mt-2 d-flex flex-column gap-2'>
                                <Link className='text-dark'> <i class="fa-solid fa-shuffle"></i></Link>
                                <Link className='text-dark'><i class="fa-regular fa-eye"></i></Link>
                                <Link className='text-dark'><i class="fa-solid fa-bag-shopping"></i></Link>
                                </div>
                            </div></div>
                    )
                })}

                <div className='d-flex  justify-content-center my-4'>
                    <span onClick={()=>page>1?setPage(page-1):setPage(page)}
                    className={`p-2 rounded ${page>1?"":"d-none"} border px-3`} >◀️</span>
                    {
                        [...Array(Math.floor(products.length / 8))].map((_,i)=>{
                            return <span  onClick={()=>changePage(i+1)}
                             className={`p-2 rounded ${page===i+1?"bg-dark text-light":""} border px-sm-3`} key={i}>{i+1}</span>
                        })
                    }
                    <span onClick={()=>page<Math.floor(products.length / 8)?setPage(page+1):setPage(page)} 
                    className={`p-2 rounded ${page<(products.length/8)-1?"":"d-none"} border px-3`}>▶️</span>
                </div>
        </div>
    )
}
export default Slider