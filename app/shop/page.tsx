import Banner from "@/components/About/Banner"
export default async function page(){
    return (
        <>
        <Banner/>
        <div className="shop-container container mx-auto flex">
            <aside className="left-filter w-1/4">
                <h5>left filter</h5>
            </aside>
            <div className="w-3/4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="bg-accent">
                            <h1>hello</h1>
                        </div>

                        <div className="bg-accent">
                            <h1>hello</h1>
                        </div>

                        <div className="bg-accent">
                            <h1>hello</h1>
                        </div>

                        <div className="bg-accent">
                            <h1>hello</h1>
                        </div>
                </div>
            </div>
        </div>
        </>
    )
}