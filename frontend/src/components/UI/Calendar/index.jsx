import React from 'react'
import './index.css'

function Calendar () {
  return (
    <div className='Calendar'>
      <div className='Calendar__options'>
        <select name='month' id='month'>
         <option value=''>Jan</option>
          <option value=''>Feb</option>
          <option value='' selected>Mar</option>
          <option value=''>Apr</option>
          <option value=''>May</option>
          <option value=''>Jun</option>
          <option value=''>Jul</option>
          <option value=''>Aug</option>
          <option value=''>Sep</option>
          <option value=''>Oct</option>
          <option value=''>Nov</option>
          <option value=''>Dec</option>
        </select>

        <select name='year' id=''>
          <option value='' selected>2022</option>
          <option value=''>2023</option>
          <option value=''>2024</option>
          <option value=''>2025</option>
        </select>

        <div className='Calendar__week-day'>
          <p>D</p>
          <p>S</p>
          <p>T</p>
          <p>Q</p>
          <p>Q</p>
          <p>S</p>
          <p>S</p>
        </div>
      </div>

      <div className='Calendar__days'>
        <div className='Calendar__day'>
          <input type='radio' name='day' id='1' />
          <label htmlFor='1'>1</label>
        </div>

        <div className='Calendar__day'>
          <input type='radio' name='day' id='2' />
          <label htmlFor='2'>2</label>
        </div>

        <div className='Calendar__day'>
          <input type='radio' name='day' id='3' />
          <label htmlFor='3'>3</label>
        </div>

        <div className='Calendar__day'>
          <input type='radio' name='day' id='4' />
          <label htmlFor='4'>4</label>
        </div>

        <div className='Calendar__day'>
          <input type='radio' name='day' id='5' />
          <label htmlFor='5'>5</label>
        </div>

        <div className='Calendar__day'>
          <input type='radio' name='day' id='6' />
          <label htmlFor='6'>6</label>
        </div>

        <div className='Calendar__day'>
          <input type='radio' name='day' id='7' />
          <label htmlFor='7'>7</label>
        </div>

        <div className='Calendar__day'>
          <input type='radio' name='day' id='8' />
          <label htmlFor='8'>8</label>
        </div>

        <div className='Calendar__day'>
          <input type='radio' name='day' id='9' />
          <label htmlFor='9'>9</label>
        </div>

        <div className='Calendar__day'>
          <input type='radio' name='day' id='10' />
          <label htmlFor='10'>10</label>
        </div>

        <div className='Calendar__day'>
          <input type='radio' name='day' id='11' />
          <label htmlFor='11'>11</label>
        </div>

        <div className='Calendar__day'>
          <input type='radio' name='day' id='12' />
          <label htmlFor='12'>12</label>
        </div>

        <div className='Calendar__day'>
          <input type='radio' name='day' id='13' />
          <label htmlFor='13'>13</label>
        </div>

        <div className='Calendar__day'>
          <input type='radio' name='day' id='14' />
          <label htmlFor='14'>14</label>
        </div>

        <div className='Calendar__day'>
          <input type='radio' name='day' id='15' />
          <label htmlFor='15'>15</label>
        </div>

        <div className='Calendar__day'>
          <input type='radio' name='day' id='16' />
          <label htmlFor='16'>16</label>
        </div>

        <div className='Calendar__day'>
          <input type='radio' name='day' id='17' />
          <label htmlFor='17'>17</label>
        </div>

        <div className='Calendar__day'>
          <input type='radio' name='day' id='18' />
          <label htmlFor='18'>18</label>
        </div>

        <div className='Calendar__day'>
          <input type='radio' name='day' id='19' />
          <label htmlFor='19'>19</label>
        </div>

        <div className='Calendar__day'>
          <input type='radio' name='day' id='20' />
          <label htmlFor='20'>20</label>
        </div>

        <div className='Calendar__day'>
          <input type='radio' name='day' id='21' />
          <label htmlFor='21'>21</label>
        </div>

        <div className='Calendar__day'>
          <input type='radio' name='day' id='22' />
          <label htmlFor='22'>22</label>
        </div>

        <div className='Calendar__day'>
          <input type='radio' name='day' id='23' />
          <label htmlFor='23'>23</label>
        </div>

        <div className='Calendar__day'>
          <input type='radio' name='day' id='24' />
          <label htmlFor='24'>24</label>
        </div>

        <div className='Calendar__day'>
          <input type='radio' name='day' id='25' />
          <label htmlFor='25'>25</label>
        </div>

        <div className='Calendar__day'>
          <input type='radio' name='day' id='26' />
          <label htmlFor='26'>26</label>
        </div>

        <div className='Calendar__day'>
          <input type='radio' name='day' id='27' />
          <label htmlFor='27'>27</label>
        </div>

        <div className='Calendar__day'>
          <input type='radio' name='day' id='29' />
          <label htmlFor='29'>29</label>
        </div>

        <div className='Calendar__day'>
          <input type='radio' name='day' id='30' />
          <label htmlFor='30'>30</label>
        </div>

        <div className='Calendar__day'>
          <input type='radio' name='day' id='31' />
          <label htmlFor='31'>31</label>
        </div>
      </div>
    </div>
  )
}

export default Calendar
