import React from 'react';

const StepContent = ({ currentStep, filters, setFilters }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // For sliders or numeric values
    if (name === "tuitionFeeRange") {
      const [min, max] = value.split(",");
      setFilters((prev) => ({
        ...prev,
        tuitionFeeRange: [parseInt(min), parseInt(max)],
      }));
    } else {
      setFilters((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-md">
      {currentStep === 1 && (
        <>
          <h2 className="text-xl font-semibold mb-4">Step 1: Choose Type</h2>
          <select
            name="type"
            className="w-full border rounded p-2"
            value={filters.type || ""}
            onChange={handleInputChange}
          >
            <option value="">Select University Type</option>
            <option value="Public">Public</option>
            <option value="Private">Private</option>
          </select>
        </>
      )}

      {currentStep === 2 && (
        <>
          <h2 className="text-xl font-semibold mb-4">Step 2: Set Location</h2>
          <input
            type="text"
            name="location"
            className="w-full border rounded p-2"
            placeholder="Enter a location (e.g., USA, UK)"
            value={filters.location || ""}
            onChange={handleInputChange}
          />
        </>
      )}

      {currentStep === 3 && (
        <>
          <h2 className="text-xl font-semibold mb-4">Step 3: Tuition Fee Range</h2>
          <input
            type="range"
            name="tuitionFeeRange"
            className="w-full"
            min="10000"
            max="50000"
            step="5000"
            value={filters.tuitionFeeRange || [10000, 50000]}
            onChange={handleInputChange}
          />
          <p className="text-gray-600 mt-2">
            ${filters.tuitionFeeRange ? filters.tuitionFeeRange[0] : 10000} - $
            {filters.tuitionFeeRange ? filters.tuitionFeeRange[1] : 50000}
          </p>
        </>
      )}

      {currentStep === 4 && (
        <>
          <h2 className="text-xl font-semibold mb-4">Step 4: Minimum Rating</h2>
          <input
            type="number"
            name="rating"
            className="w-full border rounded p-2"
            placeholder="Enter minimum rating (e.g., 4)"
            value={filters.rating || ""}
            onChange={handleInputChange}
          />
        </>
      )}
    </div>
  );
};

export default StepContent;
