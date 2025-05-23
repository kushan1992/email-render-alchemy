
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Copy, Download, CheckCircle } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

interface CodePreviewProps {
  html: string;
}

export const CodePreview: React.FC<CodePreviewProps> = ({ html }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(html);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'email-template.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-white">Generated HTML</h3>
        <div className="flex gap-2">
          <Button
            onClick={handleCopy}
            size="sm"
            variant="secondary"
            className="bg-white/20 hover:bg-white/30 text-white border-white/30"
          >
            {copied ? (
              <>
                <CheckCircle className="mr-2 h-4 w-4" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="mr-2 h-4 w-4" />
                Copy
              </>
            )}
          </Button>
          <Button
            onClick={handleDownload}
            size="sm"
            variant="secondary"
            className="bg-white/20 hover:bg-white/30 text-white border-white/30"
          >
            <Download className="mr-2 h-4 w-4" />
            Download
          </Button>
        </div>
      </div>
      
      <ScrollArea className="h-64 w-full rounded-md bg-black/20 p-4">
        <pre className="text-sm text-green-400 whitespace-pre-wrap font-mono">
          {html}
        </pre>
      </ScrollArea>
    </div>
  );
};
