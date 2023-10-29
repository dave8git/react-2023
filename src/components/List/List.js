import styles from './List.module.scss';
import Column from '../Column/Column';
import ColumnForm from '../ColumnForm/ColumnForm';
import { useSelector } from 'react-redux';
import { getAllColumns } from '../../redux/store';


const List = () => {
    const columns = useSelector(getAllColumns);

    return (
        <div className={styles.list}>
            <header className={styles.header}>
                <h2 className={styles.title}>Things to do<span>soon!</span></h2>
            </header>
            <p className={styles.description}>Interesting things I want to check out</p>
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
            <ColumnForm />

        </div>
    );
};

export default List; 