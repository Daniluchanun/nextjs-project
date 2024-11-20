import React, {FC} from 'react';
import styles from './stylePoster.module.css'

type IProps = {
    image: string,
    description: string,
}
export const PosterPreview: FC<IProps> = ({image, description}) => {
    return (
        <img src={`https://image.tmdb.org/t/p/original${image}`} alt={description} className={styles.poster}/>
    );
};

export default PosterPreview;