import React from 'react'

import {
    View,
    Text
} from 'react-native'

function Icon(props){
    return(
        <View>
            <Text>{props.icon}</Text>
        </View>
    )
}

export default Icon