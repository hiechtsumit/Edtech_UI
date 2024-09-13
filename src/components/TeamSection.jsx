import React from 'react';
// import { Carousel } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Facebook, Instagram, Twitter } from 'lucide-react';

const teamMembers = [
    {
      name: "Albain Bankert",
      profession: "Radiocosmology",
      image: "https://t3.ftcdn.net/jpg/01/90/54/30/360_F_190543073_bz6SjkIIx6tEWOquw9oPECIzrPfJtwhL.jpg"
    },
    {
      name: "Jahag Mangso",
      profession: "Architecture",
      image: "https://www.fastweb.com/uploads/article_photo/photo/2036639/crop635w_how-to-pick-the-best-professors.jpg"
    },
    {
      name: "Belia Banua",
      profession: "Researcher",
      image: "https://thumbs.dreamstime.com/b/confident-math-professor-teaching-front-chalkboard-confident-young-math-professor-standing-front-chalkboard-197220191.jpg"
    },
    {
      name: "Julian Jameson",
      profession: "Principal",
      image: "https://t4.ftcdn.net/jpg/05/21/94/85/360_F_521948517_mS2CABoRkmHIgrUwlxLQ1WNiCWn9SCz2.jpg"
    },

  ];

const TeamSection = () => {

  return (
    <div className="container mx-auto px-4 p-20">
      <div className="mb-12">
        <p className="text-green-white font-semibold mb-2">Team</p>
        <h2 className="text-3xl md:text-4xl font-bold text-black-blue  mb-4">Get Quality Education</h2>
        <p className="max-w-2xl mb-40">
          Problems trying to resolve the conflict between <br /> the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>

      <div className="w-full">
        <CarouselSection />
      </div>

      {/* <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={index} {...member} />
        ))}
      </div> */}
    </div>
  );
};


export default TeamSection;


const CarouselSection = ()=>{
    return(
        <Carousel
      additionalTransfrom={0}
      arrows
      autoPlay
      autoPlaySpeed={3000}
      centerMode={false}
      className=""
      containerClass="container-with-dots"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024,
          },
          items: 4,
          partialVisibilityGutter: 40,
        },
        mobile: {
          breakpoint: {
            max: 500,
            min: 0,
          },
          items: 1,
          partialVisibilityGutter: 30,
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 500,
          },
          items: 3,
          partialVisibilityGutter: 30,
        },
      }}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots={false}
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      {teamMembers && teamMembers.map((member, index) => (
        <section className='p-3'>
            <TeamMemberCard key={index} {...member} />
            </section>
      ))}
    </Carousel>
    )
}


const TeamMemberCard = ({ name, profession, image }) => {
    return (
      <div className="bg-white rounded-3xl shadow-md overflow-hidden">
        <img src={image} alt={name} className="w-full h-64 object-cover" />
        <div className="p-4 text-center">
          <h3 className="font-bold text-black-blue text-lg mb-1">{name}</h3>
          <p className="text-sm font-semibold mb-4">{profession}</p>
          <div className="flex justify-center space-x-4">
            <Facebook className="text-green-white w-5 h-5" />
            <Instagram className="text-green-white w-5 h-5" />
            <Twitter className="text-green-white w-5 h-5" />
          </div>
        </div>
      </div>
    );
  };