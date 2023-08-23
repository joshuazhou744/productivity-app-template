import { React, useState } from 'react'
import './bottom.css'

import Chart from "react-apexcharts";
import img from '../../../Assets/laptop.jpg'
import img2 from '../../../Assets/dimensions.png'
import img3 from '../../../Assets/animation.png'

const Bottom = () => {

  const [state, setState] = useState({
    options: {
      colors: ['#01565B', '#5ABA8A'],
      chart: {
        id: 'basic-bar',
        toolbar: {
          show: true,
          tools: {
            selection: false,
            zoom: false,
            zoomin: false,
            zoomout: false,
            pan: false,
            reset: true | '<img src="/static/icns/reset.png" width="10">',
            customIcons: []
          }

        },
      },

      xaxis: {
        categories: ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat']
      }
    },

    series: [
      {
        name: 'Updates',
        data: [25, 33, 13, 89, 34, 20, 30]
      },
      {
        name: 'New Tasks',
        data: [70, 47, 72, 45, 12, 59, 30]
      }
    ]
  })

  return (
    <div className='bottom flex'>

      <div className="graphDiv">
        <div className="title">All Activities (Graphical View)</div>

        <Chart 
        options={state.options}
        series={state.series}
        type='area'
        width='500'
        />
      </div>

      <div className="scheduleDiv">
        <span className="title">Upcoming Schedule</span>

        <div className="singleTask flex">
          <div className="imgDiv flex">
            <img src={img} alt="Task Image" />
          </div>
          <div className="taskInfo">
            <span className="task">Task</span>
            <span className="status">Working On</span>
          </div>
          <span className="time">Time</span>
        </div>

        <div className="singleTask flex">
          <div className="imgDiv flex">
            <img src={img2} alt="Task Image" />
          </div>
          <div className="taskInfo">
            <span className="task">Task</span>
            <span className="status">Working On</span>
          </div>
          <span className="time">Time</span>
        </div>

        <div className="singleTask flex">
          <div className="imgDiv flex">
            <img src={img3} alt="Task Image" />
          </div>
          <div className="taskInfo">
            <span className="task">Task</span>
            <span className="status">Working On</span>
          </div>
          <span className="time">Time</span>
        </div>

        <div className="btn">
          See All Activities
        </div>
      </div>
    </div>
  )
}

export default Bottom
