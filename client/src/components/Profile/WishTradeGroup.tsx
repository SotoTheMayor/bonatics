import React from "react";
import WishTrade from '../Profile/PYG'

import { useLazyQuery, useQuery } from "@apollo/client";
import { QUERY_ME, QUERY_USERS, QUERY_WISHTRADE } from "../../utils/queries";
interface wishTradeGroupProps {
    // children: any,
    plantId: any,
}

const WishTradeGroup = (props: wishTradeGroupProps) => {
    const {loading, data: users, error } = useQuery(QUERY_WISHTRADE, {
        variables: { plantId: props.plantId }
    })
    if (loading) {
        return (<></>)
    }
// console.log(users)
    return (
     <>
     {users.wishTrade.map((user:any) => 
        <WishTrade 
        user={user}
        ></WishTrade>
     )}
     </>
    );
};

export default WishTradeGroup