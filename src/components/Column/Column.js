import styles from './Column.module.scss';
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';
import { useSelector } from 'react-redux';
import { getFilteredCards } from '../../redux/cardsRedux';

const Column = props => {
    //const cards = useSelector(state => state.cards.filter(card => card.columnId === props.id && card.title.toLowerCase().includes(state.searchString))); // dla każdej kolumny wygeneruj tylko te karty w środku których id zgadza się z id kolumny przypisanym do karty
    const cards = useSelector(state => getFilteredCards(state, props.id));
    return (
        <article className={styles.column}>
            <h2 className={styles.title}><span className={styles.icon + ' fa fa-' + props.icon}></span>{props.title}</h2>
            <ul className={styles.cards}>
                {cards.map(card => <Card key={card.id} isFavorite={card.isFavorite} title={card.title} id={card.id} />)}
            </ul>
            <CardForm columnId={props.id} action={props.action} />
        </article>
    );
};

export default Column; 