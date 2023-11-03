/* 
  https://daisyui.com/components/hero/
  hero with overlay image 
*/

export default function Home() {
  return (
    <>
    {/* 
      the <section> tag is used to define an area within the page.
      https://www.w3schools.com/tags/tag_section.asp 
    */}
      <section
        id="hero-section"
        className="hero min-h-screen bg-fixed"
        style={{
          backgroundImage:
            "url(https://e2f8q5b9.rocketcdn.me/wp-content/uploads/2022/04/box-of-clothing-donations.jpg.webp)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-base-200">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">rewear.</h1>
            <p className="mb-5 font-bold">
            join us in providing clothing donations to crisis-stricken regions,
            offering warmth, dignity, and hope to those facing adversity
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
