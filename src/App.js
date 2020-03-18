import React, { useState, useEffect } from "react"

import "./App.css"

const App = props => {
    const [circles, setCircles] = useState([])

    useEffect(() => {
        const width = document.querySelector("svg").width.baseVal.value
        const height = document.querySelector("svg").height.baseVal.value
        let num = 0
        console.log(width, height)

        const getRandomColor = () => {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (var i = 0; i < 6; i++) {
              color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

        while (num < 1000) {
            const cx = Math.floor(Math.random() * (width - 1) + 1)
            const cy = Math.floor(Math.random() * (height - 1) + 1)
            const r = Math.floor(Math.random() * (30 - 1) + 1)

            const circle = {
                cx,
                cy,
                r,
                fill: getRandomColor()
            }
            
            setCircles(oldCircles => [...oldCircles, circle])

            num++
        }
        }, []
    )

    console.log(circles)

    const circleDisplay = circles.map((cir, i) =>
        <circle 
            key={i}
            r={cir.r}
            cx={cir.cx}
            cy={cir.cy}
            fill={cir.fill}
        />
    )

    return (
        <svg>
            {circleDisplay}
        </svg>
    )
}

export default App