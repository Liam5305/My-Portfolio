import React from 'react'
import './index.css'

export default class AboutContainer extends React.Component{
    render(){
        return(
            <div className='About1Container'>
                <h1>{this.props.title}</h1>
                <hr />
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}