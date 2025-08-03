'use client'
import React from "react";
import woostore from '../../public/WooStore.svg'
import Image from "next/image";
import Link from "next/link";
import SearchInput from './Search'
import ClientNavActions from "./ClientNavActions";


type MenuItem = {
  id: number;
  title: string;
  url: string;
};

type Props = {
  menuItems: MenuItem[];
};

export default function Navigation({menuItems} : Props){

    return (
        <>
            <nav className="border-b-1">
                <div className="w-full text-center bg-accent py-1 text-sm text-white">
                    Made for artist, Loved by all Shop Now
                </div>
                    <div className="container mx-auto md:px-15">
                            <div className=" grid md:grid md:grid-cols-3 items-center py-4 sm:flex-wrap ">
                                        <div className="text-center md:text-left">
                                                <Link href='/'>Services & Events</Link>
                                                <Link href='/'>Stores</Link>
                                        </div>

                                        <div className="flex md:justify-center justify-start">
                                            <Link href='/'>
                                                <Image alt="woostore" src={woostore}/>
                                            </Link> 
                                        </div>

                                        <div>
                                            <ClientNavActions menuItems={menuItems}/>
                                        </div>
                            </div>

                            <div className=" hidden md:flex justify-center" >
                                <SearchInput/>
                            </div>

                            <div className="hidden md:block text-center flex justify-center space-x-4 py-4 ">
                                {
                                    menuItems.map((item)=> (
                                        <a key={item.id} href={item.url}> { item.title }</a>
                                    ))
                                }
                                <a href="/blog"> Blog</a>
                            </div>
                    </div>
            </nav>
        </>
    )

}