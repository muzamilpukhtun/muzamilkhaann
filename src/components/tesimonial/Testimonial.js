import React, { useState } from 'react';
import Slider from 'react-slick';
import { RiStarFill } from 'react-icons/ri';
import { HiArrowRight, HiArrowLeft } from 'react-icons/hi';
import Title from '../layouts/Title';
import { quote } from '../../assets';
import Ahmer from '../../assets/images/Ahmer.jpeg';
import Arsalan from '../../assets/images/Arsalan.jpeg';
import Furqan from '../../assets/images/Furqan.png';
import Sikandar from '../../assets/images/Sikandar.jpeg';

// Define your testimonials array
const testimonials = [
  {
    name: 'Muhammad Khurram Ismail',
    title: 'Solution Architect Expert | Team Lead',
    date: 'September 16, 2024',
    testimonial: 'I had the pleasure of watching Furqan Ahmed grow from a skilled System Administrator to an accomplished DevOps Engineer. His deep understanding of IT infrastructure and operations, combined with his focus on automation and continuous integration, brought significant gains in efficiency and reliability. Furqan is a strong contributor to any team looking to embrace modern DevOps practices.',
    image: Furqan,
    company: 'Techverse',
    position: 'Senior DevOps Leader',
  },
  {
    name: 'Syed Ahmer Hasan',
    title: 'HR Consultant & Services Specialist',
    date: 'September 16, 2024',
    testimonial: 'I had the pleasure of working closely with Furqan Ahmed as their HR Manager at 360Factors. They consistently demonstrated exceptional technical expertise in streamlining and optimizing our infrastructure, significantly improving our team’s efficiency and workflow. Furqan is collaborative, proactive, and an invaluable asset to any team. I highly recommend them for roles where technical proficiency and cultural fit are crucial.',
    image: Ahmer,
    company: 'Rosento Consulting Group',
    position: 'HR Generalist at 360Factors',
  },
  {
    name: 'Arsalan Zia',
    title: 'IT Infrastructure Specialist',
    date: 'September 16, 2024',
    testimonial: 'Furqan is a great asset to any team with high skills in DevOps and networks. He is one of the most talented and dedicated individuals I’ve worked with, with expertise in automating processes, optimizing cloud infrastructure, and ensuring seamless integration between development and operations.',
    image: Arsalan,
    company: 'Encloud DMCC ',
    position: 'System Engineer',
  },
  {
    name: 'Vincent P.',
    title: 'Configuration of VMware ESXI and VCSA',
    date: 'September 16, 2024',
    testimonial: 'I highly recommend Ahmed as a skilled and reliable VMware administrator. Their expertise in virtualization technologies, ability to troubleshoot complex issues, and collaborative nature make them an invaluable asset to any organization. It has been a pleasure working with Furqan, and I am confident in their ability to contribute to future projects and endeavors.',
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSC4YpV2Wsenk9MEeoauZ1RLX_AFbdS1EhSg&s",
    company: ' BlueMagicProxies',
    position: 'CEO',
  },
  {
    name: 'Sikander A.',
    title: 'Lead Network Administrator at 360factors, Inc.',
    date: 'September 16, 2024',
    testimonial: 'Any task assigned to him was completed on time, and he often spent extra hours to ensure its completion. He demonstrated independence even when faced with challenging tasks, such as automating backups and load balancers. Beyond his technical skills, he is proactive in identifying new innovations and recommending improvements to our infrastructure based on the latest technologies and updates. He also goes the extra mile to secure our network by conducting penetration testing and implementing robust security measures. Furqan, I wish you a successful career.',
    image: Sikandar,
    company: '360factors, Inc.',
    position: 'Lead Network Administrator',
  },
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
                  <img
                    className="h-72 md:h-32 lgl:h-72 rounded-lg object-cover"
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
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
