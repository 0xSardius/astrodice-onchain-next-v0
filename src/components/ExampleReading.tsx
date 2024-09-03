import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const ExampleReading = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" max-w-2xl mx-auto bg-gray-100 rounded-lg p-4 mb-6 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg overflow-hidden shadow-md">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-left text-indigo-800 p-4 font-semibold"
      >
        <h2 className="text-lg">Example Astrodice Reading</h2>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      {isOpen && (
        <div className="p-4 space-y-4 text-indigo-900">
          <div className="bg-white p-4 rounded-lg shadow-inner">
            <h3 className="font-semibold mb-2 text-purple-700">
              Question: &ldquo;What energies surround my career growth?&rdquo;
            </h3>
            <p>
              <strong>Result:</strong> Mars (Planet) in Capricorn (Sign) in the
              10th House
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-purple-700">
              Interpretation:
            </h3>
            <ul className="list-disc list-inside pl-4 space-y-2">
              <li>
                <strong>Mars (Planet):</strong> Represents action, energy, and
                drive.
              </li>
              <li>
                <strong>Capricorn (Sign):</strong> Associated with ambition,
                discipline, and long-term goals.
              </li>
              <li>
                <strong>10th House:</strong> Represents career, public image,
                and achievements.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-purple-700">Reading:</h3>
            <p>
              This combination suggests a period of focused and disciplined
              action in your career. Mars in Capricorn indicates a strong drive
              to achieve your professional goals through hard work and
              persistence. The 10th House placement emphasizes that your efforts
              will be visible and could lead to recognition or advancement.
              It&apos;s a good time to take initiative in your career, set
              ambitious goals, and work steadily towards them.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-purple-700">Advice:</h3>
            <p>
              Harness this energy by creating a structured plan for your career
              growth. Take on challenging projects that showcase your skills and
              don&apos;t be afraid to assert yourself in professional settings.
              However, be mindful of potential impatience or aggression –
              channel your energy constructively.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExampleReading;
