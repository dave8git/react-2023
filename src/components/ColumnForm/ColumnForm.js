import styles from './ColumnForm.module.scss';
import Button from '../Button/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/columnsRedux';
import shortid from 'shortid';

const ColumnForm = props => {
    const [value, setValue] = useState("");
    const [icon, setIcon] = useState("");

    const dispatch = useDispatch(); 

    const handleSubmit = e => {
        e.preventDefault(); 
        dispatch(addColumn({id: shortid(), listId: props.listId, title: value, icon: icon, })); // to w payload są wszystkie informacje konieczne do utworzenia nowej kolumny, czyli obiekt z id, title, oraz icon,
        setValue('');
        setIcon('');
    }

    return (
        <form onSubmit={handleSubmit} >
            Title: <input type="text" className={styles.columnForm} value={value} onChange={e => setValue(e.target.value)} />
            Icon: <input type="text" className={styles.columnForm} value={icon} onChange={e => setIcon(e.target.value)} />
            <Button>Add column</Button>
        </form>
    );
};

export default ColumnForm; 





