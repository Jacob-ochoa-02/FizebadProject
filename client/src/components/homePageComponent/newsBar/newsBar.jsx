import './newsBar.css'
import axios from 'axios'
import Slider from 'react-slick/lib/slider';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect } from 'react';
import { useState } from 'react';

export default function NewsBar() {
    const [news, setNews] = useState([]);
    const [activeIndex, setActiveIndex] = useState(1);

    useEffect(() => {
        const fetchingNews = async () => {
            axios.get('https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=b9150a7bcc8248a085aee7e26374b28e')
        .then(res => {
            const filteredNews = res.data.articles.filter(article => article.urlToimage !== null);
          setNews(filteredNews.slice(0, 6));
        })
        .catch(err => {
          console.error(`Error on fetching news... ${err}`);
        });
        };
        fetchingNews();
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 1,
        beforeChange: (currentSlide, nextSlide) => {
            setActiveIndex(nextSlide);
        },
    };

    return (
        <div id='news'>
            <div className="News">
                <h1 className='titleOfNews'>NOTICIAS</h1>
                <div className="NewsContainer">
                    <Slider {...settings}>
                        {news.map((article, index) => (
                            <div key={index}>
                                <div className={`slide-item ${Math.abs(index) === activeIndex - 1 ? 'prev-slide' : Math.abs(index) === activeIndex ? 'active-slide' : Math.abs(index) === activeIndex + 1 ? 'next-slide' : ''}`}>
                                    <img
                                        src={article.urlToImage}
                                        alt={article.title}
                                        className="slide-image"
                                        style={{
                                            opacity: Math.abs(index) === activeIndex ? 1 : 0.5,
                                            filter: Math.abs(index) === activeIndex ? 'brightness(100%) saturate(100%)' : 'brightness(70%) saturate(70%)',
                                        }} />
                                </div>
                                <div className={Math.abs(index) === activeIndex ? '' : 'side-text'}>
                                    {Math.abs(index) === activeIndex ? (
                                        <h3 className='titleNews'>{article.title}</h3>
                                    ) : null}
                                    {Math.abs(index) === activeIndex ? (
                                        <a className='anchorW' href={article.url} target='blank'>Ver Más</a>
                                    ) : null}
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div >
        </div >
    )
}
