export default function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-6 gap-8">
        
        <div className="col-span-2">
          <div className="flex items-center mb-4">
            <img
              src="/logo.png"
              alt="Saving Story Logo"
              className="h-8 w-auto"
            />
          </div>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Terms of Service</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Refusal of Unauthorized Email Collection</a></li>
          </ul>

          <div className="mt-6 text-sm space-y-1">
            <p><strong>Saving Story Co., Ltd.</strong> CEO Jang Seung</p>
            <p>#210, 2nd Floor, 594-7, Dongtangiheung-ro, Hwaseong-si, Gyeonggi-do, Republic of Korea</p>
            <p>TEL: +82-70-4909-7570 FAX: +82-31-377-6739</p>
            <p>E-mail: savingstory@hanmail.net</p>
          </div>

          <p className="mt-6 text-xs text-gray-400">
            Copyright © 2023 Saving Story. All Rights Reserved.
          </p>
        </div>

        {/* Columns */}
        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Company Overview</a></li>
            <li><a href="#" className="hover:underline">CEO's Message</a></li>
            <li><a href="#" className="hover:underline">History</a></li>
            <li><a href="#" className="hover:underline">Management Philosophy</a></li>
            <li><a href="#" className="hover:underline">Patents and Certifications</a></li>
            <li><a href="#" className="hover:underline">Recruitment</a></li>
            <li><a href="#" className="hover:underline">Directions</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Products</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Life Saving Towel</a></li>
            <li><a href="#" className="hover:underline">Life Saving Mask</a></li>
            <li><a href="#" className="hover:underline">Oxygen Generator</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">PR</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Promotional Videos</a></li>
            <li><a href="#" className="hover:underline">Photos</a></li>
            <li><a href="#" className="hover:underline">Press Release</a></li>
            <li><a href="#" className="hover:underline">Partners</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Community</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Notice</a></li>
            <li><a href="#" className="hover:underline">Inquiry</a></li>
            <li><a href="#" className="hover:underline">Exchanges and Returns</a></li>
          </ul>

          <h3 className="font-semibold mt-6 mb-4">Purchase</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Purchase</a></li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-8">
        <a href="#top" className="text-gray-400 text-xs hover:text-white">TOP ↑</a>
      </div>
    </footer>
  );
}