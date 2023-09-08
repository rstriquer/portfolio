import React from 'react'
import './testimonials.css'

import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


const Testimonials = () => {
    const data = [
        {
            title: 'Oscar Urbina Tellez',
            review: 'I have had the pleasure of working alongside Ricardo as a'
                + ' colleague on SimpliSafe projects, and'
                + ' I highly recommend him. Ricardo is a great team'
                + ' player who consistently demonstrates efficiency,'
                + ' collaboration and excellent communication skills.'
                + ' He is always willing to lend a hand to his'
                + ' colleagues and works tirelessly to ensure that the'
                + ' software being developed is of the highest quality.'
        },
        {
            title: 'Maiko Gabriel Kinzel Engelke',
            review: 'Ricardo is someone who impressed me with his'
                + ' disposition for learning.'
                + ' At work we would exchange information, and at the'
                + ' start of the new week he would tell me about new'
                + ' courses he did in regards to new technologies we'
                + ' would be using, and recommend the best ones to me.'
                + ' During the time we worked in the same project, he'
                + ' did tell me he wasn\'t used with some concepts in'
                + ' NestJS (which I was already familiar with from'
                + ' Angular), so I worried about his task while I did'
                + ' mine, but when I saw the results, I saw that my'
                + ' worries were in vain.'
        },
    ]
    return (
        <section id="testimonials">
            <h5>Review from partners</h5>
            <h2>Testimonials</h2>
            <Swiper className="container testimonials__container"
                modules={[Pagination]} spaceBetween={40} slidesPerView={1}
                pagination={{ clickable: true }}>
                {
                    data.map(({ title, review }) => {
                        return (
                            <SwiperSlide className="testimonial">
                                <a href="https://www.linkedin.com/in/rstriquer/#recommendations" className="client__avatar" target="_blank" rel="noreferrer">
                                    <h5 className="client__name">{title}</h5>
                                    <small className="client__review">{review}</small>
                                </a>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    )
}

export default Testimonials