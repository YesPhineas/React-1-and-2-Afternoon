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
                        <div className='left-info'>
                            <div className='person-name'>Name</div>
                            <div className='person-info'>
                                <div>From:</div>
                                <div>Job Title:</div>
                                <div>Employer:</div>
                            </div>
                            <div className='person-movies'>
                                Favorite Movies:
                                <div>1.</div>
                                <div>2.</div>
                                <div>3.</div>
                            </div>
                        </div>
                        <div className='num-of-num'>0/0</div>
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