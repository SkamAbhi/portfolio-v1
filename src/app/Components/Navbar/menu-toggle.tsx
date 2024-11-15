import { motion, SVGMotionProps } from "framer-motion";
import { MenuIcon, ScrollText } from "lucide-react";

const Path = (
  props: React.JSX.IntrinsicAttributes &
    SVGMotionProps<SVGPathElement> &
    React.RefAttributes<SVGPathElement>
) => (
  <motion.path
    fill="#FFFFFF"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

export const MenuToggle = ({ toggle }: any) => (
  <div className="w-full flex justify-center items-center">
    <div className=" relative w-full max-w-[85rem] top-0 left-0 right-0 flex justify-between p-5 px-10 bg-transparent z-50">
      <div className="text-2xl text-white font-extrabold">A.S.</div>

      <div className="flex justify-center gap-6 items-center ">
        <div>
          <button className="relative inlineflex items-center px-8 py-3 overflow-hidden font-medium text-white bg-zinc-900 border border-zinc-800 rounded-lg group">
            <span className="absolute w-0 h-full transition-all duration-500 ease-out bg-white left-0 top-0 group-hover:w-full -z-1"></span>
            <span className="relative flex gap-4 group-hover:text-black transition-colors duration-300 ease-out">
              <ScrollText color="gray" height={22} width={22} />
              View Resume{" "}
            </span>
          </button>
        </div>
        <button onClick={toggle}>
          <svg
            width="23"
            height="18"
            viewBox="0 0 23 18"
            className="text-white"
            fill="none"
          >
            <Path
              d="M 2 2.5 L 20 2.5"
              className="top"
              stroke="#ffffff"
              variants={{
                closed: { d: "M 2 2.5 L 20 2.5" },
                open: { d: "M 3 16.5 L 17 2.5" },
              }}
            />
            <Path
              d="M 2 9.423 L 20 9.423"
              opacity="1"
              className="middle"
              stroke="#ffffff"
            />
            <Path
              d="M 2 16.346 L 20 16.346"
              className="bottom"
              stroke="#ffffff"
              variants={{
                closed: { d: "M 2 16.346 L 20 16.346" },
                open: { d: "M 3 2.5 L 17 16.346" },
              }}
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
);
