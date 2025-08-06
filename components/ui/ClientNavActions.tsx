'use client'
import { Search, Heart, Menu,X } from "lucide-react"
import Cart from "../Cart/Cart"
import { MenuItem } from "@/lib/types/types"
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer"
import Link from "next/link"


type props = {
    menuItems: MenuItem[]
}
export default function ({menuItems}:props) {

    return (
        <div className="flex justify-end space-x-3">
            <Search className="md:hidden"/>
            <Heart/>
            <Cart/>
            <Drawer  direction="right">
                    <DrawerTrigger asChild>
                        <Menu className="md:hidden"/>
                    </DrawerTrigger>
                    <DrawerContent>

                        <ul>
                            {
                                menuItems.map((item,idx)=>(
                                    <li className="py-3 px-4" key={idx}>
                                        <Link href={item.url}>{item.title}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </DrawerContent>
                </Drawer>
        </div>
    )
}