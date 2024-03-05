const Illustration = () => {
  return (
    <div className="bg-[#F4F4F4] pt-6 font-clash-variable">
      <div className="md:flex justify-between pt-6 p-4 md:p-0">
        <img
          src="./images/portrait.png"
          alt="portrait"
          className="md:ml-10 px-8 mx-auto"
        />
        <div className="flex flex-col md:w-1/2 gap-6">
          <div className="flex justify-center items-center gap-4">
            <img src="./images/crm.png" alt="icon" className="p-4" />
            <div className="p-3">
              <h1 className="text-xl font-medium mb-6">
                Integrated Reporting and Analytics
              </h1>
              <p className="leading-8 text-balance">
                Stay informed with comprehensive reporting tools, analytics, and
                monthly statements. Integration with accounting software ensures
                a seamless flow of vital financial information.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-4">
            <img src="./images/brainstorming.png" alt="icon" className="p-4" />
            <div className="p-3">
              <h1 className="text-xl font-medium mb-6">
                Teams for Enhanced Collaboration
              </h1>
              <p className="leading-8 text-balance">
                Elevate teamwork with our Teams feature, allowing you to control
                spending and permissions from a centralized location.
                Collaborate effortlessly while maintaining financial oversight.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Illustration;
