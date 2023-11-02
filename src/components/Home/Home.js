import styles from './Home.module.scss';
import Hero from '../Hero/Hero';
import SearchForm from '../SearchForm/SearchForm';
import List from '../List/List';

const About = () => {
    return (
        <>
            <Hero />
            <SearchForm />
            <List />
        </>
    );
};

export default About;