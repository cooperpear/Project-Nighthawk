import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import MyLayout from '../components/MyLayout';
import StickerCalc from '../components/StickerCalc';
import axios from 'axios'

function Pricing() {

    const [data, setData] = useState()

    useEffect(()=> {
        axios
        .get('/api/pricing' ,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem('usertoken')}`
            }
        })
        .then(response => {
            console.log(response.data)
            setData(response.data)
        })
    }, [])

    return (
        <div>
            <Head>
                <title>Project Nighthawk</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
            </Head>
            <MyLayout>
                <StickerCalc />
            </MyLayout>
        </div>
    )
}

export default Pricing
