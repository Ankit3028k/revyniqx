import { Routes, Route } from 'react-router-dom';
import Login from './components/pages/Login';
import PasswordRecovery from './components/pages/PasswordRecovery';
import ResetPassword from './components/pages/NewPassword';
import NewPassword from './components/pages/NewPassword';
import Layout from './components/layout/Layout';
import Dashboard from './components/pages/Dashboard';
import { MeetingsList } from './components/MeetingList';
import { AgentsList } from './components/AgentsList';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/forgot-password" element={<PasswordRecovery />} />
      <Route path="/otp-verification" element={<PasswordRecovery />} />
      <Route path="/new-password" element={<ResetPassword />} />
      <Route path="/reset-password" element={<NewPassword />} />
      
      {/* Protected routes with layout */}
      <Route element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/meetings" element={<MeetingsList />} />
        <Route path="/agents" element={<AgentsList />} />

        {/* Add other protected routes here */}
      </Route>
    </Routes>
  );
}

export default App;