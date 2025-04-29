/***TODO 
 * MVP
 * Get prompt
 * Show prompt
 * Get to form
 * 
 * POST MVP
 * Show past prompts
 * Make fortune wheel
 * 
 */


//Imports
import { useState } from "react";



const WheelOfFortune = () =>{
  const initialPrompts = ["Cat", "Dog", "Plain despair", "Joy"]
  const [availablePrompts, setAvailablePrompts] = useState(initialPrompts);
  const [usedPrompts, setUsedPrompts] = useState('');
  const [selectedPrompt, setSelectedPrompt] = useState('');


 

  const handlePickPrompt = () =>{
    if(availablePrompts.length === 0){
      window.alert("there are no prompts to pick!")
      return
    }
    const randomIndex = Math.floor(Math.random() * availablePrompts.length);
    const selected = availablePrompts[randomIndex];

    const newAvailablePrompts = availablePrompts.filter((_, index) => index !== randomIndex);
    setAvailablePrompts(newAvailablePrompts);
    setUsedPrompts([...usedPrompts, selected]);

    setSelectedPrompt(selected);
    


  }
  const goToForm =() =>{
    console.log("user wants to go to form")
    window.alert("U clicked the form button! Goodu jobu!")
    
  }
    
    
    return (
      
        <div>
            <h3>Hi this is wheel of fortune</h3>
            <button 
        onClick={handlePickPrompt} 
        disabled={availablePrompts.length === 0}
        style={{ padding: '10px 20px', fontSize: '16px' }}
      >
        {availablePrompts.length === 0 ? 'No more prompts' : 'Pick a Prompt'}
      </button>
      {selectedPrompt && (
        <div style={{ marginTop: '20px', fontSize: '18px', fontWeight: 'bold' }}>
          {selectedPrompt}
        </div>
      )}

      {usedPrompts.length > 0 && (
        <div style={{ marginTop: '40px', textAlign: 'left', maxWidth: '400px', margin: '40px auto' }}>
          <h3>Picked Prompts:</h3>
          <ul>
            {usedPrompts.map((prompt, idx) => (
              <li key={idx}>{prompt}</li>
            ))}
          </ul>
        </div>
      )}
            <button onClick={goToForm}>Submit a prompt</button>           
        
        </div>
    )
}

export default WheelOfFortune