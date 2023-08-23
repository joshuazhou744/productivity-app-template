import React from 'react'
import './top.css'

import { AiOutlineSearch } from 'react-icons/ai';

const Top = () => {
  return (
    <div className='top'>

      <div className="topDiv flex">

        <div className="titleText">
          <span className="title">Working Productivity</span>
          <p>Let's check your progress</p>
        </div>

        <div className="searchInput flex">
          <AiOutlineSearch className='icon'/>
          <input type="text" placeholder='Search for anything...'/>
        </div>

      </div>

      <div className="cardsDiv flex">

        <div className="cards">

          <div className="card yellowCard flex">

            <div className="date">
              <span>Day</span>
              <h3>Num</h3>
            </div>

            <div className="percentage">
              <span className="text">Productive</span>
              <div className="flex">
                <span className='line'></span>
                <span className="pctg">%</span>
              </div>
            </div>

            <div className="time">
              <span className="text">Productive Time</span>
              <h2>Time</h2>
            </div>

            <div className="workTime">
              <span className="text">Time at work</span>
              <h2>Time</h2>
            </div>

          </div>

          <div className="card lightGreenCard flex">

            <div className="date">
              <span>Day</span>
              <h3>Num</h3>
            </div>

            <div className="percentage">
              <span className="text">Productive</span>
              <div className="flex">
                <span className='line'></span>
                <span className="pctg">%</span>
              </div>
            </div>

            <div className="time">
              <span className="text">Productive Time</span>
              <h2>Time</h2>
            </div>

            <div className="workTime">
              <span className="text">Time at work</span>
              <h2>Time</h2>
            </div>

          </div>

          <div className="card darkGreenCard flex">

            <div className="date">
              <span>Day</span>
              <h3>Num</h3>
            </div>

            <div className="percentage">
              <span className="text">Productive</span>
              <div className="flex">
                <span className='line'></span>
                <span className="pctg">%</span>
              </div>
            </div>

            <div className="time">
              <span className="text">Productive Time</span>
              <h2>Time</h2>
            </div>

            <div className="workTime">
              <span className="text">Time at work</span>
              <h2>Time</h2>
            </div>

          </div>

        </div>

        <div className="statsDiv">
          <span className="title">
            Statistics on Month
          </span>

          <div className="stat">

            <div className="singleStat">
              <div className="statInfo flex">
                <span className="status">Complete Works</span>
                <span className="percentage">%</span>
              </div>

              <div className="line">
                <span className="range"></span>
              </div>
            </div>

            <div className="singleStat">
              <div className="statInfo flex">
                <span className="status">Tasks</span>
                <span className="percentage">%</span>
              </div>

              <div className="line">
                <span className="range"></span>
              </div>
            </div>

            <div className="singleStat">
              <div className="statInfo flex">
                <span className="status">Upcoming Tasks</span>
                <span className="percentage">%</span>
              </div>

              <div className="line">
                <span className="range"></span>
              </div>
            </div>

            <div className="singleStat">
              <div className="statInfo flex">
                <span className="status">Working Hours</span>
                <span className="percentage">%</span>
              </div>

              <div className="line">
                <span className="range"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Top
