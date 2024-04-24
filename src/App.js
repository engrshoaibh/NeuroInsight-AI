import LandingScreen from './screens/LandingScreen'
import CreateAccountForm from './screens/CreateAccountForm'
import LoginAccount from './screens/LoginAccount'
import Dashboard from './screens/Dashboard'
import CheckAlzheimer from './screens/CheckAlzheimer'
import CheckBrainTumor from './screens/CheckBrainTumor'
import AllGeneratedReports from './screens/AllGeneratedReports'
import ViewProfile from './screens/ViewProfile'
import UpdateProfile from './screens/UpdateProfile'
import ChangePassword from './screens/ChangePassword'
import Feedback from './screens/Feedback'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './screens/UserContext';

export default function App() {
  return (
    <div >
      <Router>
        <UserProvider>
        <Routes>
          <Route path="/" element={<LandingScreen />} />
          <Route path="/signup" element={<CreateAccountForm />} />
          <Route path="/login" element={<LoginAccount />} />          
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/checkBrainTumor" element={<CheckBrainTumor />} />
          <Route path="/dashboard/checkAlzheimer" element={<CheckAlzheimer />} />
          <Route path="/dashboard/ViewAllReports" element={<AllGeneratedReports />} /> 
          <Route path="/dashboard/viewProfile" element={<ViewProfile />} /> 
          <Route path="/dashboard/giveFeedback" element={<Feedback />} /> 
          <Route path="/dashboard/viewProfile/updateProfile" element={<UpdateProfile />} />
          <Route path="/dashboard/viewProfile/changePassword" element={<ChangePassword />} />
        </Routes>
        </UserProvider>
      </Router>
    </div>

  )
}