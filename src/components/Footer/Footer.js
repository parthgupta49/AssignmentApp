import React from 'react';
import 'tailwindcss/tailwind.css'; // Ensure you have Tailwind CSS imported
import Icons from '../common/Icons';

const Footer = () => {
    return (
        <div className='overflow-x-hidden w-full bg-cover bg-center bg-[url("https://www.badakar.com/assets/img/Screenshot%202022-02-22%20at%203.40.53%20PM.png?h=65d7d778ef8c49043d7b77a199d5074c")]'>
            <footer className="w-11/12 max-w-[1320px] mx-auto ">
                <div className="container mx-auto px-4 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="col-span-1">
                            <img
                                src="https://www.badakar.com/assets/img/Badakar-Logo-White22.png?h=04655e753af57c3db82f224ad33ac8bb"
                                alt="Badakar Logo"
                                className="w-36 mb-5"
                            />
                            <h4 className="text-white font-bold text-xs">Badakar Interiors &amp; Automation Pvt Ltd.</h4>
                            <p className="text-white text-xs mt-2 mb-5">
                                Badakar Interiors &amp; Automation is the leading Interior design company in Bangalore. We offer various Interior Design and Automation in Bangalore.
                            </p>
                            <Icons
                                customCSS={"text-white text-xs float-end"}
                            />
                        </div>
                        <div className="col-span-1">
                            <h1 className="text-gray-400 text-xs font-bold">Know More</h1>
                            <ul className="mt-2 space-y-1">
                                <li>
                                    <a href="/About-us.html" className="text-gray-400 text-xs">About Us</a>
                                </li>
                                <li>
                                    <a href="/Integrated-solutions.html" className="text-gray-400 text-xs">Integrated Solutions</a>
                                </li>
                                <li>
                                    <a href="/Application.html" className="text-gray-400 text-xs">Application</a>
                                </li>
                                <li>
                                    <a href="/Projects.html" className="text-gray-400 text-xs">Projects</a>
                                </li>
                                <li>
                                    <a href="/Careers.html" className="text-gray-400 text-xs">Career</a>
                                </li>
                                <li>
                                    <a href="/Contact.html" className="text-gray-400 text-xs">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-span-1">
                            <h4 className="text-gray-400 text-xs font-bold">Our Services</h4>
                            <ul className="mt-2 space-y-1">
                                <li>
                                    <a href="/Commercial-corporate-interiors.html" className="text-gray-400 text-xs">Commercial Interiors</a>
                                </li>
                                <li>
                                    <a href="/Corporate-interiors.html" className="text-gray-400 text-xs">Corporate Interiors</a>
                                </li>
                                <li>
                                    <a href="/Residential-home-interiors.html" className="text-gray-400 text-xs">Residential Interiors</a>
                                </li>
                                <li>
                                    <a href="/Home-Automation-Surveillance.html" className="text-gray-400 text-xs">Home Automations</a>
                                </li>
                                <li>
                                    <a href="/Fire%20Protection-HVAC.html" className="text-gray-400 text-xs">Fire Protection &amp; HVAC</a>
                                </li>
                                <li>
                                    <a href="/Digital%20Surveillance.html" className="text-gray-400 text-xs">Digital Surveillance</a>
                                </li>
                            </ul>
                            <h4 className="text-gray-400 text-xs font-bold mt-4">More Links</h4>
                            <ul className="mt-2 space-y-1">
                                <li>
                                    <a  href="/" className="text-gray-400 text-xs">Interior Designing In Bangalore</a>
                                </li>
                                <li>
                                    <a  href="/" className="text-gray-400 text-xs">Luxury Residential Interior Designing</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-span-1">
                            <h4 className="text-gray-400 text-xs font-bold">Contact Us</h4>
                            <ul className="mt-2 space-y-1">
                                <li>
                                    <a href="/" className="text-gray-400 text-xs">Mobile: +919611830222</a>
                                </li>
                                <li>
                                    <a href="/" className="text-gray-400 text-xs">
                                        Email: <span className="__cf_email__" data-cfemail="452c2b232a05272421242e24376b262a28">[email protected]</span>
                                    </a>
                                </li>
                            </ul>
                            <h4 className="text-gray-400 text-xs font-bold mt-4">Address</h4>
                            <p className="text-gray-400 text-xs">
                                42/1, 9th D Main Rd, RPC Layout, Vijay Nagar, Mysore Rd, Bengaluru, Karnataka 560104.
                            </p>
                        </div>
                    </div>
                    <p className="text-gray-400 text-xs mt-4">
                        BADAKAR Offers end-to-end interior solutions with complete detailing of your project.
                    </p>
                    <hr className="border-gray-800 my-4" />
                    <div className="flex justify-between items-center">
                        <div className="text-gray-400 text-xs flex gap-20">
                            <p className="mb-1">Copyright © 2023. All rights reserved.</p>
                            <div className="flex space-x-4">
                                <a href="/Privacy-policy.html" className="text-gray-400 text-xs">Privacy Policy</a>
                                <a href="/Terms-of-uses.html" className="text-gray-400 text-xs">Terms of Use</a>
                                <a href="/Legal.html" className="text-gray-400 text-xs">Legal</a>
                                <a  href="/" className="text-gray-400 text-xs">License</a>
                            </div>
                        </div>

                        <div className="flex items-center">
                            <a  href="/" className="text-gray-400 text-xs flex">
                                <img src="https://www.badakar.com/assets/img/flag-round-500.png?h=3a439d6ce3f81397c7437b8ac4e6de0c" className="w-4 h-4 mr-1" alt="India Flag" />
                                India
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;