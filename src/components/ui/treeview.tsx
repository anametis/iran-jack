"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type MenuItem = {
  label: string;
  items?: MenuItem[];
};

type Props = {
  menu: MenuItem[];
  className?: string;
};

const TreeItem = ({ label, items }: MenuItem) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mx-21 bg-white">
      <div
        className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-1 rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        {items && (
          <span>
            <ChevronRight
              size={16}
              className={`transform transition-transform duration-300 ease-in-out ${
                isOpen ? "rotate-90" : ""
              }`}
            />
          </span>
        )}
        <span>{label}</span>
      </div>
      <div
        className={`transition-max-height duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[1000px]" : "max-h-0"
        }`}
        style={{ transitionProperty: 'max-height' }}
      >
        {items && (
          <div className="ml-4">
            {items.map((item, index) => (
              <TreeItem key={index} label={item.label} items={item.items} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const TreeView = ({ menu, className }: Props) => {
  return (
    <div className={cn("p-4 max-w-xs w-full rounded-md", className)}>
      {menu.map((item, index) => (
        <TreeItem key={index} label={item.label} items={item.items} />
      ))}
    </div>
  );
};

export default TreeView;
