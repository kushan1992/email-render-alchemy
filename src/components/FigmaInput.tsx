
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Loader2, Wand2, Link } from 'lucide-react';

interface FigmaInputProps {
  value: string;
  onChange: (value: string) => void;
  onGenerate: () => void;
  isGenerating: boolean;
  error: string;
}

export const FigmaInput: React.FC<FigmaInputProps> = ({
  value,
  onChange,
  onGenerate,
  isGenerating,
  error
}) => {
  const isValidFigmaUrl = (url: string) => {
    return url.includes('figma.com') && (url.includes('/design/') || url.includes('/file/'));
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <label className="text-white font-medium flex items-center gap-2">
          <Link className="h-4 w-4" />
          Figma Design URL
        </label>
        <Input
          type="url"
          placeholder="https://www.figma.com/design/..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="bg-white/20 border-white/30 text-white placeholder:text-white/50 focus:border-white/50"
          disabled={isGenerating}
        />
        {error && (
          <p className="text-red-400 text-sm">{error}</p>
        )}
      </div>

      <Button
        onClick={onGenerate}
        disabled={isGenerating || !value.trim() || !isValidFigmaUrl(value)}
        className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
      >
        {isGenerating ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Generating HTML...
          </>
        ) : (
          <>
            <Wand2 className="mr-2 h-4 w-4" />
            Generate Email HTML
          </>
        )}
      </Button>

      <div className="text-sm text-white/70 bg-white/10 rounded-lg p-4">
        <h4 className="font-medium mb-2">How it works:</h4>
        <ol className="list-decimal list-inside space-y-1">
          <li>Paste your Figma design URL</li>
          <li>Our AI analyzes the design</li>
          <li>Get email-compatible HTML code</li>
          <li>Preview and export your template</li>
        </ol>
      </div>
    </div>
  );
};
