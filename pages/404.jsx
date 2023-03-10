import Lottie from 'lottie-react';
import * as errorImage from '../images/lotte/error-glitch-2.json'
import Link from 'next/link'

const Error = () => {
    return (
        <div className='max-w-xl min-h-screen flex flex-col justify-center gap-10 py-20 mx-auto'>
            <Lottie animationData={errorImage} />
            <div className='mx-auto w-fit'>
                <Link href='/' className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none "><span
                    className="absolute inset-0 transition-transform scale-110 bg-[#ff6e1a] translate-x-0 translate-y-1 group-hover:translate-y-0 group-hover:translate-x-0 group-hover:scale-100"
                ></span>
                    <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
                        Go Home
                    </span>
                </Link>
            </div>
            
        </div>
    );
};

export default Error;