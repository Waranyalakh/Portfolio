import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { SiLine } from "react-icons/si";

const ContactCard = () => (
  <div className="card  bg-base-100 shadow-xl border border-primary max-w-full mx-auto">
    <div className="card-body">
      <h2 className="card-title text-primary text-2xl mb-4">
        ช่องทางการติดต่อ
      </h2>
      
      <ul className="space-y-4">
        <li className="flex items-center gap-4">
          <div className="bg-success bg-opacity-10 p-3 rounded-full">
            <FaPhoneAlt className="text-white text-xl" />
          </div>
          <span className="text-base font-medium text-gray-700">
            เบอร์โทร: 064-210-6035
          </span>
        </li>
        <li className="flex items-center gap-4">
          <div className="bg-info bg-opacity-10 p-3 rounded-full">
            <FaEnvelope className="text-white text-xl" />
          </div>
          <span className="text-base font-medium text-gray-700">
            อีเมล: waranyalakhom40@gmail.com
          </span>
        </li>
        <li className="flex items-center gap-4">
          <div className="bg-green-100 p-3 rounded-full">
            <SiLine className="text-green-500 text-xl" />
          </div>
          <span className="text-base font-medium text-gray-700">
            ไลน์: mint34435
          </span>
        </li>
      </ul>
    </div>
  </div>
);

export default ContactCard;
