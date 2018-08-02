import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
/**
 * Utils
 */
import { colors } from '../../../utils/constants';

export class ProductList extends Component {
  static propTypes = {
    imageUri: PropTypes.number.isRequired,
    productName: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    priceCancel: PropTypes.string.isRequired,
    theme: PropTypes.object.isRequired,
  }

  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        height: 120,
        backgroundColor: this.props.theme.cardBgLight,
        borderRadius: 4,
        justifyContent: 'center',
        shadowOffset: { width: 5, height: 3 },
        shadowColor: 'white',
        shadowOpacity: 0.5,
        elevation: 5,
        marginTop: 12
      }}>
        {/* float */}
        <View style={{
          position: 'absolute',
          top: 4,
          left: 4,
          backgroundColor: colors.lightBlue,
          padding: 4,
          borderRadius: 4,
          zIndex: 999
        }}>
          <Text>-34%</Text>
        </View>
        {/* end float */}
        <View style={{
          flex: 1,
          flexDirection: 'row'
        }}>
          {/* image */}
          <View style={{
            flex: 2,
            padding: 4
          }}>
            <Image
              style={{ height: 110, width: null }}
              source={this.props.imageUri}
            />
          </View>
          {/* body */}
          <View style={{
            flex: 3,
            padding: 4,
            justifyContent: 'center'
          }}>
            <View>
              <Text style={{
                fontWeight: '800',
                color: 'white',
                fontSize: 18,
                marginTop: 6
              }}>{this.props.productName}</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
              <Text style={{
                fontWeight: '400',
                color: 'grey',
                fontSize: 15,
                marginTop: 6
              }}>{this.props.price}</Text>
              <Text style={{
                fontWeight: '400',
                color: 'grey',
                fontSize: 12,
                paddingLeft: 10,
                textAlign: 'center',
                textDecorationLine: 'line-through'
              }}>{this.props.priceCancel}</Text>
            </View>

          </View>
          {/* action */}
          <View style={{
            flex: 1,
            padding: 4,
            marginBottom: 8,
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
              colors={[
                this.props.theme.purpleLight,
                this.props.theme.purple,
                this.props.theme.purpleDark
              ]}
              style={{
                height: 30,
                width: 30,
                borderRadius: 15,
                justifyContent: 'center'
              }}>

              <Text style={{
                color: 'white',
                textAlign: 'center',
                fontSize: 20,
                fontWeight: 'bold'
              }}>+</Text>
            </LinearGradient>

          </View>

        </View>

      </View>
    );
  }
}

export default ProductList;
