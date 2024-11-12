import Navbar from '../components/common/Navbar';
import Footer from '../components/Footer/Footer';
import HeroSection from '../components/Section1/HeroSection';
import Section2 from '../components/section2/Section2';
import Section3 from '../components/Section3/Section3';
import Section4 from '../components/Section4/Section4';
import Section5 from '../components/Section5/Section5';
import Section6 from '../components/Section6/Section6';
import Section7 from '../components/Section7/Section7';
import Section8 from '../components/Section8/Section8';
const Home = () => {
    return (
        <div className='overflow-x-hidden'>
            {/* section1 */}
            <div className='relative w-full hero-section-background h-[45rem] overflow-x-hidden'>
                <Navbar />
                <HeroSection />
            </div>
            {/* section2 */}
            <Section2 />

            {/* section3 */}
            <Section3 />

            {/* section4 */}
            <Section4 />

            {/* section5 */}
            <Section5 />

            {/* section6 */}
            <Section6 />

            {/* section7 */}
            <Section7 />

            {/* section8 */}
            <Section8 />

            {/* Footer */}
            <Footer />
        </div>
    )
}

export default Home