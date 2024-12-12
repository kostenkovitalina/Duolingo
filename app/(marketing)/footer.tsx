import React from 'react';
import {Button} from "@/components/ui/button";
import Image from "next/image";

export const Footer = () => {
    return (
        <footer className='hidden lg:block h-20 w-full border-t-2 border-slate-200'>
            <div className='max-w-screen-lg mx-auto flex items-center justify-evenly h-full'>
                <Button size='lg' variant='ghost' className='w-full'>
                    <Image
                        src='./flags/hr.svg'
                        alt='Croatian'
                        height={32}
                        width={40}
                        className='mr-s rounded-md'
                    />
                    Croatian
                </Button>
                <Button size='lg' variant='ghost' className='w-full'>
                    <Image
                        src='./flags/fr.svg'
                        alt='French'
                        height={32}
                        width={40}
                        className='mr-s rounded-md'
                    />
                    French
                </Button>
                <Button size='lg' variant='ghost' className='w-full'>
                    <Image
                        src='./flags/es.svg'
                        alt='Spanish'
                        height={32}
                        width={40}
                        className='mr-s rounded-md'
                    />
                    Spanish
                </Button>
                <Button size='lg' variant='ghost' className='w-full'>
                    <Image
                        src='./flags/it.svg'
                        alt='Italian'
                        height={32}
                        width={40}
                        className='mr-s rounded-md'
                    />
                    Italian
                </Button>
                <Button size='lg' variant='ghost' className='w-full'>
                    <Image
                        src='./flags/jp.svg'
                        alt='Japan'
                        height={32}
                        width={40}
                        className='mr-s rounded-md'
                    />
                    Japan
                </Button>
            </div>
        </footer>
    );
};

