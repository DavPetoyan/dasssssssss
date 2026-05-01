import React from 'react'

export default function ReviewCard({ name, email, data, info, rating }) {
    return (
        <>
            <div className='revCard  w-full flex justify-between shadow-2xl rounded-3xl items-center p-4'>
                <div className='  flex  gap-5 items-center p-2 '>
                    <div className='w-30 h-30'>
                    <img className='h-full w-full' src="https://static.vecteezy.com/system/resources/thumbnails/032/176/191/small_2x/business-avatar-profile-black-icon-man-of-user-symbol-in-trendy-flat-style-isolated-on-male-profile-people-diverse-face-for-social-network-or-web-vector.jpg" alt="" />
                    </div>
                    <div className=' min-w-90'>
                        <p className='name'><span className='font-bold tracking-[1px]'>Name:</span> {name} </p>
                        <p className='email'><span className='font-bold tracking-[1px]'>Email:</span> {email} </p>
                    </div>
                </div>
                <div className=' flex flex-col gap-2 items-end '>
                    <div>
                        <p className=' text-black text-[12px] '>{data} </p>
                    </div>
                    <div className=''>
                    <p className=''> {info} </p>
                    <p className=''><span className='font-bold tracking-[1px]'>Rating:</span> {rating} <i class="fas text-yellow-300 text-[14px]  fa-solid fa-star"></i></p>

                    </div>
                </div>
            </div>
        </>
    )
}
