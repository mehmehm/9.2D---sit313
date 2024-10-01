import React from 'react'
 import {faker} from '@faker-js/faker'
import Card from './Card'
import './Card.css'

const FreeLanCardlist = () =>{
    return <div className='row-list'>
        <Card 
            avatar = {faker.image.avatar()}
            name = {faker.name.firstName()}
            desc = {faker.name.jobTitle()}
        />
        <Card 
            avatar = {faker.image.avatar()}
            name = {faker.name.firstName()}
            desc = {faker.name.jobTitle()}
        />
        <Card 
            avatar = {faker.image.avatar()}
            name = {faker.name.firstName()}
            desc = {faker.name.jobTitle()}
        />
        <Card 
            avatar = {faker.image.avatar()}
            name = {faker.name.firstName()}
            desc = {faker.name.jobTitle()}
        />
    </div>
}

export default FreeLanCardlist;