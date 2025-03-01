'use client';
import React, { useState } from "react";

const chemistryExperiments = [
  {
    title: "Acid-Base Titration",
    aim: "To determine the concentration of an acid using a base.",
    apparatus: "Burette, Pipette, Conical Flask, Indicator, Acid, Base",
    procedure: "1. Fill burette with base solution.\n2. Take acid in a conical flask with an indicator.\n3. Add base dropwise until color changes.\n4. Record readings and calculate concentration.",
    observation: "Color change at equivalence point.",
    result: "Concentration of acid determined."
  },
  {
    title: "Electrolysis of Water",
    aim: "To observe the decomposition of water by electrolysis.",
    apparatus: "Battery, Electrodes, Water, Sulfuric Acid",
    procedure: "1. Set up electrolysis apparatus.\n2. Add sulfuric acid to water.\n3. Connect electrodes to battery.\n4. Observe gas bubbles at electrodes.",
    observation: "Hydrogen collected at cathode, oxygen at anode.",
    result: "Water decomposes into hydrogen and oxygen."
  },
  {
    title: "Reaction of Metals with Acid",
    aim: "To observe the reaction of different metals with acids.",
    apparatus: "Dilute HCl, Zinc, Iron, Copper, Test Tubes",
    procedure: "1. Add metal samples to test tubes with acid.\n2. Observe gas bubbles and reaction intensity.\n3. Test for hydrogen gas using a burning splint.",
    observation: "Some metals react vigorously, releasing hydrogen gas.",
    result: "Reactivity depends on metal type."
  },
  {
    title: "pH of Solutions",
    aim: "To determine the pH of various solutions.",
    apparatus: "pH Paper, Universal Indicator, Beakers, Different Solutions",
    procedure: "1. Dip pH paper into solutions.\n2. Compare color change with pH scale.\n3. Use universal indicator for verification.",
    observation: "Different solutions show varying pH values.",
    result: "Solutions are classified as acidic, neutral, or basic."
  },
  {
    title: "Preparation of Oxygen",
    aim: "To prepare oxygen gas using hydrogen peroxide.",
    apparatus: "Hydrogen Peroxide, Manganese Dioxide, Test Tube, Glowing Splint",
    procedure: "1. Add manganese dioxide to hydrogen peroxide.\n2. Observe gas evolution.\n3. Test with a glowing splint.",
    observation: "Splint reignites, indicating oxygen.",
    result: "Oxygen gas successfully prepared."
  }
];

const Chemistry = () => {
  const [selectedExperiment, setSelectedExperiment] = useState(null);

  const toggleExperiment = (index) => {
    setSelectedExperiment(selectedExperiment === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-purple-400 p-10 pt-20">
      <h1 className="text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-white">
        Chemistry Experiments
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {chemistryExperiments.map((experiment, index) => (
          <div 
            key={index} 
            className="bg-gray-800 p-6 rounded-xl shadow-lg cursor-pointer hover:scale-105 transition-transform"
            onClick={() => toggleExperiment(index)}
          >
            <h2 className="text-2xl font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-white">
              {experiment.title}
            </h2>
            {selectedExperiment === index && (
              <div className="mt-4 text-white">
                <p><strong className="text-purple-300">Aim:</strong> {experiment.aim}</p>
                <p><strong className="text-purple-300">Apparatus:</strong> {experiment.apparatus}</p>
                <p><strong className="text-purple-300">Procedure:</strong> {experiment.procedure}</p>
                <p><strong className="text-purple-300">Observation:</strong> {experiment.observation}</p>
                <p><strong className="text-purple-300">Result:</strong> {experiment.result}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chemistry;
