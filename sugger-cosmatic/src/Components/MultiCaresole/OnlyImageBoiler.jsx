import React from 'react'

const OnlyImageBoiler = ({ item }) => {
    return (
        <div className="imgageDiv">
            <img src={item.url} alt="Hot_Deals" width="100%"/>
        </div>
    )
}

export default OnlyImageBoiler