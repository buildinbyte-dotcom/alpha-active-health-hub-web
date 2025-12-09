export default function AccessibilityBlock() {
    return (
      <div className="bg-blue-50 border-l-4 border-[var(--color-primary)] p-6 rounded-r-lg my-8">
        <h3 className="flex items-center gap-2 text-xl font-bold text-[var(--color-primary)] mb-3">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
          Accessibility Information
        </h3>
        <div className="space-y-2 text-gray-700">
          <p>
            <strong>Wheelchair Access:</strong> Our clinic is fully wheelchair accessible.
          </p>
          <p>
            <strong>Lifts:</strong> There are two large lifts available from the ground floor and parking levels directly to Level 3.
          </p>
          <p>
            <strong>Parking:</strong> Disabled parking spots are available on-site. The path from the car park to the lifts is flat and step-free.
          </p>
          <p>
            <strong>Restrooms:</strong> Accessible restrooms are located on our floor (Level 3).
          </p>
        </div>
      </div>
    );
  }
