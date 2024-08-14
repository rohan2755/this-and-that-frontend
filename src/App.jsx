import Header from "./components/Header";
import { Outlet } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <>
    <ToastContainer 
          position='top-center'
        />
      <div className="px-5">
        {/* <Header /> */}
        <main className=''>
          {/* <Events/> */}
          <Outlet />
        </main>
      </div>
    </>

  )
}