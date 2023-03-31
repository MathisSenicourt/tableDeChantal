import React from 'react';
import './affiche_boissons.css';
import dataCartes from '../datacarte/datacarte';


function AfficheBoissons() {
    return (
        <div>
            <div className='categore_title'>
                <h2>Nos boissons</h2>
            </div>
            <div className='affiche_boissons'>
                {dataCartes.map(item => (
                    item.category === "boissons" &&
                    <div className='boissons' key={item.id}>
                        <div className='details'>
                            <h3>{item.name}</h3>
                        </div>
                        <img className='img_boissons' src={item.image} alt={item.name} />
                        <p className='details_price'>{item.price} €</p>
                    </div>

                ))}
            </div>
        </div>
    );
}

export default AfficheBoissons;