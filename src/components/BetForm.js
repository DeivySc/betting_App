import React, { useState } from 'react';

function BetForm() {
  const [selectedTeam, setSelectedTeam] = useState('');
  const [selectedMatch, setSelectedMatch] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Bet placed: ${selectedTeam} on match ${selectedMatch} for $${amount}`);
  };

  return (
    <form className="grid" onSubmit={handleSubmit}>
      <input
        type="text"
        value={selectedTeam}
        onChange={(e) => setSelectedTeam(e.target.value)}
        placeholder="Select Team"
        required
      />
      <input
        type="text"
        value={selectedMatch}
        onChange={(e) => setSelectedMatch(e.target.value)}
        placeholder="Select Match"
        required
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Bet Amount"
        required
      />
      <button type="submit">Place Bet</button>
    </form>
  );
}

export default BetForm;
