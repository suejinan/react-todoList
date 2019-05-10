import React, { Component } from 'react';
import Day from './Day';
import '../../styles/Week.css';


class NextSevenDays extends Component {
    state = { days : [] }

    setDays = () => {
        const today = new Date();
        const week = [];
        let date, yyyy, mm, dd = '';
        for(let i = 0; i < 7; i++) {
            date = new Date(Date.parse(today) + i * 1000 * 60 * 60 * 24);
            yyyy = date.getFullYear();
            mm = date.getMonth()+1;
            dd = date.getUTCDate();
            if(mm < 10) mm = '0'+ mm;
            if(dd < 10) dd = '0'+ dd;
            week.push(yyyy+'-'+mm+"-"+dd);
        }
        this.setState({days: week});
    }

    componentDidMount() {
        this.setDays();
    }

    render() {
        const { days } = this.state;

        return (
            <div className="Slide-Days">
                <h2>NextSeven Days</h2>
                <br/>
                <div className="container-fluid">
                    <div className="d-flex flex-row flex-nowrap">
                        {
                            days.map((date, index) => (
                                <Day 
                                    key={index}
                                    index={index}
                                    date={date}
                                    {...this.props}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default NextSevenDays;