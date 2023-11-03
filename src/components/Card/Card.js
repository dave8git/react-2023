import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { favoriteCard } from '../../redux/store';

const Card = props => {
    const dispatch = useDispatch();
    console.log('card.props', props);

    const handleFavorite = id => {
        console.log('id', id);
        console.log('props.id', props.id);
        dispatch(favoriteCard(id));
    }


    return (
        <li className={styles.card}>
            {props.title}
            <button onClick={() => {handleFavorite(props.id)}} className={clsx(styles.button, props.isFavorite && styles.favorite)}>
                <span className='fa fa-star' />
            </button>
        </li>
    );
};

export default Card; 