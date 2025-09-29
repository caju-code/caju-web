import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";

interface MentorCardProps {
  name: string;
  description: string;
  image: string;
  bgColor: string;
  linkedIn: string;
}

export default function MentorCard({
  name,
  description,
  image,
  bgColor,
  linkedIn,
}: MentorCardProps) {
  return (
    <div className="transform scale-80 origin-center">
      <div className="relative flex justify-center items-center w-full h-full">
        <div className="relative">
          <div
            className="absolute top-6 left-6 z-0"
            style={{
              width: "442px",
              height: "358px",
              backgroundColor: "#000000",
              borderRadius: "40px",
              clipPath:
                'path("M44.2894 41.7354C48.3267 17.6465 69.1768 0 93.6017 0H383.284C410.898 0 433.284 22.3858 433.284 50V308C433.284 335.614 410.898 358 383.284 358H50.3614C19.4461 358 -4.06087 330.225 1.0492 299.735L44.2894 41.7354Z")',
            }}
          />

          <div
            className="relative overflow-hidden flex flex-col z-10"
            style={{
              width: "442px",
              height: "358px",
              backgroundColor: bgColor,
              borderRadius: "40px",
              clipPath:
                'path("M44.2894 41.7354C48.3267 17.6465 69.1768 0 93.6017 0H383.284C410.898 0 433.284 22.3858 433.284 50V308C433.284 335.614 410.898 358 383.284 358H50.3614C19.4461 358 -4.06087 330.225 1.0492 299.735L44.2894 41.7354Z")',
            }}
          >
            {/* <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-8 right-12 w-40 h-20 border-2 border-white/30 rounded-full transform rotate-12" />
              <div className="absolute bottom-12 right-16 w-24 h-12 border-2 border-white/20 rounded-full transform -rotate-12" />
            </div> ATENCAO > corrigir background do card*/}

            <div className="relative z-10 p-8 flex flex-col h-full w-2/3 ml-auto text-right">
              <div className="mb-6">
                <h3 className="text-white font-bold text-2xl mb-2">{name}</h3>
              </div>

              <div className="flex-1 mb-6">
                <p className="text-white/90 text-base leading-relaxed">
                  {description}
                </p>
              </div>

              <div className="mt-auto w-full flex justify-end">
                <a
                  href={linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit flex items-center gap-2 bg-[#0A66C2] text-white font-bold text-lg px-4 py-2 rounded-lg hover:bg-[#004182] transition-all duration-300"
                >
                  <FaLinkedin size={20} />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="absolute -left-14 top-1/2 transform -translate-y-1/2 z-20">
            <div
              className="rounded-full overflow-hidden border-4 border-white shadow-lg"
              style={{ width: "194px", height: "194px" }}
            >
              <Image
                src={image}
                alt={name}
                width={194}
                height={194}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
