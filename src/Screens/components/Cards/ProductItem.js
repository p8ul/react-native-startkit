import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

export class ProductItem extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#281543',
        borderRadius: 10,
        margin: 10
      }}>
        <View style={{
          flex: 1
        }}>

          {/* image */}
          <View style={{
            flex: 1,
            height: 200,
            padding: 10
          }}>
            <Image style={{
              flex: 1, width: null, height: null
            }} source={require('../../../../assets/choo.png')}/>
          </View>
        </View>

        <View style={{
          flex: 1,
          flexDirection: 'row',
          padding: 5,
          justifyContent: 'space-around'
        }}>
          <View style={{ flex: 3 }}>
            <Text style={{
              color: 'white'
            }}>Google Home Pad</Text>
          </View>
          <View style={{
            flex: 1,
            backgroundColor: '#8877bb',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
            borderRadius: 50,
            // height: 20,
            width: 20
          }}>
            <Text style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 16
            }}>+</Text>
          </View>

        </View>
        <View style={{ flex: 1, marginHorizontal: 10 }}>
          <Text style={{
            color: 'grey'
          }}>KES 457</Text>
        </View>
      </View>

    );
  }
}

export default ProductItem;
