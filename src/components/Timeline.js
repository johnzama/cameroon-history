import React from 'react';
import './Timeline.css'; // Styling for the timeline

const events = [
  { year: 1960, event: 'Cameroon gains independence from France and Britain.' },
  { year: 1972, event: 'Formation of a united republic.' },
  { year: 1982, event: 'Paul Biya becomes president.' },
];

const Timeline = () => {
  return (
    <div className="timeline">
      {events.map((event, index) => (
        <div key={index} className="timeline-event">
          <h4>{event.year}</h4>
          <p>{event.event}</p>
        </div>
      ))}
    </div>
  );
};

export default Timeline;

