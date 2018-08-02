import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const PROFILE_MAX_HEIGHT = 80;
export class AvatarList extends Component {
  render() {
    return (
      <View>
        <View style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          alignContent: 'center',
          borderTopWidth: 0.4,
          borderColor: 'white'
        }}>
          <View style={{
            // flex: 1,
            padding: 12,
            width: PROFILE_MAX_HEIGHT
          }}>
            {/* avatar */}
            <View style={{
              height: PROFILE_MAX_HEIGHT - 20,
              width: PROFILE_MAX_HEIGHT - 20,
              borderRadius: PROFILE_MAX_HEIGHT / 2,
              borderWidth: 3,
              overflow: 'hidden'
            }}>
              <Image
                source={require('../../../../assets/p.jpg')}
                style={{
                  flex: 1, height: null, width: null
                }}/>
            </View>
          </View>
          {/* card body */}
          <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
              <Text style={{
                color: 'white',
                fontWeight: 'bold'
              }}>Best Norton</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{
                color: 'white',
                fontSize: 13
              }}>8586 Margon New Best on 457 Designer ?</Text>
            </View>
          </View>
          {/* end card body */}
          {/* card actions */}
          <View style={{ width: PROFILE_MAX_HEIGHT - 15 }}>
            <View style={{
              flex: 1,
              alignSelf: 'flex-end',
              justifyContent: 'center'
            }}>
              <View style={{
                height: PROFILE_MAX_HEIGHT / 2,
                width: PROFILE_MAX_HEIGHT / 2,
                borderRadius: PROFILE_MAX_HEIGHT / 4,
                borderWidth: 3,
                overflow: 'hidden',
                alignContent: 'center',
                alignItems: 'center',
                justifyContent: 'space-around',
                backgroundColor: 'purple',
                borderColor: 'purple'
              }}>
                <Ionicons name={'ios-add'} color={'white'} size={19} />
              </View>
            </View>
          </View>
          {/* end card actions */}
        </View>
      </View>
    );
  }
}

export default AvatarList;
