import styles from './ListForm.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/listsRedux';
import shortid from 'shortid';
import Button from '../Button/Button';

const ListForm = props => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const dispatch = useDispatch(); 

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addList({id: shortid(), title: title, description: description }));
        setTitle('');
        setDescription('');
    }

    return (
        <form onSubmit={handleSubmit} > 
            Title: <input type="text" className={styles.listForm} value={title} onChange={e => setTitle(e.target.value)} />
            Description: <input type="text" className={styles.listForm} value={description} onChange={e => setDescription(e.target.value)} />
            <Button>Add List</Button>
        </form>
    )
}

export default ListForm;