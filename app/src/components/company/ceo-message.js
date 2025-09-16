function CEOGreeting() {
  return (
    <section className="px-6 pb-12 pt-24 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">CEO Greeting</h1>

      <div className="text-left text-lg">
        <img
          src="/ceo-photo.png"
          alt="CEO"
          className="rounded-lg shadow-md aspect-video absolute -left-2"
        />
        <div className="bg-gray-100 pl-[40%] content-around mb-6 min-h-[240px]">
          <img src="/logo.png" alt="Saving Story Logo" className="h-12" />
          <p className="mb-6 !important text-xl">
            Welcome.
            <br />
            Thank you for visiting the Saving Story website.
          </p>
        </div>
        <p className="mb-6 pl-[40%] font-bold">
            We dedicate utmost effort to protecting the lives and safety of
            citizens from smoke and toxic gas during fire evacuation.
        </p>
        <p className="mb-6 pl-[40%]">
          <strong>
            The world’s first oxygen-generating Life Saving Towel and Life
            Saving Mask for fire evacuation
          </strong> are the results of our commitment to
            innovation and safety.
        </p>
        <p className="mb-6 pl-[40%]">
          Saving Story aims to create a safe society for all. Your continued support and encouragement will be greatly appreciated.
        </p>
        <p className="mb-1 pl-[40%] font-bold">
          Saving Story
        </p>
        <p className="pl-[40%]">
          CEO <strong>Jang Seung</strong>
        </p>
      </div>
    </section>
  );
}

export default CEOGreeting;