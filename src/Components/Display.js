import React from 'react'
import '../index.css'
import data from './data'
import Head from './Head'

class Display extends React.Component{
    constructor(props){
        super(props)
        
        this.state = {
            index: 0
        }

        this.prevBtn = this.prevBtn.bind(this)
        this.nextBtn = this.nextBtn.bind(this)
    }

    prevBtn(){
        if(this.state.index === 0){
            this.setState({index: data.length-1})
        }else{
            this.setState({index: this.state.index-1})
        }
    }

    nextBtn(){
        if(this.state.index === data.length-1){
            this.setState({index: 0})
        }else{
            this.setState({index: this.state.index+1})
        }
    }



    render(){
        
        return(
            <div className='lots'>
                <section className='home-bar'> <Head/> </section>
                <section>
                    <div className='card'>
                        <div className='left-info'>
                            <div className='person-name'>{`${data[this.state.index].name.first} ${data[this.state.index].name.last}`}</div>
                            <div className='person-info'>
                                <div>From: {`${data[this.state.index].city} ${data[this.state.index].country}`} </div>
                                <div>Job Title: {data[this.state.index].title} </div>
                                <div>Employer: {data[this.state.index].employer} </div>
                            </div>
                            <div className='person-movies'>
                                Favorite Movies:
                                <div>1. {data[this.state.index].favoriteMovies[0]} </div>
                                <div>2. {data[this.state.index].favoriteMovies[1]} </div>
                                <div>3. {data[this.state.index].favoriteMovies[2]} </div>
                            </div>
                        </div>
                        <div className='num-of-num'>{data[this.state.index].id}/{data.length}</div>
                    </div>
                </section>
                <section className='button'>
                    <button className='previous' onClick={this.prevBtn} >{`< Previous`}</button>
                    <button className='next' onClick={this.nextBtn} >{`Next >`}</button>
                </section>
            </div>
        )
    }
}

export default Display