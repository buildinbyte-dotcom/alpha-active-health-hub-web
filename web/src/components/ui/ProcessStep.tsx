interface ProcessStepProps {
    number: number;
    title: string;
    description: string;
  }
  
  export default function ProcessStep({ number, title, description }: ProcessStepProps) {
    return (
      <div className="flex flex-col items-center text-center p-4">
        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center text-xl md:text-2xl font-bold font-serif mb-4 shadow-md">
          {number}
        </div>
        <h4 className="text-xl font-bold text-[var(--color-primary)] mb-2">{title}</h4>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    );
  }
