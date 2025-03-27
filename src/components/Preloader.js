import React, { useState, useEffect } from "react";

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (e.g., API fetch)
    const timer = setTimeout(() => setIsLoading(false), 2000);

    return () => clearTimeout(timer);
  }, []);

  return isLoading ? <div id="preloader"></div> : null;
};

export default Preloader;
