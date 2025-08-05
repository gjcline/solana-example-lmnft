import React, { useState } from 'react';

const FAQ = ({ artist }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: `Is this an official ${artist.name} collection?`,
      answer: `Yes! This is an official ${artist.name} x CHOPPED collaboration. ${artist.name} has partnered with CHOPPED to offer ${artist.allocation.toLocaleString()} exclusive tickets to their fans as part of the larger 45,000 ticket collection.`
    },
    {
      question: `How many tickets are allocated to ${artist.name} fans?`,
      answer: `${artist.name} fans have access to ${artist.allocation.toLocaleString()} exclusive tickets out of the total 45,000 CHOPPED collection. This gives ${artist.name}'s community a significant allocation in the elimination game.`
    },
    {
      question: "Can I still participate in the main CHOPPED game?",
      answer: `Absolutely! When you mint ${artist.name} x CHOPPED tickets, you're participating in the same elimination game as all other CHOPPED participants. Your ${artist.name} tickets are fully eligible for the $500K prize pool.`
    },
    {
      question: "When do eliminations start?",
      answer: `Eliminations begin 30 days after the mint is complete or when all 45,000 tickets (including ${artist.name}'s allocation) are sold. The process will be livestreamed and fully transparent, with each elimination round announced in advance.`
    },
    {
      question: `Can I buy multiple ${artist.name} tickets?`,
      answer: `Yes! You can purchase multiple ${artist.name} x CHOPPED tickets per transaction. More tickets = better odds of surviving the elimination rounds. Each ticket is an individual entry into the competition.`
    },
    {
      question: `What if I don't have SOL or crypto experience?`,
      answer: `No problem! Use the MoonPay widget above to buy SOL instantly with your credit card. The process takes just a few minutes and is perfect for ${artist.name} fans new to crypto. You'll need a Solana wallet like Phantom (free to download) to receive the SOL and mint your tickets.`
    },
    {
      question: "How are winners selected?",
      answer: `Winners are selected through a provably fair elimination process using blockchain randomness. ${artist.name} fans compete on equal terms with all other participants. Everything is transparent and verifiable on-chain - pure mathematical randomness determines the survivors.`
    },
    {
      question: `What happens to my ${artist.name} NFT if I don't win?`,
      answer: `Your ${artist.name} x CHOPPED ticket NFT remains in your wallet as a collectible commemorating your participation in the elimination game. While only 10 win the grand prizes, all ${artist.name} fans own a piece of both CHOPPED and ${artist.name} history.`
    },
    {
      question: `Does ${artist.name} get a cut of the sales?`,
      answer: `Yes, ${artist.name} receives a portion of the proceeds from their allocated tickets, supporting the artist while giving fans a chance to win luxury prizes. It's a win-win for both ${artist.name} and their community.`
    },
    {
      question: `Will ${artist.name} be involved in the elimination process?`,
      answer: `While the elimination process is completely automated and fair, ${artist.name} will be cheering on their fans throughout the competition! Follow ${artist.name}'s social media for updates and encouragement during the elimination rounds.`
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <div className="container">
        <h2 className="section-title" style={{ background: `linear-gradient(45deg, ${artist.color}, #ffaa00)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          ❓ {artist.name} x CHOPPED FAQ
        </h2>
        
        <div className="faq-grid">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                {faq.question}
                <i className={`fas fa-chevron-down ${activeIndex === index ? 'rotated' : ''}`}></i>
              </div>
              <div className="faq-answer">
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;