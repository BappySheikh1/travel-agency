import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import banner1 from '../images/About-image/15.jpg'
import Review from "../Components/AboutPage/Review";
import ContactFrom from '../Components/AboutPage/ContactFrom'

const Contact = () => {
    return (
        <div style={{background: `url(${banner1.src})`,backgroundAttachment:'fixed', backgroundPosition:'center', backgroundRepeat:'no-repeat'}}>
            {/* navbar start*/}
            <div className="pt-2 bg-opacity-20 bg-black">
                <Navbar />
            </div>
            {/* navbar end*/}
               <div className="bg-opacity-20 flex items-center text-center justify-center bg-black h-[300px] lg:h-[500px]">
                    <div>
                        <p className="text-3xl text-gray-300 opacity-50 font-bold">GET IN TOUCH</p>
                        <h1 className="text-6xl mt-2 font-bold text-white">CONTACT <span className="text-primary">US</span></h1>
                    </div>
               </div>
            {/* Contact page start */}
            <ContactFrom />
            {/* Contact page start */}

            {/* Review start */}
            
            {/* Review End */}

            {/* Footer start */}
            <div className="bg-blue-900">
                <Footer />
            </div>
            {/* Footer end */}
        </div>
    );
};

export default Contact;