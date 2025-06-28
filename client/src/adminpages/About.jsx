import React, { useState } from 'react';
import { Save, Undo } from 'lucide-react';
import PageHeader from '../admincomponents/PageHeader';
import Card from '../admincomponents/Card';

function About() {
  const [content, setContent] = useState(`
# About Vedshree Ayurvedic

Vedshree Ayurvedic is dedicated to promoting holistic wellness through authentic Ayurvedic principles. Our mission is to revive and share the ancient wisdom of Ayurveda, making it accessible to modern lifestyles.

## Our Story

Founded in 2010 by Dr. Rajesh Sharma, Vedshree Ayurvedic began as a small clinic in Rishikesh, India. With a deep respect for traditional Ayurvedic practices and a vision to integrate them with modern science, Dr. Sharma expanded Vedshree into a comprehensive wellness destination.

## Our Philosophy

We believe in the Ayurvedic principle that health is a state of balance between body, mind, and consciousness. Our products and consultations are designed to restore this balance, addressing the root causes of health issues rather than just treating symptoms.

## Quality Commitment

All our products are:
- Made from organic herbs sourced from sustainable farms
- Prepared according to traditional Ayurvedic texts
- Tested for purity and potency
- Free from artificial preservatives and additives

## Our Experts

Our team consists of experienced Ayurvedic physicians, herbalists, and wellness experts who combine traditional knowledge with contemporary research to provide the best care possible.
  `);
  
  return (
    <div>
      <PageHeader 
        title="About Page" 
        description="Edit your website's about content"
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
            Page Content
          </h3>
          <p className="text-sm text-[#87a186]/80">
            Edit the content below to update your about page. Basic markdown formatting is supported.
          </p>
        </div>
        
        {/* // Editor Section */}
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
          
          {/* // Preview Section */}
          <div className="border border-[#87a186]/20 rounded-md">
            <div className="p-3 border-b border-[#87a186]/20 bg-[#0E2A10]/5">
              <h4 className="text-[#0E2A10] font-medium">Preview</h4>
            </div>
            <div className="p-6 prose max-w-none h-[500px] overflow-y-auto">
              <h1 className="text-2xl font-serif font-medium text-[#0E2A10] mb-4">About Vedshree Ayurvedic</h1>
              <p className="mb-4">Vedshree Ayurvedic is dedicated to promoting holistic wellness through authentic Ayurvedic principles. Our mission is to revive and share the ancient wisdom of Ayurveda, making it accessible to modern lifestyles.</p>
              
              <h2 className="text-xl font-serif font-medium text-[#0E2A10] mt-6 mb-3">Our Story</h2>
              <p className="mb-4">Founded in 2010 by Dr. Rajesh Sharma, Vedshree Ayurvedic began as a small clinic in Rishikesh, India. With a deep respect for traditional Ayurvedic practices and a vision to integrate them with modern science, Dr. Sharma expanded Vedshree into a comprehensive wellness destination.</p>
              
              <h2 className="text-xl font-serif font-medium text-[#0E2A10] mt-6 mb-3">Our Philosophy</h2>
              <p className="mb-4">We believe in the Ayurvedic principle that health is a state of balance between body, mind, and consciousness. Our products and consultations are designed to restore this balance, addressing the root causes of health issues rather than just treating symptoms.</p>
              
              <h2 className="text-xl font-serif font-medium text-[#0E2A10] mt-6 mb-3">Quality Commitment</h2>
              <p className="mb-2">All our products are:</p>
              <ul className="list-disc pl-6 mb-4">
                <li className="mb-1">Made from organic herbs sourced from sustainable farms</li>
                <li className="mb-1">Prepared according to traditional Ayurvedic texts</li>
                <li className="mb-1">Tested for purity and potency</li>
                <li className="mb-1">Free from artificial preservatives and additives</li>
              </ul>
              
              <h2 className="text-xl font-serif font-medium text-[#0E2A10] mt-6 mb-3">Our Experts</h2>
              <p>Our team consists of experienced Ayurvedic physicians, herbalists, and wellness experts who combine traditional knowledge with contemporary research to provide the best care possible.</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default About;