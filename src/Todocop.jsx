import React from 'react'
import Mybarchart from './Mybarchart'
import MYPiechart from './Mypiechart'
// import Godswill from './'
// import { useState } from 'react'


 import './Todocop1.css'
 import './Todocop2.css'
 
export default function Todocop()  {
   
//  const [darkMode, setDarkMode] = useState(false)
//  const toggleClick = () =>{
//     setDarkMode("dark") 
   
 
  return (
    <React.Fragment>

      {/* <div className = {darkMode ? 'white' : 'dark' }>  */}
       
    <nav>
        {/* <h1 className = {darkMode ? 'dark' : 'white' } >Hello World
            
        </h1>
        <button onClick={toggleClick}>try</button> */}
        <div className="logo-name">
            <div className="logo-name">
                <img src="/assets/logo.png" alt=""/>
            </div>

            
        </div>

        <div className="menu-items">
            <ul className="nav-links">
                <li><a href="/broker/brokerDashbord/brokerDashboard.html">
                    <i className="uil uil-estate"></i>
                    <span className="link-name">Dahsboard</span>
                </a></li>
                <li><a href="/pages/brokerclientpage/brokerclient.html">
                    
                    <i className="uil uil-users-alt"></i>
                    <span className="link-name">Profile</span>
                </a></li>
                <li><a href="/broker/brokerReferral/brokerReferral.html">
                    <i className="uil uil-elipsis-double-v-alt"></i>
                    <span className="link-name">Product</span>
                </a></li>

                <li><a href="/broker/brokerReferral/brokerReferral.html">
                    <i className="uil uil-elipsis-double-v-alt"></i>
                    <span className="link-name">Current Task</span>
                </a></li>
                
            </ul>
            
             <ul className="logout-mode">
                <li><a href="/broker/brokerlogin$signup/brokerlogin.html">
                    <i className="uil uil-signout"></i>
                    <span className="link-name">Logout</span>
                </a></li>

                {/* <li className="mode">
                    <a href="#">
                        <i className="uil uil-moon"></i>
                    <span className="link-name">Dark Mode</span>
                </a>

                <div className="mode-toggle">
                  <span className="switch" ></span>
                </div>
            </li> */}
            </ul> 
        </div>
    </nav>

    <section className="dashboard">

        {/* <!-- this is where is the top bar with green backgound begins --> */}
        <div className="top">
            <i className="uil uil-bars sidebar-toggle"></i>

            <div className="search-box ">
                <h1 className="greet">Hello, Godswill</h1>
                <p style={{color:"#FFFFFF"}} className="nav-date">Today Is Thursday, 22 September, 2022</p>
            </div>

            <div className="search-box">
                <i className="uil uil-search"></i>
                <input type="text" placeHolder="Search here..."/>
            </div>
            
            
               <a href="">
                <div className="notification">
                    <i class="uil uil-bell"  id="noti-bell"></i>
                    <span className="badge"></span>
                   </div>
               </a>
            

            
            {/* <img src={Godswill} alt=""/> */}
     
     {/*<!-- This is where the top bar with green backgound  ends -->     */}
        </div>
        {/* <!-- You code should start below this comment --> */}

        <div className="dash-content">
            <div className="overview">
               <div className="title">
                   
                   <div className="text">Dashboard</div> 
                   
                   <div className="text">Today</div>
               </div>

               <div className="boxes">
                   <div className="box box1">
                      
                       <div className="box-content">
                        <div className="">Total Clients</div>
                        <br/>
                       <div className="number">50,120</div>
                       </div>
                   </div>

                   <div className="box box2">
                    <div className="box-content">
                        <div className="">Sold Product</div>
                        <br/>
                       <div className="number">50,120</div>
                       </div>
                   </div>

                   <div className="box box2">
                       <div className="box-content">
                           <div className="">Cancelled</div>
                            <br/>
                          <div className="number">50,120</div>
                       </div>
                 </div>

                  <div className="box box2">
                     
                       <div className="box-content">
                           <div className="">Pending</div>
                           <br/>
                           <div className="number">50,120</div>
                       </div>
                  </div>

                   <div className="box box3">
                       <div className="weather-name"> Weather Report</div>
                       <div className="weather-image" > 
                           <div className="weather-cycle"></div>
                           <span><img src='#'/></span>
                       </div>

                       <div className="weather-rate">
                           <span className="weather-text">Today:</span> <span class="weather-num">29</span>
                       </div>
                   </div>

                </div>
           </div> 

           <div className="activity">


                 <div className='mypiechart'>
                 <MYPiechart/>
                 </div>

                  <Mybarchart/>
                  
           </div>  
       </div>

        {/* <!-- your code should end here, do not go outside this section --> */}
   </section>



     

  
    


    </React.Fragment>
  )
}
