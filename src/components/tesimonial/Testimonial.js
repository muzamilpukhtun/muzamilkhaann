import React, { useState } from 'react';
import Slider from 'react-slick';
import { RiStarFill } from 'react-icons/ri';
import { HiArrowRight, HiArrowLeft } from 'react-icons/hi';
import Title from '../layouts/Title';
import { quote } from '../../assets';
import zaid from '../../assets/images/zaid.png';
import Furqan from '../../assets/images/Furqan.png';
import C1 from '../../assets/images/C1.png';

// Define your testimonials array
const testimonials = [
  {
    name: 'Muhammad Khurram Ismail',
    title: 'React JS Developer | Three JS Developer',
    date: 'September 16, 2024',
    testimonial: 'Muzamil demonstrated exceptional skill and professionalism in bringing our project vision to life. His expertise in web development and UX/UI was evident, and he delivered a beautifully crafted and highly functional product that exceeded expectations. Muzamil’s proactive communication, openness to feedback, and dedication to quality made collaboration seamless and rewarding. He would be a valuable asset to any team seeking top-notch development work.',
    image: Furqan,
    company: 'Techverse',
    position: 'Senior DevOps Leader',
  },
  {
    name: 'Furqan Ahmed',
    title: 'React JS Developer | Three JS Developer',
    date: 'September 16, 2024',
    testimonial: 'Muzamil is an outstanding developer who brought my portfolio vision to life. Their expertise in web development, graphic design, UX/UI was evident from the start. They took the time to understand my goals and translated them into a beautifully designed and fully functional portfolio website.Throughout the project, Muzamil demonstrated exceptional professionalism and attention to detail. They were proactive in communicating progress updates and open to feedback, making the collaboration seamless and enjoyable. The final product not only exceeded my expectations but also received positive feedback from my network.I highly recommend Muzamil for any project that requires creativity, technical skill, and dedication. They would be a valuable asset to any team or client looking for high-quality development work.',
    image: C1,
    company: 'Techverse',
    position: 'Senior DevOps Engineer',
  },
  {
    name: 'Muhammad Zaid Arshad',
    title: 'MERN Stack Developer',
    date: 'August 10, 2024',
    testimonial: 'I am working with Muzamil Khan, he is a passionate and very talented Developer with an eager to learn and apply new approaches.His skills as a front end developer are incredible.',
    image: zaid,
    company: 'Digital Faaz',
    position: 'Senior MERN Stack Developer',
  }
];

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-0 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-20 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowLeft />
    </div>
  );
}

const Testimonial = () => {
  const [dotActive, setDocActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true, // Enables centered mode
    centerPadding: '0', // Adjust padding if necessary
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (prev, next) => {
      setDocActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: '10px',
          padding: '10px',
        }}
      >
        <ul
          style={{
            display: 'flex',
            gap: '15px',
            justifyContent: 'center',
            marginTop: '20px',
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: '12px',
                height: '12px',
                color: 'blue',
                background: '#ff014f',
                borderRadius: '50%',
                cursor: 'pointer',
              }
            : {
                width: '12px',
                height: '12px',
                color: 'blue',
                background: 'gray',
                borderRadius: '50%',
                cursor: 'pointer',
              }
        }
      ></div>
    ),
  };

  return (
    <section id="testimonial" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="WHAT CLIENTS SAY" des="Testimonial" />
      </div>
      <div className="max-w-6xl mx-auto">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full">
              <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
                <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                  <div className="flex-shrink-0 flex justify-center items-center">
                    <img
                      className="h-72 md:h-32 lgl:h-72 w-72 md:w-32 lgl:w-72 rounded-lg object-cover object-top"
                      src={testimonial.image}
                      alt={testimonial.name}
                      style={{ objectPosition: 'top center' }}
                    />
                  </div>
                  <div className="w-full flex flex-col justify-end">
                    <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                      {testimonial.company}
                    </p>
                    <h3 className="text-2xl font-bold">{testimonial.name}</h3>
                    <p className="text-base tracking-wide text-gray-500">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
                <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                  <img className="w-20 lgl:w-32" src={quote} alt="quote" />
                  <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                    <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                      <div>
                        <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                          {testimonial.title}
                        </h3>
                        <p className="text-base text-gray-400 mt-3">
                           {testimonial.date}
                        </p>
                      </div>
                      <div className="text-yellow-500 flex gap-1">
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                      </div>
                    </div>
                    <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                      {testimonial.testimonial}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Testimonial;
