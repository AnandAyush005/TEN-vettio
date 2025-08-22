import Image from "next/image";

const Community = () => {
  return (
    <section className="py-12 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <div className="pl-4 md:pl-12">
            <h2
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
              style={{ color: "#4a148c" }}
            >
              Join Our Community
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Be part of a growing network of hiring leaders, talent scouts, and
              industry experts. Join us on Slack and Discord to discover top
              talent, share insights, and refine your hiring strategies.
            </p>
            <div className="mt-8">
              <a
                href="#"
                className="px-40 py-3 rounded-lg bg-yellow-500 text-black border border-transparent hover:border-black hover:bg-white transition-colors"
              >
                Join Our Community
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="https://vettio.com/assets/Images/landingAssetsR/slack.svg"
              alt="Community logo"
              width={400}
              height={300}
              className="rounded-lg transition-transform duration-500 ease-in-out hover:scale-110"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
