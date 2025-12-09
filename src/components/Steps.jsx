import { HiOutlineDocumentArrowUp } from "react-icons/hi2";
import { IoDocumentOutline, IoWalletOutline } from "react-icons/io5";

const Steps = () => {
    return (
        <div className="lg:flex items-center justify-center gap-20">
            <div className="flex items-center gap-3">
                <span className="text-4xl w-14 h-12 bg-[#FAFAFA]  border-2 border-gray-300 pt-1 pl-2 rounded-xl"><IoWalletOutline /></span>
                <h2 className="text-lg font-semibold">1. Make Secure Payment</h2>
            </div>
            <div className="flex items-center gap-3">
                 <span className="text-4xl w-14 h-12 bg-[#FAFAFA]  border-2 border-gray-300 pt-1 pl-2 rounded-xl "><HiOutlineDocumentArrowUp /></span>
                <h2 className="text-lg font-semibold">2. Submit Your Design</h2>
            </div>
            <div className="flex items-center gap-3">
                <span className="text-4xl w-14 h-12 bg-[#FAFAFA]  border-2 border-gray-300 pt-1 pl-2 rounded-xl"><IoDocumentOutline /></span>
                <h2 className="text-lg font-semibold">3. Get your Revamped Design</h2>
            </div>
        </div>
    );
};

export default Steps;