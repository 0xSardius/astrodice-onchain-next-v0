import React from "react";

const keywordData = [
  {
    category: "Planets",
    keywords:
      "Sun, Moon, Mercury, Venus, Mars, Jupiter, Saturn, Uranus, Neptune, Pluto",
  },
  {
    category: "Signs",
    keywords:
      "Aries, Taurus, Gemini, Cancer, Leo, Virgo, Libra, Scorpio, Sagittarius, Capricorn, Aquarius, Pisces",
  },
  {
    category: "Houses",
    keywords:
      "1st (Self), 2nd (Values), 3rd (Communication), 4th (Home), 5th (Creativity), 6th (Health), 7th (Relationships), 8th (Transformation), 9th (Philosophy), 10th (Career), 11th (Community), 12th (Subconscious)",
  },
  {
    category: "Aspects",
    keywords: "Conjunction, Sextile, Square, Trine, Opposition",
  },
];

const KeywordTable: React.FC = () => {
  return (
    <div className="mt-8 bg-white shadow-md rounded-lg overflow-hidden">
      <table className="min-w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Category
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Keywords
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {keywordData.map((row, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {row.category}
              </td>
              <td className="px-6 py-4 whitespace-normal text-sm text-gray-500">
                {row.keywords}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default KeywordTable;
