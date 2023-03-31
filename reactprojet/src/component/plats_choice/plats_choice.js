import React, { useState } from 'react';
import dataCartes from '../datacarte/datacarte';
import './plats_choice.css';

function PlatsChoice() {

    return (
     <div className='choice_categorie_plats'>
         <div className='categore_title'>
             <h2>Nos entrées</h2>
         </div>
        <div className='affiche_cartes'>
            {dataCartes.map(item => (
                item.category === "entrées" &&
                <div className={`carte entrées`} key={item.id}>
                    <div className='details'>
                        <h3>{item.name}</h3>
                    </div>
                    <img className='img_cartes' src={item.image} alt={item.name} />
                    <p className='details_price'>{item.price} €</p>
                </div>
            ))}
        </div>
         <div className='categore_title'>
             <h2>Nos plats</h2>
         </div>
         <div className='affiche_cartes'>
             {dataCartes.map(item => (
                 item.category === "plats" &&
                 <div className={`carte plats`} key={item.id}>
                     <div className='details'>
                         <h3>{item.name}</h3>
                     </div>
                     <img className='img_cartes' src={item.image} alt={item.name} />
                     <p className='details_price'>{item.price} €</p>
                 </div>
             ))}
         </div>
         <div className='categore_title'>
             <h2>Nos desserts</h2>
         </div>
         <div className='affiche_cartes'>
             {dataCartes.map(item => (
                 item.category === "desserts" &&
                 <div className={`carte desserts`} key={item.id}>
                     <div className='details'>
                         <h3>{item.name}</h3>
                     </div>
                     <img className='img_cartes' src={item.image} alt={item.name} />
                     <p className='details_price'>{item.price} €</p>
                 </div>
             ))}
         </div>
    </div>
    );
  }

  export default PlatsChoice;