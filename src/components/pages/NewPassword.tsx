import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Loginbg from '../elements/Loginbg';
import Lightcard from '../elements/Lightcard';
import Logo from '../elements/Logo';
import Iconhead from '../elements/Iconhead';
import Input from '../elements/Input';
import Button from '../elements/Button';

interface FormData {
    email: string;
    password: string;
    confirmPassword: string;
}

const NewPassword = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState<FormData>({
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [errors, setErrors] = useState<Partial<FormData>>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const validateForm = (): boolean => {
        const newErrors: Partial<FormData> = {};

        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters';
        }

        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            // Handle password reset logic here
            console.log('Password reset successful', formData);
            // Redirect to login or show success message
            navigate('/login');
        }
    };

    return (
        <>
            <Loginbg />
            <div className="column justify-center items-center col-12 ">
                <Logo width="300px" className="mt-5" />
                <Lightcard className="col-3 mt-5 p-4 column gap-1 justify-start items-start">
                    <Iconhead
                        icon="fa-solid fa-key"
                        text="Create New Password"
                       
            fontSize="2xl"
            className="mb-6 text-center"
                    />

                    <form onSubmit={handleSubmit} className="w-full">
                        <div className="space-y-4">
                            <Input
                                id="email"
                                label="Email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                icon="fa-regular fa-envelope"
                                className="w-full"
                                error={errors.email}
                                disabled
                            />

                            <Input
                                id="password"
                                label="New Password"
                                type="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Enter your new password"
                                icon="fa fa-lock"
                                className="w-full"
                                error={errors.password}
                            />

                            <Input
                                id="confirmPassword"
                                label="Confirm Password"
                                type="password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                placeholder="Confirm your new password"
                                icon="fa fa-lock"
                                className="w-full"
                                error={errors.confirmPassword}
                            />

                            <div className="pt-2">
                                <Button
                                    type="submit"
                                    text="Reset Password"
                                    className="btn btn-primary w-full py-2"
                                />
                            </div>


                        </div>
                    </form>
                </Lightcard>
                <div className="text-center mt-4">
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

export default NewPassword;
