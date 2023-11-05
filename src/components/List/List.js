import styles from './List.module.scss';
import Column from '../Column/Column';
import ColumnForm from '../ColumnForm/ColumnForm';
import SearchForm from '../SearchForm/SearchForm';
import { useSelector } from 'react-redux';
import {  getListById } from '../../redux/listsRedux';
import { getColumnsByList } from '../../redux/columnsRedux';
import { getAllColumns } from '../../redux/listsRedux';
import { useParams } from 'react-router';
import { Navigate } from 'react-router-dom';


const List = () => {
    const { listId } = useParams();
    console.log('listId', listId);
    //const columns = useSelector(getAllColumns);
    const listData = useSelector(state => getListById(state, listId));
    console.log('listData', listData);
    const columns = useSelector(state => getColumnsByList(state, listData.id));
    

    console.log('listData', listData);
    console.log('columns', columns);

    if(!listData) return <Navigate to="/" />
    return (
        <div className={styles.list}>
            <header className={styles.header}>
                <h2 className={styles.title}>{listData.title}</h2>
            </header>
            <p className={styles.description}>{listData.description}</p>
            <SearchForm />
            <section className={styles.columns}>
                {columns.map((column) => 
                    <Column key={column.id} id={column.id} {...column} />
                )}
                
                {/* <Column title="Books" icon="book" />
                <Column title="Movies" icon="film" />
                <Column title="Games" icon="gamepad" /> */}
                {/* <article>
                    <h2 className="title">Books</h2>
                </article>
                <article>
                    <h2 className="title">Movies</h2>
                </article>
                <article>
                    <h2 className="title">Games</h2>
                </article> */}
            </section>
            <ColumnForm listId={ listId }/>

        </div>
    );
};

export default List; 