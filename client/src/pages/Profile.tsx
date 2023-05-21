import React from "react";
import Wishlist from '../components/Profile/Wishlist';
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";

const wishlistItems = [
    {
        title: "enter a title here",
    },
    {
        title: "enter a title here",
    },
]


export default function Profile() {
    // pull in user's User Name
    const { loading, data } = useQuery(QUERY_ME);
    const user = data?.me.userName || '(No User Name Found)';

    return (
        <div className="profile-cont">
            <div className="profile">
            <div className="profile-header">{user}'s Profile</div>
                <div className="prof-1">
            <div className='OOT-cont'>
                <div className="prof-sub-header">Open To Trade</div>
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
                <div className="prof-sub-header">Wishlist</div>
            </div>
            <div className="trade-cont">
                <div className="prof-sub-header">Plant Your Garden</div>
            </div>
            </div>
            </div>
        </div>
        
    )
}