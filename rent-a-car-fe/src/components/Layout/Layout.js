import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { Main } from '../Main/Main';

export const Layout = () => {
    return (
        <div class="bg-gray-400 min-h-screen">
            <Header class="mb-52"/>
            <Main />
            <Footer />
        </div>
    );
};
