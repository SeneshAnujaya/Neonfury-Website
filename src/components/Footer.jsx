export default function Footer() {
  return (
    <footer className="bg-black text-gray-500 text-center py-10 border-t border-white/10">
      © {new Date().getFullYear()} NEONFURY. All rights reserved.
    </footer>
  );
}