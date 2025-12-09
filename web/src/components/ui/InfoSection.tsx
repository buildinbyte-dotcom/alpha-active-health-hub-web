interface InfoSectionProps {
    title: string;
    children: React.ReactNode;
    bgColor?: "white" | "gray" | "blue";
  }
  
  export default function InfoSection({ title, children, bgColor = "white" }: InfoSectionProps) {
    const bgClasses = {
      white: "bg-white",
      gray: "bg-[var(--color-background)]", // Using the off-white from theme
      blue: "bg-blue-50",
    };
  
    return (
      <section className={`py-12 md:py-20 ${bgClasses[bgColor]}`}>
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="h2 text-center mb-10">{title}</h2>
          <div className="max-w-4xl mx-auto">
            {children}
          </div>
        </div>
      </section>
    );
  }
