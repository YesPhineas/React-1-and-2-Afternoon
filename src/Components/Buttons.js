import React from 'react'
import '../index.css'

class Buttons extends React.Component{
    render(){
        return(
            <div className='button'>
                <button className='previous'>{`< Previous`}</button>
                <button className='next'>{`Next >`}</button>
            </div>
        )
    }
}

export default Buttons