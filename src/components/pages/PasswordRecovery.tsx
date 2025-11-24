import { Link, useLocation, useNavigate } from 'react-router-dom';
import Lightcard from '../elements/Lightcard';
import Logo from '../elements/Logo';
import Iconhead from '../elements/Iconhead';
import Input from '../elements/Input';
import Button from '../elements/Button';
import Loginbg from '../elements/Loginbg';

const PasswordRecovery = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isOtpVerification = location.pathname.includes('otp-verification');

  const handleSubmit = () => {
    if (!isOtpVerification) {
      // Navigate to OTP verification page
      navigate('/otp-verification');
    } else {
      // Handle OTP verification and navigate to reset password
      console.log('Verifying OTP...');
      navigate('/reset-password');
    }
  };

  return (
    <>
      <Loginbg />
      <div className="column justify-center items-center col-12">
        <Logo width="300px" className="mt-5" />
        <Lightcard className="col-4 mt-5 p-4 column gap-1 justify-start items-start">
          <div className="w-full text-center mb-6">
            <Iconhead 
              icon="fa-solid fa-key"
              text={isOtpVerification ? "OTP Verification" : "Password Recovery"}
            fontSize="3xl"
            className="mb-6 text-center"
            />
          </div>
          
          <div className="col-9 ">
            {!isOtpVerification ? (
              <Input
                id="emailOrMobile"
                label="Enter Email/Mobile"
                placeholder="Enter your email or mobile number"
                className="col-12"
              />
            ) : (
              <Input
                id="otp"
                label="Enter OTP"
                placeholder="Enter the OTP sent to your email/mobile"
                className="col-12"
              />
            )}
          </div>
          
          <div className="w-full flex justify-end">
              <Button 
                text={isOtpVerification ? "Verify OTP" : "Send OTP"} 
                className="btn btn-primary" 
                onClick={handleSubmit}
              />
          </div>
          
         
        </Lightcard>
         <div className="w-full mt-3 text-center">
            <Link 
              to="/" 
              className="text-blue-600 hover:underline flex items-center justify-center gap-2"
            >
              <i className="fas fa-arrow-left primary-blue mx-1"></i>
              <span className='primary-blue'>BACK</span>
            </Link>
          </div>
      </div>
    </>
  );
};

export default PasswordRecovery;
