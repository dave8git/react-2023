import styles from './ColumnForm.module.scss';
import Button from '../Button/Button';
import {useState} from 'react';

const ColumnForm = props => {
    const [value, setValue] = useState("");
    const [icon, setIcon] = useState("");

    const handleSubmit = e => {
        e.preventDefault(); 
        props.action({title: value, icon: icon});
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





