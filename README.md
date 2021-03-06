# React Native Gradients
![React Native Gradients Demo 1](https://media.giphy.com/media/2aGD6js89xV3tGAIrd/giphy.gif) ![React Native Gradients Demo 2](https://media.giphy.com/media/xUJYCCeNdDATlcSDNo/giphy.gif) ![React Native Gradients Demo 3](https://media.giphy.com/media/1X5Z1goLOMY7cMUEuM/giphy.gif)


## Installation
First of all, install React Native Gradients using following commands.

```
// via NPM
npm install --save react-native-gradients

// via Yarn
yarn add react-native-gradients
```

It uses React Native SVG library, and because of this, link this library before run application.

```
react-native link react-native-svg
```

## Usage

### Linear Gradient
```
const colorList = [
  {offset: '0%', color: '#231557', opacity: '1'},
  {offset: '29%', color: '#44107A', opacity: '1'},
  {offset: '67%', color: '#FF1361', opacity: '1'},
  {offset: '100%', color: '#FFF800', opacity: '1'}
]
```

```
<LinearGradient colorList={colorList} angle={90}/>
```

### Radial Gradient
```
const colorList = [
  {offset: '0%', color: '#231557', opacity: '1'},
  {offset: '29%', color: '#44107A', opacity: '1'},
  {offset: '67%', color: '#FF1361', opacity: '1'},
  {offset: '100%', color: '#FFF800', opacity: '1'}
]
```

```
<RadialGradient x="50%" y="50%" rx="50%" ry="50%" colorList={colorList}/>
```

[![SonarCloud](https://sonarcloud.io/api/project_badges/quality_gate?project=react-native-gradients)](https://sonarcloud.io/dashboard?id=react-native-gradients)
