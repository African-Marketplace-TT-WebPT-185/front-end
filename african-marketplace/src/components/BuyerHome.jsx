import React, { useEffect } from 'react'
import Item from './Item'

export default function UserHome(props) {

    useEffect(() => {
        
    }, [])

    return (
        <div>
            {
                props.items && props.items.map(item => {
                    return(
                        <Item 
                            item={item}
                            key={item.id}
                            />
                    )
                })
            }  
        </div>
    )
}
