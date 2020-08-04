import React from 'react';
import Counter from '../Counter';
import { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'

class CounterGroup extends Component{
    constructor(props){
        super(props);
        this.state={
            size:0,
            totalValue:0
        };
    }

    handleResize= (event)=>{
        if(parseInt(event.target.value)!==this.state.size){
            this.setState({
                size:event.target.value ? parseInt(event.target.value) :0,
                totalValue:0
            })
        }
    }

    handleOnIncrease= ()=>{
        this.setState((prevState)=>({totalValue:prevState.totalValue+1}));
    }

    handleOnDecrease= ()=>{
        this.setState((prevState)=>({totalValue:prevState.totalValue-1}));
    }

    render(){
        const initArray=[...Array(this.state.size).keys()];
        return(
            <div>
                <label>
                    Group Size:
                    <input defaultValue={0} onBlur={this.handleResize}/>
                </label>
                <label>
                    Total Value:<span>{this.props.sum}</span>
                </label>
                {
                    initArray.map(key=><Counter 
                        value={0}
                        //onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
                        subNumber= {this.props.subNumber}
                        addNumber = {this.props.addNumber}
                        key={key}
                        />)
                }
            </div>
        )
    }
}
CounterGroup.propTypes = {
    addNumber:PropTypes.func.isRequired,
    subNumber:PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return {sum: state.sum}
};
  
  const mapDispatchToProps = dispatch=> ({
    addNumber: (number) => dispatch({type: 'ADD_NUMBER', number}),
    subNumber: (number) => dispatch({type: 'SUB_NUMBER', number})
  })
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CounterGroup);
