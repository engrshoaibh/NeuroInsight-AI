import HeroBanner from '../sections/landing_page/HeroBanner'
import ExploreFeatures from '../sections/landing_page/ExploreFeatures'
import MeetOurTeam from '../sections/landing_page/MeetOurTeam';
import Footer from '../sections/landing_page/Footer';
import Navbar from '../components/Navbar';
const LandingPage = () =>{

    return(
        <>
        <Navbar/>
        <HeroBanner/>
        <ExploreFeatures/>
        <MeetOurTeam/>
        <Footer/>
        </>
    );
}
export default LandingPage;