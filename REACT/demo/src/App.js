import logo from './logo.svg';
import './App.css';
import Item from './components/item';
import ItemDate from './components/ItemDate';
import Card from './components/Card';
function App() { 
//is app ke andar html ke code ko return kr dena hai
  const response=[
    {
      itemName:"Nirma",
      itemDate:"20",
      itemMonth:" June",
      itemYear:" 1998"
    },
    {
      itemName:"Nirma2",
      itemDate:"202",
      itemMonth:" June2",
      itemYear:" 19982"
    },
    {
      itemName:"Nirma3",
      itemDate:"203",
      itemMonth:" June3",
      itemYear:" 19983"
    }
  ]
  return (
    <div>
      <Card>
      <Item Name={response[0].itemName}>Hello</Item>
      <ItemDate day={response[0].itemDate} month={response[0].itemMonth} year={response[0].itemYear}></ItemDate>

      <Item Name={response[1].itemName}></Item>
      <ItemDate day={response[1].itemDate} month={response[1].itemMonth} year={response[1].itemYear}></ItemDate>

      <Item Name={response[2].itemName}></Item>
      <ItemDate day={response[2].itemDate} month={response[2].itemMonth} year={response[2].itemYear}></ItemDate>
      <div className="App">Hello jee</div>
      </Card>
    </div>
    
  );
}

export default App;
