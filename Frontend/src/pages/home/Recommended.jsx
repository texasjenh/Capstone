import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import BookCard from "../books/BookCard";
import '../../App.css'
import { useFetchAllBooksQuery } from "../../redux/features/books/booksApi";


const Recommended = () => {
    const {data: books = []} = useFetchAllBooksQuery();
        
    return (
        <div className="Container-fluid">
            <h2 className="head2"><i className="fa-solid fa-face-smile-wink"></i>  Recommended for you </h2>

                <Swiper 
                    slidesPerView={1}
                    spaceBetween={10}
                    navigation={true}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 30,
                        },
                    }}
                    modules={[Pagination, Navigation]}
                    className="MySwiper"
                >

                    {
                        books.length > 0 && books.slice(8, 18).map((book, index) => (
                            <SwiperSlide key={index}>
                                <BookCard book={book} />
                            </SwiperSlide>
                        ))    
                    }
        
                </Swiper>
        </div>
    )
}

export default Recommended
    