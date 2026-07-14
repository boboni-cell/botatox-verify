export default function Footer() {
  return (
    <footer className="mt-auto border-t border-gray-200 py-6 px-4">
      <div className="mx-auto flex max-w-md flex-col items-center gap-2 text-center text-xs text-gray-400">
        <p>&copy; 2025 Botatox. All rights reserved.</p>
        <div className="flex gap-4">
          <span className="hover:text-gray-600 cursor-pointer transition-colors">
            隐私政策
          </span>
          <span className="hover:text-gray-600 cursor-pointer transition-colors">
            联系我们
          </span>
        </div>
      </div>
    </footer>
  );
}
