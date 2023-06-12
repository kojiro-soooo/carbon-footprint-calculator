import React from 'react'

const Suggestions = ({ carbonFootprint, electricity, naturalGas, meals, flights, carMileage }) => {
  let suggestions = []

  console.log("electricity", electricity)
  console.log("naturalGas", naturalGas)
  console.log("meals", meals)
  console.log("flights", flights)
  console.log("carMileage", carMileage)
  electricity > 909 && suggestions.push('Use energy-efficient appliances and turn off lights when not in use.')
  naturalGas > 2637 && suggestions.push('Invest in a smart thermostat, lowering the thermostat even just a couple degrees during the winter, or washing dishes and clothes with full loads only')
  // fuel > 24 && suggestions.push('Consider cycling or walking for short-distance trips.')
  meals >= 2 && suggestions.push('Transition to a plant-based diet or reduce food waste by planning meals and buying only what you need')
  // (meals <= 2 && meals > 0) && suggestions.push('Choose locally sourced and seasonal foods to reduce carbon emissions from transportation')
  flights > 300 && suggestions.push('Minimize air travel and consider offsetting your emissions when you do fly.')
  carMileage > 1192 && suggestions.push('Opt for public transportation or carpooling instead of driving alone.')
  
  if (suggestions.length === 0){
    if (carbonFootprint <= 1400) {
        suggestions = [
          'Reduce food waste by planning meals and buying only what you need.',
          'Opt for public transportation or carpooling instead of driving alone.',
          'Use energy-efficient appliances and turn off lights when not in use.',
        ]
      } else if (carbonFootprint >1400 && carbonFootprint <= 1600) {
        suggestions = [
          'Choose locally sourced and seasonal foods to reduce carbon emissions from transportation.',
          'Consider cycling or walking for short-distance trips.',
          'Plant trees or support reforestation initiatives to offset your carbon footprint.',
        ]
      } else {
        suggestions = [
          'Transition to a plant-based diet to significantly reduce your carbon footprint.',
          'Minimize air travel and consider offsetting your emissions when you do fly.',
          'Advocate for renewable energy and support policies that address climate change.',
        ]
      }
  }
  
  // if (electricity > 909) {
  //   suggestions.push('Use energy-efficient appliances and turn off lights when not in use.')
  // }

  // if (naturalGas > 2637}

  // if (carbonFootprint <= 5) {
  //   suggestions = [
  //     'Reduce food waste by planning meals and buying only what you need.',
  //     'Opt for public transportation or carpooling instead of driving alone.',
  //     'Use energy-efficient appliances and turn off lights when not in use.',
  //   ]
  // } else if (carbonFootprint <= 10) {
  //   suggestions = [
  //     'Choose locally sourced and seasonal foods to reduce carbon emissions from transportation.',
  //     'Consider cycling or walking for short-distance trips.',
  //     'Plant trees or support reforestation initiatives to offset your carbon footprint.',
  //   ]
  // } else {
  //   suggestions = [
  //     'Transition to a plant-based diet to significantly reduce your carbon footprint.',
  //     'Minimize air travel and consider offsetting your emissions when you do fly.',
  //     'Advocate for renewable energy and support policies that address climate change.',
  //   ]
  // }

  return (
    <div>
      <ul className="list-disc ml-5">
        {suggestions.map((suggestion, index) => (
          <li key={index}>{suggestion}</li>
        ))}
      </ul>
    </div>
  )
}

export default Suggestions
