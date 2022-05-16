import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';
import { Main } from '../main/Main';
import './layout.scss'
export const Layout = () => {
   return (
      <div className='layout-bg'>
         <Header />
         <Main />
         <Footer />
      </div>
   )
}