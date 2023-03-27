import React from 'react'
  
const ProgressBar = ({bgcolor,progress,height}) => {
     
    const Parentdiv = {
        height: height,
        width: '250px',
        backgroundColor: 'whitesmoke',
        borderRadius: 40,
        margin: 5
      }
      
      const Childdiv = {
        height: '100%',
        width: `${(progress/255)*100}%`, //bonus info!!: max base-stat for en pokemon er 255, som blissey har, som den eneste pokemon, i sin hp
        backgroundColor: bgcolor,
        borderRadius:40,
        textAlign: 'right'
      }

    return (
    <div classname="progressBar" style={Parentdiv}>
      <div style={Childdiv}>
      </div>
    </div>
    )
}
  
export default ProgressBar;