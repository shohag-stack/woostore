import Hero from "../About/Hero";
import data from "../../lib/data/hero.json"


export default async function HeroSection() {
    return (
        <Hero hero={data}/>
    )
}