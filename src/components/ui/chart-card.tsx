import React from "react";
import { Card } from "@/components/ui/card";

type ChartCardProps = {
  title: string;
  description?: string;
  children: React.ReactNode;
  // onViewDetailsClick?: () => void;
};

const ChartCard: React.FC<ChartCardProps> = ({
  title,
  description,
  children,
  // onViewDetailsClick,
}) => {
  return (
    <Card className="p-4 relative flex flex-col justify-between items-start">
      <div className="flex w-full justify-between items-center mb-4">
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          {description && <p className="text-gray-500 font-light text-sm">{description}</p>}
        </div>
        <button className="text-gray-500 hover:text-gray-700">
          <span>...</span>
        </button>
      </div>
      <div className="mb-4">{children}</div>
      {true && (
        <button
          // onClick={onViewDetailsClick}
          className="text-blue-600 hover:text-blue-800 font-light text-sm"
        >
          View details
        </button>
      )}
    </Card>
  );
};

export default ChartCard;
