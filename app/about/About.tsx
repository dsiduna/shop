import Image from "next/image";
import user from '../../public/iphone_user.jpg';

function AboutComponent() {
    return (

        <div className='lg:px-24 px-10 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
            <div className='flex flex-col items-center justify-between w-full mb-10 lg:flex-row'>
                <div className='flex items-center justify-center lg:w-1/2'>
                    <div className='w-5/5'>
                        <Image
                            className='object-cover rounded-[35px]'
                            src={user.src}
                            alt='house handover'
                            width={150}
                            height={150}
                        />
                    </div>
                </div>
                <div className='mb-16 lg:mb-0 lg:max-w-lg lg:pr-5'>
                    <div className='max-w-xl mb-6'>
                        <h2 className='font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none max-w-lg'>
                            Let's make your
                        </h2>
                        <h2 className='font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none max-w-lg mb-6'>
                            dream house a reality
                        </h2>
                        <p className='text-gray-700 text-base md:text-lg'>
                            The flexibility of our solutions enables us to
                            tailor-make every case to suit the specific needs
                            while priced competitively. Our highly competent
                            technical team ensures that the product is just as
                            it was envisioned to be.
                        </p>
                    </div>
                    <div className='flex items-center space-x-3'>
                        <button
                            type='submit'
                            className='inline-flex items-center justify-center rounded bg-[#10a65c] hover:bg-[#0b341c] active:bg-[#f2fcf4] py-4 px-6 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-dark'
                        >
                            Reach Out to Us Today
                        </button>
                    </div>
                </div>

            </div>
        </div>


    );
}

export default AboutComponent;
