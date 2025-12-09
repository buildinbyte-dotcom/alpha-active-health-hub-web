export default function DisclaimerBanner() {
    return (
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8 text-sm text-amber-900">
        <p className="font-bold mb-1 flex items-center gap-2">
           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
           </svg>
           Important Disclaimer
        </p>
        <p>
          The products listed below are suggestions based on general utility for our patients. They are not medical prescriptions. 
          Please consult your specialist or GP before using new medical aids. 
          Some links may be affiliate links, meaning we may earn a small commission at no extra cost to you.
        </p>
      </div>
    );
  }
