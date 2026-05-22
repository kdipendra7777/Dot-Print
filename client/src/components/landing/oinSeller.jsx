import { Link } from "react-router-dom";
import { UserPlus } from "lucide-react";

const JoinSeller = ({ fullWidth = false }) => {
  return (
    <Link
      to="/join-dot-print"
      className={`flex items-center justify-center gap-2 px-4 py-2 rounded-md
      bg-purple-600 hover:bg-purple-700
      text-white text-sm font-semibold transition
      ${fullWidth ? "w-full" : ""}`}
    >
      <UserPlus size={16} />
      Join as Seller
    </Link>
  );
};

export default JoinSeller;