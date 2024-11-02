//@ts-nocheck
"use client"
import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import { store } from '@/redux/store'
import { jwtDecode } from 'jwt-decode'
import { useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'

const Providers = ({ children }: any) => {
    // const tabIndex = useSelector(selectStatusTabs);
    // const spinStatusCall = useSelector(spinStatus);
    // const [refreshCall, setRefreshCall] = useState(false);
    // const validToken = useSelector(validTokenStatus);
    // const validToken = true
    // const dispatch = useDispatch();
    // const [, setData] = useState({});

    // const checkTokenExpiration = () => {
    //     const token = localStorage.getItem("access_token");
    //     if (!token) return;

    //     const decoded: { exp: number } = jwtDecode(token);
    //     const currentTime = Math.floor(Date.now() / 1000);
    //     const timeRemaining = decoded.exp - currentTime;

    //     console.log('timeRemaining :>> ', timeRemaining);
    //     if (timeRemaining > 60) {
    //         // dispatch(setValidToken());
    //     }

    //     if (timeRemaining <= 120) {
    //         setRefreshCall(true);
    //     }
    // };

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         checkTokenExpiration();
    //     }, 1000);

    //     return () => clearInterval(interval);
    // }, []);



    return (
        <Provider store={store} >
            <div className=" min-h-screen w-screen flex flex-col ">
                <ToastContainer />
                <Header />
                <div className="flex-1 bg-black">
                    {children}
                </div>
                <Footer />
            </div>
        </Provider>
    )
}

export default Providers