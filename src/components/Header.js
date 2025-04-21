import { useState } from "react";
const Header = () => {

    const [hover, setHover] = useState(0);

    return(
        <>
            <header className="header">
               <div className="left-section">
                <img src="logo_iuc.jpg" alt="IUC Logo" className="logo" />
                    <div className="text-block">
                        <h1>IUC Computers</h1>
                    </div>
               </div> 
               <div className="right-section"> 
                    <div className="contact">
                        <span>📧 <a href="mailto:info@iucedu.com">info@iucedu.com</a></span>
                        <span>📞 044-43539196 / 044-47940112 / +91-7418048039</span>
                    </div>
                    <div className="social-icons">                        
                        <a href="https://www.facebook.com/IUCComputerEducation">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://www.instagram.com/iuc_computers/#">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.youtube.com/channel/UCPwsj4xAXDaXZ8v6c62KORw">
                            <i className="fab fa-youtube"></i>
                        </a>
                    </div>
               </div>
            </header>
        </>
    );
}
export default Header;