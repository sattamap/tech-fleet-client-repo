import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import BrandCard from "../../components/BrandCard/BrandCard";
import Testimonial from "../../components/Testimonial/Testimonial";
import Footer from "../../components/Footer/Footer";

const Home = () => {
    const brands = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <div className='max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-10'>
    {
        brands.map(brand => <BrandCard key={brand._id} brand={brand}></BrandCard>)
      }
    </div>




    <Testimonial></Testimonial>
    <Footer></Footer>
        </div>

        
    );
};

export default Home;
