import {
    FaLinkedin,
    FaInstagram,
    FaFacebook,
    FaPinterest,
    FaTwitter,
} from "react-icons/fa"
import playstoreimg from "../assets/icon-GooglePlay_1_zixjxl.avif"
import appstoreimg from "../assets/icon-AppStore_lg30tv.avif"
const Footer = () => {
    return (
        <footer className="bg-gray-100 text-gray-700 pt-12">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">

                {/* Logo Section */}
                <div>
                    <h2 className="text-2xl font-bold text-orange-500 mb-2">Swiggy</h2>
                    <p className="text-sm">© 2025 Swiggy Limited</p>
                </div>

                {/* Company */}
                <div>
                    <h3 className="font-bold mb-3">Company</h3>
                    <ul className="space-y-2 text-sm">
                        <li>About Us</li>
                        <li>Swiggy Corporate</li>
                        <li>Careers</li>
                        <li>Team</li>
                        <li>Swiggy One</li>
                        <li>Instamart</li>
                        <li>Dineout</li>
                        <li>Minis</li>
                        <li>Pyng</li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="font-bold mb-3">Contact us</h3>
                    <ul className="space-y-2 text-sm">
                        <li>Help & Support</li>
                        <li>Partner With Us</li>
                        <li>Ride With Us</li>
                    </ul>

                    <h3 className="font-bold mt-6 mb-3">Legal</h3>
                    <ul className="space-y-2 text-sm">
                        <li>Terms & Conditions</li>
                        <li>Cookie Policy</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

                {/* Cities */}
                <div>
                    <h3 className="font-bold mb-3">Available in:</h3>
                    <ul className="space-y-2 text-sm">
                        <li>Bangalore</li>
                        <li>Gurgaon</li>
                        <li>Hyderabad</li>
                        <li>Delhi</li>
                        <li>Mumbai</li>
                        <li>Pune</li>
                    </ul>
                </div>

                {/* Life at Swiggy */}
                <div>
                    <h3 className="font-bold mb-3">Life at Swiggy</h3>
                    <ul className="space-y-2 text-sm">
                        <li>Explore With Swiggy</li>
                        <li>Swiggy News</li>
                        <li>Snackables</li>
                    </ul>

                    <h3 className="font-bold mt-6 mb-3">Social Links</h3>
                    <div className="flex gap-4 text-xl ">
                        <a href="https://www.linkedin.com/company/swiggy-in/" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition">
                            <FaLinkedin />
                        </a>

                        <a href="https://www.instagram.com/swiggyindia/" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition">
                            <FaInstagram />
                        </a>

                        <a href="https://www.facebook.com/swiggy.in" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition">
                            <FaFacebook />
                        </a>

                        <a href="https://in.pinterest.com/swiggyindia/" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition">
                            <FaPinterest />
                        </a>

                        <a href="https://twitter.com/swiggy_in" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition">
                            <FaTwitter />
                        </a>
                    </div>

                </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t mt-10 py-6 px-6 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
                <p className="text-xl font-bold mb-4 md:mb-0 hover:scale-105 transition">
                    For better experience, download the Swiggy app now
                </p>

                <div className="flex gap-4">
                    <a
                        href="https://play.google.com/store/apps/details?id=in.swiggy.android"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={playstoreimg}
                            alt="Play Store"
                            className="h-12 cursor-pointer hover:scale-105 transition"
                        />
                    </a>
                    <a
                        href="https://apps.apple.com/in/app/swiggy-food-instamart-dineout/id989540920"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={appstoreimg}
                            alt="App Store"
                            className="h-12 cursor-pointer hover:scale-105 transition"
                        />
                    </a>
                </div>

            </div>
        </footer>
    )
}

export default Footer
