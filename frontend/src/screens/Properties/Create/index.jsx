import React, { useState } from 'react'
import IconInfo from '../../../components/UI/IconInfo'
import './index.css'

function Create () {
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [address, setAddress] = useState('')
  const [number, setNumber] = useState('')
  const [privativeSize, setPrivativeSize] = useState('')
  const [totalSize, setTotalSize] = useState('')

  const rotateArrowUp = () => {
    document.getElementById('arrow-district').style.transform = 'rotate(0deg)'
  }

  const rotateArrowDown = () => {
    document.getElementById('arrow-district').style.transform = 'rotate(180deg)'
  }

  return (
    <div className='Create-properties'>
      <h1 className='title'>Cadastrar imóvel</h1>

      <div className='Create-properties__inputs'>
        <div className='input-primary'>
          <input
            type='text'
            name='title'
            value={title}
            placeholder='Título'
            onChange={(e) => { setTitle(e.target.value) }}
          />
        </div>

        <div className='input-primary'>
          <input
            type='number'
            name='price'
            value={price}
            placeholder='Preço'
            onChange={(e) => { setPrice(e.target.value) }}
          />
        </div>

        <div className='input-primary'>
          <textarea
            name='description'
            id=''
            cols='30'
            rows='6'
            value={description}
            placeholder='Descrição'
            onChange={(e) => { setDescription(e.target.value) }}
          />
        </div>

        <div className='input-primary Create-properties__inputs--district'
          onFocus={rotateArrowUp}
          onBlur={rotateArrowDown}
          onChange={rotateArrowDown}>

          <select name='district'>
            <option value=''>Bairro</option>
            <option value='Soho'>Soho</option>
            <option value='West Village'>West Village</option>
            <option value='Chelsea'>Chelsea</option>
            <option value='Financial District'>Financial District</option>
            <option value='China Town'>China Town</option>
            <option value='Little Italy'>Little Italy</option>
          </select>

          <img src='icons/arrow.svg' alt='Icon arrow' id='arrow-district' />
        </div>

        <div className='Create-properties__inputs--address'>
          <div className='input-primary'>
            <input
              type='text'
              name='address'
              value={address}
              placeholder='Endereço'
              onChange={(e) => { setAddress(e.target.value) }}
            />
          </div>

          <div className='input-primary'>
            <input
              type='number'
              name='number'
              value={number}
              placeholder='N°'
              onChange={(e) => { setNumber(e.target.value) }}
            />
          </div>
        </div>

        <div className='Create-properties__sizes'>
          <div className='input-primary'>
            <input
              type='number'
              name='privativeSize'
              value={privativeSize}
              placeholder='Área privativa (m²)'
              onChange={(e) => { setPrivativeSize(e.target.value) }}
            />
          </div>

          <div className='input-primary'>
            <input
              type='number'
              name='totalSize'
              value={totalSize}
              placeholder='Área total (m²)'
              onChange={(e) => { setTotalSize(e.target.value) }}
            />
          </div>
        </div>

        <div className='Create-properties__comfortable'>
          <IconInfo icon='car'/>
          <IconInfo icon='bed'/>
          <IconInfo icon='bathroom'/>
          <IconInfo icon='sofa'/>
        </div>

        <div className='Create-properties__image-upload'>
          <label htmlFor='images'><img src='icons/upload-image.svg' alt='Icon image' /></label>
          <input type='file' multiple accept='image/*' name='images' id='images' />
        </div>
      </div>
    </div>
  )
}

export default Create
