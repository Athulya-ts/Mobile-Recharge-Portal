import "./main.css"
import { useEffect } from "react";

const LandingPage = () => {
    const handleGetStartedClick = () => {
        const userDiv3 = document.querySelector(".user-div-3");
        userDiv3.scrollIntoView({ behavior: "smooth" });
      };

      useEffect(() => {
    const slide = document.querySelector(".slide");

    // Function to handle the seamless loop
    const handleAnimation = () => {
      const images = slide.querySelectorAll("img");
      const cloneImages = Array.from(images).map((img) => img.cloneNode(true));

      cloneImages.forEach((clone) => {
        slide.appendChild(clone);
      });

      slide.style.width = `${
        parseInt(getComputedStyle(slide).width) * 2
      }px`;

      const animation = slide.animate(
        [
          { transform: "translateX(0)" },
          { transform: `translateX(-${slide.offsetWidth}px)` },
        ],
        {
          duration: 40000, // Adjust the duration as needed
          iterations: Infinity,
        }
      );

      animation.pause(); // Pause the initial animation

      // Start a new animation after the first one completes
      animation.onfinish = () => {
        handleAnimation();
      };

      // Start the initial animation
      animation.play();
    };

    handleAnimation();
  }, []);


  return (
    <div className="landing-page-bg">
    <div className = "user-page1">
        <div className="user-div-1">
            <img src = "https://img.freepik.com/free-photo/3d-hand-using-online-banking-app-smartphone_107791-16639.jpg?w=740&t=st=1706025428~exp=1706026028~hmac=05fc664ea56545df41766a2e67a43f58105020a96bafc3620c5fa8dfb6dc791c" width = {600} height = {"auto"}/>
        </div>
        <div className="user-div-2">
            <p className="p1">Welcome to EZ-Recharge App.</p>
            <p className="p2">Recharge Online --> Faster recharges - anywhere, any time</p>
            <p className="p2">Your one-stop solution for mobile recharges! Recharge your mobile balance, get add-ons, and more.<u className = "u-link" onClick={handleGetStartedClick}>Get Started.</u></p>
        </div>
    </div>
    <div className="user-div-3">
        <br/><br/>
        <p className="p1">Trending 🔥</p>
        <div className="trend-border">
            <div className="trend-border-box">
                <div className="p2">
                    <div className="trend-partition">
                        <p className="trending-airtel">&nbsp;&nbsp;Airtel</p>
                        <ul className="trend-data-plan-display">
                            <li className="li-1">Rs. 509</li>
                            <li className="li-2">6 GB</li>
                            <li className="li-3">1 month</li>
                        </ul>
                        <ul className="trend-data-plan-display">
                            <li className="li-1">Unlimited local STD & Roaming Calls</li>
                            <li className="li-2">data</li>
                            <li className="li-3">validity</li>
                        </ul>
                    </div>
                    <p>&nbsp;&nbsp;Additional benefits</p>
                    <ul className="trend-horizontal-scroll">
                        <li>Get Rs.100 Cashback on FastTag</li>
                        <li>Apollo 24|7 Cashback</li>
                        <li>Get Rs.100 Cashback on FastTag</li>
                    </ul>
                </div>
            </div>
            <div className="trend-border-box">
                <div className="p2">
                    <div className="trend-partition">
                        <p className="trending-jio">&nbsp;&nbsp;Jio</p>
                        <ul className="trend-data-plan-display">
                            <li className="li-1">Rs. 509</li>
                            <li className="li-2">6 GB</li>
                            <li className="li-3">1 month</li>
                        </ul>
                        <ul className="trend-data-plan-display">
                            <li className="li-1">Unlimited local STD & Roaming Calls</li>
                            <li className="li-2">data</li>
                            <li className="li-3">validity</li>
                        </ul>
                    </div>
                    <p>&nbsp;&nbsp;Additional benefits</p>
                    <ul className="trend-horizontal-scroll">
                        <li>Get Rs.100 Cashback on FastTag</li>
                        <li>Apollo 24|7 Cashback</li>
                        <li>Get Rs.100 Cashback on FastTag</li>
                    </ul>
                </div>
            </div>
            <div className="trend-border-box">
                <div className="p2">
                    <div className="trend-partition">
                        <p className="trending-bsnl">&nbsp;&nbsp;BSNL</p>
                        <ul className="trend-data-plan-display">
                            <li className="li-1">Rs. 509</li>
                            <li className="li-2">6 GB</li>
                            <li className="li-3">1 month</li>
                        </ul>
                        <ul className="trend-data-plan-display">
                            <li className="li-1">Unlimited local STD & Roaming Calls</li>
                            <li className="li-2">data</li>
                            <li className="li-3">validity</li>
                        </ul>
                    </div>
                        <p>&nbsp;&nbsp;Additional benefits</p>
                        <ul className="trend-horizontal-scroll">
                            <li>Get Rs.100 Cashback on FastTag</li>
                            <li>Apollo 24|7 Cashback</li>
                            <li>Get Rs.100 Cashback on FastTag</li>
                        </ul>
                    </div>
                </div>
            </div>
            <br/><br/>
            <p className="p1">Our partners</p>
            <div className="slideshow-container">
                <div className="slide-wrapper" id="slide-show">
                    <div className="slide">
                        <img src = "https://as2.ftcdn.net/v2/jpg/04/06/20/97/1000_F_406209784_locbSTzqoqdlzSmc8MkIgGodVukiseqT.jpg" alt = "jio"width = {170} height = {"auto"}/>
                        <img src = "https://www.logo.wine/a/logo/Airtel_India/Airtel_India-Logo.wine.svg" alt = "airtel"width = {170} height = {"auto"}/>
                        <img src = "https://download.logo.wine/logo/Bharat_Sanchar_Nigam_Limited/Bharat_Sanchar_Nigam_Limited-Logo.wine.png" alt = "bsnl" width = {170} height = {"auto"}/>
                        <img src = "https://www.edigitalagency.com.au/wp-content/uploads/new-vodafone-logo-png-latest.png" alt ="vodafone" width = {170} height = {"auto"}/>
                        <img src = "https://www.iconspng.com/uploads/tata-docomo-logo.png" alt = "docomo"width = {170} height = {"auto"}/>
                        <img src = "https://content.jdmagicbox.com/comp/vellore/f3/9999px416.x416.210107121437.y3f3/catalogue/hathway-broadband-vellore-vellore-ho-vellore-internet-service-providers-vwgqpl6l8e.jpg?clr=" alt = "hathway"width = {170} height = {"auto"}/>
                        <img src = "data:image/png;base64,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" alt = "aircel" width = {170} height = {"auto"}/>
                        <img src = "data:image/png;base64,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" alt = "idea" width = {170} height = {"auto"}/>
                        <img src = "https://as2.ftcdn.net/v2/jpg/04/06/20/97/1000_F_406209784_locbSTzqoqdlzSmc8MkIgGodVukiseqT.jpg" alt = "jio"width = {170} height = {"auto"}/>
                        <img src = "https://www.logo.wine/a/logo/Airtel_India/Airtel_India-Logo.wine.svg" alt = "airtel"width = {170} height = {"auto"}/>
                        <img src = "https://download.logo.wine/logo/Bharat_Sanchar_Nigam_Limited/Bharat_Sanchar_Nigam_Limited-Logo.wine.png" alt = "bsnl" width = {170} height = {"auto"}/>
                        <img src = "https://www.edigitalagency.com.au/wp-content/uploads/new-vodafone-logo-png-latest.png" alt ="vodafone" width = {170} height = {"auto"}/>
                        <img src = "https://www.iconspng.com/uploads/tata-docomo-logo.png" alt = "docomo"width = {170} height = {"auto"}/>
                        <img src = "https://content.jdmagicbox.com/comp/vellore/f3/9999px416.x416.210107121437.y3f3/catalogue/hathway-broadband-vellore-vellore-ho-vellore-internet-service-providers-vwgqpl6l8e.jpg?clr=" alt = "hathway"width = {170} height = {"auto"}/>
                        <img src = "data:image/png;base64,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" alt = "aircel" width = {170} height = {"auto"}/>
                        <img src = "data:image/png;base64,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" alt = "idea" width = {170} height = {"auto"}/>
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="footer-container">
                    <div className="footer-section">
                        <h3>Quick Links</h3>
                        <ul className="footer-ul">
                            <p>Home</p>
                            <p>About Us</p>
                            <p>Contact Us</p>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h3>Contact Information</h3>
                        <p>Email: info@example.com</p>
                        <p>Phone: +123 456 7890</p>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2024 Ez-Recharge Mobile Recharge Portal. All rights reserved.</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default LandingPage

