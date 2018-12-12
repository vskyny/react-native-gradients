import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { View } from 'react-native'
import Svg, { Defs, RadialGradient as SVGRadialGradient, Rect, Stop } from 'react-native-svg'

class RadialGradient extends Component {

  render () {
    const {colorList, x, y, rx, ry, cStyle, children} = this.props

    return (
      <View style={cStyle}>
      <Svg height="100%" width="100%">
        <Defs>
          <SVGRadialGradient
            id="grad"
            cx={x}
            cy={y}
            rx={rx}
            ry={ry}
            gradientUnits="userSpaceOnUse"
          >
            {colorList.map(value => <Stop offset={value.offset} stopColor={value.color}
                                          stopOpacity={value.opacity}/>)}
          </SVGRadialGradient>
        </Defs>
        <Rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill="url(#grad)"
        />
      </Svg>
      {children}
      </View>
    )
  }
}

RadialGradient.propTypes = {
  colorList: PropTypes.array.isRequired,
  rx: PropTypes.string.isRequired,
  ry: PropTypes.string.isRequired,
  x: PropTypes.string.isRequired,
  y: PropTypes.string.isRequired
}

export default RadialGradient
