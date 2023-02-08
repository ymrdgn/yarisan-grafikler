import React, { useState, useEffect } from 'react';
import ChartArea from './ChartArea';
import ChartItem from './ChartItem';
import './main.css';

function App() {

  const getRandomNumber = () => {
    return Math.floor(Math.random() * 30 + 1)
  }

  const getRandomSpeed = () => {
    return Math.floor(Math.random() * 5 + 1)
  }

  const data = [
    {
      id: 1,
      title: "Arjantin",
      color: "#6CACE4",
      value: getRandomNumber(),
      imageUri: "https://cdn-icons-png.flaticon.com/512/300/300013.png?w=826&t=st=1675886625~exp=1675887225~hmac=f8e319b75d3a5f896d6b1297e4b2de41044d63c794f156fb006368b8df6b4cb5",
      speed: getRandomSpeed()
    },
    {
      id: 2,
      title: "İspanya",
      color: "#FFB200",
      value: getRandomNumber(),
      imageUri: "https://cdn-icons-png.flaticon.com/512/300/300083.png?w=826&t=st=1675886763~exp=1675887363~hmac=11646e8d129008d7bbcb7a919e67677be9ecf4a9a9672b8e42255c1fa4097615",
      speed: getRandomSpeed()
    },
    {
      id: 3,
      title: "Türkiye",
      color: "#C8102E",
      value: getRandomNumber(),
      imageUri: "https://cdn-icons-png.flaticon.com/512/551/551987.png?w=826&t=st=1675886722~exp=1675887322~hmac=958e4af1e8fe35a66e009cd349348b6b0a93f5d06ad57e56342b6698dc983297",
      speed: getRandomSpeed()
    },
    {
      id: 4,
      title: "Hollanda",
      color: "#003DA5",
      value: getRandomNumber(),
      imageUri: "https://cdn-icons-png.flaticon.com/512/299/299974.png?w=826&t=st=1675886910~exp=1675887510~hmac=78c9063e229f5c4b3178e16e8427e24e0357b32bb6828ca53bbbba0f3cf464c7",
      speed: getRandomSpeed()
    },
    {
      id: 5,
      title: "Portekiz",
      color: "#046A38",
      value: getRandomNumber(),
      imageUri: "https://cdn-icons-png.flaticon.com/512/299/299987.png?w=826&t=st=1675886996~exp=1675887596~hmac=b22a11fb503c47c7277adeb1de67715de1824649b3766d11beca6a1bf2ae5c32",
      speed: getRandomSpeed()
    },
    {
      id: 6,
      title: "Katar",
      color: "#990033",
      value: getRandomNumber(),
      imageUri: "https://cdn-icons-png.flaticon.com/512/552/552087.png?w=826&t=st=1675886957~exp=1675887557~hmac=3b27e698821a321219d0bcba641f9f4a8a3530a8a505b7bde5ddb48d773d6a69",
      speed: getRandomSpeed()
    },
    {
      id: 7,
      title: "Almanya",
      color: "#FFCC00",
      value: getRandomNumber(),
      imageUri: "https://cdn-icons-png.flaticon.com/512/552/552040.png?w=826&t=st=1675886451~exp=1675887051~hmac=a9e3a18faccb9ccc5da85cae6e490ddfe460b212f0bf34427ee28cf9c3aaa8b2",
      speed: getRandomSpeed()
    },


  ]

  const [graphData, setGraphData] = useState(data);

  useEffect(function () {
    let timer;
    timer = setInterval(() => {
      setGraphDataWithRandomNumber()
    }, 50);
    return () => clearInterval(timer);
  }, [graphData]);

  const setGraphDataWithRandomNumber = () => {
    let data = JSON.parse(JSON.stringify(graphData));
    data.forEach((barItem) => {
      barItem.value += barItem.speed
    })
    setBiggestBardData(findBiggesBarItem(data))
    setGraphData(data)
  }

  const findBiggesBarItem = (data) => {
    return data.sort((first, second) => second.value - first.value)[0].value
  }

  const [biggestGraphData, setBiggestBardData] = useState(findBiggesBarItem(graphData));

  const renderBarItem = (barItem, index) => {
    let rate = barItem.value / biggestGraphData
    rate = rate * (800 - 40)
    const percent = (rate * 100) / 1080

    return (
      <ChartItem
        key={barItem.id}
        imageUri={barItem.imageUri}
        backgroundcolor={barItem.color}
        barwidth={percent + '%'}
        topDistance={(index === 0 ? 20 : (index * 44) + 20) + 'px'}
        barcount={barItem.value} title={barItem.title}
        index={index}
      />
    )
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Yarışan Grafikler</h1>
      <div className="chartContainer" >
        <ChartArea data={graphData}>
          {graphData.map((barItem, index) => renderBarItem(barItem, index))}
        </ChartArea>
      </div>
    </div>
  );
}

export default App;
