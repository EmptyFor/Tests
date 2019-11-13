import React, { Component } from 'react';

import { Input, Button, Modal } from 'antd';

import './index.scss'


export default class Calculating extends Component {

    state = {
        sumResult: '',
        disabled: true,
        visible: false,
        rightAnswers: 0,
        wrongAnswers: 0,
        status: 'stopped',
        countQuestion: 0,
        adding1: 0,
        adding2: 0,
        time: 60
    }

    componentDidMount = () => {


        if (this.state.status === 'stopped') {
            this.setState({
                disabled: true
            })
        } else {
            this.setState({
                disabled: false
            })
        }

        if (this.state.time === 0) {
            return <div>
                {`Results: `}
            </div>
        }
    }

    getRandomNubers = () => {
        this.setState({
            adding1: Math.floor(Math.random() * (99 - 10) + 10),
            adding2: Math.floor(Math.random() * (99 - 10) + 10)
        })
    }

    getSumResult = e => {
        this.compareResult(e.target.value);
        if (this.state.rightAnswers - this.state.wrongAnswers <= 0) {
            this.setState({
                countQuestion: 0
            })
        }
        if (this.state.rightAnswers - this.state.wrongAnswers > 0) {
            this.setState({ countQuestion: this.state.countQuestion = this.state.rightAnswers - this.state.wrongAnswers });
        }
        this.setState({
            sumResult: ''
        })
        this.getRandomNubers();
        return;
    }

    handleChange = e => {
        this.setState({
            sumResult: e.target.value
        })
    }

    compareResult = (result) => {
        if (this.state.adding1 + this.state.adding2 == result) {
            this.setState({
                rightAnswers: this.state.rightAnswers + 1,
                time: this.state.time + 2
            });
        } else {
            this.setState({
                wrongAnswers: this.state.wrongAnswers + 1,
                time: this.state.time - 1
            });
        }
    }

    startTimer = () => {
        const { _res_input } = this.refs;


        let timer = setInterval(() => {
            this.setState({
                time: this.state.time - 1
            })
        }, 1000)

        if (this.state.time !== 60 || this.state.time === 0) {
            clearInterval(timer)
        }

        this.setState({ countQuestion: 1, disabled: false, time: 60, rightAnswers: 0, wrongAnswers: 0, countQuestion: 0 });
        this.getRandomNubers()
        return _res_input.focus()

    }

    render() {
        const { rightAnswers, wrongAnswers, countQuestion, time, adding1, adding2 } = this.state;
        return (
            <div className="wrapper-calc">
                <div className="wrapp-container">
                    <div className="timer-container">
                        <span>{countQuestion}</span>
                        <span>{time >= 60 ? `01:00` :
                            time < 10 ? `00:0${time}`
                                : `00:${time}`}
                        </span>
                    </div>
                    <div className="calc-container">
                        <span>
                            {adding1}
                        </span>
                        +
                    <span>
                            {adding2}
                        </span>

                        <Input
                            size="large"
                            ref="_res_input"
                            className="result-input"
                            value={this.state.sumResult}
                            onChange={this.handleChange}
                            autoFocus={true}
                            disabled={this.state.disabled}
                            onPressEnter={this.getSumResult}
                        />
                    </div>

                    <div className="result-container">

                        <span>Right asnswers: <span style={{ color: 'green', fontWeight: '700', paddingLeft: '3vh' }}>{rightAnswers}</span></span>
                        <span>Wrong answers: <span style={{ color: 'red', fontWeight: '700', paddingLeft: '3vh' }}>{wrongAnswers}</span></span>

                    </div>
                    <Button className="start-btn" type="primary" onClick={this.startTimer}> Start </Button>
                </div>
            </div>
        )
    }
}

