// Type definitions for react-native-svg-uri 1.1.2
// Project: https://github.com/matc4/react-native-svg-uri
// Definitions by: Kyle Roach <https://github.com/iRoachie>
// TypeScript Version: 2.2.2

import React, { Component } from 'react'
import { ImageURISource, StyleProp, ViewStyle, View } from 'react-native'

interface SvgRendererProps {
    /**
     * The width of the rendered svg
     */
    width?: number | string

    /**
     * The height of the rendered svg
     */
    height?: number | string

    /**
     * Source path for the .svg file
     * Expects a require('path') to the file or object with uri.
     * e.g. source={require('my-path')}
     * e.g. source={{ur: 'my-path'}}
     */
    source?: ImageURISource

    /**
     * Style for the @typedef View container
     */
    style?: StyleProp<ViewStyle>

    /**
     * Direct svg code to render. Similar to inline svg
     */
    svgXmlData?: string

    /**
     * Fill color for the svg object
     */
    fill?: string

    /**
     * Invoked when load completes successfully.
     */
    onLoad?: Function
  
    /**
     * Fill the entire svg element with same color
     */
    fillAll?: boolean
}

export default class SvgRenderer extends Component<SvgRendererProps, {}> { }
