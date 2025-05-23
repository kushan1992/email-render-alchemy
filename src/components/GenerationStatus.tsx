
import React from 'react';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, Cpu, Code, Mail } from 'lucide-react';

interface GenerationStatusProps {
  isGenerating: boolean;
}

export const GenerationStatus: React.FC<GenerationStatusProps> = ({ isGenerating }) => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    if (isGenerating) {
      const timer = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(timer);
            return 100;
          }
          return prev + 33.33;
        });
      }, 1000);

      return () => clearInterval(timer);
    } else {
      setProgress(0);
    }
  }, [isGenerating]);

  if (!isGenerating) return null;

  const steps = [
    { icon: Cpu, label: 'Analyzing Design', completed: progress > 0 },
    { icon: Code, label: 'Generating HTML', completed: progress > 33 },
    { icon: Mail, label: 'Optimizing for Email', completed: progress > 66 },
  ];

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6">
      <h3 className="text-lg font-semibold text-white mb-4">Generation Progress</h3>
      
      <Progress value={progress} className="mb-6 h-2" />
      
      <div className="space-y-3">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center gap-3">
            {step.completed ? (
              <CheckCircle className="h-5 w-5 text-green-400" />
            ) : (
              <step.icon className="h-5 w-5 text-white/50" />
            )}
            <span className={`text-sm ${step.completed ? 'text-green-400' : 'text-white/70'}`}>
              {step.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
