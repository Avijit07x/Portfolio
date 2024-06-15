import Link from "next/link";
import HomeIcon from "./icons/Homeicon";
import ToolsIcon from "./icons/Toolsicon";
import WorkHistoryIcon from "./icons/WorkIcon";
import ContactIcon from "./icons/ContactIcon";

const BottomMenuBar = () => {
	return (
		<div className=" w-full flex items-center justify-center  backdrop-filter bg-opacity-80 backdrop-blur-sm fixed bottom-0 py-5">
			<ul className="flex gap-10 lg:gap-16">
				<li>
					<Link href="#hero">
						<HomeIcon className="hover:text-primary transition-all duration-300" />
					</Link>
				</li>
				<li>
					<Link href="#tools">
						<ToolsIcon className="hover:text-primary transition-all duration-300" />
					</Link>
				</li>
				<li>
					<Link href="#work">
						<WorkHistoryIcon className="hover:text-primary transition-all duration-300" />
					</Link>
				</li>
				<li>
					<Link href="#contact">
						<ContactIcon className="hover:text-primary transition-all duration-300" />
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default BottomMenuBar;
