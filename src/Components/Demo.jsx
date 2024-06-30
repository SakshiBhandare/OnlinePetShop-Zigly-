import React from 'react';
import { ReactTyped } from "react-typed";


const Demo = () => {

  // const [minPrice, setMinPrice] = useState(35);
  // const [maxPrice, setMaxPrice] = useState(20400);

  // const handlePriceChange = (event, values) => {
  //   setMinPrice(values[0]);
  //   setMaxPrice(values[1]);
  // };
  // const [showMore, setShowMore] = useState(false);

  // const toggleShowMore = () => {
  //     setShowMore(!showMore);
  // };

  return (
    <>
      <div>
        <ReactTyped strings={["Here you can find anything"]} typeSpeed={40} />
        <br />

        <ReactTyped
          strings={[
            "Search for products",
            "Search for categories",
            "Search for brands",
          ]}
          typeSpeed={40}
          backSpeed={50}
          attr="placeholder"
          loop
        >
          <input type="text" />
        </ReactTyped>
      </div>

      {/* <div className="flex flex-col items-center">
      <p className="text-gray-700 text-base mb-2">Price</p>
      <div className="w-full">
        <span className="text-xs text-gray-500 float-left">₹{minPrice}</span>
        <span className="text-xs text-gray-500 float-right">₹{maxPrice}</span>
      </div>
      <input
        type="range"
        className="w-full mt-2"
        min={35}
        max={20400}
        value={[minPrice, maxPrice]}
        onChange={handlePriceChange}
      />
    </div> */}
      {/* <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
                <p className="text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, labore blanditiis corrupti dicta ipsum quidem itaque sit vero accusamus cumque aut aliquam ipsa exercitationem illum earum? Odio explicabo aliquid facere amet, reprehenderit libero laborum labore distinctio cumque vitae consequatur, asperiores qui adipisci itaque minus ab nobis, dolorum quibusdam et debitis!</p>
                {showMore ? (
                    <>
                        <p className="mt-4 text-lg">Additional information Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis non tenetur, excepturi porro incidunt maxime.</p>
                        <button
                            className="mt-4 text-blue-500 hover:text-blue-700"
                            onClick={toggleShowMore}
                        >
                            Show less
                        </button>
                    </>
                ) : (
                    <button
                        className="mt-4 text-blue-500 hover:text-blue-700"
                        onClick={toggleShowMore}
                    >
                        Read more
                    </button>
                )}
            </div> */}
    </>
  );
};

export default Demo;