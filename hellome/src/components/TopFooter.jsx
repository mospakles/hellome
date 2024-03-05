const TopFooter = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 font-clash-variable">
      <div className="container mx-auto md:p-8 p-2">
        <div className="flex justify-between p-4 md:px-10 cursor-pointer">
          <div>
            <h3 className="text-xl font-bold mb-8">Who are we</h3>
            <ul className="mt-4">
              <li className="mb-4">About us</li>
              <li className="mb-4">Code of conduct</li>
              <li>Partner with us</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-8">Legal</h3>
            <ul className="mt-4">
              <li className="mb-4">Terms and conditions</li>
              <li>Privacy policy</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-8">Contact us</h3>
            <div>
              <p className="mb-5">
                United Kingdom Office:
                <br />
                <span className="font-bold leading-5">
                  Floor, 30 Churchill Pl, London <br /> E14 5EU United Kingdom
                </span>
              </p>
            </div>
            <div>
              <p>
                Canada Office:
                <br />
                <span className="font-bold leading-5">
                  44322 YALE RD UNIT 3B #203 <br />
                  CHILLIWACK, BC, CANADA V2R4H1
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 pb-4 border-b border-gray-700">
        <p>
          Copyright &copy; {new Date().getFullYear()} HelloMe Money. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default TopFooter;
