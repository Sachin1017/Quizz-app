import React from 'react';

function ProgressBar({ progress, bgColor }) {
  const Parentdiv = {
    height: 10,
    width: 150,
    backgroundColor: bgColor,
    borderRadius: 40,
    margin: 50,
  };

  const Childdiv = {
    height: '100%',
    width: `${progress}%`,
    backgroundColor: 'limegreen',
    borderRadius: 40,
    textAlign: 'right',
  };

  return (
    <div style={Parentdiv}>
      <div style={Childdiv} />
    </div>
  );
}

export default ProgressBar;
