
import { BrowserRouter, Routes, Route } from "react-router-dom";

//route page
import Auth from "routes/Auth";
import CheckCoupon from "routes/CheckCoupon";
import Detail from "routes/Detail";
import EditMember from "routes/EditMember";
import Event from "routes/Event";
import Home from "routes/Home";
import JoinAgree from "routes/JoinAgree";
import MemberWithdrawal from "routes/MemberWithdrawal";
import MemberWithdrawalComplete from "routes/MemberWithdrawalComplete";
import Mypage from "routes/Mypage";
import News from "routes/News";
import Shipping from "routes/Shipping";
import SignUp from "routes/SignUp";
import SignupComplete from "routes/SignupComplete";
import Stamp from "routes/Stamp";
import StampAccumulate from "routes/StampAccumulate";
import StampApplication from "routes/StampApplication";
import StampIssued from "routes/StampIssued";
import StampList from "routes/StampList";
import StampModify from "routes/StampModify";
import StampView from "routes/StampView";
import Store from "routes/Store";
import StorekeeperRegist from "routes/StorekeeperRegist";
import StoreRegist from "routes/StoreRegist";
import StoreRegistResult from "routes/StoreRegistResult";

const AppRouter = ({isLoggedIn}) => {

    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/signup" element={<SignUp />} /> 
                <Route exact path="/join_agree" element={<JoinAgree />} />
                <Route exact path="/signup_complete" element={<SignupComplete />} />

                <Route exact path="/storekeeper_regist" element={<StorekeeperRegist />} />
                <Route exact path="/storeregist_result" element={<StoreRegistResult />} />

                <Route exact path="/mypage" element={<Mypage />} />
                <Route exact path="/store_regist" element={<StoreRegist />} />
                <Route exact path="/detail" element={<Detail />} />
                <Route exact path="/editmember" element={<EditMember />} />

                <Route exact path="/member_withdrawal" element={<MemberWithdrawal />} />
                <Route exact path="/member_withdrawal_complete" element={<MemberWithdrawalComplete />} />
                
                <Route exact path="/stamp" element={<Stamp/>} />
                <Route exact path="/stamp_accumulate" element={<StampAccumulate/>} />
                <Route exact path="/stamp_issu" element={<StampIssued/>} />
                <Route exact path="/stamp_application" element={<StampApplication/>} />
                <Route exact path="/stamp_modify" element={<StampModify />} />
                <Route exact path="/stamp_list" element={<StampList/>} />
                <Route exact path="/stamp_view" element={<StampView/>} />
                <Route exact path="/check_cupon" element={<CheckCoupon/>} />
                <Route exact path="/shipping" element={<Shipping/>} />

                <Route exact path="/store" element={<Store/>} />

                <Route exact path="/event" element={<Event/>} />

                <Route exact path="/news" element={<News/>} />


                {
                    isLoggedIn 
                    ? ( <Route exact path="/" element={<Home />} /> ) 
                    : ( <Route exact path="/" element={<Auth />} /> )
                }
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter; 