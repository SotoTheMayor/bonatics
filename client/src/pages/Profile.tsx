import React from "react";
import Wishlist from '../components/Profile/Wishlist';
import Tradelist from '../components/Profile/Tradelist';
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";




export default function Profile() {
    // pull in user's User Name
    const { loading, data } = useQuery(QUERY_ME);
    const user = data?.me.userName || '(No User Name Found)';
    const tradelistItems = data?.me.trade || 'Nothing added to your trade list yet!'
    const wishlistItems = data?.me.wish || 'Nothing added to your wish list yet!'

    return (
        <div className="profile-cont">
            <div className="profile">
                <div className="profile-header">{user}'s Profile</div>
                <div className="prof-1">
                    <div className='OOT-cont'>
                        <div className="prof-sub-header">Open To Trade</div>
                        <div>
                            {tradelistItems.map((tradelist:any) => {                                        return (
                                    <div>
                                        <Tradelist
                                            title={tradelist.plantName}
                                        ></Tradelist>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="wishlist-cont">
                        <div className="prof-sub-header">Wishlist</div>
                        <div>
                            {wishlistItems.map((wishlist:any) => {
                                return (
                                    <div>
                                        <Wishlist
                                            title={wishlist.plantName}
                                        ></Wishlist>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="trade-cont">
                            <div className="prof-sub-header">Plant Your Garden</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}