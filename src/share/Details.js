import React, { useRef } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { CheckCircleIcon, PencilIcon, PencilSquareIcon, PlayIcon } from '@heroicons/react/24/solid'
import '../style/Details.css'
import { TbCurrencyTaka } from "react-icons/tb";
import { useReactToPrint } from 'react-to-print';
import toast from 'react-hot-toast';


const Details = () => {
    const cardDetails = useLoaderData();

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        onAfterPrint: () => toast.success('print success'),
    });

    const { _id, name, picture, price, videos, quizes, assignment, learn1, learn2, learn3, learn4, learn5, learn6 } = cardDetails;
    return (
        <div>
            <h1 className='text-3xl text-center my-3 font-bold'>{name}</h1>
            <h1 className='md:text-3xl text-center my-5 md:my-10 font-semibold'><span className='text-blue-600'>{name}</span> কোর্স থেকে কি কি শিখতে পারবে:</h1>
            <div className='flex justify-center md:justify-end md:mr-10 md:mb-5'>
                <button onClick={handlePrint} className="btn btn-outline">Download PDF</button>
            </div>
            <div className='md:flex justify-center gap-10'>
                <div className="flex flex-col max-w-lg p-6 my-10 md:my-0 space-y-6 overflow-hidden rounded-lg CardImage">
                    <div>
                        <img src={picture} className="object-cover rounded-xl w-full mb-4 h-60 sm:h-96 bg-gray-500" />
                        <Link to={`/checkout/${_id}`} className="btn btn-block bg-[#5E1FE9]">Get premium access.</Link>
                    </div>
                    <div className="grid grid-cols-3 gap-2 justify-items-center">
                        <div className='flex py-1 CssShadow w-full rounded-xl justify-center'>
                            <PlayIcon className="h-6 w-4 text-[#FF6347]" />
                            <h1 className='md:text-sm text-[10px] pt-0.5'>{videos} Video</h1>
                        </div>
                        <div className='flex py-1 rounded-xl w-full CssShadow justify-center'>
                            <PencilSquareIcon className="h-5 w-4 text-[#FF6347]" />
                            <h1 className='md:text-sm text-[10px] pt-0.5'>{quizes} Quizes</h1>
                        </div>
                        <div className='flex py-1 CssShadow w-full rounded-xl justify-center align-middle'>
                            <PencilIcon className="h-5 w-4 text-[#FF6347]" />
                            <h1 className='md:text-sm text-[10px] pt-0.5'>{assignment} Assignment</h1>
                        </div>
                    </div>
                    <div className='flex'>
                        <TbCurrencyTaka className='h-9 w-9' />
                        <h1 className='text-3xl font-bold'>{price}</h1>
                    </div>
                </div>

                <div className='grid md:grid-cols-3 col-span-2  w-3/6 gap-4'>
                    <div className='flex'>
                        <CheckCircleIcon className="h-5 w-40 text-[#FF6347]" />
                        <p className='font-semibold '>{learn1}</p>
                    </div >
                    <div className='flex'>
                        <CheckCircleIcon className="h-5 w-40 text-[#FF6347]" />
                        <p className='font-semibold '>{learn2}</p>
                    </div>
                    <div className='flex'>
                        <CheckCircleIcon className="h-5 w-40 text-[#FF6347]" />
                        <p className='font-semibold '>{learn3}</p>
                    </div>
                    <div className='flex'>
                        <CheckCircleIcon className="h-5 w-40 text-[#FF6347]" />
                        <p className='font-semibold '>{learn4}</p>
                    </div>
                    <div className='flex'>
                        <CheckCircleIcon className="h-5 w-40 text-[#FF6347]" />
                        <p className='font-semibold '>{learn5}</p>
                    </div>
                    <div className='flex'>
                        <CheckCircleIcon className="h-5 w-40 text-[#FF6347]" />
                        <p className='font-semibold '>{learn6}</p>
                    </div>
                </div>
            </div>
            <div className='hidden'>
                <div ref={componentRef} className="border w-[600px] mx-auto">
                    <div >
                        <img
                            className="h-[400px] mx-auto mt-[50px]"
                            src={picture}
                            alt=""
                        />
                        <div className='ml-10'>
                            <p className="lead py-4 text-2xl">Courses Name: {name}</p>
                            <div className='flex'>
                                <p className='text-xl'>Price: {price}</p>
                                <TbCurrencyTaka className='h-7 w-5' />
                            </div>
                        </div>
                        <p className='text-end mb-10 mr-5'>Thanks For purchase</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Details;