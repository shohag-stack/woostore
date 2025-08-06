import BreadCrumbs from "../../components/ui/Breadcrumbs"
export default function Layout({children}: Readonly<{
    children: React.ReactNode
}>){
    return (
        <>
            <BreadCrumbs/>
            {children}
        </>
    )
}