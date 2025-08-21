import React from "react";
import { RxCaretRight } from "react-icons/rx";
import { homeProductsData } from "../home/homeProductsData";

const HomepageProducts = () => {
  return (
    <div className="px-5 py-5">
      <div className="grid grid-cols-1 grid-rows-1 lg:grid-cols-2 lg:grid-rows-2 gap-1 xl:gap-5">
        {homeProductsData.map((item, index) => (
          <div key={index} className="relative">
            <img src={item.img} alt="heroproduct" className="h-screen object-cover" />
            <div className="absolute inset-0 flex flex-col items-center justify-items-start mt-12">
              <div className="text-gray-600">{item.subtitle}</div>
              <div className="text-4xl text-black my-2">
                {item.title}{" "}
                {item.highlight && <span className="font-thin">{item.highlight}</span>}
              </div>
              <div className="text-lg mb-3 text-gray-800 font-medium">{item.description}</div>
              <div className="flex gap-4">
                {item.links.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    className="hover:underline transition-all text-lg font-thin h-10 cutsom-pointer flex items-center justify-content-center w-auto"
                  >
                    {link.text} <RxCaretRight className="text-xl mt-1" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomepageProducts;
