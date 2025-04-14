import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CheckOut = () => {
    const [submitted, setSubmitted] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);

        // Redirect after 2 seconds
        setTimeout(() => navigate('/'), 2000);
    };

    return (
        <div className="container py-5">
            <h2 className="text-center mb-4">Booking Confirmation</h2>

            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-6">
                    {/* Package Summary */}
                    <div className="card mb-4 shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">Selected Package</h5>
                            <ul className="list-unstyled mb-3">
                                <li>📷 <strong>Best Option</strong></li>
                                <li>🕗 8 hours coverage</li>
                                <li>🌐 Online gallery</li>
                                <li>📘 Wedding Album</li>
                                <li>✨ Special services</li>
                            </ul>
                            <h4 className="text-success fw-bold">$3000</h4>
                        </div>
                    </div>

                    {/* Booking Form */}
                    {!submitted ? (
                        <form onSubmit={handleSubmit} className="card shadow p-4">
                            <div className="mb-3">
                                <label className="form-label">Full Name</label>
                                <input type="text" className="form-control" required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email address</label>
                                <input type="email" className="form-control" required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Phone Number</label>
                                <input type="tel" className="form-control" required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Event Date</label>
                                <input type="date" className="form-control" required />
                            </div>
                            <button type="submit" className="btn btn-dark w-100">
                                Confirm Booking
                            </button>
                        </form>
                    ) : (
                        <div className="alert alert-success text-center mt-4" role="alert">
                            ✅ Your booking has been confirmed! We’ll reach out to you soon.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CheckOut;
