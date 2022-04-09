import React from 'react'

const Student = () => {
  return (
    <div>
        <div className='top-div'>
            <button className='btn btn-primary add'>Add Student</button>
        </div>
        <div className='container'>
            <table className='table2'>
                <tr className='tr2'>
                    <td className='tdt'>Name</td>
                    <td className='tdt'>Age</td>
                    <td className='tdt'>Course</td>
                    <td className='tdt'>Batch</td>
                    <td className='tdt'>Change</td>
                </tr>
                   <tr className='tr2'>
                    <td className='td2'>Mike</td>
                    <td className='td2'>21</td>
                    <td className='td2'>MERN</td>
                    <td className='td2'>December</td>
                    <td className='td2'>
                     <button className='edit'>Edit</button>
                      </td>
                </tr>
                <tr className='tr2'>
                    <td className='td2'>Harvey</td>
                    <td className='td2'>24</td>
                    <td className='td2'>MERN</td>
                    <td className='td2'>November</td>
                    <td className='td2'>
                    <button className='edit'>Edit</button>
                    </td>
                </tr>
                <tr className='tr2'>
                    <td className='td2'>Selena</td>
                    <td className='td2'>23</td>
                    <td className='td2'>MERN</td>
                    <td className='td2'>October</td>
                    <td className='td2'>
                    <button className='edit'>Edit</button>
                    </td>
                </tr>
                <tr className='tr2'>
                    <td className='td2'>Miguel</td>
                    <td className='td2'>22</td>
                    <td className='td2'>MERN</td>
                    <td className='td2'>November</td>
                    <td className='td2'>
                    <button className='edit'>Edit</button>
                    </td>
                </tr>
                <tr className='tr2'>
                    <td className='td2'>Ruffy</td>
                    <td className='td2'>20</td>
                    <td className='td2'>MERN</td>
                    <td className='td2'>December</td>
                    <td className='td2'>
                    <button className='edit'>Edit</button>
                    </td>
                </tr>
            </table>
        </div>
    </div>
  )
}

export default Student