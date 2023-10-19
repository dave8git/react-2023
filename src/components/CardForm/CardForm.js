import styles from './CardForm.module.scss';
import Button from '../Button/Button';
import {useState} from 'react';

const CardForm = props => {
    const [value, setValue] = useState("");
    console.log(props.action);
    const handleSubmit = e => {
        e.preventDefault(); 
        props.action({title: value}, props.columnId);
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