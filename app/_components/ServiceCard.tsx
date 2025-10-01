interface CardProps {
  title: string;
  description: string;
  items: string[];
  borderColor: string;
  bulletColor: string;
  buttonText: string;
  buttonLink: string;
}

export default function ServiceCard({
  title,
  description,
  items,
  borderColor,
  bulletColor,
  buttonText,
  buttonLink,
}: CardProps) {
  return (
    <div
      className={`drop-shadow lg:row-span-2 bg-white p-12 rounded-3xl border-2 relative overflow-hidden h-full`}
      style={{ borderColor }}
    >
      <div className="relative z-10 flex flex-col h-full">
        <h3 className="text-3xl font-bold text-gray-900 mb-6">{title}</h3>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed flex-1">
          {description}
        </p>
        <ul className="space-y-3 mb-8">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-center gap-3 text-gray-700">
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: bulletColor }}
              />
              {item}
            </li>
          ))}
        </ul>
        <button
          onClick={() => window.open(buttonLink, "_blank")}
          className="bg-gradient-to-r from-[#e8471d] to-[#6a4c93] text-white px-8 py-3 rounded-3xl font-semibold hover:from-[#e8471d] hover:to-[#f7a82c] transition-all shadow-[4px_4px_0px_0px_#000000] hover:shadow-[6px_6px_0px_0px_#000000] hover:translate-x-[-2px] hover:translate-y-[-2px] mt-auto"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}
