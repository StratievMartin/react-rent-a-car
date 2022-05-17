import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';
import { Main } from '../main/Main';
import './layout.scss'
export const Layout = () => {
   return (
      <div class="bg-gray-400" >
         <Header />
         <Main />
         <Footer />
      </div>
   )
}