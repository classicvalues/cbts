import React, { Component } from "react";
import ReactGA from 'react-ga';
import { NavLink } from "react-router-dom";

import Image1 from "./Image1";
import iosShare from "./assets/iosShare.png";
import iosAdd from "./assets/iosAdd.png";
import iosConfirm from "./assets/iosConfirm.png";
import android1 from "./assets/android1.png";
import android2 from "./assets/android2.png";

// import Image from "./Image";
// import logo from "./assets/favicon-192.png";
class Home extends Component {
    render() {
        ReactGA.set({ "page": "Home"});
        ReactGA.pageview("/Home");
        
        return <div>
                <h2>Welcome to Circle Back to Seattle!</h2>
                <br/>
                <h3>Updates</h3><p>Open this app twice for the latest</p>
                <ul>
                    <li><b>Moonshine moved to Willow</b> (Friday @ 10pm)<br/>
                    C1 at 10 with Todd will be in Ravenna</li>
                </ul>
                <h3>Fast facts</h3>
                <ul>
                    <li>
                        <b>Hotel</b>
                        <br />
                        <a target="_blank" rel="noopener noreferrer" href="http://www.sheratonseattle.com/">
                            Sheraton Seattle Hotel
                        </a>
                        <br />
                        <a target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/place/Sheraton+Seattle+Hotel/@47.6110957,-122.3360236,17z/data=!3m1!4b1!4m7!3m6!1s0x54906ab45f555241:0xd56f6e55dd269b72!5m1!1s2018-07-08!8m2!3d47.6110921!4d-122.333835">
                            1400 6th Ave, Seattle, WA 98101
                        </a>
                        <br />
                        Phone: 206-292-9500
                    </li>
                    <li>
                        See <a target="_blank" rel="noopener noreferrer" href="https://circlebacktoseattle.com/">
                            circlebacktoseattle.com
                        </a> for&nbsp;
                        <a target="_blank" rel="noopener noreferrer" href="https://circlebacktoseattle.com/wp-content/uploads/2018/06/Airport-to-Hotels.pdf">
                            airport to hotel instructions
                        </a>,&nbsp;
                        <a target="_blank" rel="noopener noreferrer" href="https://circlebacktoseattle.com/wp-content/uploads/2018/06/Parking-Options.pdf">
                            parking options
                        </a> and more.
                    </li>
                    <li>
                        <b>Thank you!</b>
                        <br />
                        We got the flooring set in record time
                    </li>
                    <li>
                        <b>Trails End Dance</b> with Ett McAtee and Bill Eyler<br />
                        Wed July 4, 7-10pm
                    </li>
                    <li>
                        <b>Square Dancing</b>
                        <br />
                        <NavLink to="/schedule" key="/schedule">
                            Thurs July 5 - Sat July 7
                        </NavLink>
                    </li>
                    <li>
                        <b>Keep your clubs strong!</b>
                        <br />
                        Recruiting &amp; Retention meetings in Boren on Thu 11-12, Fri 11-12, and Sat 1-2. <br />
                        Contact Brad Bruner (<a target="_top" rel="noopener noreferrer" href="mailto:brad_bruner@yahoo.com">
                            brad_bruner@yahoo.com
                        </a>) or Thom Dang (<a target="_top" rel="noopener noreferrer" href="mailto:tc_dang@yahoo.com">
                            tc_dang@yahoo.com
                        </a>) for details.
                    </li>
                    <li><b>Hospitality Rooms</b><br/>
                    Women's: 2802 , Men's: 2902 (Dance hours only)
                    </li>
                    <li>
                        <b>Fun Badge Tour</b>
                        <br />
                        Sun July 8 - be there!
                    </li>
                </ul>
                <br />
                {this.installInstructions()}
                <br />
                <h2>Feedback?</h2>
                What do you like? What would you suggest future conventions do differently?<br />
                Send an email to <a target="_top" rel="noopener noreferrer" href="mailto: cbts.talk@gmail.com">
                    {" "}
                    cbts.talk@gmail.com
                </a>
                <br />
                <br />
                <br />
                <span className="finePrint">
                    <p>Updated: Thu Jul  5 11:33:26 PDT 2018</p>
                </span>
                <span className="finePrint">
                    <p>
                        Details: {navigator.platform} {window.navigator.userAgent}{" "}
                    </p>
                </span>
            </div>;
    }

    installInstructions() {
        const isIos = () => {
            const userAgent = window.navigator.userAgent.toLowerCase();
            return /iphone|ipad|ipod/.test( userAgent );
        }
        // Detects if device is in standalone mode
        const isInStandaloneModeIos = () => ('standalone' in window.navigator) && (window.navigator.standalone);
         
        if (isIos() && !isInStandaloneModeIos()) {
        return <div>
            <h3>Install this web site as an app</h3><br/>
            <b>iPhone &amp; iPad</b><br/>
            <ul>
            <li>Make sure this page is open in Safari (the default web browser)</li>
            <li>Touch the share icon and choose Add to Home Screen<br/></li>
            </ul>
            <Image1 src={iosShare} className="imageTips" /><br/>
            <Image1 src={iosAdd} className="imageTips" /><br/>
            <Image1 src={iosConfirm} className="imageTips" />
        </div>
        }

        var ua = navigator.userAgent.toLowerCase();
        var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");

        var isInStandaloneAndroid = window.matchMedia('(display-mode: standalone)').matches;
        
        if (isAndroid && !isInStandaloneAndroid) {
            return <div>
                <h3>Install this web site as an app</h3><br/>
                <b>Android</b><br/>
                <ul>
                    <li>Make sure this page is open in Chrome (the default web browser)</li>
                    <li>Touch the overflow button (three vertical dots) and choose Add to Home Screen</li>
                </ul>
                <Image1 src={android1} maxWidth="200px" className="imageTips" /><br/>
                <Image1 src={android2} maxWidth="200px" className="imageTips" />
            </div>
            }
    }
}

export default Home;
