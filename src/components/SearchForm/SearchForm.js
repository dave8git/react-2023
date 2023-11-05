import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { updateSearchString } from '../../redux/searchStringRedux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const SearchForm = () => {
    const [ newString, setNewString ] = useState("");
    const searchString = useSelector(state => state.searchString);

    const dispatch = useDispatch(); 
    useEffect(() => {
        setNewString(searchString);
    }, [searchString]);

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