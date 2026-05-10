import React from "react";
import "./Footer.css"

const Footer = () =>{
   return(
       <footer>
           <div className="footer-section-one">
               <div className="footer-section1">
                   <h3>Company</h3>
                   <li>Order</li>
                   <li>Our Story</li>
                   <li>Rewards</li>
                   <li>Support</li>
                   <li>Blog</li>
                   <li>Gift Card Balance</li>
               </div>

               <div className="footer-section2">
                   <h3>Get Involved</h3>
                   <li>Press</li>
                   <li>Collaborate</li>
                   <li>Franchising</li>
                   <li>Franchise Store Jobs</li>
                   <li>HQ Careers</li>
                   <li>We Care</li>
               </div>

               <div className="footer-section3">
                   <img src="/Assets/Image/facebook.png" alt="" width={20} />
                   <img src="/Assets/Image/instagram.png" alt="" width={20} />
                   <img src="/Assets/Image/tiktok.png" alt="" width={20} />
                   <img src="/Assets/Image/twitter.png" alt="" width={20} />
                   <img src="/Assets/Image/youtube.png" alt="" width={20} />
                   <img src="/Assets/Image/linkedin.png" alt="" width={20} />
                   <img src="/Assets/Image/pinterest.png" alt="" width={20} />

               </div>
           </div>

           <div className="footer-section-two">
               <h4><img src="/Assets/Image/text-logo.png" alt="" width={200} /></h4>

               <div className="footer-section-two-p">
                   <p>&copy; {new Date().getFullYear()} all rights reserved. | Map data &copy; OpenStreetMap contributors</p>
                   <p>Privacy policy | Terms and Conditions | Gift Card/Voucher Terms</p>
               </div>
           </div>
       </footer>

   ) 
}

export default Footer
