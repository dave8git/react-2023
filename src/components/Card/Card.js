import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { favoriteCard, deleteCard } from '../../redux/cardsRedux';

const Card = props => {
    const dispatch = useDispatch();
    console.log('card.props', props);

    const handleFavorite = id => {
        console.log('id', id);
        console.log('props.id', props.id);
        dispatch(favoriteCard(id));
    }

    const handleDelete = id => {
        dispatch(deleteCard(id));
    }

    return (
        <li className={styles.card}>
            {props.title}
            <div>
                <button onClick={() => { handleFavorite(props.id) }} className={clsx(styles.button, props.isFavorite && styles.favorite)}>
                    <span className='fa fa-star' />
                </button>
                <button onClick={() => { handleDelete(props.id) }} className={styles.button}>
                    <span className='fa fa-trash' />
                </button>
            </div>
        </li>
    );
};

export default Card; 