/* 
  https://daisyui.com/components/hero/
  hero with overlay image 
*/

import InputFormCard from "@/components/input-form-card";

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
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero-content text-center text-base-300">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">rewear.</h1>
            <p className="mb-5 font-bold">
              join us in providing clothing donations to crisis-stricken
              regions, offering warmth, dignity, and hope to those facing
              adversity
            </p>
            <a href="#contribute-section" className="btn lowercase">contribute</a>
          </div>
        </div>
      </section>
      <section
        id="contribute-section"
        className="hero min-h-screen bg-base-200"
      >
        {/*
          flex-col on sm md and flex-row on lg
         */}
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center max-w-md text-gray-600 lg:text-left">
            <h1 className="text-5xl font-bold">contribute</h1>
            <p className="py-6">
              we offer the convenience of home pickup for your clothing
              donations or you can drop off your clothing donations at our
              office for added convenience.
            </p>
          </div>
          <InputFormCard />
        </div>
      </section>
      <section
        id="how-does-it-work-section"
        className="hero min-h-screen bg-base-200"
      >
        <div className="text-left text-gray-600">
          <h1 className="text-5xl font-bold">how does it work</h1>
          <p className="py-3 max-w-md">
            whether you prefer the convenience of dropping off your clothing
            donations at our office or having them picked up from your doorstep,
            we've got you covered. Once received, each item is carefully
            inspected before being sent to the designated crisis region,
            ensuring your contribution reaches those in need with utmost
            efficiency and care
          </p>
        </div>
      </section>
      <section
        id="who-we-are-section"
        className="hero min-h-screen bg-base-200"
      >
        <div className="text-left sm:text-center text-gray-600 max-w-md sm:max-w-sm">
          <h1 className="text-5xl font-bold">who we are</h1>
          <p className="py-3">
            we are dedicated volunteers at a local nonprofit organization
            committed to streamlining the logistics and organization of clothing
            donations. Our innovative concept empowers donors to choose the
            specific crisis-stricken region where their clothing contribution
            will make a meaningful impact
          </p>
        </div>
      </section>
    </>
  );
}
