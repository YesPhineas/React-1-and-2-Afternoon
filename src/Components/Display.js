import React from 'react'
import '../index.css'
import Data from './Data'
import Buttons from './Buttons'

class Display extends React.Component{
    constructor(props){
        super(props)

    }



    render(){
        return(
            <div className='lots'>
                <section className='home-bar'><h2 className='home-txt'>Home</h2></section>
                <section>
                    <div className='card'>
                        <div>
                            <div>{}</div>
                            <div>From:{}   </div>
                            <div></div>
                        </div>
                        <div></div>
                    </div>
                </section>
                <section className='button'>
                    <Buttons/>
                </section>
            </div>
        )
    }
}

export default Display