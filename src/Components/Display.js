import React from 'react'
import '../index.css'
import Data from './Data'
import Buttons from './Buttons'

class Display extends React.Component{
    constructor(props){
        super(props)
        
        this.state = {
            index: 0
        }
    }



    render(){
        
        return(
            <div className='lots'>
                <section className='home-bar'><h2 className='home-txt'>Home</h2></section>
                <section>
                    <div className='card'>
                        <div className='left-info'>
                            <div className='person-name'>{`${Data[this.state.index].name.first} ${Data[this.state.index].name.last}`}</div>
                            <div className='person-info'>
                                <div>From: {`${Data[this.state.index].city} ${Data[this.state.index].country}`} </div>
                                <div>Job Title: {Data[this.state.index].title} </div>
                                <div>Employer: {Data[this.state.index].employer} </div>
                            </div>
                            <div className='person-movies'>
                                Favorite Movies:
                                <div>1. {Data[this.state.index].favoriteMovies[0]} </div>
                                <div>2. {Data[this.state.index].favoriteMovies[1]} </div>
                                <div>3. {Data[this.state.index].favoriteMovies[2]} </div>
                            </div>
                        </div>
                        <div className='num-of-num'>{Data[this.state.index].id}/{Data.length}</div>
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