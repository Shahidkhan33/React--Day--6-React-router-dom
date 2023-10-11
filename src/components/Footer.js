 import React from "react"
 function Footer(){
    return(
        <>
        <footer>
        <div className="container">
            
            <div className="row">
                <div className="col-4">
                    <div className="footerhead">Course Library</div>
                    <a href="#">Premium Courses</a><br/>
                    <a href="#">Free Library</a><br/>
                    <a href="#">Offers</a>
                </div>
                <div className="col-4">
                    <div className="footerhead">Practise</div>
                    <a href="#">CodeKata</a><br/>
                    <a href="#">WebKata</a><br/>
                    <a href="#">IDE</a>

                </div>
                <div className="col-4">
                    <div className="footerhead">Products</div>
                    <a href="#">HackerKid</a><br/>
                    <a href="#">GUVI for Corporates</a>
                </div>

            </div><br/>


            <div className="row">
                <div className="col-4">
                    <div className="footerhead">ZEN CLASS Live Classes</div>
                    <a href="#">Full Stack Development</a><br/>
                    <a href="#">Automation & Testing Program</a>
                </div>
                <div className="col-4">
                    <div className="footerhead">Resources</div>
                    <a href="#">Rewards</a><br/>
                    <a href="#">Refer a Friend</a><br/>
                    <a href="#">Blogs</a><br/>
                    <a href="#">Forum Support</a>
                </div>
                <div className="col-4">
                    <div className="footerhead">Company</div>
                    <a href="#">Refund Policy</a><br/>
                    <a href="#">FAQS</a><br/>
                    <a href="#">Contact Us</a>                  
                </div>
            </div>

        </div>
        </footer>
        </>
    )
}

export default Footer