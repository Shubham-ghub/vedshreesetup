import React, { useState } from 'react';
import { Save, Undo } from 'lucide-react';
import PageHeader from '../admincomponents/PageHeader';
import Card from '../admincomponents/Card';

const TermsConditions = () => {
  const [content, setContent] = useState(`
# Terms and Conditions

Last Updated: May 15, 2023

Please read these Terms and Conditions ("Terms") carefully before using the Vedshree Ayurvedic website or purchasing our products.

## Acceptance of Terms

By accessing our website or purchasing our products, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, please do not use our services.

## Products and Services

### Product Information
All products are described with as much accuracy as possible. However, we do not warrant that product descriptions or other content are accurate, complete, reliable, current, or error-free.

### Ayurvedic Consultations
- Consultations are provided for general wellness purposes only
- Our consultations do not replace medical advice or treatment
- Consultants will provide personalized recommendations based on Ayurvedic principles

## Ordering and Payment

### Pricing
All prices are in Indian Rupees (INR) and include applicable taxes. We reserve the right to modify prices at any time.

### Payment
We accept various payment methods including credit cards, debit cards, and digital wallets. All payment information is securely processed.

### Order Confirmation
An order confirmation will be sent to your email address after placing an order. This does not guarantee that your order has been accepted.

## Shipping and Delivery

### Shipping Methods
We offer standard and express shipping options. Shipping times and costs vary based on location and selected method.

### Delivery
We are not responsible for delays caused by customs, import regulations, or other factors beyond our control.

## Returns and Refunds

### Return Policy
- Products must be returned within 14 days of delivery
- Items must be unused and in original packaging
- Certain products like herbs and consumables cannot be returned for safety reasons

### Refund Process
Refunds will be processed within 7-10 business days after receiving and inspecting the returned items.

## Intellectual Property

All content on our website, including text, graphics, logos, and images, is the property of Vedshree Ayurvedic and is protected by copyright laws.

## Limitation of Liability

Vedshree Ayurvedic shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use our products or services.

## Changes to Terms

We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on the website.

## Governing Law

These Terms shall be governed by and construed in accordance with the laws of India.

## Contact Information

If you have any questions about these Terms, please contact us at:
- Email: terms@vedshree.com
- Phone: +91 98765 43210
  `);
  
  return (
    <div>
      <PageHeader 
        title="Terms & Conditions" 
        description="Edit your website's terms and conditions"
        actions={
          <div className="flex gap-3">
            <button className="px-4 py-2 rounded-md transition-all duration-300 font-medium text-sm border border-[#0E2A10] text-[#0E2A10] hover:bg-[#0E2A10] hover:text-white flex items-center gap-2">
              <Undo size={16} />
              <span>Reset</span>
            </button>
            <button className="px-4 py-2 rounded-md transition-all duration-300 font-medium text-sm bg-[#0E2A10] text-white hover:bg-[#0E2A10]/90 flex items-center gap-2">
              <Save size={16} />
              <span>Save Changes</span>
            </button>
          </div>
        }
      />
      
      <Card>
        <div className="mb-6">
          <h3 className="text-lg font-medium text-[#0E2A10] mb-2">
            Terms & Conditions Content
          </h3>
          <p className="text-sm text-[#87a186]/80">
            Edit the content below to update your terms and conditions. Basic markdown formatting is supported.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="border border-[#87a186]/20 rounded-md">
            <div className="p-3 border-b border-[#87a186]/20 bg-[#0E2A10]/5">
              <h4 className="text-[#0E2A10] font-medium">Editor</h4>
            </div>
            <div className="p-4">
              <textarea 
                className="w-full h-[500px] p-4 rounded-md border border-[#87a186]/20 focus:outline-none focus:ring-2 focus:ring-[#0E2A10]/30 font-mono text-sm"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              ></textarea>
            </div>
          </div>
          
          <div className="border border-[#87a186]/20 rounded-md">
            <div className="p-3 border-b border-[#87a186]/20 bg-[#0E2A10]/5">
              <h4 className="text-[#0E2A10] font-medium">Preview</h4>
            </div>
            <div className="p-6 prose max-w-none h-[500px] overflow-y-auto">
              <h1 className="text-2xl font-serif font-medium text-[#0E2A10] mb-4">Terms and Conditions</h1>
              <p className="text-sm text-[#87a186]/80 mb-4">Last Updated: May 15, 2023</p>
              
              <p className="mb-4">Please read these Terms and Conditions ("Terms") carefully before using the Vedshree Ayurvedic website or purchasing our products.</p>
              
              <h2 className="text-xl font-serif font-medium text-[#0E2A10] mt-6 mb-3">Acceptance of Terms</h2>
              <p className="mb-4">By accessing our website or purchasing our products, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, please do not use our services.</p>
              
              <h2 className="text-xl font-serif font-medium text-[#0E2A10] mt-6 mb-3">Products and Services</h2>
              
              <h3 className="text-lg font-serif font-medium text-[#0E2A10] mt-4 mb-2">Product Information</h3>
              <p className="mb-4">All products are described with as much accuracy as possible. However, we do not warrant that product descriptions or other content are accurate, complete, reliable, current, or error-free.</p>
              
              <h3 className="text-lg font-serif font-medium text-[#0E2A10] mt-4 mb-2">Ayurvedic Consultations</h3>
              <ul className="list-disc pl-6 mb-4">
                <li className="mb-1">Consultations are provided for general wellness purposes only</li>
                <li className="mb-1">Our consultations do not replace medical advice or treatment</li>
                <li className="mb-1">Consultants will provide personalized recommendations based on Ayurvedic principles</li>
              </ul>
              
              {/* The rest of the content would continue in the same format */}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default TermsConditions;