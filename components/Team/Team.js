import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import team1 from "../../public/team/carmeluz.png";
import team2 from "../../public/team/maicol.png";
import team3 from "../../public/team/jampier.png";
import team4 from "../../public/team/alexis.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation, Pagination, Scrollbar } from "swiper";
import Image from "next/image";
const Team = () => {
  return (
    <div>
      <div className="rowQh border-t-2">
        <h1 className="text-center text-4xl mb-6" style={{ color: "#00747c" }}>
          <b>
            {" "}
            <span className="text-[#2228ff]">-</span>{" "}
            <span className="text-[#2228ff]">Nuestro </span>Equipo-{" "}
          </b>
        </h1>
      </div>
      <div className="rowQh border-b-2">
        <Swiper
          className="equipo-listing-crea"
          //   modules={[Navigation, Pagination, Scrollbar]}
          spaceBetween={50}
          pagination={{ clickable: true }}
          navigation={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            600: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            940: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
        >
          <SwiperSlide className="card-equipo-crea">
            <Image className="img-crea-equipo" src={team1} alt="equipo" />
            <div className="agent-title-crea">
              <p className="bold-text-card">
                <b> Carmeluz Cohaila</b>
              </p>
              <p>Comunity Manager</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="card-equipo-crea">
            <Image className="img-crea-equipo" src={team2} alt="equipo" />
            <div className="agent-title-crea">
              <p className="bold-text-card">
                <b> Maicol Bohorquez</b>
              </p>
              <p>Traficker Digital Social Media Design</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="card-equipo-crea">
            <Image className="img-crea-equipo" src={team3} alt="equipo" />
            <div className="agent-title-crea">
              <p className="bold-text-card">
                <b> Jampier Vasquez</b>
              </p>
              <p>
                Diseñador de UI/UX, Desarrollador de Software, Diseñador Gráfico
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="card-equipo-crea">
            <Image className="img-crea-equipo" src={team4} alt="equipo" />
            <div className="agent-title-crea">
              <p className="bold-text-card">
                <b> Alexis Illachura</b>
              </p>
              <p>Diseñador Gráfico</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Team;
