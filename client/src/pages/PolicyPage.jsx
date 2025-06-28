import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/ui/SectionTitle';

const PolicyPage = () => {
  return (
    <div className="pt-28 pb-16 bg-[#F7F6F4]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <SectionTitle 
            title="Our Policies"
            subtitle="We are committed to transparency and fair business practices. Please review our policies below."
          />
          
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 id="privacy" className="font-montserrat font-semibold text-2xl text-[#1F2D24] mb-4">Privacy Policy</h2>
            
            <div className="prose text-[#6A6657] max-w-none">
              <p className="mb-4">
                At Vedshree Ayurvedic, we take your privacy seriously. This Privacy Policy outlines how we collect, use, and protect your personal information.
              </p>
              
              <h3 className="font-montserrat font-medium text-xl text-[#2F4435] mt-6 mb-3">Information We Collect</h3>
              <p className="mb-4">
                We collect information that you provide directly to us, such as when you create an account, make a purchase, sign up for our newsletter, or contact us for support. This may include:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Contact information (name, email address, phone number, shipping address)</li>
                <li>Account credentials (username, password)</li>
                <li>Payment information (credit card details, billing address)</li>
                <li>Health information provided during consultations</li>
                <li>Order history and preferences</li>
              </ul>
              
              <h3 className="font-montserrat font-medium text-xl text-[#2F4435] mt-6 mb-3">How We Use Your Information</h3>
              <p className="mb-4">
                We use your information for the following purposes:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>To provide and maintain our services</li>
                <li>To process and fulfill your orders</li>
                <li>To communicate with you about your orders, account, or customer service needs</li>
                <li>To personalize your experience and recommend products that might interest you</li>
                <li>To improve our website, products, and services</li>
                <li>To send promotional emails about new products, special offers, or other information we think you may find interesting</li>
              </ul>
              
              <h3 className="font-montserrat font-medium text-xl text-[#2F4435] mt-6 mb-3">Data Security</h3>
              <p className="mb-4">
                We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
              
              <h3 className="font-montserrat font-medium text-xl text-[#2F4435] mt-6 mb-3">Third-Party Disclosure</h3>
              <p className="mb-4">
                We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties without your consent, except as necessary to provide our services (e.g., payment processing, shipping) or as required by law.
              </p>
              
              <h3 className="font-montserrat font-medium text-xl text-[#2F4435] mt-6 mb-3">Your Rights</h3>
              <p>
                You have the right to access, correct, or delete your personal information. You may also object to or restrict the processing of your data. To exercise these rights, please contact us at privacy@vedshree.com.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 id="shipping" className="font-montserrat font-semibold text-2xl text-[#1F2D24] mb-4">Shipping Policy</h2>
            
            <div className="prose text-[#6A6657] max-w-none">
              <h3 className="font-montserrat font-medium text-xl text-[#2F4435] mt-6 mb-3">Processing Time</h3>
              <p className="mb-4">
                Orders are typically processed within 24-48 hours after payment confirmation, excluding weekends and holidays.
              </p>
              
              <h3 className="font-montserrat font-medium text-xl text-[#2F4435] mt-6 mb-3">Shipping Methods and Timeframes</h3>
              <p className="mb-4">
                We offer the following shipping options:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li><strong>Standard Shipping:</strong> 3-5 business days (₹50 for orders under ₹500, free for orders above ₹500)</li>
                <li><strong>Express Shipping:</strong> 1-2 business days (₹150 flat rate)</li>
                <li><strong>International Shipping:</strong> 7-14 business days (rates vary by country)</li>
              </ul>
              
              <h3 className="font-montserrat font-medium text-xl text-[#2F4435] mt-6 mb-3">Order Tracking</h3>
              <p className="mb-4">
                Once your order ships, you will receive a confirmation email with tracking information. You can also track your order by logging into your account on our website.
              </p>
              
              <h3 className="font-montserrat font-medium text-xl text-[#2F4435] mt-6 mb-3">Shipping Restrictions</h3>
              <p>
                Certain products may have shipping restrictions due to customs regulations. Please check product descriptions for specific information or contact our customer service team for details.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 id="refund" className="font-montserrat font-semibold text-2xl text-[#1F2D24] mb-4">Refund & Return Policy</h2>
            
            <div className="prose text-[#6A6657] max-w-none">
              <h3 className="font-montserrat font-medium text-xl text-[#2F4435] mt-6 mb-3">Return Eligibility</h3>
              <p className="mb-4">
                We accept returns of unopened products in their original packaging within 30 days of delivery. The following conditions apply:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Products must be unused and in the same condition that you received them</li>
                <li>Products must be in their original packaging</li>
                <li>Products must not be damaged or tampered with</li>
                <li>Proof of purchase is required</li>
              </ul>
              
              <p className="mb-4">
                For health and safety reasons, we cannot accept returns of:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Products that have been opened or used</li>
                <li>Personal care items (unless defective)</li>
                <li>Items marked as non-returnable in the product description</li>
              </ul>
              
              <h3 className="font-montserrat font-medium text-xl text-[#2F4435] mt-6 mb-3">Refund Process</h3>
              <p className="mb-4">
                Once we receive and inspect your return, we will process your refund. Refunds will be issued to the original payment method within 5-7 business days. The refund amount will include the purchase price of the product(s) but not the original shipping costs.
              </p>
              
              <h3 className="font-montserrat font-medium text-xl text-[#2F4435] mt-6 mb-3">Damaged or Defective Products</h3>
              <p className="mb-4">
                If you receive damaged or defective products, please contact our customer service team within 48 hours of delivery. We will arrange for a replacement or refund at our discretion.
              </p>
              
              <h3 className="font-montserrat font-medium text-xl text-[#2F4435] mt-6 mb-3">How to Initiate a Return</h3>
              <p>
                To initiate a return, please contact our customer service team at returns@vedshree.com or call us at +91 98765 43210. We will provide you with a return authorization number and instructions for returning the product.
              </p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-[#8D8874]">
              If you have any questions about our policies, please <Link to="/contact" className="text-[#3E5747] hover:text-[#2F4435] font-medium">contact us</Link>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolicyPage;