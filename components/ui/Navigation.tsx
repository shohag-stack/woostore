import React from "react";
import woostore from '../../public/WooStore.svg'
import {Heart,Search } from 'lucide-react'
import Image from "next/image";
import Link from "next/link";
import SearchInput from './Search'
import Cart from "../Cart/Cart";

export default async function Navigation(){

type MenuItem = {
  id: number;
  title: string;
  url: string;
};

    const res = await fetch(`${process.env.NEXT_PUBLIC_WP_NAV_MENU_ITEMS}`, {
        next: {
            revalidate: 10
        },
    })


    const data = await res.json()

    const menuItems:MenuItem[] = data || []


    return (
        <>
            <nav>
                <div className="w-full text-center bg-accent py-1 text-sm text-white">
                    Made for artist, Loved by all Shop Now
                </div>
                    <div className="container mx-auto">
                                    <div className="grid grid-cols-3 items-center py-4 ">
                                <div>
                                        <Link href='/'>Services & Events</Link>
                                        <Link href='/'>Stores</Link>
                                </div>

                                <div className="flex justify-center">
                                    <Image alt="woostore" src={woostore}/> 
                                </div>

                                <div className="flex justify-end space-x-3">
                                    <Search/>
                                    <Heart/>
                                    <Cart/> 
                                </div>
                            </div>

                            <div className="flex justify-center" >
                                <SearchInput/>
                            </div>

                            <div className="flex justify-center space-x-4 py-4 ">
                                {
                                    menuItems.map((item)=> (
                                        <a key={item.id} href={item.url}> { item.title }</a>
                                    ))
                                }
                            </div>
                    </div>
            </nav>
        </>
    )

}