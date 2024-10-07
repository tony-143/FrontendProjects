 import DropdownMenu from './components/DropDown' 
 import './cssPages/navbar.css'


function Navbar(){

 
 return  ( <>
    <div>

        <div style={{backgroundColor: '#203764',fontSize: '9px'}} className="">
            <div style={{backgroundColor: '#203764',fontSize: '13px'}} className="container px-5 align-items-center text-light py-2 d-flex justify-content-between">
                <div className='d-flex fw-semibold gap-3'>
                    <a href="https://alumni.cbit.edu.in/?_gl=1*1ksxh01*_ga*MTkwODk2MjE5NS4xNzI3NDEyMjg4*_ga_YT0DZYY4CF*MTcyODI3NzI4Ny41LjEuMTcyODI3OTY4NS4wLjAuMA..">Alumni</a>
                    <a href="https://cbit.edu.in/testimonials/">Testimonials</a>
                    <a href="https://cbit.edu.in/careers/">Careers</a>
                    <a href="https://cbit.edu.in/userfiles/link/AICTE-EOA-Report-ALL-2008-2025-Approvals.pdf">AICTE Approval</a>
                    <a href="https://cbit.edu.in/nirf-24/">NIRF-24</a>
                    <a href="https://cbit.edu.in/wp-content/uploads/2024/09/Women-Protection-Cell-2024.pdf">Women Protection-Cell-2024</a>
                    <a href="https://cbit.edu.in/userfiles/file/Civil-Engineering-Consultancy-Brochure.pdf">Nirman Bharathi Consultancy Center, Civil</a>
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
                            <a className="dropdown-item" href="https://cbit.edu.in/about/">About CBIT</a>
                            <a className="dropdown-item" href="https://cbit.edu.in/about/vision-mission/">Vision & Mission</a>
                            <a className="dropdown-item" href="https://cbit.edu.in/about/management/">Chairman’s Desk</a>
                            <a className="dropdown-item" href="https://cbit.edu.in/about/directors-desk/">Director’s desk</a>
                            <a className="dropdown-item" href="https://cbit.edu.in/about/principals-desk/">Principal’s Desk</a>
                            <a className="dropdown-item" href="https://cbit.edu.in/about/affiliations/">Affiliations</a>
                            <a className="dropdown-item" href="https://cbit.edu.in/about/policy/">Policy</a>
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
                            <a className="dropdown-item" href="https://cbit.edu.in/admissions/">Admission Procedure</a>
                            <a className="dropdown-item" href="https://cbit.edu.in/admissions/courses-offered/">Courses Offered</a>
                            <a className="dropdown-item" href="https://cbit.edu.in/admissions/fee-structure/">Fee Structure</a>
                            <a className="dropdown-item" href="https://cbit.edu.in/admissions/admission-form/">Admission Form</a>

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
                            <a className="dropdown-item" href="https://cbit.edu.in/all-programmes/">All Programmes</a>
                            <a className="dropdown-item" href="https://cbit.edu.in/governing-body/">Governing Body</a>
                            <a className="dropdown-item" href="https://cbit.edu.in/academic-council/">Academic Council</a>
                            <a className="dropdown-item" href="https://cbit.edu.in/academic-calendar/">Academic Calendar</a>
                            <a className="dropdown-item" href="https://cbit.edu.in/research/">Research</a>

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
                            <a className="dropdown-item" href="https://cbit.edu.in/departments/civil-engineering/">Civil Engineering</a>
                            <a className="dropdown-item" href="https://cbit.edu.in/departments/electrical-and-electronics-engineering/">Electrical and Electronics Engineering</a>
                            <a className="dropdown-item" href="https://cbit.edu.in/departments/mechanical-engineering/">Mechanical Engineering</a>
                            <a className="dropdown-item" href="https://cbit.edu.in/departments/electronics-and-communication-engineering/">Electronics and Communication Engineering</a>
                            <a className="dropdown-item" href="https://cbit.edu.in/departments/computer-science-and-engineering/">Computer Science and Engineering</a>
                            <a className="dropdown-item" href="https://cbit.edu.in/departments/humanities-sciences/">Humanities & Sciences</a>
                            <a className="dropdown-item" href="https://cbit.edu.in/departments/master-of-business-administration/">Master of Business Administration</a>
                            <a className="dropdown-item" href="https://cbit.edu.in/departments/diploma-courses/">Diploma Courses</a>

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
                            <a className="dropdown-item" href="https://cbit.edu.in/placements/">Introduction</a>
                            <a className="dropdown-item" href="https://cbit.edu.in/placements/placement-process/">Placement Process</a>
                            <a className="dropdown-item" href="https://cbit.edu.in/placements/training-programs/">Training Programs</a>
                            <a className="dropdown-item" href="https://cbit.edu.in/placements/industry-academia-collaboration/">Industry Academia Collaboration</a>
                            <a className="dropdown-item" href="https://cbit.edu.in/placements/placements-statistics/">Placements Statistics</a>
                            <a className="dropdown-item" href="https://cbit.edu.in/placements/placements-contact/">Placements Contact</a>


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
                            <a className="dropdown-item" href="https://cbitpdtrexams.com/Login.aspx?ReturnUrl=%2f">Autonomous</a>
                            <a className="dropdown-item" href="https://cbit.edu.in/exam-cell/">Non Autonomous
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
                            <a className="dropdown-item" href="https://alumni.cbit.edu.in/?_gl=1*7a4ebs*_ga*MTkwODk2MjE5NS4xNzI3NDEyMjg4*_ga_YT0DZYY4CF*MTcyODI3NzI4Ny41LjEuMTcyODI4MTQ4NC4wLjAuMA..">Alumni Portal</a>
                            <a className="dropdown-item" href="https://cbit.edu.in/alumni-ay-22-23/">Alumni AY-22-23</a>
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
                            <a className="dropdown-item" href="https://cbit.edu.in/iqac/">Quality Policy</a>
                            <a className="dropdown-item" href="https://cbit.edu.in/iqac/naac/">NAAC</a>
                            <a className="dropdown-item" href="https://cbit.edu.in/iqac/aqar/">AQAR</a>
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
                            <a className="dropdown-item" href="https://cbit.edu.in/infrastructure/building-area/">Building Area</a>
                            <a className="dropdown-item" href="https://cbit.edu.in/infrastructure/lab/">Laboratory</a>
                            <a className="dropdown-item" href="https://cbit.edu.in/infrastructure/library/">Library</a>
                            <a className="dropdown-item" href="https://cbit.edu.in/infrastructure/auditorium/">Auditorium</a>
                            <a className="dropdown-item" href="https://cbit.edu.in/infrastructure/computer-center/">Computer Center</a>
                            <a className="dropdown-item" href="https://cbit.edu.in/infrastructure/health-services/">Health Services</a>
                            <a className="dropdown-item" href="https://cbit.edu.in/infrastructure/sports-gymnasium/">Sports & Gymnasium</a>
                            <a className="dropdown-item" href="https://cbit.edu.in/infrastructure/cafeteria/">Cafeteria</a>

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
                            <a className="dropdown-item" href="https://cbit.edu.in/events/">Events</a>
                            <a className="dropdown-item" href="https://cbit.edu.in/gallery/">Gallery</a>
                            <a className="dropdown-item" href="https://cbit.edu.in/news-letter/">News Letter</a>
                            <a className="dropdown-item" href="https://www.youtube.com/@cbitpdtr">Videos</a>
                            <a className="dropdown-item" href="https://cbit.edu.in/cbit-campus-facilities/">CBIT Campus Facilities Video</a>



                        </div>
                    </div>
                </li>

                <li>
                    <a href="https://cbit.edu.in/contact/">Contact</a>
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