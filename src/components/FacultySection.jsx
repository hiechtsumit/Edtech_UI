import React from 'react';
import { Monitor, Telescope, ChevronRight } from 'lucide-react';

const ApprodablePackages = () => {
  return (
    <div className="container px-4 py-8 mt-20 mb-20 flex flex-col items-center md:flex-row">
      <div className="mb-8">
        <div className="w-16 h-1 bg-red-brown mb-4"></div>
        <h2 className="text-3xl font-bold text-black-blue mb-4">Approdable Packages</h2>
        <p className="mb-4">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
        </p>
        <button className="text-green-white flex font-semibold items-center hover:translate-x-5">
          Learn More <ChevronRight className="ml-2 transition duration-300" size={20} />
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <PackageCard
          icon={<Monitor className="w-12 h-12 text-white" />}
          title="Certified Teacher"
          description="The gradual accumulation of information about"
        />
        <PackageCard
          icon={<Telescope className="w-12 h-12 text-white" />}
          title="Expert Instruction"
          description="The gradual accumulation of information about"
        />
      </div>
    </div>
  );
};

const PackageCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="bg-green-white w-16 h-16 rounded-lg flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-black-blue mb-2">{title}</h3>
      <div className="w-12 h-1 bg-red-brown mb-4"></div>
      <p className="">{description}</p>
    </div>
  );
};

export default ApprodablePackages;