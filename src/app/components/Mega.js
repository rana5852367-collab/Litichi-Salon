"use client";

import Link from "next/link";
import { megaMenuData } from "../data/megaMenuData";

export default function Mega({ isOpen, category }) {
  if (!isOpen) return null;

  // If a specific category is selected, show all services for that category
  const displayData = category 
    ? megaMenuData.filter(item => item.id === category)
    : megaMenuData;

  // If category is specified but not found, show all
  const finalData = displayData.length > 0 ? displayData : megaMenuData;

  // If showing a specific category, show detailed view with all services
  if (category && finalData.length === 1) {
    const categoryItem = finalData[0];
    return (
      <div className="absolute left-0 top-full mt-4 w-[600px] bg-white border p-6 rounded-xl shadow-xl z-50">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold" style={{ color: "#C9A14A" }}>
            {categoryItem.icon} {categoryItem.name} Services
          </h2>
          <Link href="/services" className="text-sm underline" style={{ color: "#C9A14A" }}>
            View All
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {categoryItem.services.map((service, index) => (
            <Link 
              key={index}
              href={service.link}
              className="block p-4 rounded-lg border hover:shadow-md transition-all"
              style={{ borderColor: "#E5E5E5" }}
            >
              <div className="flex justify-between items-start mb-2">
                <span className="font-semibold" style={{ color: "#2A2A2A" }}>
                  {service.name}
                </span>
                <span className="font-bold" style={{ color: "#C9A14A" }}>
                  {service.price}
                </span>
              </div>
              {service.duration && (
                <p className="text-sm text-gray-500 mb-1">⏱ {service.duration}</p>
              )}
              {service.description && (
                <p className="text-sm text-gray-600">{service.description}</p>
              )}
            </Link>
          ))}
        </div>
      </div>
    );
  }

  // Default: show all categories with service names
  return (
    <div className="absolute left-0 top-full mt-4 w-[800px] bg-white border p-6 rounded-xl shadow-xl z-50">
      <div className="grid grid-cols-4 gap-6">
        {finalData.map((categoryItem) => (
          <div key={categoryItem.id}>
            <h3 className="font-bold mb-3 flex items-center gap-2" style={{ color: "#C9A14A" }}>
              <span>{categoryItem.icon}</span>
              {categoryItem.name}
            </h3>
            <ul className="space-y-2">
              {categoryItem.services.slice(0, 4).map((service, index) => (
                <li key={index}>
                  <Link 
                    href={service.link} 
                    className="block py-1 hover:text-gold transition-colors text-sm"
                    style={{ color: "#2A2A2A" }}
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              {categoryItem.services.length > 4 && (
                <li>
                  <Link 
                    href={`/services#${categoryItem.id}`}
                    className="text-xs font-semibold"
                    style={{ color: "#C9A14A" }}
                  >
                    +{categoryItem.services.length - 4} more
                  </Link>
                </li>
              )}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
