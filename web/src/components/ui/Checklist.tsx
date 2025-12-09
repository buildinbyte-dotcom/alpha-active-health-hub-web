interface ChecklistProps {
    title: string;
    items: string[];
  }
  
  export default function Checklist({ title, items }: ChecklistProps) {
    return (
      <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
        <h3 className="h3 mb-6">{title}</h3>
        <ul className="space-y-4">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-[var(--color-secondary)]/10 flex items-center justify-center text-[var(--color-secondary)]">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <span className="text-lg text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
