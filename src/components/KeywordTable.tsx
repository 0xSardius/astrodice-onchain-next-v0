const keywordData = {
  planets: [
    { name: "Sun", keywords: "Identity, ego, vitality, self-expression" },
    { name: "Moon", keywords: "Emotions, intuition, nurturing, habits" },
    {
      name: "Mercury",
      keywords: "Communication, intellect, learning, adaptability",
    },
    { name: "Venus", keywords: "Love, beauty, values, harmony" },
    { name: "Mars", keywords: "Action, energy, passion, assertiveness" },
    { name: "Jupiter", keywords: "Expansion, growth, optimism, philosophy" },
    {
      name: "Saturn",
      keywords: "Structure, responsibility, limitations, discipline",
    },
    {
      name: "Uranus",
      keywords: "Innovation, rebellion, sudden changes, individuality",
    },
    {
      name: "Neptune",
      keywords: "Spirituality, dreams, illusions, compassion",
    },
    {
      name: "Pluto",
      keywords: "Transformation, power, intensity, regeneration",
    },
    {
      name: "North Node",
      keywords: "Destiny, life path, growth, challenges",
    },
    {
      name: "South Node",
      keywords: "Past lives, karmic patterns, release, lessons",
    },
  ],
  signs: [
    {
      name: "Aries",
      keywords: "Initiative, courage, impulsiveness, leadership",
    },
    {
      name: "Taurus",
      keywords: "Stability, sensuality, persistence, materialism",
    },
    {
      name: "Gemini",
      keywords: "Versatility, curiosity, communication, duality",
    },
    {
      name: "Cancer",
      keywords: "Emotional sensitivity, nurturing, intuition, home",
    },
    { name: "Leo", keywords: "Creativity, self-expression, pride, drama" },
    {
      name: "Virgo",
      keywords: "Analysis, perfectionism, service, practicality",
    },
    { name: "Libra", keywords: "Balance, harmony, relationships, diplomacy" },
    { name: "Scorpio", keywords: "Intensity, depth, transformation, mystery" },
    {
      name: "Sagittarius",
      keywords: "Optimism, adventure, philosophy, honesty",
    },
    {
      name: "Capricorn",
      keywords: "Ambition, responsibility, structure, patience",
    },
    {
      name: "Aquarius",
      keywords: "Innovation, independence, humanitarianism, eccentricity",
    },
    {
      name: "Pisces",
      keywords: "Imagination, empathy, spirituality, adaptability",
    },
  ],
  houses: [
    { name: "1st House", keywords: "Self, appearance, beginnings, identity" },
    {
      name: "2nd House",
      keywords: "Values, possessions, self-worth, resources",
    },
    {
      name: "3rd House",
      keywords: "Communication, learning, siblings, local environment",
    },
    { name: "4th House", keywords: "Home, family, roots, emotional security" },
    {
      name: "5th House",
      keywords: "Creativity, pleasure, children, self-expression",
    },
    { name: "6th House", keywords: "Work, health, service, daily routines" },
    {
      name: "7th House",
      keywords: "Partnerships, relationships, contracts, open enemies",
    },
    {
      name: "8th House",
      keywords: "Transformation, shared resources, intimacy, mysteries",
    },
    {
      name: "9th House",
      keywords: "Higher education, philosophy, travel, beliefs",
    },
    {
      name: "10th House",
      keywords: "Career, public image, authority, achievements",
    },
    {
      name: "11th House",
      keywords: "Friends, groups, hopes and wishes, social causes",
    },
    {
      name: "12th House",
      keywords: "Subconscious, secrets, spirituality, self-undoing",
    },
  ],
};

const KeywordTable: React.FC = () => {
  const renderTable = (
    title: string,
    data: { name: string; keywords: string }[]
  ) => (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              {title.slice(0, -1)}
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Keywords
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.map((item, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {item.name}
              </td>
              <td className="px-6 py-4 whitespace-normal text-sm text-gray-500">
                {item.keywords}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="mt-8">
      {renderTable("Planets", keywordData.planets)}
      {renderTable("Signs", keywordData.signs)}
      {renderTable("Houses", keywordData.houses)}
    </div>
  );
};

export default KeywordTable;
