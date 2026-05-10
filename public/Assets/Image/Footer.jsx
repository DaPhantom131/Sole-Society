import React from "react";

const Footer = () => {
    return(
        <React.Fragment>
                 
                    <footer>
        <div className="footer-section-one">
                        <div className="footer-section1">
                            <h4>Company</h4>
                            <li>Order</li>
                            <li>Our Story</li>
                            <li>Rewards</li>
                            <li>Nutrition & Allergy</li>
                            <li>Support</li>
                            <li>Blog</li>
                            <li>Gift Card Balance</li>
                            <li>Flavor Maps</li>
                            <li>Dirty Soda</li>
                            </div>

                    <div className="footer-section2">
                        <h4>Get Involved</h4>
                        <li>Press</li>
                        <li>Collaborate</li>
                        <li>Franchising</li>
                        <li>Franchise Store Jobs</li>
                        <li>HQ Careers</li>
                        <li>Crumbl Cares</li>
                    </div>

                    <div className="footer-section3">
                        <img src="/Assets/Image/facebook.png" alt="" width={32} />
                        <img src="/Assets/Image/instagram.png" alt="" width={32} />
                        <img src="/Assets/Image/tiktok.png" alt="" width={32} />
                        <img src="/Assets/Image/twitter.png" alt="" width={32} />
                        <img src="/Assets/Image/youtube.png" alt="" width={32} />
                        <img src="/Assets/Image/linkedin.png" alt="" width={32} />
                        <img src="/Assets/Image/pinterest.png" alt="" width={32} />

                    </div>
         </div> 

         <div className="footer-section-two">
            <h5>Crumbl</h5>
            
                    <div className="footer-section-two-p">
                        <p>&copy; 2026 all rights reserved. | Map data &copy; OpenStreetMap contributors</p>
                        <p>Privacy policy | Terms and Conditions | Gift Card/Voucher Terms | Non-edible Cookie Preference</p>
                        </div>
         </div>
                    </footer>
                 

                       
        </React.Fragment>
    )
}

export default Footer