import { useRouter } from 'next/router'
import React from 'react'

function blog1() {
    const router = useRouter();
    console.log(router)
    return (
        <div><h1>blog detail {router.query.blog}</h1></div>
    )
}

export default blog1