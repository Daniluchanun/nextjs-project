import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import styles from './PosterSlider.module.css'
import Link from "next/link";

const PosterSlider = () => {
    const [emblaRef] = useEmblaCarousel({loop: true}, [Autoplay({delay: 5000})]);

    const posters = [
        "/posters/Interstellar.jpg",
        "/posters/Jocker.jpg",
        "/posters/Star-wars.jpg",
        "/posters/Top-Gun.jpg",
        "/posters/Avangers.jpeg",
        "/posters/fastAndFurious.jpg",
    ];

    return (

        <div>
            <div className={styles.overlay}>
            </div>
            <h1 className={styles.overlayText}>Watch our</h1>
            <h2 className={styles.overlayText2}><span className={styles.textTop}>top</span> films</h2>
            <div className={styles.overlayButtons}>
                <Link href={'/movies'}>
                    <button className={`${styles.btn}`}>Watch</button>
                </Link>
                <Link href={'/genres'}>
                    <button className={styles.btn}>Genres</button>
                </Link>
            </div>
            <p className={styles.overlayText3}>Don't waste time searching - enjoy watching your favorite movies right now on our website! A huge
                selection of the best movies of all genres and the latest premieres, available in a few clicks. Immerse
                yourself in the world of cinema with us - your favorite movie is already waiting for you!</p>
            <div className={styles.sliderContainer} ref={emblaRef}>
                <div className={styles.sliderWrapper}>
                    {posters.map((poster, index) => (
                        <div key={index} className={styles.slide}>
                            <img src={poster} alt={`Poster ${index + 1}`}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PosterSlider;
