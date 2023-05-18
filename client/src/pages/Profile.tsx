import React from "react";
import Wishlist from '../components/Profile/Wishlist';
const wishlistItems = [
    {
        title: "enter a title here",
    },
]

export default function Profile() {
    return (
        <div className="profile-cont">
            <div className="profile">
            <div className="profile-header">"User" profile</div>
                <div className="prof-1">
            <div className='OOT-cont'>
                <div className="OOT-header">Open To Trade</div>
                <div>
                {wishlistItems.map((wishlist) => {
                return (
                  <div>
                    <Wishlist
                        title={wishlist.title}
                        ></Wishlist>
                  </div>
            )
        })}
        </div>
            </div>
            <div className="wishlist-cont">
                <div className="wishlist-header">Wishlist</div>
            </div>
            <div className="trade-cont">
                <div className="trade-header">Plant Your Garden</div>
            </div>
            </div>
            </div>
        </div>
        
    )
}