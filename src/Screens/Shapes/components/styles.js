export default {
  container: {
    backgroundColor: '#FFF'
  },
  oval: {
    height: 40,
    width: 40,
    backgroundColor: 'brown',
    borderRadius: 50,
    transform: [
      { scaleX: 2 }
    ],
    margin: 20,
    shadowOffset: { width: 5, height: 3 },
    shadowColor: 'white',
    shadowOpacity: 0.5,
    elevation: 5,
  },
  circle: {},
  triangle: {},
  triangleUp: {
    height: 0,
    width: 0,
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'yellow',
    borderLeftWidth: 50,
    borderRightWidth: 50,
    borderBottomWidth: 100,
    margin: 10
  },
  triangleDown: {
    height: 0,
    width: 0,
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderLeftWidth: 50,
    borderRightWidth: 50,
    borderTopWidth: 100,
    borderTopColor: 'yellow',
    margin: 10,
  },
  heart: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
  },
  heartShape: {
    width: 30,
    height: 45,
    position: 'absolute',
    top: 0,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: 'red',
  },
  leftHeart: {
    transform: [
      { rotate: '-45deg' }
    ],
    left: 5
  },
  rightHeart: {
    transform: [
      { rotate: '45deg' }
    ],
    right: 5
  },
  tvscreen: { flex: 1 },
  tvscreenMain: {
    width: 150,
    height: 75,
    backgroundColor: 'red',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
  },
  tvscreenTop: {
    width: 73,
    height: 70,
    backgroundColor: 'red',
    position: 'absolute',
    top: -26,
    left: 39,
    borderRadius: 35,
    transform: [
      { scaleX: 2 },
      { scaleY: 0.5 }
    ]
  },
  tvscreenBottom: {
    width: 73,
    height: 70,
    backgroundColor: 'red',
    position: 'absolute',
    bottom: -26,
    left: 39,
    borderRadius: 35,
    transform: [
      { scaleX: 2 },
      { scaleY: 0.5 }
    ]
  },
  tvscreenLeft: {
    width: 20,
    height: 38,
    backgroundColor: 'red',
    position: 'absolute',
    left: -7,
    top: 18,
    borderRadius: 35,
    transform: [
      { scaleX: 0.5 },
      { scaleY: 2 },
    ]
  },
  tvscreenRight: {
    width: 20,
    height: 38,
    backgroundColor: 'red',
    position: 'absolute',
    right: -7,
    top: 18,
    borderRadius: 35,
    transform: [
      { scaleX: 0.5 },
      { scaleY: 2 },
    ]
  },
  base: {
    flex: 1,
    // backgroundColor: 'blue',
    margin: 20
  },
  baseTop: {
    borderBottomWidth: 35,
    borderBottomColor: 'red',
    borderLeftWidth: 50,
    borderLeftColor: 'transparent',
    borderRightWidth: 50,
    borderRightColor: 'transparent',
    height: 0,
    width: 0,
    left: 0,
    // top: -35,
    // position: 'absolute',
  },
  baseBottom: {
    backgroundColor: 'red',
    height: 55,
    width: 100
  }
};
