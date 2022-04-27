import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';

import { useStateContext } from '../context/StateContext';
import { runFireworks } from '../lib/utils';

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
  
  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireworks();
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Merci pour votre commande !</h2>
        <p className="email-msg">Consulter votre boite mail pour votre facture.</p>
        <p className="description">
          Si vous avez des questions, merci de nous contacter :
          <a className="email" href="mailto:basti74600@hotmail.fr">
            basti74600@hotmail.fr
          </a>
        </p>
        <Link href="/allproduct">
          <button type="button" width="300px" className="btn">
            Continuez vos achats
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Success