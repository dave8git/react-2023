import styles from './Home.module.scss';
import Hero from '../Hero/Hero';
import SearchForm from '../SearchForm/SearchForm';
import Lists from '../Lists/Lists';
import ListForm from '../ListForm/ListForm';

const Home = () => {
    return (
        <>
            <Hero />
            <Lists />
            <ListForm />
        </>
    );
};

export default Home;