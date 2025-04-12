export default function Footer() {
    return (
      <footer className="bg-black border-t border-gray-800 py-10 px-6 text-sm text-gray-500 text-center">
        <div className="mb-4">
          © {new Date().getFullYear()} ChainVault. All rights reserved.
        </div>
        <div className="flex justify-center space-x-6">
          <a href="#" className="hover:text-white">About</a>
          <a href="#" className="hover:text-white">Docs</a>
          <a href="https://github.com/antianxietio/chainvault" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            GitHub
          </a>
          <a href="#" className="hover:text-white">Privacy</a>
        </div>
      </footer>
    );
  }
  