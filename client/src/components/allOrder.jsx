import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// Rename the function to start with an uppercase letter
export default function AllOrder(props) {
    const [allOrder, setAllOrder] = useState([]);
    const {user,setUsers}=props;
    useEffect(() => {
        axios.get('http://localhost:5000/api/all')
            .then((res) => {
                setAllOrder(res.data);
            })
            .catch((err) => console.log(err));
    })
    const DeleteList = (IDdelete)=> {

      axios.delete (`http://127.0.0.1:5000/api/order/${IDdelete}`)
     .then((res)=>{
      console.log('success delete');
      console.log(res);
      const filtersList = allOrder.filter((list)=>{
          return list._id !== IDdelete;
      });
      setAllOrder(filtersList)
      // setFormData(filtersList)

     })
     .catch ((err)=>console.log('err delete',err))

  axios.put (`http://127.0.0.1:5000/api/order/${IDdelete}`,allOrder)

  .then((res)=>{
      console.log(res)
      // Navigate('/')
      
  })
  .catch((err)=>console.log(err))
}
// Added an empty dependency array to run the effect only once

    return (
        <div>
            <div>
                <table>
                    <tbody>
                        {allOrder.map((list, index) => {
                            return (
                                <tr key={list._id}>
                                    <td>
                                        <Link to={`/order/${list._id}`}>
                                            <button>view order</button>
                                        </Link>
                                    </td>
                                    <td>
                                      <button onClick={()=> DeleteList(list._id)}className='btn-danger'>

                                      </button>

                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
