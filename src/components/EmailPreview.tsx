
import React from 'react';
import { Monitor, Smartphone, Tablet } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface EmailPreviewProps {
  html: string;
}

export const EmailPreview: React.FC<EmailPreviewProps> = ({ html }) => {
  const [viewMode, setViewMode] = React.useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  const getPreviewWidth = () => {
    switch (viewMode) {
      case 'mobile': return 'w-80';
      case 'tablet': return 'w-96';
      default: return 'w-full';
    }
  };

  return (
    <div className="space-y-4">
      {/* View Mode Controls */}
      <div className="flex gap-2">
        <Button
          onClick={() => setViewMode('desktop')}
          size="sm"
          variant={viewMode === 'desktop' ? 'default' : 'secondary'}
          className={viewMode === 'desktop' ? 'bg-white text-purple-900' : 'bg-white/20 text-white hover:bg-white/30'}
        >
          <Monitor className="mr-2 h-4 w-4" />
          Desktop
        </Button>
        <Button
          onClick={() => setViewMode('tablet')}
          size="sm"
          variant={viewMode === 'tablet' ? 'default' : 'secondary'}
          className={viewMode === 'tablet' ? 'bg-white text-purple-900' : 'bg-white/20 text-white hover:bg-white/30'}
        >
          <Tablet className="mr-2 h-4 w-4" />
          Tablet
        </Button>
        <Button
          onClick={() => setViewMode('mobile')}
          size="sm"
          variant={viewMode === 'mobile' ? 'default' : 'secondary'}
          className={viewMode === 'mobile' ? 'bg-white text-purple-900' : 'bg-white/20 text-white hover:bg-white/30'}
        >
          <Smartphone className="mr-2 h-4 w-4" />
          Mobile
        </Button>
      </div>

      {/* Preview Frame */}
      <div className="bg-white rounded-lg p-4 min-h-96 overflow-auto">
        {html ? (
          <div className={`mx-auto transition-all duration-300 ${getPreviewWidth()}`}>
            <iframe
              srcDoc={html}
              className="w-full h-96 border-0 rounded-md"
              title="Email Preview"
              sandbox="allow-same-origin"
            />
          </div>
        ) : (
          <div className="flex items-center justify-center h-96 text-gray-500">
            <div className="text-center">
              <Mail className="h-16 w-16 mx-auto mb-4 text-gray-300" />
              <p className="text-lg font-medium">No email template generated yet</p>
              <p className="text-sm">Paste a Figma URL and generate HTML to see the preview</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
