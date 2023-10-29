import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { updateSearchString } from '../../redux/store';

const SearchForm = () => {
    const [ newString, setNewString ] = useState("");

    const dispatch = useDispatch(); 
    
    const handleSubmit = e => {
        e.preventDefault(); 
        dispatch(updateSearchString(newString));
        setNewString('');
    }

    return (
        <form className={styles.searchForm} onClick={handleSubmit}>
            <TextInput placeholder="Search..." value={newString} onChange={e => setNewString(e.target.value) } />
            <Button><span className="fa fa-seach" /></Button>
        </form>
    );
};

export default SearchForm;