import React, { useState } from 'react';
import { Save, Undo } from 'lucide-react';
import PageHeader from '../admincomponents/PageHeader';
import Card from '../admincomponents/Card';


function PrivacyPolicy() {
  const [content, setContent] = useState(`
# Privacy Policy

Last Updated: May 15, 2023

This Privacy Policy describes how Vedshree Ayurvedic ("we," "us," or "our") collects, uses, and shares your personal information when you visit our website, use our services, or interact with us in any way.

## Information We Collect

### Personal Information
- Name, email address, phone number, and billing address
- Payment information (processed securely through our payment processors)
- Health information provided during consultations
- Account credentials

### Usage Data
- IP address and browser information
- Pages visited and interactions with our website
- Device information

## How We Use Your Information

We use your personal information to:
- Provide and improve our products and services
- Process your orders and transactions
- Communicate with you about your orders, account, and promotional offers
- Schedule and conduct consultations
- Personalize your experience
- Comply with legal obligations

## Data Sharing and Disclosure

We may share your information with:
- Service providers who help us operate our business
- Payment processors to complete transactions
- Legal authorities when required by law
- Business partners with your consent

## Your Rights

You have the right to:
- Access personal information we hold about you
- Correct inaccurate information
- Request deletion of your data
- Opt out of marketing communications
- Lodge a complaint with a supervisory authority

## Cookie Policy

We use cookies to enhance your browsing experience. You can manage cookie preferences through your browser settings.

## Security

We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, loss, or alteration.

## Changes to This Policy

We may update this Privacy Policy from time to time. The latest version will be posted on our website with the effective date.

## Contact Us

If you have any questions about this Privacy Policy, please contact us at:
- Email: privacy@vedshree.com
- Phone: +91 98765 43210
  `);
  
  return (
    <div>
      <PageHeader 
        title="Privacy Policy" 
        description="Edit your website's privacy policy"
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
            Privacy Policy Content
          </h3>
          <p className="text-sm text-[#87a186]/80">
            Edit the content below to update your privacy policy. Basic markdown formatting is supported.
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
              <h1 className="text-2xl font-serif font-medium text-[#0E2A10] mb-4">Privacy Policy</h1>
              <p className="text-sm text-[#87a186]/80 mb-4">Last Updated: May 15, 2023</p>
              
              <p className="mb-4">This Privacy Policy describes how Vedshree Ayurvedic ("we," "us," or "our") collects, uses, and shares your personal information when you visit our website, use our services, or interact with us in any way.</p>
              
              <h2 className="text-xl font-serif font-medium text-[#0E2A10] mt-6 mb-3">Information We Collect</h2>
              
              <h3 className="text-lg font-serif font-medium text-[#0E2A10] mt-4 mb-2">Personal Information</h3>
              <ul className="list-disc pl-6 mb-4">
                <li className="mb-1">Name, email address, phone number, and billing address</li>
                <li className="mb-1">Payment information (processed securely through our payment processors)</li>
                <li className="mb-1">Health information provided during consultations</li>
                <li className="mb-1">Account credentials</li>
              </ul>
              
              <h3 className="text-lg font-serif font-medium text-[#0E2A10] mt-4 mb-2">Usage Data</h3>
              <ul className="list-disc pl-6 mb-4">
                <li className="mb-1">IP address and browser information</li>
                <li className="mb-1">Pages visited and interactions with our website</li>
                <li className="mb-1">Device information</li>
              </ul>
              
              {/* The rest of the content would continue in the same format */}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default PrivacyPolicy;