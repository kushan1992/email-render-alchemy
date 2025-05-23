
import React, { useState } from 'react';
import { FigmaInput } from './FigmaInput';
import { CodePreview } from './CodePreview';
import { EmailPreview } from './EmailPreview';
import { GenerationStatus } from './GenerationStatus';

export const EmailGenerator = () => {
  const [figmaUrl, setFigmaUrl] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedHtml, setGeneratedHtml] = useState('');
  const [error, setError] = useState('');

  const handleGenerate = async () => {
    if (!figmaUrl.trim()) {
      setError('Please enter a valid Figma URL');
      return;
    }

    setIsGenerating(true);
    setError('');
    
    try {
      // Simulate API call to convert Figma to HTML
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Mock generated HTML for demo
      const mockHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Generated Email Template</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 0; padding: 20px; background-color: #f5f5f5; }
        .email-container { max-width: 600px; margin: 0 auto; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 40px 20px; text-align: center; }
        .content { padding: 40px 20px; }
        .cta-button { display: inline-block; background: #667eea; color: white; padding: 15px 30px; text-decoration: none; border-radius: 6px; margin: 20px 0; }
        .footer { background: #f8f9fa; padding: 20px; text-align: center; color: #666; }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <h1>Welcome to Our Newsletter</h1>
            <p>Stay updated with the latest news and updates</p>
        </div>
        <div class="content">
            <h2>Hello there!</h2>
            <p>Thank you for subscribing to our newsletter. We're excited to share amazing content with you.</p>
            <a href="#" class="cta-button">Get Started</a>
            <p>Best regards,<br>The Team</p>
        </div>
        <div class="footer">
            <p>© 2024 Your Company. All rights reserved.</p>
        </div>
    </div>
</body>
</html>`;
      
      setGeneratedHtml(mockHtml);
    } catch (err) {
      setError('Failed to generate HTML. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-[calc(100vh-200px)]">
        {/* Left Panel - Input and Controls */}
        <div className="space-y-6">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Generate Email HTML</h2>
            <FigmaInput 
              value={figmaUrl}
              onChange={setFigmaUrl}
              onGenerate={handleGenerate}
              isGenerating={isGenerating}
              error={error}
            />
          </div>
          
          <GenerationStatus isGenerating={isGenerating} />
          
          {generatedHtml && (
            <CodePreview html={generatedHtml} />
          )}
        </div>

        {/* Right Panel - Preview */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Email Preview</h2>
          <EmailPreview html={generatedHtml} />
        </div>
      </div>
    </div>
  );
};
