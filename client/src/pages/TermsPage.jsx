import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/ui/SectionTitle';

const TermsPage = () => {
  return (
    <div className="pt-28 pb-16 bg-[#F7F6F4]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <SectionTitle 
            title="Terms and Conditions"
            subtitle="Please read these terms carefully before using our website or purchasing our products."
          />
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="prose text-[#6A6657] max-w-none">
              <p className="mb-4">
                These Terms and Conditions ("Terms") govern your use of the Vedshree Ayurvedic website and the purchase of products and services from Vedshree Ayurvedic. By accessing our website or placing an order, you agree to be bound by these Terms.
              </p>
              
              <h3 className="font-montserrat font-medium text-xl text-[#2F4435] mt-6 mb-3">1. Acceptance of Terms</h3>
              <p className="mb-4">
                By accessing or using our website, you agree to these Terms and our Privacy Policy. If you do not agree to these Terms, please do not use our website or purchase our products.
              </p>
              
              <h3 className="font-montserrat font-medium text-xl text-[#2F4435] mt-6 mb-3">2. Products and Services</h3>
              <p className="mb-4">
                2.1. Product Information: We strive to provide accurate descriptions of our products. However, we do not warrant that product descriptions or other content on the website are accurate, complete, reliable, current, or error-free.
              </p>
              <p className="mb-4">
                2.2. Product Availability: All products are subject to availability. We reserve the right to discontinue any product at any time.
              </p>
              <p className="mb-4">
                2.3. Consultations: Ayurvedic consultations are provided for informational purposes only and are not intended to replace medical advice. Always consult your physician before starting any new health regimen.
              </p>
              
              <h3 className="font-montserrat font-medium text-xl text-[#2F4435] mt-6 mb-3">3. Orders and Payment</h3>
              <p className="mb-4">
                3.1. Order Acceptance: Your order is an offer to buy our product. We reserve the right to accept or decline your order for any reason.
              </p>
              <p className="mb-4">
                3.2. Pricing: All prices are in Indian Rupees (₹) and include applicable taxes. We reserve the right to change prices at any time without notice.
              </p>
              <p className="mb-4">
                3.3. Payment: We accept various payment methods as indicated on our website. By providing payment information, you represent that you are authorized to use the payment method.
              </p>
              
              <h3 className="font-montserrat font-medium text-xl text-[#2F4435] mt-6 mb-3">4. Shipping and Delivery</h3>
              <p className="mb-4">
                4.1. Shipping Policy: Please refer to our <Link to="/policy#shipping" className="text-[#3E5747] hover:text-[#2F4435]">Shipping Policy</Link> for detailed information on shipping methods, timeframes, and costs.
              </p>
              <p className="mb-4">
                4.2. Delivery Times: Delivery times are estimates and not guaranteed. We are not responsible for delays caused by shipping carriers or customs.
              </p>
              
              <h3 className="font-montserrat font-medium text-xl text-[#2F4435] mt-6 mb-3">5. Returns and Refunds</h3>
              <p className="mb-4">
                Please refer to our <Link to="/policy#refund" className="text-[#3E5747] hover:text-[#2F4435]">Refund & Return Policy</Link> for detailed information on returns, exchanges, and refunds.
              </p>
              
              <h3 className="font-montserrat font-medium text-xl text-[#2F4435] mt-6 mb-3">6. User Accounts</h3>
              <p className="mb-4">
                6.1. Account Creation: You may need to create an account to access certain features of our website. You are responsible for maintaining the confidentiality of your account information.
              </p>
              <p className="mb-4">
                6.2. Account Termination: We reserve the right to terminate or suspend your account at our sole discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.
              </p>
              
              <h3 className="font-montserrat font-medium text-xl text-[#2F4435] mt-6 mb-3">7. Intellectual Property</h3>
              <p className="mb-4">
                7.1. Website Content: All content on the website, including text, graphics, logos, images, and software, is the property of Vedshree Ayurvedic and is protected by copyright and other intellectual property laws.
              </p>
              <p className="mb-4">
                7.2. Use Restrictions: You may not reproduce, distribute, modify, display, perform, or use any content from our website without our prior written permission.
              </p>
              
              <h3 className="font-montserrat font-medium text-xl text-[#2F4435] mt-6 mb-3">8. Disclaimer of Warranties</h3>
              <p className="mb-4">
                8.1. Our products and services are provided "as is" without any warranties, express or implied.
              </p>
              <p className="mb-4">
                8.2. We do not guarantee that our website will be error-free or uninterrupted, or that any defects will be corrected.
              </p>
              <p className="mb-4">
                8.3. Health Disclaimer: Our products are not intended to diagnose, treat, cure, or prevent any disease. Results may vary from person to person.
              </p>
              
              <h3 className="font-montserrat font-medium text-xl text-[#2F4435] mt-6 mb-3">9. Limitation of Liability</h3>
              <p className="mb-4">
                To the maximum extent permitted by law, Vedshree Ayurvedic shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our website or products.
              </p>
              
              <h3 className="font-montserrat font-medium text-xl text-[#2F4435] mt-6 mb-3">10. Governing Law</h3>
              <p className="mb-4">
                These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
              </p>
              
              <h3 className="font-montserrat font-medium text-xl text-[#2F4435] mt-6 mb-3">11. Changes to Terms</h3>
              <p className="mb-4">
                We reserve the right to modify these Terms at any time. Your continued use of our website after changes indicates your acceptance of the revised Terms.
              </p>
              
              <h3 className="font-montserrat font-medium text-xl text-[#2F4435] mt-6 mb-3">12. Contact Information</h3>
              <p>
                If you have any questions about these Terms, please contact us at legal@vedshree.com or through our <Link to="/contact" className="text-[#3E5747] hover:text-[#2F4435]">Contact Page</Link>.
              </p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-[#8D8874]">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;