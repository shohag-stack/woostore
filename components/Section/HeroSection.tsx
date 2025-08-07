import Hero from "../About/Hero";

export async function getHeroContent() {
  const res = await fetch('https://wp.rayso.studio/wp-json/woostore/v1/section', {
    next: {
      revalidate: 60
    }
  })
  const data = await res.json()
  console.log(data)
  return data
}

export default async function HeroSection() {
    const data = await getHeroContent()
    return (
        <Hero hero={data.hero}/>
    )
}