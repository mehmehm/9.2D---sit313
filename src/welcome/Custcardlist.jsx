import React from 'react'
import {faker} from '@faker-js/faker'
import Card from './Card'
import './Card.css'

const Custcardlist = () =>{
    return <div className='row-list'>
        <Card 
            avatar = {faker.image.avatar()}
            name = {faker.name.firstName()}
            desc = {faker.name.bio()}
        />
        <Card 
            avatar = {faker.image.avatar()}
            name = {faker.name.firstName()}
            desc = {faker.name.bio()}
        />
        <Card 
            avatar = {faker.image.avatar()}
            name = {faker.name.firstName()}
            desc = {faker.name.bio()}
        />
        <Card 
            avatar = {faker.image.avatar()}
            name = {faker.name.firstName()}
            desc = {faker.name.bio()}
        />
    </div>
}

export default Custcardlist;