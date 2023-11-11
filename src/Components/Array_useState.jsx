import  { useState } from "react";

const Array_useState = () => {
    const [data, setData] = useState([]);
    const [item, setItem] = useState("");

    const handleData = () => {
        setData([...data, item]);
        console.log(data);
    };
    const remove=(index)=>{
        data.splice(index,1);
        setData([...data])
    }

    return (
        <div>
            <input type="text" onChange={(e) => { setItem(e.target.value) }} />
            <button onClick={handleData}>Click</button>
            {
                data.length === 0 ?
                    "No Data here" :
                    data.map((item, index) => (
                        <div key={index}>
                            <div>{item}</div>
                            <button onClick={()=>{remove(index)}}>remove</button>
                        </div>
                    ))
            }
        </div>
    );
};

export default Array_useState;
