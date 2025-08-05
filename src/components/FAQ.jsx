import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How does the elimination game work?",
      answer: "45,000 tickets will be sold. Once minting closes, we'll randomly eliminate participants in rounds until only 10 winners remain. Each winner receives a luxury watch worth $50,000. The elimination process is completely transparent and verifiable on-chain."
    },
    {
      question: "When do eliminations start?",
      answer: "Eliminations begin 30 days after the mint is complete or when all 45,000 tickets are sold. The process will be livestreamed and fully transparent, with each elimination round announced in advance."
    },
    {
      question: "Can I buy multiple tickets?",
      answer: "Yes! You can purchase up to 50 tickets per transaction. More tickets = better odds of surviving the elimination rounds. Each ticket is an individual entry into the competition."
    },
    {
      question: "What if I don't have SOL or crypto experience?",
      answer: "No problem! Use the MoonPay widget above to buy SOL instantly with your credit card. The process takes just a few minutes. You'll need a Solana wallet like Phantom (free to download) to receive the SOL and mint your tickets."
    },
    {
      question: "How are winners selected?",
      answer: "Winners are selected through a provably fair elimination process using blockchain randomness. Everything is transparent and verifiable on-chain. No human bias - pure mathematical randomness determines the survivors."
    },
    {
      question: "What happens to my NFT if I don't win?",
      answer: "Your ticket NFT remains in your wallet as a collectible commemorating your participation in the elimination game. While only 10 win the grand prizes, all participants own a piece of CHOPPED history."
    },
    {
      question: "Are the prizes really worth $50,000 each?",
      answer: "Yes! All watches are authentic luxury timepieces from brands like Rolex, Patek Philippe, and Audemars Piguet. Each watch is professionally appraised and verified before being awarded to winners."
    },
    {
      question: "How will I know if I'm eliminated?",
      answer: "Each elimination round will be announced via our official channels. You'll receive notifications if you advance to the next round. All eliminations are recorded on-chain for transparency."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <div className="container">
        <h2 className="section-title">❓ FREQUENTLY ASKED</h2>
        
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