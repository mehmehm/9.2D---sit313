import React from 'react';
import './Jobtype.css';

const Jobtype = ({ setJobType, currentJobType }) => {
  const handleJobTypeChange = (event) => {
    setJobType(event.target.value);
  };

  return (
    <div className="flex-container">
      <h>Select job type: </h>
      <form className="form-format">
        <label className="form-format">
          <input
            type="radio"
            name="radio"
            value="Question"
            checked={currentJobType === 'Question'}
            onClick={handleJobTypeChange} 
          />
          Question
        </label>
        <label className="form-format">
          <input
            type="radio"
            name="radio"
            value="Article"
            checked={currentJobType === 'Article'}
            onClick={handleJobTypeChange} 
          />
          Article
        </label>
        <br />
      </form>
    </div>
  );
};

export default Jobtype;