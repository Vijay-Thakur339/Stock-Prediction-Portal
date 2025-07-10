import React from 'react'
import Button from './Button'

function Main() {
  return (
   <>
   <div className='container round'>
    <div className='p-5 text-center bg-light-dark rounded '>
    <h1 className='text-light' >Stock Prediction Portal</h1>
    <p className='text-light lead'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae fuga dolores error unde vitae quia incidunt itaque reiciendis, laboriosam enim. Error ratione consequatur quidem doloremque quam quas voluptate rerum, omnis iure perferendis dicta perspiciatis sit placeat, eligendi eius? Fugiat dolorem accusamus adipisci neque voluptate aut repellendus? Earum consequuntur repudiandae error!</p>
     <Button text="Login" class="btn-outline-info"/>
    </div>
   </div>
   </>
  )
}

export default Main
