import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import { getFavoriteCards } from '../../redux/store';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';
const Favorite = () => {
    const favoriteCards = useSelector(state => getFavoriteCards(state));
    console.log('favoriteCards', favoriteCards);
   

    return (
        <>
            <PageTitle>Favorite</PageTitle>
            <p>Lorem Ipsum</p>
            { favoriteCards.map(card => <Card key={card.id} isFavorite={card.isFavorite} title={card.title} id={card.id} />) }
        </>
    );
};

export default Favorite;