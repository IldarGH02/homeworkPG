import React, { Component } from 'react'
import btnChoose from '../BtnChoose/btnChoose.css'

class BtnChoose extends Component {
    render() {
        return(
            <button className='btn' onClick={this.props.changeNews}>{this.props.descr}</button>            
        )
    }   
}

export default BtnChoose