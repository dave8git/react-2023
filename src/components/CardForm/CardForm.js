import styles from './CardForm.module.scss';
import Button from '../Button/Button';
import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { addCard } from '../../redux/store';
import shortid from 'shortid';

const CardForm = props => {
    const [value, setValue] = useState("");

    const dispatch = useDispatch(); 

    const handleSubmit = e => {
        e.preventDefault(); 
        dispatch(addCard({id: shortid(), columnId: props.columnId, isFavorite: false, title: value})); // to obiekt payload będzie użyty do utworzenia nowej karty, jest tu wszystko co jest potrzebne id, columnId, title
        setValue('');
    }

    return (
        <form onSubmit={handleSubmit} >
            <input type="text" className={styles.cardForm} value={value} onChange={e => setValue(e.target.value)} />
            <Button>Add card</Button>
        </form>
    );
};

export default CardForm; 