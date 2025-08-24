'use client'
import React from "react";
import woostore from '../../public/WooStore.svg'
import Image from "next/image";
import Link from "next/link";
import SearchBox from './SearchBox'
import ClientNavActions from "./ClientNavActions";


type MenuItem = {
    id: number;
    title: string;
    url: string;
};

type Props = {
    menuItems: MenuItem[];
};

export default function Navigation({ menuItems }: Props) {

    return (
        <>
            <nav className="border-b-1 static top-0">
                <div className="w-full text-center bg-accent py-1 text-sm text-white">
                    Made for artist, Loved by all Shop Now
                </div>
                <div className="container px-3 mx-auto md:px-15">
                    <div className="flex justify-between md:grid md:grid-cols-3 items-center py-4 sm:flex-wrap ">
                        <div className="text-center md:text-left md:block hidden">
                            <Link href='/'>Services & Events</Link>
                            <Link href='/'>Stores</Link>
                        </div>

                        <div className="flex md:justify-center text-center">
                            <Link href='/'>
                                <Image alt="woostore" src={woostore} />
                            </Link>
                        </div>

                        <div>
                            <ClientNavActions menuItems={menuItems} />
                        </div>
                    </div>

                    <div className=" hidden md:flex justify-center" >

                        <SearchBox />
                    </div>

                    <div className="hidden text-center md:flex justify-center space-x-4 py-4 ">
                        {
                            menuItems.map((item) => (
                                <Link key={item.id} href={item.url}> {item.title}</Link>
                            ))
                        }
                        <Link href="/blog"> Blog</Link>
                    </div>
                </div>
            </nav>
        </>
    )

}