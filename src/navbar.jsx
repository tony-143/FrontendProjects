 import DropdownMenu from './components/DropDown' 
 import './cssPages/navbar.css'


function Navbar(){

 
 return  ( <>
    <div>

        <div style={{backgroundColor: '#203764',fontSize: '9px'}} className="">
            <div style={{backgroundColor: '#203764',fontSize: '13px'}} className="container px-5 align-items-center text-light py-2 d-flex justify-content-between">
                <div className='d-flex fw-semibold gap-3'>
                    <a href="">Alumni</a>
                    <a href="">Testimonials</a>
                    <a href="">Careers</a>
                    <a href="">AICTE Approval</a>
                    <a href="">NIRF-24</a>
                    <a href="">Women Protection-Cell-2024</a>
                    <a href="">Nirman Bharathi Consultancy Center, Civil</a>
                </div>

                <div className='d-flex gap-3 align-items-center'>
                    <div className=''>Admission open for 2023-2024 - APPLY NOW</div>
                    <div className='d-flex fs-5 gap-3'>
                        <i className="fa-brands fa-square-facebook"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-instagram"></i>
                    </div>
                </div>

            </div>
        </div>



        <div className="container py-2 justify-content-between d-flex align-items-center">
            <div>
                <img src="https://cbit.edu.in/wp-content/uploads/2023/06/logo-cbit-new-1-600x102.jpg" alt="" />
            </div>

            <div className="d-flex gap-2">
                <div style={{width: '4px',backgroundColor: '#B6D230'}} className=' border'></div>

                <div style={{fontSize: '14px'}} className='d-flex me-3 flex-column gap-0 '>
                    <li>Recognised by UGC Under the section 2(f) & 12(B) of UGC Act, 1956</li>
                    <li> Accredited by NAAC with "A" Grade & NBA (Civil, EEE, ECE & CSE</li>
                    <li>Approved by AICTE, New Delhi, Affiliated of JNTUA, Anantapuramu</li>
                    <li>Approved by S.B.T.E.T. Andra Pradesh</li>
                </div>
                <div className='d-flex align-items-center'>
                    <button style={{background: '#4175FC'}} className='text-light btn px-4 py-2  rounded-pill'>Apply Now</button>
                </div>
            </div>
        </div>


        <div style={{backgroundColor: '#6755A3' ,zIndex:999}} className=''>
        
            <div className="container d-flex gap-4  px-5 py-2 align-items-center justify-content-center text-light">
                <li><span className='span '>Home</span></li>
                <li>
                    <div className="dropdown">
                        <div className="d-inline-flex align-items-center">
                            <span>About</span>
                            <i style="font-size: 7px;" className="fa-solid fa-chevron-down ms-3"></i>
                        </div>
                        <div style={{zIndex:999}} className="dropdown-menu ">
                            <a className="dropdown-item" href="#">About CBIT</a>
                            <a className="dropdown-item" href="#">Vision & Mission</a>
                            <a className="dropdown-item" href="#">Chairman’s Desk</a>
                            <a className="dropdown-item" href="#">Director’s desk</a>
                            <a className="dropdown-item" href="#">Principal’s Desk</a>
                            <a className="dropdown-item" href="#">Affiliations</a>
                            <a className="dropdown-item" href="#">Policy</a>
                        </div>
                    </div>
                </li>


                <li>
                    <div className="dropdown">
                        <div className="d-inline-flex align-items-center">
                            <span>Admissions</span>
                            <i style="font-size: 7px;" className="fa-solid fa-chevron-down ms-3"></i>
                        </div>
                        <div className="dropdown-menu ">
                            <a className="dropdown-item" href="#">Admission Procedure</a>
                            <a className="dropdown-item" href="#">Courses Offered</a>
                            <a className="dropdown-item" href="#">Fee Structure</a>
                            <a className="dropdown-item" href="#">Admission Form</a>

                        </div>
                    </div>
                </li>



                <li>
                    <div className="dropdown">
                        <div className="d-inline-flex align-items-center">
                            <span>Academics</span>
                            <i style="font-size: 7px;" className="fa-solid fa-chevron-down ms-3"></i>
                        </div>
                        <div className="dropdown-menu ">
                            <a className="dropdown-item" href="#">All Programmes</a>
                            <a className="dropdown-item" href="#">Governing Body</a>
                            <a className="dropdown-item" href="#">Academic Council</a>
                            <a className="dropdown-item" href="#">Academic Calendar</a>
                            <a className="dropdown-item" href="#">Research</a>

                        </div>
                    </div>
                </li>


                <li>
                    <div className="dropdown">
                        <div className="d-inline-flex align-items-center">
                            <span>Departments</span>
                            <i style="font-size: 7px;" className="fa-solid fa-chevron-down ms-3"></i>
                        </div>
                        <div className="dropdown-menu ">
                            <a className="dropdown-item" href="#">Civil Engineering</a>
                            <a className="dropdown-item" href="#">Electrical and Electronics Engineering</a>
                            <a className="dropdown-item" href="#">Mechanical Engineering</a>
                            <a className="dropdown-item" href="#">Electronics and Communication Engineering</a>
                            <a className="dropdown-item" href="#">Computer Science and Engineering</a>
                            <a className="dropdown-item" href="#">Humanities & Sciences</a>
                            <a className="dropdown-item" href="#">Master of Business Administration</a>
                            <a className="dropdown-item" href="#">Diploma Courses</a>

                        </div>
                    </div>
                </li>



                <li>
                    <div className="dropdown">
                        <div className="d-inline-flex align-items-center">
                            <span>Placements</span>
                            <i style="font-size: 7px;" className="fa-solid fa-chevron-down ms-3"></i>
                        </div>
                        <div className="dropdown-menu ">
                            <a className="dropdown-item" href="#">Introduction</a>
                            <a className="dropdown-item" href="#">Placement Process</a>
                            <a className="dropdown-item" href="#">Training Programs</a>
                            <a className="dropdown-item" href="#">Industry Academia Collaboration</a>
                            <a className="dropdown-item" href="#">Placements Statistics</a>
                            <a className="dropdown-item" href="#">Placements Contact</a>


                        </div>
                    </div>
                </li>


                <li>
                    <div className="dropdown">
                        <div className="d-inline-flex align-items-center">
                            <span>Exam Cell</span>
                            <i style="font-size: 7px;" className="fa-solid fa-chevron-down ms-3"></i>
                        </div>
                        <div className="dropdown-menu ">
                            <a className="dropdown-item" href="#">Autonomous</a>
                            <a className="dropdown-item" href="#">Non Autonomous
                </a>
                        </div>
                    </div>
                </li>



                <li>
                    <div className="dropdown">
                        <div className="d-inline-flex align-items-center">
                            <span>Alumni</span>
                            <i style="font-size: 7px;" className="fa-solid fa-chevron-down ms-3"></i>
                        </div>
                        <div className="dropdown-menu ">
                            <a className="dropdown-item" href="#">Alumni Portal</a>
                            <a className="dropdown-item" href="#">Alumni AY-22-23</a>
                        </div>
                    </div>
                </li>



                <li>
                    <div className="dropdown">
                        <div className="d-inline-flex align-items-center">
                            <span>IQAC</span>
                            <i style="font-size: 7px;" className="fa-solid fa-chevron-down ms-3"></i>
                        </div>
                        <div className="dropdown-menu ">
                            <a className="dropdown-item" href="#">Quality Policy</a>
                            <a className="dropdown-item" href="#">NAAC</a>
                            <a className="dropdown-item" href="#">AQAR</a>
                        </div>
                    </div>
                </li>



                <li>
                    <div className="dropdown">
                        <div className="d-inline-flex align-items-center">
                            <span>Infrastructure</span>
                            <i style="font-size: 7px;" className="fa-solid fa-chevron-down ms-3"></i>
                        </div>
                        <div className="dropdown-menu ">
                            <a className="dropdown-item" href="#">Building Area</a>
                            <a className="dropdown-item" href="#">Laboratory</a>
                            <a className="dropdown-item" href="#">Library</a>
                            <a className="dropdown-item" href="#">Auditorium</a>
                            <a className="dropdown-item" href="#">Computer Center</a>
                            <a className="dropdown-item" href="#">Health Services</a>
         <a className="dropdown-item" href="#">Sports & Gymnasium</a>
                            <a className="dropdown-item" href="#">Cafeteria</a>

                        </div>
                    </div>
                </li>



                <li>
                    <div className="dropdown">
                        <div className="d-inline-flex align-items-center">
                            <span>Media</span>
                            <i style="font-size: 7px;" className="fa-solid fa-chevron-down ms-3"></i>
                        </div>
                        <div className="dropdown-menu ">
                            <a className="dropdown-item" href="#">Events</a>
                            <a className="dropdown-item" href="#">Gallery</a>
                            <a className="dropdown-item" href="#">News Letter</a>
                            <a className="dropdown-item" href="#">Videos</a>
                            <a className="dropdown-item" href="#">CBIT Campus Facilities Video</a>



                        </div>
                    </div>
                </li>

                <li>
                    <span className='span'>Contact</span>
                </li>

                
            <span className=''>
            <i className="fa-solid text-light fa-magnifying-glass"></i>
            </span>

            </div>
        </div>











    </div>

    </> )

                    }
    
    
export default Navbar