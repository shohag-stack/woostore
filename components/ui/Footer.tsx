import Image from "next/image"
import woostore from '../../public/WooStore.svg'
import { FooterMenuItem, FooterData } from "../../lib/types/types"
import footerData from "../../lib/data/footerData.json"

async function getFooterData(): Promise<FooterData> {
    
    return { customerCare:footerData.customerCare, aboutUs:footerData.aboutUs, policies:footerData.policies }
}


export default async function Footer() {

    const appStore = [
        "/assets/appstore.svg",
        "/assets/googlePlay.svg"
    ]

    const { customerCare, aboutUs, policies } = await getFooterData()


    return (
        <div className="footer-container py-15 pb-2 px-4 md:px-0">
            <div className="footer-menu-container container mx-auto">
                <div className="footer-menu grid grid-cols-2 md:grid-cols-1 lg:grid-cols-5 gap-4">
                    <div>
                        <h6 className="font-medium pb-2.5"> Customer Care </h6>
                        <ul className="text-secondary">
                            {
                                customerCare.map((item: FooterMenuItem, idx: number) => (
                                    <li key={idx}>
                                        <a href=""> {item.title} </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div>
                        <h6 className="font-medium pb-2.5"> About Us </h6>
                        <ul className="text-secondary">
                            {
                                aboutUs.map((item: FooterMenuItem, idx: number) => (
                                    <li key={idx}>
                                        <a href=""> {item.title} </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div>
                        <h6 className="font-medium pb-2.5"> Policies </h6>
                        <ul className="text-secondary">
                            {
                                policies.map((item: FooterMenuItem, idx: number) => (
                                    <li key={idx}>
                                        <a href=""> {item.title} </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div>
                        <h6 className="font-medium pb-2.5"> Download the app </h6>
                        <div className="flex gap-2.5 flex-col">
                            {
                                appStore.map((str, index) => (
                                    <div key={index}>
                                        <Image src={str} width={126} height={40} alt="store" />
                                    </div>
                                ))
                            }
                        </div>
                    </div>


                    <div className="text-center flex flex-col items-center">
                        <Image src={woostore} width={133} height={36} alt="woostore" />
                        <h3>Your Unique Complex of Nature Components</h3>
                    </div>

                </div>

                <div className="footer-social py-10 grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1">
                    <div className="shrink-3/2">
                        <p>commits to being allies and working in solidarity with First Nations people. We recognise their ongoing connection to this beautiful country, and we pay our respects to Elders, past and present. We acknowledge the land on which we live and work always was, and always will be, Aboriginal Land.</p>
                    </div>
                    <div className="flex gap-10">
                        <h6>Connect</h6>
                        <div className="flex gap-2">
                            <p>facebook</p>
                            <p>twitter</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-social-container border-t-1 py-5">
                <div className="footer-copyright container mx-auto flex justify-between">
                    <div>
                        <p>© Copyright WooStore All Rights Reserved</p>
                    </div>

                    <div className="flex gap-5">
                        <p>visa</p>
                        <p>visa</p>
                        <p>visa</p>
                        <p>visa</p>
                        <p>visa</p>
                    </div>
                </div>
            </div>
        </div>
    )
}