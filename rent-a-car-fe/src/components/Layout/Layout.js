import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { Main } from '../Main/Main';
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