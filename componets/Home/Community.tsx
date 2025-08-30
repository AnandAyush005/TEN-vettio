import Image from "next/image";

const Community = () => {
  return (
    <section className="py-5 sm:py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left px-2 sm:px-4 md:pl-12">
            <h2
              className="text-3xl font-semibold tracking-tighter sm:text-4xl md:text-7xl" 
              
            >
             <span className="text-yellow-500">Join</span>  Our Community
            </h2>
            <p className="mt-4 text-base font-semibold sm:text-lg text-gray-600 leading-relaxed">
              Be part of a growing network of hiring leaders, talent scouts, and
              industry experts. Join us on Slack and Discord to discover top
              talent, share insights, and refine your hiring strategies.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:items-center sm:space-x-4">
            <a
              href="https://vettio.slack.com/join/shared_invite/zt-38xzollar-jvl2P1X9Yq64YI6ZPeBYhQ#/shared-invite/email"
              className="w-full sm:min-w-[220px] lg:min-w-[250px] px-6 py-3 rounded-lg bg-yellow-500 text-black font-medium text-center border-2 border-transparent hover:border-black hover:bg-white transition-colors"
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
              className="w-2/3 sm:w-3/4 md:w-full max-w-sm rounded-lg transition-transform duration-500 ease-in-out hover:scale-110"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
