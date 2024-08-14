import { createBrowserRouter } from 'react-router-dom'
import App from '../App';
// import Home from '../pages/Home';
import SignUp from '../pages/SignUp';
import AllEvents from '../pages/AllEvents';
import Result from '../pages/Result';
import Answer from '../pages/Answer';
// import Cricket from '../pages/Cricket';
// import Login from '../pages/Login';
// import Olympics from '../pages/Olympics';
// import Crypto from '../pages/Crypto';
// import News from '../pages/News'
// import EventDetail from '../pages/EventDetail';
// import Portfolio from '../pages/Portfolio';
// import Login1 from '../pages/Login1'
// import Recharge from '../components/Recharge'
// import Profile from '../pages/Profile';
// import Activity from '../pages/Activity';

const router = createBrowserRouter([
    {
        path : "",
        element : <SignUp/>
    },
    {
        path : "/events",
        element : <App/>,
        children : [
            {
                path : "",
                element : <AllEvents/>,

            },
            {
                path : "result/:id",
                element : <Result/>,

            },
            {
                path : "answer",
                element : <Answer/>,

            }
            // {
            //     path : "events/all-events",
            //     element : <AllEvents/>

            // },
            // {
            //     path : "events/cricket",
            //     element : <Cricket/>
            // },
            // {
            //     path : "events/crypto",
            //     element : <Crypto/>

            // },
            // {
            //     path : "events/olympics",
            //     element : <Olympics/>

            // },
            // {
            //     path : "events/news",
            //     element : <News/>

            // },
            // // {
            // //     path : "events/economy",
            // //     element : <Economy/>

            // // },
            // // {
            // //     path : "events/election",
            // //     element : <Election/>

            // // },
            // // {
            // //     path : "events/youtube",
            // //     element : <Youtube/>

            // // },
            // {
            //     path : "events/login",
            //     element : <Login/>
            // },
            // {
            //     path : "events/:id",
            //     element : <EventDetail/>
            // },
            // {
            //     path:"portfolio",
            //     element : <Portfolio/>
            // },
            // {
            //     path:"login",
            //     element : <Login1/>
            // },
            // {
            //     path:"recharge",
            //     element : <Recharge/>
            // },
            // {
            //     path: "profile",
            //     element : <Profile/>
            // },
            // {
            //     path: "activity",
            //     element : <Activity/>
            // }


        ]
    }
])

export default router
