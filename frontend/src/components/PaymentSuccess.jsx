import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { CheckCircle, Loader, AlertCircle } from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [paymentStatus, setPaymentStatus] = useState('checking');
  const [paymentDetails, setPaymentDetails] = useState(null);
  const [error, setError] = useState(null);
  const sessionId = searchParams.get('session_id');

  const pollPaymentStatus = async (attempts = 0) => {
    const maxAttempts = 10;
    const pollInterval = 2000; // 2 seconds

    if (attempts >= maxAttempts) {
      setPaymentStatus('timeout');
      setError('Payment status check timed out. Please check your email for confirmation.');
      return;
    }

    try {
      const response = await axios.get(`${API}/payments/checkout/status/${sessionId}`);
      const data = response.data;
      
      if (data.payment_status === 'paid') {
        setPaymentStatus('success');
        setPaymentDetails(data);
        return;
      } else if (data.status === 'expired') {
        setPaymentStatus('expired');
        setError('Payment session expired. Please try again.');
        return;
      } else if (data.payment_status === 'failed') {
        setPaymentStatus('failed');
        setError('Payment failed. Please try again or contact support.');
        return;
      }

      // If payment is still pending, continue polling
      setTimeout(() => pollPaymentStatus(attempts + 1), pollInterval);
    } catch (error) {
      console.error('Error checking payment status:', error);
      setPaymentStatus('error');
      setError('Error checking payment status. Please try again.');
    }
  };

  useEffect(() => {
    if (!sessionId) {
      setPaymentStatus('error');
      setError('No payment session found.');
      return;
    }

    pollPaymentStatus();
  }, [sessionId]);

  const handleContinue = () => {
    // Redirect to homepage or member dashboard
    navigate('/');
  };

  if (paymentStatus === 'checking') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Card className="w-full max-w-md">
          <CardContent className="p-8 text-center">
            <Loader className="w-12 h-12 animate-spin mx-auto mb-4 text-blue-500" />
            <h2 className="text-xl font-semibold mb-2">Processing Your Payment</h2>
            <p className="text-gray-600">Please wait while we confirm your payment...</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (paymentStatus === 'success') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Card className="w-full max-w-md">
          <CardContent className="p-8 text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-green-800 mb-2">Payment Successful!</h2>
            <p className="text-gray-600 mb-6">
              Welcome to JetSet 101! Your {paymentDetails?.plan_type} membership has been activated.
            </p>
            
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600">Plan:</span>
                <span className="font-semibold capitalize">{paymentDetails?.plan_type} Membership</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600">Amount:</span>
                <span className="font-semibold">${(paymentDetails?.amount_total / 100).toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Email:</span>
                <span className="font-semibold">{paymentDetails?.user_email}</span>
              </div>
            </div>

            <Button onClick={handleContinue} className="w-full bg-green-600 hover:bg-green-700">
              Continue to JetSet 101
            </Button>

            <p className="text-sm text-gray-500 mt-4">
              You will receive a confirmation email shortly with your membership details.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Error states
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md">
        <CardContent className="p-8 text-center">
          <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-red-800 mb-2">Payment Issue</h2>
          <p className="text-gray-600 mb-6">{error}</p>
          
          <div className="space-y-3">
            <Button onClick={() => navigate('/#membership')} className="w-full">
              Try Again
            </Button>
            <Button variant="outline" onClick={() => navigate('/')} className="w-full">
              Return Home
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};