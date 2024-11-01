import React from "react";
import img1 from '../../../assets/banner2.jpg'
import img2 from '../../../assets/man.jpg'
import img3 from '../../../assets/man2.jpg'
import img4 from '../../../assets/man3.jpg'
import img5 from '../../../assets/banner.jpg'
import img6 from '../../../assets/banner3.jpg'
const Moment = () => {
  return (
    <div className="lg:flex  m-5 mt-20 ">
      <div className="lg:w-[50%] bg-[#B9E5E8] lg:px-10 lg:pt-32 p-5">
        <h1 className="text-4xl font-bold">
          The best &{" "}
          <b>
            funny <br /> moment
          </b>{" "}
          when <br />
          we are together
        </h1>
        <p className="text-sm my-4">
          We are looking for member who are willing to work together.
        </p>
        <p className="text-sm">
          However, the best reason of all is the opportunity to connect with
          other riders. With over 4.5k members in our club, you are sure to find
          a group. Each ride indicates the expected pace and distance of the
          ride. Set in stunning tourist destinations, within two hours’ drive of
          our major metropolitan cities, the Cycling Classics are the ultimate
          Gran Fondo experience.
        </p>
        <button className="btn mt-4 btn-outline ">Join Today</button>
      </div>
      <div className="lg:grid grid-cols-2 gap-4 lg:mt-0 mt-10">
        <img src={img1} alt="loading..." className="lg:w-72 mt-4 lg:mt-0" />
        <img src={img2} alt="loading..." className="lg:w-72 mt-4 lg:mt-0" />
        <img src={img3} alt="loading..." className="lg:w-72 mt-4 lg:mt-0" />
        <img src={img4} alt="loading..." className="lg:w-72 mt-4 lg:mt-0" />
        <img src={img5} alt="loading..." className="lg:w-72 mt-4 lg:mt-0" />
        <img src={img6} alt="loading..." className="lg:w-72 mt-4 lg:mt-0" />
      </div>
    </div>
  );
};

export default Moment;
