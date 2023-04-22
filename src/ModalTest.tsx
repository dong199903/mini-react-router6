import {Modal} from "antd";
import {useState} from "react";
const Test = () => {
  console.log('modal load')
  const [data,setData] = useState([]);
  const loadData = () => {
    return new Promise((resolve,reject)=>{
      setTimeout(() => {
        resolve([{name:`dzp${Date.now()}`},{name:'whh'}]);
      }, 1000);
    })
  }
  loadData();
  return (
    <Modal>
      {
        data.map((item:{name:string})=>(<div>{item.name}</div>))
      }
    </Modal>
  )
}
export default Test;