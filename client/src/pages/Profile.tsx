import React, { useState, useContext } from "react";
import Wishlist from '../components/Profile/Wishlist';
import Tradelist from '../components/Profile/Tradelist';
import WishTrade from '../components/Profile/PYG'
import { useLazyQuery, useQuery } from "@apollo/client";
import { QUERY_ME, QUERY_USERS,QUERY_WISHTRADE } from "../utils/queries";
import { useMutation } from "@apollo/client";
import { REMOVE_TRADE, REMOVE_WISH } from "../utils/mutations";
import Auth from "../utils/auth"




export default function Profile() {
    // pull in user's User Name
    const { loading, data } = useQuery(QUERY_ME);
    const [getWishTrade, {error: gwtError}] = useLazyQuery(QUERY_WISHTRADE)

    const user = data?.me || '(No User Name Found)';

    const tradelistItems = data?.me.trade || []
    const wishlistItems = data?.me.wish || [] 
    let wishTradeResult:any[] = []

    const [profileTradeList, setProfileTradeList] = useState(tradelistItems)
    const [profileWishList, setProfileWishList] = useState(wishlistItems)
    const [profileWishTradeList, setProfileWishTradeList] = useState(wishTradeResult)

    
    
    const determineWishTrade = (pass:any) => {
        for (let i=0; i<profileWishList.length; i++) {
            const compare = getWishTrade( { variables: {plantId : pass } } )
            if (profileWishList[i] === compare) {
                wishTradeResult.push(i)
            }
        }
        setProfileWishTradeList(wishTradeResult)
        return wishTradeResult
    }
    

    const [removeTrade, {error: tradeError}] = useMutation(REMOVE_TRADE)
    const handleTradeDelete = async (plant: any) => {
        console.log(plant)
        try {
        await removeTrade({
            variables: {
                // trade: {
                    plantId: plant,
                // }
            },
        });
        await setProfileTradeList(data.me.trade)
         }
        catch (err) { console.log(err)}
    };
    


    const [removeWish, {error: wishError}] = useMutation(REMOVE_WISH)
    const handleWishDelete = async (plant: any) => {
        console.log(plant)
        try {
        await removeWish({
            variables: {
                // wish: {
                    plantId: plant,
                // }
            },
        });
        await setProfileWishList(data.me.wish)
        }
        catch (err) { console.log(err)}
    };

    return (
        <div className="profile-cont">
            <div className="profile">
                <div className="profile-header">{user.userName}'s Profile</div>
                <div className="prof-1">
                    <div className='OOT-cont'>
                        <div className="prof-sub-header">Open To Trade</div>
                        <div className="spacer">
                            {profileTradeList.map((tradelist:any) => {                                        
                                return (
                                    <Tradelist
                                        key={'T' + tradelist.plantId}
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
                                        key={'W' + wishlist.plantId}
                                        title={wishlist.plantName}
                                        callbackWish={() => handleWishDelete(wishlist.plantId)}
                                    ></Wishlist>
                                )
                            })}
                        </div>
                    </div>
                        <div className="trade-cont">
                            <div className="prof-sub-header">Plant Your Garden</div>
                            <div className="spacer">
                            {profileWishTradeList.map((wishTradelist:any) => {
                                return (
                                    <WishTrade
                                        // key={determineWishTrade( wishTradelist.plantId)}
                                        title={determineWishTrade( wishTradelist.plantName)}
                                        callbackWishTrade={() => wishTradelist.plantId}
                                    ></WishTrade>
                                )
                            })}
                        </div>
                        </div>
                </div>
            </div>
        </div>
    )
}