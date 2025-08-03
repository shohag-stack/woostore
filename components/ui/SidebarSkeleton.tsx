'use client'
import { Skeleton } from "./skeleton"

export function SidebarSekeleton() {


    return (
        <aside className="left-filter w-1/4 pr-4">
      <h5 className="font-semibold mb-2">Categories</h5>
      <ul>
        {Array.from({length:4}).map((_, idx) => (
          <li key={idx}>
            <Skeleton
              className="w-full h-[40px]">
            </Skeleton>
          </li>
        ))}
      </ul>
    </aside>
    )
}