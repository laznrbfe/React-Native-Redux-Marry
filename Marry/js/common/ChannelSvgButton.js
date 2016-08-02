// ChannelSvgButton.js

import React, {
  Component,
  PropTypes,
} from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import Svg, {
    Circle,
    G,
    Path,
    Polygon,
} from 'react-native-svg';

const kCircleRadius = 44;
const kWidth = 24;
const kHeight = 24;

export default class ChannelSvgButton extends Component {

  static propTypes = {
    ...TouchableOpacity.propTypes,
    containerStyle: View.propTypes.style.isRequired,
    svgPath: PropTypes.string,
    colorOfCircle:PropTypes.string,
    fillColor:PropTypes.string,
    title: PropTypes.string,
    titleStyle:Text.propTypes.style,
    buttonTag:PropTypes.string,
    onPress:PropTypes.func,
  };

  constructor(props) {
    super(props);
  }

  _onClick = ()=>{
    if (this.props.onPress) {
      this.props.onPress();
    }
  };



  render() {
    // 获取title, containerStyle等属性
    let {title, titleStyle, svgPath, fillColor, colorOfCircle, containerStyle} = this.props;
    if (!titleStyle) {
      titleStyle = styles.buttonText;
    }
    if (!fillColor) {
      fillColor = '#fff';
    }
    if (!colorOfCircle) {
      colorOfCircle = 'pink';
    }
    if (!svgPath) {
      svgPath = '';
    }
    return (
      <TouchableOpacity
        onPress={this._onClick}
        style={containerStyle}
        >
        {/* SVG */}
        <View style={[styles.boxTd, ]}>
          <Svg
              height={kCircleRadius}
              width={kCircleRadius}
            >

            <G>
              <Circle
                  cx={kCircleRadius*0.5}
                  cy={kCircleRadius*0.5}
                  r={kCircleRadius*0.5}
                  fill={colorOfCircle}
              />
              {/*
                关于Path中的
                x={9}
                y={9}
                (kCircleRadius-kWidthd)/2 = 10;
                然后再微小调整得到 9
                */}
              <Path
                height={kWidth}
                width={kWidth}
                x={9}
                y={9}

                d={this.props.svgPath}
                fill = {fillColor}
                />
            </G>
          </Svg>

        </View>
        {/* SVG图下面的文字 */}
        <Text style={titleStyle}>
          {this.props.title}
        </Text>

      </TouchableOpacity>
    );
  }


}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems:'center',
    backgroundColor:'#fff',
  },
  boxTd:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
		// flexDirection:'column',//默认
  },
  button:{
    overflow: 'hidden',
  },
  buttonText:{
    fontSize:12,
    marginBottom:10,
    // color:'#fff',
    // fontFamily:'FZXiHei--YS1-0',
    textAlign:'center',
  },
});
