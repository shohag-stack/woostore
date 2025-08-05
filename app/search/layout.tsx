import BreadCrumbs from "../../components/ui/Breadcrumbs"
export default function layout({children}: Readonly<{
    children: React.ReactNode
}>){
    return (
        <>
            <BreadCrumbs/>
            {children}
        </>
    )
}