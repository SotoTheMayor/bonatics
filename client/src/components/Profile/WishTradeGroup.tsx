import React from "react";
import WishTrade from '../Profile/PYG'

import { useLazyQuery, useQuery } from "@apollo/client";
import { QUERY_ME, QUERY_USERS, QUERY_WISHTRADE } from "../../utils/queries";
interface wishTradeGroupProps {
    plantName: any,
    plantId: any,
}

//query for determining which other users have trade available that matches the logged in user's wish
const WishTradeGroup = (props: wishTradeGroupProps) => {
    const {loading, data: users, error } = useQuery(QUERY_WISHTRADE, {
        variables: { plantId: props.plantId }
    })
    if (loading) {
        return (<></>)
    }

    //maps the query response
    return (
     <>
     {users.wishTrade.map((user:any) => 
        <WishTrade 
        user={user}
        plantName={props.plantName}
        ></WishTrade>
     )}
     </>
    );
};

export default WishTradeGroup