import React, { useState, useContext } from "react";
import Wishlist from '../components/Profile/Wishlist';
import Tradelist from '../components/Profile/Tradelist';
import { useQuery } from "@apollo/client";
import { QUERY_ME, QUERY_USERS } from "../utils/queries";
import { useMutation } from "@apollo/client";
import { REMOVE_TRADE, REMOVE_WISH } from "../utils/mutations";
import Auth from "../utils/auth"
import { LoginContext } from "../App";



export default function Profile() {
    // pull in user's User Name
    const { loading, data } = useQuery(QUERY_ME);
    const keepUser = useQuery(QUERY_USERS, {
        variables: { email: useContext(LoginContext)[0]}
    });

    const user = data?.me || '(No User Name Found)';
    const tradelistItems = data?.me.trade || 'Nothing added to your trade list yet!'
    const wishlistItems = data?.me.wish || 'Nothing added to your wish list yet!'
    const [keepMe, setKeepMe] = useState(user)
    const [profileTradeList, setProfileTradeList] = useState(tradelistItems)
    const [profileWishList, setProfileWishList] = useState(wishlistItems)
    console.log(tradelistItems)
    console.log(wishlistItems)
    console.log(keepUser)
    console.log(useContext(LoginContext)[0]);


    const [removeTrade, {error: tradeError}] = useMutation(REMOVE_TRADE)
    const handleTradeDelete = async (plant: any) => {
        console.log(plant)
        try {
        await removeTrade({
            variables: {
                    plantId: plant.plantId,
            },
        });
        setProfileTradeList(data.trade)
         }
        catch (err) { console.log(err)}
    };

    const [removeWish, {error: wishError}] = useMutation(REMOVE_WISH)
    const handleWishDelete = async (plant: any) => {
        console.log(plant)
        try {
        await removeWish({
            variables: {
                    plantId: plant.plantId,
            },
        });
        setProfileWishList(data.wish)
        }
        catch (err) { console.log(err)}
    };

    return (
        <div className="profile-cont">
            <div className="profile">
                <div className="profile-header">{keepMe.userName}'s Profile</div>
                <div className="prof-1">
                    <div className='OOT-cont'>
                        <div className="prof-sub-header">Open To Trade</div>
                        <div className="spacer">
                            {profileTradeList.map((tradelist:any) => {                                        
                                return (
                                    <Tradelist
                                        key={tradelist.plantId}
                                        title={tradelist.plantName}
                                        callbackTrade={() => handleTradeDelete(tradelist.plantId)}
                                    ></Tradelist>
                                )
                            })}
                        </div>
                    </div>
                    <div className="wishlist-cont">
                        <div className="prof-sub-header">Wishlist</div>
                        <div className="spacer">
                            {profileWishList.map((wishlist:any) => {
                                return (
                                    <Wishlist
                                        key={wishlist.plantId}
                                        title={wishlist.plantName}
                                        callbackWish={() => handleWishDelete(wishlist.plantId)}
                                    ></Wishlist>
                                )
                            })}
                        </div>
                    </div>
                        <div className="trade-cont">
                            <div className="prof-sub-header">Plant Your Garden</div>
                        </div>
                </div>
            </div>
        </div>
    )
}