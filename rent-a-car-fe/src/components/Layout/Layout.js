import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';
import { Main } from '../main/Main';

export const Layout = () => {
    return (
        <div class="bg-gray-400 h-screen">
            <Header class="mb-52" />
            <Main />
            <Footer />
        </div>
    );
};
