import React from "react";

function NavigationDots({ active }) {
  return (
    <div className="app__navigation">
      {["pagrindinis", "apie", "darbai", "įgūdžiai", "kontaktai"].map(
        (item, index) => (
          <a
            href={`#${item}`}
            key={item + index}
            className="app__navigation-dot"
            style={active === item ? { backgroundColor: "#313BAC" } : {}}
          />
        )
      )}
    </div>
  );
}

export default NavigationDots;
